import { useEffect, useRef } from 'react';
import { createSingularityScene } from './createSingularityScene';
import type { SingularityDiagnostics } from './SingularityView';

function hasWebGPU(): boolean {
  return typeof navigator !== 'undefined' && typeof (navigator as unknown as { gpu?: unknown }).gpu !== 'undefined';
}

/**
 * Fullscreen black hole background used behind the cube "business card" UI.
 * - No preloader, no gizmo, no debug panel.
 * - Pointer events disabled so it never steals interaction from the cube UI.
 * - Falls back to deterministic WebGL shader when WebGPU isn't available.
 */
export function SingularityBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const debugRootRef = useRef<HTMLDivElement | null>(null);
  const gizmoRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const debugRootEl = debugRootRef.current;
    const gizmoRootEl = gizmoRootRef.current;
    if (!canvas || !debugRootEl || !gizmoRootEl) return;

    const forceWebGLFromEnv = import.meta.env.VITE_FORCE_WEBGL === '1';
    const initialForceWebGL = forceWebGLFromEnv || !hasWebGPU();

    const diagnostics: SingularityDiagnostics = {
      ready: false,
      renderer: initialForceWebGL ? 'webgl' : 'webgpu',
      frameCount: 0,
    };

    let disposed = false;
    let disposeScene: (() => void) | null = null;
    let fallbackTimer: number | null = null;

    // Keep roots hidden; createSingularityScene expects elements even if we don't show UI.
    debugRootEl.style.display = 'none';
    gizmoRootEl.style.display = 'none';

    void (async () => {
      const start = async (forceWebGL: boolean) => {
        let firstFrameSeen = false;
        diagnostics.renderer = forceWebGL ? 'webgl' : 'webgpu';
        const { dispose } = await createSingularityScene({
          canvas,
          debugRootEl,
          gizmoRootEl,
          diagnostics,
          onFirstFrame: () => {
            firstFrameSeen = true;
            if (fallbackTimer) {
              window.clearTimeout(fallbackTimer);
              fallbackTimer = null;
            }
          },
          forceWebGL,
          showDebugPanel: false,
          showGizmo: false,
          showWireCube: false,
          controlsEnabled: false,
        });

        // If WebGPU doesn't produce a frame quickly (device init issues), fall back to WebGL.
        if (!forceWebGL) {
          fallbackTimer = window.setTimeout(() => {
            if (disposed || firstFrameSeen) return;
            try {
              dispose();
            } catch {
              // ignore dispose errors; we're best-effort here
            }
            // Best effort: restart with WebGL fallback.
            void start(true)
              .then((dispose2) => {
                if (disposed) {
                  dispose2();
                  return;
                }
                disposeScene = dispose2;
              })
              .catch(() => {
                // ignore; background is optional
              });
          }, 2000);
        }

        return dispose;
      };

      try {
        const dispose = await start(initialForceWebGL);
        if (disposed) {
          dispose();
          return;
        }
        disposeScene = dispose;
      } catch {
        // If WebGPU init fails (common on some browsers/drivers), fall back to a deterministic WebGL shader
        // so the cube UI always has the black hole background.
        if (initialForceWebGL) return;
        try {
          const dispose = await start(true);
          if (disposed) {
            dispose();
            return;
          }
          disposeScene = dispose;
        } catch {
          // Background is optional; fail silently so the cube UI still works.
        }
      }
    })();

    return () => {
      disposed = true;
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
      disposeScene?.();
      disposeScene = null;
    };
  }, []);

  return (
    <div
      className="singularity-bg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        className="singularity-bg__canvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      <div ref={debugRootRef} />
      <div ref={gizmoRootRef} />
    </div>
  );
}
