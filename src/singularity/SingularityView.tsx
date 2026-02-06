import { useEffect, useRef, useState } from 'react';
import { Preloader2D } from './Preloader2D';
import { createSingularityScene } from './createSingularityScene';

export type SingularityDiagnostics = {
  ready: boolean;
  renderer: 'webgpu' | 'webgl';
  frameCount: number;
  lastError?: string;
};

declare global {
  interface Window {
    __SINGULARITY_DIAGNOSTICS__?: SingularityDiagnostics;
  }
}

function hasWebGPU(): boolean {
  return typeof navigator !== 'undefined' && typeof (navigator as unknown as { gpu?: unknown }).gpu !== 'undefined';
}

export function SingularityView() {
  const forceWebGL = import.meta.env.VITE_FORCE_WEBGL === '1';
  const webgpuSupported = forceWebGL || hasWebGPU();

  const webglCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const preloaderCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const debugRootRef = useRef<HTMLDivElement | null>(null);
  const gizmoRootRef = useRef<HTMLDivElement | null>(null);

  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = webglCanvasRef.current;
    const preloaderCanvas = preloaderCanvasRef.current;
    const debugRootEl = debugRootRef.current;
    const gizmoRootEl = gizmoRootRef.current;
    if (!canvas || !preloaderCanvas || !debugRootEl || !gizmoRootEl) return;

    const diagnostics: SingularityDiagnostics = {
      ready: false,
      renderer: forceWebGL ? 'webgl' : 'webgpu',
      frameCount: 0,
    };
    window.__SINGULARITY_DIAGNOSTICS__ = diagnostics;

    if (!webgpuSupported) {
      diagnostics.lastError = 'webgpu-unsupported';
      diagnostics.ready = true;
      return;
    }

    let disposeScene: (() => void) | null = null;
    const preloader = new Preloader2D(preloaderCanvas);
    preloader.start();

    let disposed = false;

    void (async () => {
      try {
        const { dispose } = await createSingularityScene({
          canvas,
          debugRootEl,
          gizmoRootEl,
          diagnostics,
          onFirstFrame: () => preloader.hide(),
          forceWebGL,
        });
        if (disposed) {
          dispose();
          return;
        }
        disposeScene = dispose;
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        diagnostics.lastError = message;
        setInitError(message);
        console.error('Failed to initialize Singularity scene:', e);
        preloader.hide();
      }
    })();

    return () => {
      disposed = true;
      preloader.dispose();
      disposeScene?.();
      disposeScene = null;
    };
  }, [webgpuSupported, forceWebGL]);

  if (!webgpuSupported) {
    return (
      <div
        data-testid="webgpu-unsupported"
        style={{
          position: 'fixed',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          background: '#000',
          color: '#fff',
          padding: 24,
          textAlign: 'center',
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 18 }}>WebGPU Not Supported</h1>
          <p style={{ marginTop: 10, opacity: 0.8 }}>
            This scene requires a browser with WebGPU support.
          </p>
        </div>
      </div>
    );
  }

  if (initError) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          background: '#000',
          color: '#fff',
          padding: 24,
          textAlign: 'center',
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 18 }}>Initialization Error</h1>
          <pre style={{ marginTop: 10, opacity: 0.85, whiteSpace: 'pre-wrap' }}>{initError}</pre>
        </div>
      </div>
    );
  }

  return (
    <>
      <canvas id="preloader" ref={preloaderCanvasRef} />
      <div id="debug-panel" ref={debugRootRef} />
      <div id="gizmo-root" ref={gizmoRootRef} />
      <canvas className="webgl" ref={webglCanvasRef} />
    </>
  );
}
