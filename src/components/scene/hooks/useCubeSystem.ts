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
        updateLocale: (locale: Locale) => void;
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
        refs.wireframe.visible = false; // Always hide wireframe

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

        const { cubeGroup, wireframe, faceActors, dispose, updateLocale } = createCubeStructure({
            locale,
            ...createConfig
        });

        if (showCube) {
            webglScene.add(wireframe);
            scene.add(cubeGroup);
        }

        cubeRefs.current = { cubeGroup, wireframe, faceActors, updateLocale };
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
    // Note: locale is intentionally NOT in dependencies to prevent cube recreation on language change.
    // Face components receive locale as prop and React handles re-renders internally.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        initialized,
        scene,
        webglScene,
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

    // 3. Locale update (without cube recreation)
    useEffect(() => {
        if (cubeRefs.current?.updateLocale) {
            cubeRefs.current.updateLocale(locale);
        }
    }, [locale]);

    return cubeRefs;
}
