import { useEffect, useMemo, useRef } from 'react';
import type { Locale } from '../content/stekolschikovContent';
import type { SingularityDiagnostics } from '../singularity/SingularityView';
import { createSingularityScene } from '../singularity/createSingularityScene';

export interface Scene3DProps {
  targetRotation: { x: number; y: number };
  locale: Locale;
  onReady?: () => void;
  isGameMode?: boolean;
  joystickInput?: { x: number; y: number };
}

function hasWebGPU(): boolean {
  return typeof navigator !== 'undefined' && typeof (navigator as unknown as { gpu?: unknown }).gpu !== 'undefined';
}

export function Scene3D(props: Scene3DProps) {
  const { targetRotation, onReady } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const debugRootRef = useRef<HTMLDivElement | null>(null);
  const gizmoRootRef = useRef<HTMLDivElement | null>(null);

  const rotationRef = useRef(targetRotation);
  useEffect(() => {
    rotationRef.current = targetRotation;
  }, [targetRotation]);

  const showDebug = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).has('debug');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const debugRootEl = debugRootRef.current;
    const gizmoRootEl = gizmoRootRef.current;
    if (!canvas || !debugRootEl || !gizmoRootEl) return;

    const forceWebGL = import.meta.env.VITE_FORCE_WEBGL === '1';
    const diagnostics: SingularityDiagnostics = {
      ready: false,
      renderer: forceWebGL ? 'webgl' : 'webgpu',
      frameCount: 0,
    };
    window.__SINGULARITY_DIAGNOSTICS__ = diagnostics;

    if (!forceWebGL && !hasWebGPU()) {
      diagnostics.lastError = 'webgpu-unsupported';
      diagnostics.ready = true;
      onReady?.();
      return;
    }

    let disposed = false;
    let disposeScene: (() => void) | null = null;

    void (async () => {
      try {
        const { dispose } = await createSingularityScene({
          canvas,
          debugRootEl,
          gizmoRootEl,
          diagnostics,
          onFirstFrame: () => onReady?.(),
          getTargetRotation: () => rotationRef.current,
          forceWebGL,
        });

        if (disposed) {
          dispose();
          return;
        }
        disposeScene = dispose;
      } catch (e) {
        diagnostics.lastError = e instanceof Error ? e.message : String(e);
        diagnostics.ready = true;
        // Don't block the UI loader forever on init failure.
        onReady?.();
        console.error('Failed to initialize Scene3D WebGPU renderer:', e);
      }
    })();

    return () => {
      disposed = true;
      disposeScene?.();
      disposeScene = null;
    };
  }, [onReady]);

  return (
    <>
      <div
        id="debug-panel"
        ref={debugRootRef}
        style={{ display: showDebug ? 'block' : 'none' }}
      />
      <div
        id="gizmo-root"
        ref={gizmoRootRef}
        style={{ display: showDebug ? 'block' : 'none' }}
      />
      <canvas className="webgl" ref={canvasRef} />
    </>
  );
}
