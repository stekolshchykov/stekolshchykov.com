import { useEffect, useRef, RefObject } from 'react';
import {
    AdditiveBlending,
    BufferGeometry,
    Color,
    Float32BufferAttribute,
    Group,
    Material,
    Points,
    PointsMaterial,
    Scene,
    ShaderMaterial,
} from 'three';
import { logEvent } from '../../../observability/logger';

interface StarFieldConfig {
    sceneRef: RefObject<Scene | null>;
    lowPowerMode: boolean;
    flightEnvelope: number; // For dynamic opacity/size updates
}

export function useStarField({ sceneRef, lowPowerMode, flightEnvelope }: StarFieldConfig) {
    const deepStarsRef = useRef<Points | null>(null);
    const particleGroupRef = useRef<Group | null>(null);
    const materialsRef = useRef<Material[]>([]);
    const geometriesRef = useRef<BufferGeometry[]>([]);

    // Physics refs for animation
    const particleInfoRef = useRef<{
        velocities: Float32Array;
        range: number;
        count: number;
    } | null>(null);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        // --- Deep Stars ---
        const deepStarCount = lowPowerMode ? 2200 : 5200;
        const deepStarSpread = lowPowerMode ? 7600 : 10500;
        const deepStarPositions = new Float32Array(deepStarCount * 3);
        const deepStarColors = new Float32Array(deepStarCount * 3);

        for (let i = 0; i < deepStarCount; i++) {
            const idx = i * 3;
            const r = deepStarSpread * (0.4 + Math.pow(Math.random(), 2) * 0.6);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            deepStarPositions[idx] = r * Math.sin(phi) * Math.cos(theta);
            deepStarPositions[idx + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
            deepStarPositions[idx + 2] = r * Math.cos(phi);

            const color = new Color().setHSL(
                0.58 + Math.random() * 0.12,
                0.2 + Math.random() * 0.3,
                Math.min(0.95, 0.7 + Math.random() * 0.3)
            );
            deepStarColors[idx] = color.r;
            deepStarColors[idx + 1] = color.g;
            deepStarColors[idx + 2] = color.b;
        }

        const deepStarGeometry = new BufferGeometry();
        deepStarGeometry.setAttribute('position', new Float32BufferAttribute(deepStarPositions, 3));
        deepStarGeometry.setAttribute('color', new Float32BufferAttribute(deepStarColors, 3));
        geometriesRef.current.push(deepStarGeometry);

        const deepStarMaterial = new PointsMaterial({
            size: lowPowerMode ? 2.2 : 2.6,
            transparent: true,
            opacity: lowPowerMode ? 0.56 : 0.75,
            depthWrite: false,
            blending: AdditiveBlending,
            vertexColors: true,
        });
        materialsRef.current.push(deepStarMaterial);

        const deepStars = new Points(deepStarGeometry, deepStarMaterial);
        deepStars.frustumCulled = false;
        scene.add(deepStars);
        deepStarsRef.current = deepStars;

        // --- Floating Particles ---
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

            const pColor = new Color().setHSL(
                0.6 + Math.random() * 0.15,
                0.4 + Math.random() * 0.4,
                0.8 + Math.random() * 0.2
            );
            particleColors[idx] = pColor.r;
            particleColors[idx + 1] = pColor.g;
            particleColors[idx + 2] = pColor.b;

            particleSizes[i] = (lowPowerMode ? 1.5 : 2.5) * (0.5 + Math.random());
            particleVelocities[idx] = (Math.random() - 0.5) * (lowPowerMode ? 0.3 : 0.6);
            particleVelocities[idx + 1] = (Math.random() - 0.5) * (lowPowerMode ? 0.3 : 0.6);
            particleVelocities[idx + 2] = (Math.random() - 0.5) * (lowPowerMode ? 0.3 : 0.6) + Math.random() * 1.5;
        }

        const particleGeometry = new BufferGeometry();
        particleGeometry.setAttribute('position', new Float32BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('color', new Float32BufferAttribute(particleColors, 3));
        particleGeometry.setAttribute('size', new Float32BufferAttribute(particleSizes, 1));
        geometriesRef.current.push(particleGeometry);

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
        materialsRef.current.push(particleMaterial);

        const particles = new Points(particleGeometry, particleMaterial);
        particles.frustumCulled = false;

        const particleGroup = new Group();
        particleGroup.add(particles);
        scene.add(particleGroup);
        particleGroupRef.current = particleGroup;

        particleInfoRef.current = {
            velocities: particleVelocities,
            range: particleRange,
            count: particleCount,
        };

        logEvent('scene.starfield.ready', { deepStars: deepStarCount, particles: particleCount, lowPowerMode });

        return () => {
            scene.remove(deepStars);
            scene.remove(particleGroup);
            materialsRef.current.forEach(m => m.dispose());
            geometriesRef.current.forEach(g => g.dispose());
            materialsRef.current = [];
            geometriesRef.current = [];
        };
    }, [sceneRef, lowPowerMode]);

    const updateStarField = (deltaTime: number, cameraPosition: { x: number, y: number, z: number }) => {
        if (!deepStarsRef.current || !particleGroupRef.current || !particleInfoRef.current) return;

        // Deep Stars Rotation
        const deepStars = deepStarsRef.current;
        deepStars.rotation.y += deltaTime * (lowPowerMode ? 0.008 : 0.014);
        deepStars.rotation.x += deltaTime * (lowPowerMode ? 0.0016 : 0.0028);
        (deepStars.material as PointsMaterial).opacity = (lowPowerMode ? 0.5 : 0.62) + flightEnvelope * 0.18;

        // Particles
        const particleGroup = particleGroupRef.current;
        particleGroup.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

        const { velocities, range, count } = particleInfoRef.current;
        const geometry = (particleGroup.children[0] as Points).geometry;
        const positions = geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            positions[idx] += velocities[idx];
            positions[idx + 1] += velocities[idx + 1];
            positions[idx + 2] += velocities[idx + 2];

            if (positions[idx] > range) positions[idx] -= range * 2;
            if (positions[idx] < -range) positions[idx] += range * 2;
            if (positions[idx + 1] > range) positions[idx + 1] -= range * 2;
            if (positions[idx + 1] < -range) positions[idx + 1] += range * 2;
            if (positions[idx + 2] > range) positions[idx + 2] -= range * 2;
            if (positions[idx + 2] < -range) positions[idx + 2] += range * 2;
        }
        geometry.attributes.position.needsUpdate = true;

        // Update Uniforms
        const material = (particleGroup.children[0] as Points).material as ShaderMaterial;
        material.uniforms.uSizeMultiplier.value = (lowPowerMode ? 1.8 : 2.4) + flightEnvelope * (lowPowerMode ? 0.5 : 0.8);
        material.opacity = Math.min(0.85, (lowPowerMode ? 0.45 : 0.6) + flightEnvelope * 0.2);
    };

    return { updateStarField };
}
