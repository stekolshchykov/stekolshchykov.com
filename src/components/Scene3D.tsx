import { useEffect, useRef } from 'react';
import { AdditiveBlending, BackSide, BufferGeometry, Color, Float32BufferAttribute, Group, Material, Mesh, PerspectiveCamera, PlaneGeometry, Points, PointsMaterial, Scene, ShaderMaterial, Vector3, WebGLRenderer, SphereGeometry } from 'three';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { createCubeStructure } from './scene/CubeStructure';
import type { Locale } from '../content/stekolschikovContent';
import { logEvent, logRuntime } from '../observability/logger';
import { BLACK_HOLE_FRAGMENT_SHADER, BLACK_HOLE_VERTEX_SHADER, createBlackHoleUniforms } from '../scene/blackHoleShader';
import { SUN_FRAGMENT_SHADER, SUN_VERTEX_SHADER, createSunUniforms } from '../scene/sunShader';
import { SUN_CORONA_FRAGMENT_SHADER, SUN_CORONA_VERTEX_SHADER } from '../scene/sunCoronaShader';

// USER REQUEST: Toggle for Cube Visibility
const SHOW_CUBE = true; // Set to true to re-enable the cube

interface Scene3DProps {
  targetRotation: { x: number; y: number };
  locale: Locale;
}

