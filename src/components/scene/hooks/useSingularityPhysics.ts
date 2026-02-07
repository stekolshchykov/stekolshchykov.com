import { useEffect, useRef, RefObject } from 'react';
import {
    AdditiveBlending,
    BufferGeometry,
    Color,
    Float32BufferAttribute,
    Points,
    Scene,
    ShaderMaterial,
    Vector3,
} from 'three';

interface SingularityPhysicsConfig {
    sceneRef: RefObject<Scene | null>;
    lowPowerMode: boolean;
    initialized: boolean;
}

const BLACK_HOLE_POSITION = new Vector3(-650, -70, -720);

export function useSingularityPhysics({ sceneRef, lowPowerMode, initialized }: SingularityPhysicsConfig) {
    const pointsRef = useRef<Points | null>(null);
    const materialRef = useRef<ShaderMaterial | null>(null);
    const particlesCount = lowPowerMode ? 300 : 800;
    const positionsRef = useRef<Float32Array | null>(null);
    const seedsRef = useRef<Float32Array | null>(null); // For individual animation variance

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene || !initialized) return;

        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);
        const seeds = new Float32Array(particlesCount);

        const palette = [
            new Color('#ffaa00'), // Hot orange
            new Color('#fffced'), // Hot white
            new Color('#4f7fff'), // Blue plasma
        ];

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            // Random initial position in a sphere around BH
            const radius = 400 + Math.random() * 600;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = BLACK_HOLE_POSITION.x + radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = BLACK_HOLE_POSITION.y + radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = BLACK_HOLE_POSITION.z + radius * Math.cos(phi);

            const color = palette[Math.floor(Math.random() * palette.length)];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = 2.0 + Math.random() * 4.0;
            seeds[i] = Math.random() * 100;
        }

        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));

        positionsRef.current = positions;
        seedsRef.current = seeds;

        const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      uniform float uTime;
      uniform float uPixelRatio;

      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

        const fragmentShader = `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float strength = pow(1.0 - d * 2.0, 2.0);
        gl_FragColor = vec4(vColor, strength);
      }
    `;

        const material = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            },
            vertexShader,
            fragmentShader,
            transparent: true,
            blending: AdditiveBlending,
            depthWrite: false,
            vertexColors: true,
        });

        const points = new Points(geometry, material);
        points.frustumCulled = false;
        scene.add(points);
        pointsRef.current = points;
        materialRef.current = material;

        return () => {
            scene.remove(points);
            geometry.dispose();
            material.dispose();
        };
    }, [sceneRef, initialized, lowPowerMode]);

    const updateSingularityPhysics = (delta: number, time: number) => {
        if (!pointsRef.current || !positionsRef.current || !seedsRef.current) return;

        const positions = positionsRef.current;
        const seeds = seedsRef.current;
        const speedScale = lowPowerMode ? 0.8 : 1.2;

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            const y = positions[i3 + 1];
            const z = positions[i3 + 2];

            const toBH = new Vector3(BLACK_HOLE_POSITION.x - x, BLACK_HOLE_POSITION.y - y, BLACK_HOLE_POSITION.z - z);
            const dist = toBH.length();

            if (dist < 80) {
                // Reset particle to outer rim
                const radius = 800 + Math.random() * 200;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                positions[i3] = BLACK_HOLE_POSITION.x + radius * Math.sin(phi) * Math.cos(theta);
                positions[i3 + 1] = BLACK_HOLE_POSITION.y + radius * Math.sin(phi) * Math.sin(theta);
                positions[i3 + 2] = BLACK_HOLE_POSITION.z + radius * Math.cos(phi);
            } else {
                // Spiral logic
                const pullStrength = (300 / (dist + 50)) * delta * 50 * speedScale;
                const normalizedToBH = toBH.normalize();

                // Add inward pull
                positions[i3] += normalizedToBH.x * pullStrength;
                positions[i3 + 1] += normalizedToBH.y * pullStrength;
                positions[i3 + 2] += normalizedToBH.z * pullStrength;

                // Add tangential swirl
                const swirlAxis = new Vector3(0.1, 1, 0.1).normalize();
                const tangent = new Vector3().crossVectors(normalizedToBH, swirlAxis).normalize();
                // Phase 4: Use seeds[i] to add individual particle variance
                const swirlStrength = (150 / (dist + 20)) * delta * (35 + Math.sin(time + seeds[i]) * 15) * speedScale;

                positions[i3] += tangent.x * swirlStrength;
                positions[i3 + 1] += tangent.y * swirlStrength;
                positions[i3 + 2] += tangent.z * swirlStrength;
            }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = time;
        }
    };

    return { updateSingularityPhysics };
}
