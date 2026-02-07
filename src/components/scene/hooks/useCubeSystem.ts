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

    // 1. Creation & Lifecycle
    useEffect(() => {
        if (!initialized || !scene || !webglScene) return;

        const { cubeGroup, wireframe, faceActors, dispose } = createCubeStructure({
            ...createConfig,
            locale,
        });

        if (showCube) {
            webglScene.add(wireframe);
            scene.add(cubeGroup);
        }

        cubeRefs.current = { cubeGroup, wireframe, faceActors };
        logEvent('scene.cube.created', { locale });

        // Initial Visibility State
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
        createConfig.faceSize,
        createConfig.facePadding,
        createConfig.faceAlpha,
        createConfig.faceDepth,
        createConfig.cubeSize,
        createConfig.isPhone,
        createConfig.lowPowerMode,
        showCube, // If showCube config changes, we recreate/re-add
    ]);

    // 2. Visibility Management (Immediate Effect)
    useEffect(() => {
        updateVisibility(cubeRefs.current, isGameMode, showCube);
    }, [isGameMode, showCube]);

    const updateVisibility = (
        refs: typeof cubeRefs.current,
        gameMode: boolean,
        globalShow: boolean
    ) => {
        if (!refs) return;

        const shouldShow = !gameMode && globalShow;
        refs.cubeGroup.visible = shouldShow;
        refs.wireframe.visible = shouldShow;

        // Robustness: Hide CSS elements processing if hidden
        // This prevents "ghost clicks" on invisible CSS3D objects
        refs.faceActors.forEach((actor) => {
            // If hidden, we disable pointer events to ensure clicks pass through
            // We also set opacity to 0 immediately to prevent flickers
            const element = actor.object.element;
            if (element) {
                element.style.pointerEvents = shouldShow ? 'auto' : 'none';
                // We don't force opacity here strictly if we rely on the animation loop for fade effects,
                // but for "Game Mode" -> we want it gone.
                if (!shouldShow) {
                    element.style.opacity = '0';
                    element.style.display = 'none'; // Force remove from flow/render
                } else {
                    element.style.display = 'block';
                }
            }
        });

        logEvent('scene.cube.visibility', { visible: shouldShow, gameMode });
    };

    return cubeRefs;
}
