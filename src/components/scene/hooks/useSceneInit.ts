import { useEffect, useRef, useState } from 'react';
import { ACESFilmicToneMapping, PerspectiveCamera, Scene, SRGBColorSpace, WebGLRenderer } from 'three';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { logRuntime } from '../../../observability/logger';

interface SceneInitConfig {
    pixelRatio: number;
    isPhone: boolean;
    isTablet: boolean;
    containerRef: React.RefObject<HTMLDivElement | null>;
    webglContainerRef: React.RefObject<HTMLDivElement | null>;
}

export function useSceneInit({
    pixelRatio,
    isPhone,
    isTablet,
    containerRef,
    webglContainerRef,
}: SceneInitConfig) {
    const sceneRef = useRef<Scene | null>(null);
    const webglSceneRef = useRef<Scene | null>(null);
    const cameraRef = useRef<PerspectiveCamera | null>(null);
    const cssRendererRef = useRef<CSS3DRenderer | null>(null);
    const webglRendererRef = useRef<WebGLRenderer | null>(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !webglContainerRef.current) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Initialize Scenes
        const scene = new Scene();
        const webglScene = new Scene();
        sceneRef.current = scene;
        webglSceneRef.current = webglScene;

        // Initialize Camera
        const camera = new PerspectiveCamera(50, viewportWidth / viewportHeight, 1, 5000);
        camera.position.z = isPhone ? 1250 : isTablet ? 1400 : 1500;
        cameraRef.current = camera;

        // Initialize CSS3D Renderer
        const cssRenderer = new CSS3DRenderer();
        cssRenderer.setSize(viewportWidth, viewportHeight);
        containerRef.current.appendChild(cssRenderer.domElement);
        cssRendererRef.current = cssRenderer;

        // Initialize WebGL Renderer (optional fallback: CSS3D still works if WebGL is unavailable)
        let webglRenderer: WebGLRenderer | null = null;
        let onContextLost: ((event: Event) => void) | null = null;
        let onContextRestored: (() => void) | null = null;
        try {
            webglRenderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
            });
            webglRenderer.setSize(viewportWidth, viewportHeight);
            webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatio));
            webglRenderer.outputColorSpace = SRGBColorSpace;
            webglRenderer.toneMapping = ACESFilmicToneMapping;
            webglRenderer.toneMappingExposure = 1.08;
            webglContainerRef.current.appendChild(webglRenderer.domElement);
            webglRendererRef.current = webglRenderer;

            const canvas = webglRenderer.domElement;
            onContextLost = (event: Event) => {
                event.preventDefault();
                logRuntime('error', 'useSceneInit', 'WebGL context lost');
            };
            onContextRestored = () => {
                if (!webglRenderer) return;
                webglRenderer.setSize(window.innerWidth, window.innerHeight);
                webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatio));
                logRuntime('info', 'useSceneInit', 'WebGL context restored');
            };
            canvas.addEventListener('webglcontextlost', onContextLost, false);
            canvas.addEventListener('webglcontextrestored', onContextRestored, false);
        } catch (error) {
            webglRendererRef.current = null;
            logRuntime('error', 'useSceneInit', 'WebGL initialization failed, running CSS3D only', {
                error: error instanceof Error ? error.message : String(error),
            });
        }

        // Capture refs for cleanup closure
        const cssContainer = containerRef.current;
        const webglContainer = webglContainerRef.current;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInitialized(true);

        return () => {
            setInitialized(false);

            // Cleanup DOM
            if (cssContainer && cssRenderer.domElement.parentNode === cssContainer) {
                cssContainer.removeChild(cssRenderer.domElement);
            }
            if (webglRenderer && webglContainer && webglRenderer.domElement.parentNode === webglContainer) {
                if (onContextLost) {
                    webglRenderer.domElement.removeEventListener('webglcontextlost', onContextLost);
                }
                if (onContextRestored) {
                    webglRenderer.domElement.removeEventListener('webglcontextrestored', onContextRestored);
                }
                webglContainer.removeChild(webglRenderer.domElement);
            }

            // Dispose Resources
            webglRenderer?.dispose();
            logRuntime('info', 'useSceneInit', 'Scene resources disposed');
        };
    }, [pixelRatio, isPhone, isTablet, containerRef, webglContainerRef]);

    // Handle Resize
    useEffect(() => {
        if (!initialized || !cameraRef.current || !cssRendererRef.current) return;

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            cameraRef.current!.aspect = width / height;
            cameraRef.current!.updateProjectionMatrix();

            cssRendererRef.current!.setSize(width, height);
            webglRendererRef.current?.setSize(width, height);
            webglRendererRef.current?.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatio));

            logRuntime('info', 'useSceneInit', 'Scene resized', { width, height });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [initialized, pixelRatio]);

    return {
        sceneRef,
        webglSceneRef,
        cameraRef,
        cssRendererRef,
        webglRendererRef,
        initialized,
    };
}
