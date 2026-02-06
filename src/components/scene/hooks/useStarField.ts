import { useEffect, useRef, RefObject } from 'react';
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  Material,
  Points,
  Scene,
  ShaderMaterial,
} from 'three';
import { logEvent, logRuntime } from '../../../observability/logger';

interface StarFieldConfig {
  sceneRef: RefObject<Scene | null>;
  lowPowerMode: boolean;
  initialized: boolean;
}

interface StarQualityPreset {
  starDensity: number;
  starTwinkle: number;
}

interface ParticleInfo {
  velocities: Float32Array;
  range: number;
  count: number;
}

const CINEMA_DENSITY_SCALE = 1;

export function useStarField({ sceneRef, lowPowerMode, initialized }: StarFieldConfig) {
  const deepStarsRef = useRef<Points | null>(null);
  const particleGroupRef = useRef<Group | null>(null);
  const deepStarsMaterialRef = useRef<ShaderMaterial | null>(null);
  const particleMaterialRef = useRef<ShaderMaterial | null>(null);
  const materialsRef = useRef<Material[]>([]);
  const geometriesRef = useRef<BufferGeometry[]>([]);
  const particleInfoRef = useRef<ParticleInfo | null>(null);
  const deepStarCountRef = useRef(0);
  const particleCountRef = useRef(0);
  const timeRef = useRef(0);
  const qualityRef = useRef<StarQualityPreset>({
    starDensity: 1,
    starTwinkle: 1,
  });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !initialized) return;

    const deepStarCount = Math.floor((lowPowerMode ? 3400 : 8600) * CINEMA_DENSITY_SCALE);
    const deepStarSpread = lowPowerMode ? 8200 : 11800;
    const deepPositions = new Float32Array(deepStarCount * 3);
    const deepColors = new Float32Array(deepStarCount * 3);
    const deepSizes = new Float32Array(deepStarCount);
    const deepTwinkles = new Float32Array(deepStarCount);
    const palette = [
      new Color(0x8899aa), // Dim cool white
      new Color(0xcccccc), // Pure white, dimmed
      new Color(0xd4a06a), // Warm orange
      new Color(0x99aabb), // Very dim blue-white
      new Color(0xbb8899), // Dim pink
      new Color(0x88aa99), // Dim green-white
    ];

    for (let i = 0; i < deepStarCount; i += 1) {
      const i3 = i * 3;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const radius = deepStarSpread * (0.28 + Math.pow(Math.random(), 1.75) * 0.72);

      deepPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      deepPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
      deepPositions[i3 + 2] = radius * Math.cos(phi);

      const baseColor = palette[(Math.random() * palette.length) | 0].clone();
      baseColor.multiplyScalar(0.25 + Math.random() * 0.35); // Much dimmer (was 0.48 + 0.72)
      deepColors[i3] = baseColor.r;
      deepColors[i3 + 1] = baseColor.g;
      deepColors[i3 + 2] = baseColor.b;

      deepSizes[i] = lowPowerMode ? 1.3 + Math.random() * 2.1 : 1.5 + Math.random() * 2.9;
      deepTwinkles[i] = Math.random() * Math.PI * 2;
    }

    const deepGeometry = new BufferGeometry();
    deepGeometry.setAttribute('position', new Float32BufferAttribute(deepPositions, 3));
    deepGeometry.setAttribute('color', new Float32BufferAttribute(deepColors, 3));
    deepGeometry.setAttribute('size', new Float32BufferAttribute(deepSizes, 1));
    deepGeometry.setAttribute('twinkle', new Float32BufferAttribute(deepTwinkles, 1));
    deepGeometry.setDrawRange(0, deepStarCount);
    geometriesRef.current.push(deepGeometry);

    const deepVertexShader = `
      attribute float size;
      attribute float twinkle;
      varying vec3 vColor;
      varying float vPulse;
      uniform float uTime;
      uniform float uPixelRatio;
      uniform float uTwinkleStrength;
      uniform float uSizeBoost;

      void main() {
        vColor = color;
        vPulse = mix(1.0, 0.45 + 0.55 * (sin(uTime * 2.2 + twinkle) * 0.5 + 0.5), uTwinkleStrength);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float distanceFade = clamp(320.0 / max(-mvPosition.z, 0.001), 0.45, 2.0);
        gl_PointSize = size * uPixelRatio * uSizeBoost * distanceFade;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const deepFragmentShader = `
      varying vec3 vColor;
      varying float vPulse;

      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float dist = length(c);
        if (dist > 0.5) discard;
        float core = smoothstep(0.23, 0.0, dist);
        float halo = smoothstep(0.5, 0.12, dist) * 0.28;
        float alpha = clamp((core + halo) * vPulse, 0.0, 1.0);
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

    const deepMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.8) },
        uTwinkleStrength: { value: 1 },
        uSizeBoost: { value: lowPowerMode ? 1.45 : 1.8 },
      },
      vertexShader: deepVertexShader,
      fragmentShader: deepFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true,
    });
    materialsRef.current.push(deepMaterial);
    deepStarsMaterialRef.current = deepMaterial;

    const deepStars = new Points(deepGeometry, deepMaterial);
    deepStars.frustumCulled = false;
    scene.add(deepStars);
    deepStarsRef.current = deepStars;
    deepStarCountRef.current = deepStarCount;

    const particleCount = Math.floor((lowPowerMode ? 1700 : 4200) * CINEMA_DENSITY_SCALE);
    const particleRange = lowPowerMode ? 2000 : 2900;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particleVelocities = new Float32Array(particleCount * 3);
    const particleTwinkle = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * particleRange * 2;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * particleRange * 2;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * particleRange * 2;

      const pColor = palette[(Math.random() * palette.length) | 0].clone();
      pColor.multiplyScalar(0.28 + Math.random() * 0.35); // Much dimmer (was 0.52 + 0.66)
      particleColors[i3] = pColor.r;
      particleColors[i3 + 1] = pColor.g;
      particleColors[i3 + 2] = pColor.b;

      particleSizes[i] = (lowPowerMode ? 1.8 : 2.6) * (0.55 + Math.random() * 1.15);
      particleTwinkle[i] = Math.random() * Math.PI * 2;

      particleVelocities[i3] = (Math.random() - 0.5) * (lowPowerMode ? 0.22 : 0.46);
      particleVelocities[i3 + 1] = (Math.random() - 0.5) * (lowPowerMode ? 0.22 : 0.42);
      particleVelocities[i3 + 2] = (Math.random() - 0.5) * (lowPowerMode ? 0.26 : 0.52);
    }

    const particleGeometry = new BufferGeometry();
    particleGeometry.setAttribute('position', new Float32BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new Float32BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('size', new Float32BufferAttribute(particleSizes, 1));
    particleGeometry.setAttribute('twinkle', new Float32BufferAttribute(particleTwinkle, 1));
    particleGeometry.setDrawRange(0, particleCount);
    geometriesRef.current.push(particleGeometry);

    const particleVertexShader = `
      attribute float size;
      attribute float twinkle;
      varying vec3 vColor;
      varying float vPulse;
      varying float vDepth;
      uniform float uTime;
      uniform float uSizeMultiplier;
      uniform float uPixelRatio;
      uniform float uTwinkleStrength;

      void main() {
        vColor = color;
        vPulse = mix(1.0, 0.45 + 0.55 * (sin(uTime * 2.8 + twinkle) * 0.5 + 0.5), uTwinkleStrength);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDepth = max(-mvPosition.z, 0.001);
        gl_PointSize = size * uPixelRatio * uSizeMultiplier * (300.0 / vDepth);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const particleFragmentShader = `
      varying vec3 vColor;
      varying float vPulse;
      varying float vDepth;

      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float dist = length(c);
        if (dist > 0.5) discard;
        float core = smoothstep(0.2, 0.0, dist);
        float halo = smoothstep(0.5, 0.14, dist) * 0.34;
        float depthFade = smoothstep(0.0, 2200.0, vDepth);
        float alpha = clamp((core + halo) * vPulse * mix(1.0, 0.58, depthFade), 0.0, 1.0);
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

    const particleMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSizeMultiplier: { value: lowPowerMode ? 2.45 : 3.15 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.8) },
        uTwinkleStrength: { value: 1 },
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });
    materialsRef.current.push(particleMaterial);
    particleMaterialRef.current = particleMaterial;

    const particles = new Points(particleGeometry, particleMaterial);
    particles.frustumCulled = false;

    const particleGroup = new Group();
    particleGroup.add(particles);
    scene.add(particleGroup);
    particleGroupRef.current = particleGroup;
    particleCountRef.current = particleCount;
    particleInfoRef.current = {
      velocities: particleVelocities,
      range: particleRange,
      count: particleCount,
    };

    logEvent('scene.starfield.ready', {
      deepStars: deepStarCount,
      particles: particleCount,
      lowPowerMode,
    });

    return () => {
      scene.remove(deepStars);
      scene.remove(particleGroup);
      materialsRef.current.forEach((material) => material.dispose());
      geometriesRef.current.forEach((geometry) => geometry.dispose());
      materialsRef.current = [];
      geometriesRef.current = [];
      deepStarsRef.current = null;
      particleGroupRef.current = null;
      deepStarsMaterialRef.current = null;
      particleMaterialRef.current = null;
      particleInfoRef.current = null;
      deepStarCountRef.current = 0;
      particleCountRef.current = 0;
    };
  }, [sceneRef, lowPowerMode, initialized]);

  const applyQuality = (preset: StarQualityPreset) => {
    qualityRef.current = preset;

    const deepStars = deepStarsRef.current;
    if (deepStars) {
      const deepCount = Math.max(200, Math.floor(deepStarCountRef.current * preset.starDensity));
      deepStars.geometry.setDrawRange(0, deepCount);
    }

    const particleGroup = particleGroupRef.current;
    if (particleGroup?.children[0] instanceof Points) {
      const particleCount = Math.max(120, Math.floor(particleCountRef.current * preset.starDensity));
      particleGroup.children[0].geometry.setDrawRange(0, particleCount);
    }

    if (deepStarsMaterialRef.current) {
      deepStarsMaterialRef.current.uniforms.uTwinkleStrength.value = Math.min(1.25, Math.max(0.2, preset.starTwinkle));
      deepStarsMaterialRef.current.uniforms.uSizeBoost.value =
        (lowPowerMode ? 1.45 : 1.8) * (0.9 + preset.starDensity * 0.22);
    }

    if (particleMaterialRef.current) {
      particleMaterialRef.current.uniforms.uTwinkleStrength.value = Math.min(1.25, Math.max(0.2, preset.starTwinkle));
      particleMaterialRef.current.uniforms.uSizeMultiplier.value =
        (lowPowerMode ? 2.45 : 3.15) * (0.82 + preset.starDensity * 0.25);
    }
  };

  const updateStarField = (
    deltaTime: number,
    cameraPosition: { x: number; y: number; z: number },
    flightEnvelope = 0,
    cameraSpeed = 0
  ) => {
    if (!deepStarsRef.current || !particleGroupRef.current || !particleInfoRef.current) return;
    if (!Number.isFinite(deltaTime) || deltaTime <= 0) return;

    const safeDelta = Math.min(0.2, Math.max(1 / 240, deltaTime));
    timeRef.current += safeDelta;

    const frameScale = Math.min(3, Math.max(0.35, safeDelta * 60));
    const safeCameraSpeed = Number.isFinite(cameraSpeed) ? cameraSpeed : 0;
    const speedBoost = Math.min(1.7, safeCameraSpeed / (lowPowerMode ? 1500 : 1900));

    const deepStars = deepStarsRef.current;
    deepStars.rotation.y += safeDelta * ((lowPowerMode ? 0.006 : 0.011) + speedBoost * 0.018);
    deepStars.rotation.x += safeDelta * (lowPowerMode ? 0.0014 : 0.0022);

    if (deepStarsMaterialRef.current) {
      deepStarsMaterialRef.current.uniforms.uTime.value = timeRef.current;
      deepStarsMaterialRef.current.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.8);
    }

    const particleGroup = particleGroupRef.current;
    if (
      Number.isFinite(cameraPosition.x) &&
      Number.isFinite(cameraPosition.y) &&
      Number.isFinite(cameraPosition.z)
    ) {
      particleGroup.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    } else {
      logRuntime('warn', 'scene.starfield', 'Invalid camera position for starfield update', cameraPosition);
    }

    const { velocities, range, count } = particleInfoRef.current;
    const points = particleGroup.children[0];
    if (!(points instanceof Points)) return;

    const geometry = points.geometry;
    const positions = geometry.attributes.position.array as Float32Array;
    const forwardDrift = (lowPowerMode ? 1.2 : 1.95) + flightEnvelope * (lowPowerMode ? 2 : 3.9) + speedBoost * 3.35;

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      positions[i3] += velocities[i3] * (1 + speedBoost * 0.5) * frameScale;
      positions[i3 + 1] += velocities[i3 + 1] * (1 + speedBoost * 0.4) * frameScale;
      positions[i3 + 2] += (velocities[i3 + 2] + forwardDrift) * frameScale;

      if (!Number.isFinite(positions[i3]) || !Number.isFinite(positions[i3 + 1]) || !Number.isFinite(positions[i3 + 2])) {
        positions[i3] = (Math.random() - 0.5) * range * 2;
        positions[i3 + 1] = (Math.random() - 0.5) * range * 2;
        positions[i3 + 2] = (Math.random() - 0.5) * range * 2;
      }

      if (positions[i3] > range) positions[i3] -= range * 2;
      if (positions[i3] < -range) positions[i3] += range * 2;
      if (positions[i3 + 1] > range) positions[i3 + 1] -= range * 2;
      if (positions[i3 + 1] < -range) positions[i3 + 1] += range * 2;
      if (positions[i3 + 2] > range) positions[i3 + 2] -= range * 2;
      if (positions[i3 + 2] < -range) positions[i3 + 2] += range * 2;
    }
    geometry.attributes.position.needsUpdate = true;

    if (particleMaterialRef.current) {
      particleMaterialRef.current.uniforms.uTime.value = timeRef.current;
      particleMaterialRef.current.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.8);
      particleMaterialRef.current.uniforms.uSizeMultiplier.value =
        (lowPowerMode ? 2.45 : 3.15) * (0.82 + qualityRef.current.starDensity * 0.25) +
        flightEnvelope * (lowPowerMode ? 0.5 : 0.9) +
        speedBoost * 0.95;
    }
  };

  return { updateStarField, applyQuality };
}
