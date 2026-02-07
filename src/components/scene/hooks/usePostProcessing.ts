import { useEffect, useRef } from 'react';
import { PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

interface PostProcessingConfig {
    renderer: WebGLRenderer | null;
    scene: Scene | null;
    camera: PerspectiveCamera | null;
    initialized: boolean;
    lowPowerMode: boolean;
    enabled?: boolean;
}

export function usePostProcessing({
    renderer,
    scene,
    camera,
    initialized,
    lowPowerMode,
    enabled = true,
}: PostProcessingConfig) {
    const composerRef = useRef<EffectComposer | null>(null);

    useEffect(() => {
        if (!enabled || !initialized || !renderer || !scene || !camera || lowPowerMode) {
            composerRef.current?.dispose?.();
            composerRef.current = null;
            return;
        }

        const width = window.innerWidth;
        const height = window.innerHeight;

        const composer = new EffectComposer(renderer);

        // 1. Render Pass
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        // 2. Bloom Pass - Very subtle glow
        const bloomPass = new UnrealBloomPass(
            new Vector2(width, height),
            0.09, // strength
            0.08, // radius
            0.99  // threshold (higher = less bloom on text)
        );
        composer.addPass(bloomPass);

        // 3. Output Pass (Handles tone mapping and color space)
        const outputPass = new OutputPass();
        composer.addPass(outputPass);

        composerRef.current = composer;

        return () => {
            composer.dispose?.();
            composerRef.current = null;
            // Passes are disposed by the composer or can be disposed manually if needed
        };
    }, [enabled, initialized, renderer, scene, camera, lowPowerMode]);

    // Handle Resize
    useEffect(() => {
        if (!composerRef.current) return;

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            composerRef.current?.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { composerRef };
}
