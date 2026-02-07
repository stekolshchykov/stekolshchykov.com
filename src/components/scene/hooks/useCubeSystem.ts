import { useEffect, useRef } from 'react';
import { Group, LineSegments, Scene } from 'three';
import { createCubeStructure, FaceActor } from '../CubeStructure';
import type { Locale } from '../../../content/stekolschikovContent';
import { logEvent } from '../../../observability/logger';

interface UseCubeSystemProps {
    scene: Scene | null;
    webglScene: Scene | null;
    locale: Locale;
    createConfig: {
        faceSize: number;
        facePadding: number;
        faceAlpha: number;
        faceDepth: number;
        cubeSize: number;
        isPhone: boolean;
        lowPowerMode: boolean;
    };
    isGameMode: boolean;
    showCube: boolean;
    initialized: boolean;
}

export function useCubeSystem({
    scene,
    webglScene,
    locale,
    createConfig,
    isGameMode,
    showCube,
    initialized,
}: UseCubeSystemProps) {
    const cubeRefs = useRef<{
        cubeGroup: Group;
        wireframe: LineSegments;
        faceActors: FaceActor[];
    } | null>(null);

    // Helper to apply visibility
    const updateVisibility = (
        refs: typeof cubeRefs.current,
        gameMode: boolean,
        globalShow: boolean
    ) => {
        if (!refs) return;

        const shouldShow = !gameMode && globalShow;
        refs.cubeGroup.visible = shouldShow;
        refs.wireframe.visible = shouldShow;

        refs.faceActors.forEach((actor) => {
            const element = actor.object.element;
            if (element) {
                element.style.pointerEvents = shouldShow ? 'auto' : 'none';
                if (!shouldShow) {
                    element.style.opacity = '0';
                    element.style.display = 'none';
                } else {
                    element.style.display = 'block';
                    // We let the animation loop handle opacity fading if needed, 
                    // or restore it here if it was zeroed out.
                    // Ideally the loop sets opacity based on facing, but 'block' is needed to render.
                }
            }
        });

        logEvent('scene.cube.visibility', { visible: shouldShow, gameMode });
    };

    // 1. Creation & Lifecycle
    useEffect(() => {
        if (!initialized || !scene || !webglScene) return;

        const { cubeGroup, wireframe, faceActors, dispose } = createCubeStructure({
            locale,
            ...createConfig
        });

        if (showCube) {
            webglScene.add(wireframe);
            scene.add(cubeGroup);
        }

        cubeRefs.current = { cubeGroup, wireframe, faceActors };
        logEvent('scene.cube.created', { locale });

        // Apply initial state
        updateVisibility(cubeRefs.current, isGameMode, showCube);

        return () => {
            if (showCube) {
                webglScene.remove(wireframe);
                scene.remove(cubeGroup);
            }
            dispose();
            cubeRefs.current = null;
        };
    }, [
        initialized,
        scene,
        webglScene,
        locale,
        // Deconstruct config to trigger re-run on value changes
        createConfig.faceSize,
        createConfig.facePadding,
        createConfig.faceAlpha,
        createConfig.faceDepth,
        createConfig.cubeSize,
        createConfig.isPhone,
        createConfig.lowPowerMode,
        showCube,
    ]);

    // 2. Visibility Management (Immediate Effect)
    useEffect(() => {
        updateVisibility(cubeRefs.current, isGameMode, showCube);
    }, [isGameMode, showCube]);

    return cubeRefs;
}