export function Scene3D({ targetRotation, locale }: Scene3DProps) {
  const canvasSmoothStep = (t: number) => t * t * (3 - 2 * t);
  const containerRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef(targetRotation);
  const startAnimationRef = useRef<(() => void) | null>(null);
  const rotationBurstRef = useRef({ active: false, startMs: 0, seed: 0 });
  const transitionCountRef = useRef(0);
  const cameraFlightRef = useRef({
    active: false,
    startMs: 0,
    durationMs: 1080,
    yawAmp: 0,
    pitchAmp: 0,
    rollAmp: 0,
    phase: 0,
    shotReady: false,
    distanceMode: 'far' as 'near' | 'far' | 'close',
    startCameraDistance: 0,
    targetCameraDistance: 0,
    startShaderDistance: 0,
    targetShaderDistance: 0,
    orbitScale: 1,
    offsetX: 0,
    offsetY: 0,
    shaderYawBias: 0,
    shaderPitchBias: 0,
    targetSubject: 'blackhole' as 'blackhole' | 'sun',
  });
  const hasInitializedTargetRef = useRef(false);

  useEffect(() => {
    targetRotationRef.current = targetRotation;
    if (hasInitializedTargetRef.current) {
      rotationBurstRef.current = {
        active: true,
        startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
        seed: rotationBurstRef.current.seed + 1,
      };
      transitionCountRef.current += 1;
      const shouldRunCloseShot = transitionCountRef.current % 2 === 0;
      const distanceMode = shouldRunCloseShot ? 'close' : Math.random() < 0.5 ? 'near' : 'far';
      // Cinematic Director: Alternate between Sun and Black Hole, or pick random
      const targetSubject = Math.random() > 0.65 ? 'sun' : 'blackhole';

      const nearShot = distanceMode === 'near';
      const closeShot = distanceMode === 'close';
      cameraFlightRef.current = {
        active: true,
        startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
        durationMs: closeShot ? 1460 : nearShot ? 1260 : 1380,
        yawAmp: (Math.random() * 2 - 1) * (closeShot ? 0.78 : 0.64),
        pitchAmp: (Math.random() * 2 - 1) * (closeShot ? 0.38 : 0.3),
        rollAmp: (Math.random() * 2 - 1) * (closeShot ? 0.22 : 0.18),
        phase: Math.random() * Math.PI * 2,
        shotReady: false,
        distanceMode,
        startCameraDistance: 0,
        targetCameraDistance: 0,
        startShaderDistance: 0,
        targetShaderDistance: 0,
        orbitScale: closeShot ? 2.1 : nearShot ? 1.65 : 1.15,
        offsetX: (Math.random() * 2 - 1) * (closeShot ? 0.18 : 0.3),
        offsetY: (Math.random() * 2 - 1) * (closeShot ? 0.12 : 0.2),
        shaderYawBias: (Math.random() * 2 - 1) * (closeShot ? 0.45 : 0.8),
        shaderPitchBias: (Math.random() * 2 - 1) * (closeShot ? 0.3 : 0.5),
        targetSubject,
      };
      logRuntime('debug', 'scene3d-camera', 'Camera flight triggered', {
        shot: distanceMode,
        yawAmp: cameraFlightRef.current.yawAmp,
        pitchAmp: cameraFlightRef.current.pitchAmp,
        rollAmp: cameraFlightRef.current.rollAmp,
      });
    } else {
      hasInitializedTargetRef.current = true;
    }
    logRuntime('debug', 'scene3d', 'Target rotation updated', targetRotation);
    startAnimationRef.current?.();
  }, [targetRotation]);

  useEffect(() => {
    if (!containerRef.current || !webglContainerRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPhone = viewportWidth < 700;
    const isCompactViewport = viewportWidth < 900;
    const isTablet = viewportWidth < 1100;
    const isLowCoreCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
    const lowPowerMode = prefersReducedMotion || isCompactViewport || isLowCoreCpu;
    const maxPixelRatio = lowPowerMode ? 1 : 1.35;
    const targetFPS = lowPowerMode ? 24 : 50;
    const floatAmplitude = lowPowerMode ? 8 : 20;
    const faceSize = isPhone ? 420 : isTablet ? 620 : 860;
    const facePadding = isPhone ? 14 : isTablet ? 20 : 28;
    const faceAlpha = lowPowerMode ? 0.92 : 0.78;
    const faceDepth = Math.round(faceSize * 0.58);
    const cubeSize = faceDepth * 2;
    const minZoom = Math.max(720, cubeSize * 0.95);
    const maxZoom = Math.max(2200, cubeSize * 2.5);
    logEvent('scene.performance.mode', {
      viewportWidth,
      viewportHeight,
      lowPowerMode,
      targetFPS,
      isTablet,
      isPhone,
      faceSize,
      cubeSize,
    });

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, viewportWidth / viewportHeight, 1, 5000);
    camera.position.z = isPhone ? 1250 : isTablet ? 1400 : 1500;
    const defaultCameraDistance = camera.position.z;
    let userCameraDistance = defaultCameraDistance;
    let cameraDistance = userCameraDistance;

    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(cssRenderer.domElement);

    const webglScene = new Scene();
    const webglRenderer = new WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    webglContainerRef.current.appendChild(webglRenderer.domElement);

    const blackHoleUniforms = createBlackHoleUniforms(lowPowerMode, viewportWidth, viewportHeight);
    const blackHoleGeometry = new PlaneGeometry(2, 2);
    const blackHoleMaterial = new ShaderMaterial({
      uniforms: blackHoleUniforms,
      vertexShader: BLACK_HOLE_VERTEX_SHADER,
      fragmentShader: BLACK_HOLE_FRAGMENT_SHADER,
      side: BackSide,
      depthWrite: false,
      depthTest: false,
    });
    const baseBlackHoleYaw = 0;
    const baseBlackHolePitch = 0;
    const blackHoleSky = new Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHoleSky.frustumCulled = false;
    blackHoleSky.renderOrder = -1000;
    webglScene.add(blackHoleSky);

    // --- SUN SETUP ---
    const sunUniforms = createSunUniforms();
    const sunGeometry = new SphereGeometry(60, 64, 64); // Large sun
    const sunMaterial = new ShaderMaterial({
      uniforms: sunUniforms,
      vertexShader: SUN_VERTEX_SHADER,
      fragmentShader: SUN_FRAGMENT_SHADER,
    });
    const sunMesh = new Mesh(sunGeometry, sunMaterial);
    // Position Sun opposite to Black Hole/Camera default. 
    // If Black Hole is conceptualized at 0,0 (shader logic), we place Sun in world space.
    // The shader handles the black hole at the "end of the tunnel".
    // We'll place the physical Sun mesh at Z: -1200, X: 400 for a majestic layout.
    // We'll place the physical Sun mesh at X: 2000, Y: 150, Z: -500 to create a distinct anchor.
    // The Black Hole is visually at (0,0, infinity).
    sunMesh.position.set(2000, 150, -500);
    webglScene.add(sunMesh);

    // --- SUN CORONA ---
    const sunCoronaGeometry = new SphereGeometry(85, 64, 64); // Larger than sun (60)
    const sunCoronaMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color('#ffaa00') },
      },
      vertexShader: SUN_CORONA_VERTEX_SHADER,
      fragmentShader: SUN_CORONA_FRAGMENT_SHADER,
      side: BackSide, // Render on inside of sphere? No, we want outside transparent glow.
      // But standard fresnel works on front faces.
      // Let's use FrontSide with Additive and fresnel that is strong at edges.
      // Actually, standard fresnel transparency:
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    // With FrontSide and standard fresnel (dot(N, V)), center is transparent, edge is opaque.
    // This creates a halo.
    sunCoronaMaterial.side = 0; // FrontSide (default)

    const sunCoronaMesh = new Mesh(sunCoronaGeometry, sunCoronaMaterial);
    sunCoronaMesh.position.copy(sunMesh.position);
    webglScene.add(sunCoronaMesh);

    logEvent('scene.blackhole.shader.ready', { mode: 'webgl-raymarch', lowPowerMode });

    const spaceGeometries: BufferGeometry[] = [];
    const spaceMaterials: Material[] = [];

    const deepStarCount = lowPowerMode ? 2200 : 5200;
    const deepStarSpread = lowPowerMode ? 7600 : 10500;
    const deepStarPositions = new Float32Array(deepStarCount * 3);
    const deepStarColors = new Float32Array(deepStarCount * 3);

    // Spherical distribution for deep stars
    for (let i = 0; i < deepStarCount; i++) {
      const idx = i * 3;
      // Random point on sphere surface/volume
      const r = deepStarSpread * (0.4 + Math.pow(Math.random(), 2) * 0.6);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      deepStarPositions[idx] = r * Math.sin(phi) * Math.cos(theta);
      deepStarPositions[idx + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6; // Flatten slightly
      deepStarPositions[idx + 2] = r * Math.cos(phi);

      const starHue = 0.58 + Math.random() * 0.12;
      const starSat = 0.2 + Math.random() * 0.3;
      const starLum = 0.7 + Math.random() * 0.3;
      const color = new Color().setHSL(starHue, starSat, Math.min(0.95, starLum));
      deepStarColors[idx] = color.r;
      deepStarColors[idx + 1] = color.g;
      deepStarColors[idx + 2] = color.b;
    }

    const deepStarGeometry = new BufferGeometry();
    deepStarGeometry.setAttribute('position', new Float32BufferAttribute(deepStarPositions, 3));
    deepStarGeometry.setAttribute('color', new Float32BufferAttribute(deepStarColors, 3));
    spaceGeometries.push(deepStarGeometry);

    const deepStarMaterial = new PointsMaterial({
      size: lowPowerMode ? 2.2 : 2.6,
      transparent: true,
      opacity: lowPowerMode ? 0.56 : 0.75,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true,
    });
    spaceMaterials.push(deepStarMaterial);
    const deepStars = new Points(deepStarGeometry, deepStarMaterial);
    deepStars.frustumCulled = false;
    webglScene.add(deepStars);

    // Floating particles (formerly tunnel stars)
    const particleCount = lowPowerMode ? 1400 : 3200;
    const particleRange = lowPowerMode ? 1800 : 2600;

    const particleVertexShader = `
      attribute float size;
      uniform float uSizeMultiplier;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vDist;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float dist = length(mvPosition.xyz);
        vDist = dist;
        // Increase size for stars closer to camera
        gl_PointSize = size * uSizeMultiplier * (400.0 / dist) * (1.0 + smoothstep(500.0, 0.0, dist));
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const particleFragmentShader = `
      varying vec3 vColor;
      varying float vDist;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        // Sharper core for near stars, softer for far
        float softness = mix(0.1, 0.4, smoothstep(0.0, 1000.0, vDist));
        float glow = pow(clamp(1.0 - d / softness, 0.0, 1.0), 2.0);
        gl_FragColor = vec4(vColor, glow * 0.9);
      }
    `;

    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * particleRange * 2;
      particlePositions[idx + 1] = (Math.random() - 0.5) * particleRange * 2;
      particlePositions[idx + 2] = (Math.random() - 0.5) * particleRange * 2;

      const pColor = new Color().setHSL(0.6 + Math.random() * 0.15, 0.4 + Math.random() * 0.4, 0.8 + Math.random() * 0.2);
      particleColors[idx] = pColor.r;
      particleColors[idx + 1] = pColor.g;
      particleColors[idx + 2] = pColor.b;

      particleSizes[i] = (lowPowerMode ? 1.5 : 2.5) * (0.5 + Math.random());

      particleVelocities[idx] = (Math.random() - 0.5) * (lowPowerMode ? 0.3 : 0.6);
      particleVelocities[idx + 1] = (Math.random() - 0.5) * (lowPowerMode ? 0.3 : 0.6);
      particleVelocities[idx + 2] = (Math.random() - 0.5) * (lowPowerMode ? 0.3 : 0.6) + (Math.random() * 1.5);
    }

    const particleGeometry = new BufferGeometry();
    particleGeometry.setAttribute('position', new Float32BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new Float32BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('size', new Float32BufferAttribute(particleSizes, 1));
    spaceGeometries.push(particleGeometry);

    const particleMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSizeMultiplier: { value: 1.0 },
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    spaceMaterials.push(particleMaterial);

    const floatingParticles = new Points(particleGeometry, particleMaterial);
    floatingParticles.frustumCulled = false;
    const particleGroup = new Group();
    particleGroup.add(floatingParticles);
    webglScene.add(particleGroup);

    logEvent('scene.starfield.ready', { deepStars: deepStarCount, particles: particleCount, lowPowerMode });

    const { cubeGroup, wireframe, faceActors, dispose: disposeCube } = createCubeStructure({
      locale,
      faceSize,
      facePadding,
      faceAlpha,
      faceDepth,
      cubeSize,
      isPhone: isPhone || false,
      lowPowerMode,
    });

    if (SHOW_CUBE) {
      webglScene.add(wireframe);
      scene.add(cubeGroup);
    }


    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      logRuntime('debug', 'scene3d-controls', 'Drag started', { x: e.clientX, y: e.clientY });
      previousMousePosition = { x: e.clientX, y: e.clientY };
      velocityRef.current = { x: 0, y: 0 };
      startAnimationRef.current?.();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        velocityRef.current.y = deltaX * 0.005;
        velocityRef.current.x = deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
        startAnimationRef.current?.();
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      logRuntime('debug', 'scene3d-controls', 'Drag ended');
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      userCameraDistance += e.deltaY * 0.5;
      userCameraDistance = Math.max(minZoom, Math.min(maxZoom, userCameraDistance));
      logRuntime('debug', 'scene3d-controls', 'Zoom changed', {
        deltaY: e.deltaY,
        cameraZ: userCameraDistance,
      });
      startAnimationRef.current?.();
    };

    const interactionTarget = containerRef.current;
    interactionTarget.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    interactionTarget.addEventListener('wheel', onWheel, { passive: false });

    let animationId = 0;
    let lastTime = 0;
    let hasRenderedOnce = false;
    const frameDelay = 1000 / targetFPS;

    const hasMotion = () => {
      const dx = targetRotationRef.current.x - currentRotationRef.current.x;
      const dy = targetRotationRef.current.y - currentRotationRef.current.y;
      return (
        isDragging ||
        cameraFlightRef.current.active ||
        rotationBurstRef.current.active ||
        Math.abs(velocityRef.current.x) > 0.0002 ||
        Math.abs(velocityRef.current.y) > 0.0002 ||
        Math.abs(dx) > 0.0005 ||
        Math.abs(dy) > 0.0005
      );
    };

    const animate = (currentTime: number) => {
      animationId = 0;

      if (lowPowerMode && hasRenderedOnce && !hasMotion()) {
        return;
      }
      animationId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameDelay) return;
      lastTime = currentTime - (deltaTime % frameDelay);
      const frameDeltaSeconds = Math.min(0.05, deltaTime / 1000);

      // Update Uniforms
      blackHoleMaterial.uniforms.uTime.value = currentTime * 0.001;
      sunMaterial.uniforms.uTime.value = currentTime * 0.001;
      sunCoronaMaterial.uniforms.uTime.value = currentTime * 0.001;

      if (!isDragging) {
        currentRotationRef.current.x += velocityRef.current.x;
        currentRotationRef.current.y += velocityRef.current.y;

        const dx = targetRotationRef.current.x - currentRotationRef.current.x;
        const dy = targetRotationRef.current.y - currentRotationRef.current.y;

        const rotationLerp = lowPowerMode ? 0.075 : 0.06;
        currentRotationRef.current.x += dx * rotationLerp;
        currentRotationRef.current.y += dy * rotationLerp;

        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      currentRotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, currentRotationRef.current.x));

      const floatY = Math.sin(currentTime * 0.0005) * floatAmplitude;
      cubeGroup.position.y = floatY;
      wireframe.position.y = floatY;

      let cameraYaw = 0;
      let cameraPitch = 0;
      let cameraRoll = 0;
      let flightEnvelope = 0;
      let flightSwirl = 0;
      let flightShaderYaw = 0;
      let flightShaderPitch = 0;
      cameraDistance = userCameraDistance;
      // Majestic distance: The hole is a distant background feature, not a close-up trap
      const shaderBaseDistance = 45.0 + (userCameraDistance / defaultCameraDistance) * 15.0;
      // Static black hole distance (handled in main loop)

      if (!prefersReducedMotion && cameraFlightRef.current.active) {
        const flight = cameraFlightRef.current;
        if (!flight.shotReady) {
          flight.startCameraDistance = userCameraDistance;
          if (flight.distanceMode === 'close') {
            flight.targetCameraDistance = Math.max(minZoom * 0.52, 420);
            flight.targetShaderDistance = Math.max(15.0, shaderBaseDistance * 0.35);
          } else if (flight.distanceMode === 'near') {
            flight.targetCameraDistance = Math.max(minZoom * 0.72, minZoom - 180);
            flight.targetShaderDistance = Math.max(22.0, shaderBaseDistance * 0.55);
          } else {
            flight.targetCameraDistance = Math.min(
              maxZoom * 0.82,
              minZoom + (maxZoom - minZoom) * 0.42 + Math.random() * 80
            );
            flight.targetShaderDistance = Math.min(55.0, shaderBaseDistance * 1.5);
          }
          flight.startShaderDistance = shaderBaseDistance;
          flight.shotReady = true;
          logRuntime('info', 'scene3d-camera', 'Camera shot configured', {
            shot: flight.distanceMode,
            fromCameraDistance: flight.startCameraDistance,
            toCameraDistance: flight.targetCameraDistance,
            fromBlackHoleDistance: flight.startShaderDistance,
            toBlackHoleDistance: flight.targetShaderDistance,
          });
        }
        const durationMs = lowPowerMode
          ? flight.durationMs * 0.82
          : flight.durationMs;
        const progress = (currentTime - flight.startMs) / durationMs;
        if (progress >= 1) {
          cameraDistance = userCameraDistance;
          // Handled in main loop

          cameraFlightRef.current.active = false;
        } else {
          const eased = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          const distancePulse = Math.sin(Math.PI * eased);
          const envelope = Math.pow(Math.sin(Math.PI * progress), 1.1);
          const swirl = progress * Math.PI * 2.8 + flight.phase;
          flightEnvelope = envelope;
          flightSwirl = swirl;
          const ampMultiplier = lowPowerMode ? 0.55 : 1;
          cameraYaw = flight.yawAmp * envelope * ampMultiplier;
          cameraPitch = flight.pitchAmp * envelope * Math.cos(swirl) * ampMultiplier;
          cameraRoll = flight.rollAmp * envelope * Math.sin(swirl * 1.2) * ampMultiplier;

          if (flight.shotReady) {
            const shotDistance =
              flight.startCameraDistance + (flight.targetCameraDistance - flight.startCameraDistance) * distancePulse;
            const minDynamicZoom = flight.distanceMode === 'close'
              ? Math.max(minZoom * 0.42, 360)
              : flight.distanceMode === 'near'
                ? Math.max(minZoom * 0.68, minZoom - 260)
                : minZoom;
            cameraDistance = Math.max(minDynamicZoom, Math.min(maxZoom, shotDistance));

            flightShaderYaw = flight.shaderYawBias * envelope;
            flightShaderPitch = flight.shaderPitchBias * envelope;
          }
        }
      }

      const cubeTiltX = Math.sin(flightSwirl * 1.2) * 0.2 * flightEnvelope;
      const cubeTiltY = Math.cos(flightSwirl * 0.95) * 0.32 * flightEnvelope;
      const cubeTiltZ = Math.sin(flightSwirl * 1.55) * 0.24 * flightEnvelope;
      cubeGroup.rotation.x = currentRotationRef.current.x + cubeTiltX;
      cubeGroup.rotation.y = currentRotationRef.current.y + cubeTiltY;
      cubeGroup.rotation.z = cubeTiltZ;
      wireframe.rotation.x = currentRotationRef.current.x + cubeTiltX * 1.06;
      wireframe.rotation.y = currentRotationRef.current.y + cubeTiltY * 1.06;
      wireframe.rotation.z = cubeTiltZ * 1.1;

      // Stabilized rotation: The BH stays more centered, but tilts slightly for 3D effect
      // Rotation handled in robust world basis loop below

      baseBlackHoleYaw - cameraYaw * 0.5 - cubeTiltY * 0.2 + flightShaderYaw;
      // Pitch handled in robust world basis loop below

      baseBlackHolePitch + cameraPitch * 0.4 - cubeTiltX * 0.15 + flightShaderPitch;

      // NEW: Static black hole (no wobbling offset), camera moves around it.
      // We removed uBlackHoleOffset, so we don't update it.

      // Animate time and noise scales for the accretion disk
      // Update Black Hole Shader uniforms with real-world camera state
      // Update Black Hole Shader uniforms with real-world camera state
      if (blackHoleMaterial.uniforms.uCameraInverseViewMatrix) {
        blackHoleMaterial.uniforms.uTime.value = currentTime * 0.001;

        // SCALE FIX: The Three.js scene is huge (1500 units), but the shader physics (Rs=2.0)
        // expects a distance of ~45.0. We scale the position by 0.03 to match.
        blackHoleMaterial.uniforms.uCameraWorldPos.value.copy(camera.position).multiplyScalar(0.03);

        // Pass inverse view matrix for robust ray generation
        camera.updateMatrixWorld();
        blackHoleMaterial.uniforms.uCameraInverseViewMatrix.value.copy(camera.matrixWorld);
      }



      // Doppler/Lensing dynamic adjustments based on flight speed/angle could go here
      // but for now we keep them stable for physical accuracy.

      // --- CINEMATIC CAMERA ---
      // Determine base look target
      let lookAtTarget = new Vector3(0, floatY, 0); // Default look at cube/center

      // If flying to Sun, shift lookAt
      if (cameraFlightRef.current.active && cameraFlightRef.current.targetSubject === 'sun') {
        // Interpolate lookAt towards Sun to frame it
        // Updated bias for new Sun Position (2000, 150, -500)
        // We want to frame the Sun, but keep the Cube in peripheral or center?
        // Cinematic rule: Always keep at least one subject.
        // If we look at Sun (2000, 150, -500) from Camera (at Z=1500), we turn RIGHT.
        const sunBias = new Vector3(800, 50, -200); // Look towards right side
        const progress = (currentTime - cameraFlightRef.current.startMs) / (lowPowerMode ? cameraFlightRef.current.durationMs * 0.82 : cameraFlightRef.current.durationMs);
        const smoothProgress = Math.min(1, Math.max(0, canvasSmoothStep(progress)));

        lookAtTarget.lerp(sunBias, smoothProgress * 0.85); // Strong pull towards sun
      } else {
        // When focusing on Black Hole (Center/Cube), ensure we really center it.
        // lookAt is already (0,y,0).
      }

      const orbitScale = 1 + flightEnvelope * (cameraFlightRef.current.orbitScale - 1);
      const cameraOrbitRadius = Math.max(72, cameraDistance * (0.09 * orbitScale));
      const cameraOffsetX = Math.sin(cameraYaw) * cameraOrbitRadius;
      const cameraOffsetY = Math.sin(cameraPitch) * cameraOrbitRadius * 0.5;
      const cameraOffsetZ = Math.cos(cameraYaw) * cameraOrbitRadius * 0.18;

      camera.position.set(cameraOffsetX, floatY + cameraOffsetY, cameraDistance + cameraOffsetZ);

      // Apply the calculated lookAt
      camera.lookAt(lookAtTarget);
      camera.rotation.z = cameraRoll;

      // Keep Black Hole Skybox locked to camera position (infinite background) 
      // BUT we need it behind everything.
      blackHoleSky.position.copy(camera.position);

      // We need to verify if Sun is visible or if we need to rotate skybox or move sun?
      // Since Black Hole is a fullscreen quad shader, it "paints over" everything behind it.
      // We must ensure the Sun (Mesh) is physically in front of the Black Hole Quad if we want standard depth.
      // Check Render Order:
      // Black Hole Quad: -1000 (Very far back).
      // Sun Mesh: Default (0).
      // So Sun works fine.

      // CINEMATIC CONSTRAINT: ALWAYS IN FRAME
      // If neither is in frame, we failed.
      // With our LookAt logic, we are always looking either:
      // 1. At the Cube (0,0,0) - Sun is at (400, 100, -1200) -> visible in background if FOV wide enough?
      // 2. Biased towards Sun -> Sun definitely visible.
      // Black Hole is omnipresent background so always visible unless occluded by sun.

      // Update Sun Corona orientation to face camera
      // (If we were using billboard corona)

      // Update Deep Stars (Rotate slowly)
      deepStars.rotation.y += frameDeltaSeconds * (lowPowerMode ? 0.008 : 0.014);
      deepStars.rotation.x += frameDeltaSeconds * (lowPowerMode ? 0.0016 : 0.0028);
      deepStarMaterial.opacity = (lowPowerMode ? 0.5 : 0.62) + flightEnvelope * 0.18;

      // Update Floating Particles
      particleGroup.position.copy(camera.position);
      // NOTE: We do NOT copy quaternion, so they don't rotate with camera.

      const pAttr = particleGeometry.getAttribute('position');
      const pArray = pAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;

        // Apply velocity
        pArray[idx] += particleVelocities[idx];
        pArray[idx + 1] += particleVelocities[idx + 1];
        pArray[idx + 2] += particleVelocities[idx + 2];

        // Wrap around logic (infinite field effect)
        // Since the group moves with camera, these positions are relative to camera
        const range = particleRange;
        if (pArray[idx] > range) pArray[idx] -= range * 2;
        if (pArray[idx] < -range) pArray[idx] += range * 2;
        if (pArray[idx + 1] > range) pArray[idx + 1] -= range * 2;
        if (pArray[idx + 1] < -range) pArray[idx + 1] += range * 2;
        if (pArray[idx + 2] > range) pArray[idx + 2] -= range * 2;
        if (pArray[idx + 2] < -range) pArray[idx + 2] += range * 2;
      }
      pAttr.needsUpdate = true;
      particleMaterial.uniforms.uSizeMultiplier.value = (lowPowerMode ? 1.8 : 2.4) + flightEnvelope * (lowPowerMode ? 0.5 : 0.8);
      particleMaterial.opacity = Math.min(0.85, (lowPowerMode ? 0.45 : 0.6) + flightEnvelope * 0.2);

      let burst = 0;
      if (!prefersReducedMotion && rotationBurstRef.current.active) {
        const progress = (currentTime - rotationBurstRef.current.startMs) / (lowPowerMode ? 640 : 860);
        if (progress >= 1) {
          rotationBurstRef.current.active = false;
        } else {
          const envelope = Math.sin(Math.PI * progress);
          burst = Math.pow(Math.max(envelope, 0), 1.45);
        }
      }
      const explodeDistance = cubeSize * (lowPowerMode ? 0.12 : 0.22) * burst;
      const wobbleAmount = (lowPowerMode ? 0.022 : 0.036) * burst;
      faceActors.forEach((face) => {
        const wave = Math.sin(currentTime * 0.009 + face.phase + rotationBurstRef.current.seed) * cubeSize * 0.007 * burst;
        face.object.position.set(
          face.basePosition[0] + face.normal[0] * (explodeDistance + wave),
          face.basePosition[1] + face.normal[1] * (explodeDistance + wave),
          face.basePosition[2] + face.normal[2] * (explodeDistance + wave)
        );
        face.object.rotation.set(
          face.baseRotation[0] + Math.sin(currentTime * 0.011 + face.phase) * wobbleAmount,
          face.baseRotation[1] + Math.cos(currentTime * 0.01 + face.phase) * wobbleAmount,
          face.baseRotation[2] + Math.sin(currentTime * 0.012 + face.phase) * wobbleAmount * 0.65
        );
      });
      const wireScale = 1 + burst * 0.06;
      wireframe.scale.set(wireScale, wireScale, wireScale);

      cssRenderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (animationId === 0) {
        animationId = requestAnimationFrame(animate);
      }
    };
    startAnimationRef.current = startAnimation;
    startAnimation();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
      webglRenderer.setSize(window.innerWidth, window.innerHeight);
      blackHoleMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      logRuntime('info', 'scene3d', 'Scene resized', {
        width: window.innerWidth,
        height: window.innerHeight,
      });
      startAnimation();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      logRuntime('info', 'scene3d', 'Scene cleanup started');
      cancelAnimationFrame(animationId);
      startAnimationRef.current = null;
      window.removeEventListener('resize', handleResize);
      interactionTarget.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      interactionTarget.removeEventListener('wheel', onWheel);

      if (containerRef.current && cssRenderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(cssRenderer.domElement);
      }
      if (webglContainerRef.current && webglRenderer.domElement.parentNode === webglContainerRef.current) {
        webglContainerRef.current.removeChild(webglRenderer.domElement);
      }

      webglRenderer.dispose();
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
      sunGeometry.dispose();
      sunMaterial.dispose();
      sunCoronaGeometry.dispose();
      sunCoronaMaterial.dispose();
      spaceGeometries.forEach((geometry) => geometry.dispose());
      spaceMaterials.forEach((material) => material.dispose());
      spaceGeometries.forEach((geometry) => geometry.dispose());
      spaceMaterials.forEach((material) => material.dispose());
      disposeCube();
      logRuntime('info', 'scene3d', 'Scene cleanup completed');
    };
  }, [locale]);

  return (
    <>
      <div ref={webglContainerRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
    </>
  );
}
