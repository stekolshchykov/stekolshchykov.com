import { useEffect, useRef, RefObject } from 'react';
import {
    AdditiveBlending,
    BackSide,
    Color,
    Mesh,
    PlaneGeometry,
    Scene,
    ShaderMaterial,
    SphereGeometry,
    Vector3,
    Matrix4
} from 'three';
import { BLACK_HOLE_FRAGMENT_SHADER, BLACK_HOLE_VERTEX_SHADER, createBlackHoleUniforms } from '../../../scene/blackHoleShader';
import { SUN_FRAGMENT_SHADER, SUN_VERTEX_SHADER, createSunUniforms } from '../../../scene/sunShader';
import { SUN_CORONA_FRAGMENT_SHADER, SUN_CORONA_VERTEX_SHADER } from '../../../scene/sunCoronaShader';
import { logEvent } from '../../../observability/logger';

interface CelestialBodiesConfig {
    sceneRef: RefObject<Scene | null>;
    lowPowerMode: boolean;
}

export function useCelestialBodies({ sceneRef, lowPowerMode }: CelestialBodiesConfig) {
    const blackHoleMaterialRef = useRef<ShaderMaterial | null>(null);
    const sunMaterialRef = useRef<ShaderMaterial | null>(null);
    const sunCoronaMaterialRef = useRef<ShaderMaterial | null>(null);
    const blackHoleSkyRef = useRef<Mesh | null>(null);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // --- Black Hole ---
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
        blackHoleMaterialRef.current = blackHoleMaterial;

        const blackHoleSky = new Mesh(blackHoleGeometry, blackHoleMaterial);
        blackHoleSky.frustumCulled = false;
        blackHoleSky.renderOrder = -1000;
        scene.add(blackHoleSky);
        blackHoleSkyRef.current = blackHoleSky;

        // --- Sun ---
        const sunUniforms = createSunUniforms();
        const sunGeometry = new SphereGeometry(60, 64, 64);
        const sunMaterial = new ShaderMaterial({
            uniforms: sunUniforms,
            vertexShader: SUN_VERTEX_SHADER,
            fragmentShader: SUN_FRAGMENT_SHADER,
        });
        sunMaterialRef.current = sunMaterial;

        const sunMesh = new Mesh(sunGeometry, sunMaterial);
        sunMesh.position.set(700, 150, -600);
        scene.add(sunMesh);

        // --- Sun Corona ---
        const sunCoronaGeometry = new SphereGeometry(85, 64, 64);
        const sunCoronaMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new Color('#ffaa00') },
            },
            vertexShader: SUN_CORONA_VERTEX_SHADER,
            fragmentShader: SUN_CORONA_FRAGMENT_SHADER,
            side: 0, // FrontSide
            blending: AdditiveBlending,
            transparent: true,
            depthWrite: false,
        });
        sunCoronaMaterialRef.current = sunCoronaMaterial;

        const sunCoronaMesh = new Mesh(sunCoronaGeometry, sunCoronaMaterial);
        sunCoronaMesh.position.copy(sunMesh.position);
        scene.add(sunCoronaMesh);

        logEvent('scene.celestial.ready', { lowPowerMode });

        return () => {
            scene.remove(blackHoleSky);
            scene.remove(sunMesh);
            scene.remove(sunCoronaMesh);
            blackHoleGeometry.dispose();
            blackHoleMaterial.dispose();
            sunGeometry.dispose();
            sunMaterial.dispose();
            sunCoronaGeometry.dispose();
            sunCoronaMaterial.dispose();
        };
    }, [sceneRef, lowPowerMode]);

    const updateCelestialUniforms = (
        currentTime: number,
        cameraPosition: Vector3,
        cameraMatrixWorld: Matrix4
    ) => {
        // Update Time
        if (blackHoleMaterialRef.current) blackHoleMaterialRef.current.uniforms.uTime.value = currentTime * 0.001;
        if (sunMaterialRef.current) sunMaterialRef.current.uniforms.uTime.value = currentTime * 0.001;
        if (sunCoronaMaterialRef.current) sunCoronaMaterialRef.current.uniforms.uTime.value = currentTime * 0.001;

        // Update Black Hole Camera Uniforms
        if (blackHoleMaterialRef.current && blackHoleMaterialRef.current.uniforms.uCameraInverseViewMatrix) {
            // SCALE FIX: Scale position to match shader physics
            blackHoleMaterialRef.current.uniforms.uCameraWorldPos.value.copy(cameraPosition).multiplyScalar(0.03);
            blackHoleMaterialRef.current.uniforms.uCameraInverseViewMatrix.value.copy(cameraMatrixWorld);
        }

        // Keep Black Hole Skybox locked to camera
        if (blackHoleSkyRef.current) {
            blackHoleSkyRef.current.position.copy(cameraPosition);
        }
    };

    const handleResize = (width: number, height: number) => {
        if (blackHoleMaterialRef.current) {
            blackHoleMaterialRef.current.uniforms.uResolution.value.set(width, height);
        }
    };

    return { updateCelestialUniforms, handleResize };
}
