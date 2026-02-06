import { useEffect, useRef, useState } from 'react';
import type { DustConfig } from './DustSystem';
import type { BlackHoleConfig } from './defaultConfig';

type BlackHoleDiagnostics = {
  ready: boolean;
  renderer: 'webgpu';
  frameCount: number;
  lastError?: string;
};

declare global {
  interface Window {
    __BH_DIAGNOSTICS__?: BlackHoleDiagnostics;
  }
}

function hasWebGPU(): boolean {
  // WebGPU is exposed as navigator.gpu (secure contexts, supported browsers).
  return typeof navigator !== 'undefined' && typeof (navigator as unknown as { gpu?: unknown }).gpu !== 'undefined';
}

function extractDustConfig(config: BlackHoleConfig): DustConfig {
  return {
    enabled: config.dustEnabled,
    count: config.dustCount,
    innerRadius: config.dustInnerRadius,
    outerRadius: config.dustOuterRadius,
    thickness: config.dustThickness,
    spawnJitter: config.dustSpawnJitter,
    drag: config.dustDrag,
    planeStiffness: config.dustPlaneStiffness,
    minSpeed: config.dustMinSpeed,
    maxSpeed: config.dustMaxSpeed,
    gravityMultiplier: config.dustGravityMultiplier,
    respawnInner: config.dustRespawnInner,
    respawnOuter: config.dustRespawnOuter,
    sizeMin: config.dustSizeMin,
    sizeMax: config.dustSizeMax,
    density: config.dustDensity,
    brightFactor: config.dustBrightFactor,
    radialDamping: config.dustRadialDamping,
    swirl: config.dustSwirl,
    orbitBlend: config.dustOrbitBlend,
    lensStrength: config.dustLensStrength,
    redshiftScale: config.dustRedshiftScale,
    streakScale: config.dustStreakScale,
  };
}

function toDustConfigPartial(key: string, value: unknown): Partial<DustConfig> {
  switch (key) {
    case 'dustEnabled':
      return { enabled: Boolean(value) };
    case 'dustCount':
      return { count: Number(value) };
    case 'dustInnerRadius':
      return { innerRadius: Number(value) };
    case 'dustOuterRadius':
      return { outerRadius: Number(value) };
    case 'dustThickness':
      return { thickness: Number(value) };
    case 'dustSpawnJitter':
      return { spawnJitter: Number(value) };
    case 'dustDrag':
      return { drag: Number(value) };
    case 'dustPlaneStiffness':
      return { planeStiffness: Number(value) };
    case 'dustRadialDamping':
      return { radialDamping: Number(value) };
    case 'dustMinSpeed':
      return { minSpeed: Number(value) };
    case 'dustMaxSpeed':
      return { maxSpeed: Number(value) };
    case 'dustSwirl':
      return { swirl: Number(value) };
    case 'dustLensStrength':
      return { lensStrength: Number(value) };
    case 'dustRedshiftScale':
      return { redshiftScale: Number(value) };
    case 'dustStreakScale':
      return { streakScale: Number(value) };
    case 'dustGravityMultiplier':
      return { gravityMultiplier: Number(value) };
    case 'dustRespawnInner':
      return { respawnInner: Number(value) };
    case 'dustRespawnOuter':
      return { respawnOuter: Number(value) };
    case 'dustSizeMin':
      return { sizeMin: Number(value) };
    case 'dustSizeMax':
      return { sizeMax: Number(value) };
    case 'dustDensity':
      return { density: Number(value) };
    case 'dustBrightFactor':
      return { brightFactor: Number(value) };
    case 'dustOrbitBlend':
      return { orbitBlend: Number(value) };
    default:
      return {};
  }
}

export function WebGPUBlackHoleView() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [unsupported, setUnsupported] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

    const diagnostics: BlackHoleDiagnostics = {
      ready: false,
      renderer: 'webgpu',
      frameCount: 0,
    };
    window.__BH_DIAGNOSTICS__ = diagnostics;

    const isWebdriver = typeof navigator !== 'undefined' && (navigator as unknown as { webdriver?: boolean }).webdriver === true;
    const preferWebGLFallback = isWebdriver; // headless browsers often lack stable WebGPU output

    if (!hasWebGPU() && !preferWebGLFallback) {
      diagnostics.lastError = 'webgpu-unsupported';
      setUnsupported(true);
      return;
    }

    let disposed = false;
    let rafId = 0;
    let resizeObserver: ResizeObserver | null = null;

    // Resources that need explicit cleanup.
    let teardown: (() => void) | null = null;

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      resizeObserver?.disconnect();
      resizeObserver = null;
      teardown?.();
      teardown = null;
    };

    void (async () => {
      try {
        if (preferWebGLFallback) {
          const THREE_GL = await import('three');

          const scene = new THREE_GL.Scene();
          scene.background = new THREE_GL.Color(0x101018);
          const camera = new THREE_GL.PerspectiveCamera(60, 1, 0.1, 1000);
          camera.position.set(0, 0, 5);
          const renderer = new THREE_GL.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          root.appendChild(renderer.domElement);

          const resize = () => {
            const rect = root.getBoundingClientRect();
            const width = Math.max(1, Math.floor(rect.width));
            const height = Math.max(1, Math.floor(rect.height));
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
          };
          resizeObserver = new ResizeObserver(resize);
          resizeObserver.observe(root);
          resize();

          const geo = new THREE_GL.BoxGeometry(2, 2, 2);
          const mat = new THREE_GL.MeshBasicMaterial({ color: 0xff3366, wireframe: false });
          const mesh = new THREE_GL.Mesh(geo, mat);
          scene.add(mesh);

          const animateGL = () => {
            rafId = requestAnimationFrame(animateGL);
            mesh.rotation.y += 0.01;
            mesh.rotation.x += 0.007;
            renderer.render(scene, camera);
            diagnostics.frameCount += 1;
            if (!diagnostics.ready && diagnostics.frameCount > 2) diagnostics.ready = true;
          };
          animateGL();

          teardown = () => {
            resizeObserver?.disconnect();
            renderer.dispose();
            geo.dispose();
            mat.dispose();
            if (renderer.domElement.parentNode === root) root.removeChild(renderer.domElement);
          };

          return;
        }

        const [
          THREE,
          tslMod,
          bloomMod,
          controlsMod,
          configMod,
          simMod,
          dustMod,
          uiMod,
          camAnimMod,
        ] = await Promise.all([
          import('three/webgpu'),
          import('three/tsl'),
          import('three/addons/tsl/display/BloomNode.js'),
          import('three/addons/controls/OrbitControls.js'),
          import('./defaultConfig'),
          import('./BlackHoleSimulation'),
          import('./DustSystem'),
          import('./BlackHoleUI'),
          import('./CameraAnimation'),
        ]);

        if (disposed) return;

        const { defaultConfig, DEFAULT_CONFIG, loadConfig, saveConfig, clearConfig } = configMod;
        const { BlackHoleSimulation } = simMod;
        const { DustSystem } = dustMod;
        const { BlackHoleUI } = uiMod;
        const { CameraAnimation } = camAnimMod;
        const { OrbitControls } = controlsMod;

        // ------------------------------------------------------------------
        // CONFIG
        // ------------------------------------------------------------------

        const config = loadConfig({ ...defaultConfig });
        const params = new URLSearchParams(window.location.search);
        const diagnostic = params.get('diagnostic');
        if (diagnostic === 'dust-only') {
          // Test/diagnostic mode: only show dust against black.
          config.starsEnabled = false;
          config.nebulaEnabled = false;
          config.diskBrightness = 0;
          config.starBackgroundColor = '#000000';
          config.bloomStrength = 0;
          // Push the ring farther out so it cannot cover the frame center.
          config.dustInnerRadius = Math.max(config.dustInnerRadius, 7.0);
          config.dustOuterRadius = Math.max(config.dustOuterRadius, config.dustInnerRadius + 2.0);
        }

        // ------------------------------------------------------------------
        // SCENE SETUP
        // ------------------------------------------------------------------

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        camera.position.set(0, -5, 20);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGPURenderer({ antialias: true });
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2) * config.internalScale);

        // Ensure the root can host the canvas.
        root.style.position = 'fixed';
        root.style.inset = '0';
        root.style.background = '#000';
        root.style.overflow = 'hidden';

        root.appendChild(renderer.domElement);

        const resize = () => {
          const rect = root.getBoundingClientRect();
          const width = Math.max(1, Math.floor(rect.width));
          const height = Math.max(1, Math.floor(rect.height));

          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          renderer.setSize(width, height);
          blackHoleSimulation.onResize(width, height);
          dustSystem.onResize();
        };

        // ------------------------------------------------------------------
        // CONTROLS
        // ------------------------------------------------------------------

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = -0.5;
        controls.minDistance = 5;
        controls.maxDistance = 50;
        controls.target.set(0, 0, 0);

        // ------------------------------------------------------------------
        // CAMERA ANIMATION
        // ------------------------------------------------------------------

        const cameraAnimation = new CameraAnimation(camera, controls);

        // ------------------------------------------------------------------
        // POST-PROCESSING
        // ------------------------------------------------------------------

        type BloomPassNodeLike = {
          threshold: { value: number };
          strength: { value: number };
          radius: { value: number };
        };

        const { bloom } = bloomMod;
        const { pass } = tslMod as { pass: (scene: unknown, camera: unknown) => unknown };
        let bloomPassNode: BloomPassNodeLike | null = null;
        let postProcessing: THREE.PostProcessing | null = null;

        // ------------------------------------------------------------------
        // SIMULATION
        // ------------------------------------------------------------------

        const blackHoleSimulation = new BlackHoleSimulation(scene, config);
        blackHoleSimulation.createBlackHole();

        // ------------------------------------------------------------------
        // DUST SYSTEM
        // ------------------------------------------------------------------

        const horizon = config.blackHoleMass * 2.0;
        const dustSystem = new DustSystem(
          scene,
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 1, 0),
          extractDustConfig(config),
          horizon,
          config.diskOuterRadius,
          Math.sign(config.diskRotationSpeed || 1)
        );
        dustSystem.init();

        // ------------------------------------------------------------------
        // UI
        // ------------------------------------------------------------------

        const ui = new BlackHoleUI(config, {
          onUniformChange: (key, value) => {
            blackHoleSimulation.updateUniforms({ [key]: value });
            if (key.startsWith('dust')) {
              dustSystem.updateConfig(toDustConfigPartial(key, value));
            }
          },
          onBloomChange: (property, value) => {
            if (bloomPassNode) {
              bloomPassNode[property].value = value;
            }
          },
          onRegenerate: () => {
            blackHoleSimulation.updateUniforms(config);
            blackHoleSimulation.regenerate();
          },
          onSaveConfig: () => {
            saveConfig(config);
          },
          onClearConfig: () => {
            clearConfig();
            window.location.reload();
          },
          onResetToDefaults: () => {
            Object.assign(config, DEFAULT_CONFIG);
            blackHoleSimulation.updateUniforms(config);
            if (bloomPassNode) {
              bloomPassNode.threshold.value = config.bloomThreshold;
              bloomPassNode.strength.value = config.bloomStrength;
              bloomPassNode.radius.value = config.bloomRadius;
            }
            dustSystem.updateConfig(extractDustConfig(config));
          },
          onToggleCameraAnimation: () => {
            return cameraAnimation.toggle();
          },
          getCameraAnimationState: () => {
            return cameraAnimation.playing;
          },
        });

        // ------------------------------------------------------------------
        // FPS
        // ------------------------------------------------------------------

        let frameCount = 0;
        let lastFpsTime = performance.now();

        const updateFPS = () => {
          frameCount++;
          const currentTime = performance.now();
          const delta = currentTime - lastFpsTime;

          if (delta >= 1000) {
            const fps = Math.round((frameCount * 1000) / delta);
            frameCount = 0;
            lastFpsTime = currentTime;
            ui.updateFPS(fps);
          }
        };

        // ------------------------------------------------------------------
        // ANIMATION LOOP
        // ------------------------------------------------------------------

        let lastFrameTime = performance.now();
        const camDir = new THREE.Vector3();

        const animate = () => {
          rafId = requestAnimationFrame(animate);

          const currentTime = performance.now();
          const deltaTime = Math.min((currentTime - lastFrameTime) / 1000, 0.033);
          lastFrameTime = currentTime;

          cameraAnimation.update(deltaTime);
          controls.update();
          blackHoleSimulation.update(deltaTime, camera);

          camera.getWorldDirection(camDir);
          dustSystem.updatePhysical(
            config.blackHoleMass * 2.0,
            config.diskOuterRadius,
            Math.sign(config.diskRotationSpeed || 1),
            camDir
          );
          dustSystem.update(deltaTime);

          if (postProcessing) {
            postProcessing.render();
          } else {
            renderer.render(scene, camera);
          }

          diagnostics.frameCount += 1;
          if (!diagnostics.ready && diagnostics.frameCount > 2) {
            diagnostics.ready = true;
          }

          updateFPS();
        };

        // ------------------------------------------------------------------
        // RESIZE
        // ------------------------------------------------------------------

        resizeObserver = new ResizeObserver(() => resize());
        resizeObserver.observe(root);

        // ------------------------------------------------------------------
        // INIT
        // ------------------------------------------------------------------

        resize();

        await renderer.init();

        // POST-PROCESSING chain
        postProcessing = new THREE.PostProcessing(renderer);
        const scenePassNode = pass(scene, camera);
        const scenePassObj = scenePassNode as unknown as { getTextureNode?: () => unknown };
        const scenePassColor = scenePassObj.getTextureNode ? scenePassObj.getTextureNode() : scenePassNode;
        bloomPassNode = bloom(scenePassColor as unknown as THREE.Node);
        bloomPassNode.threshold.value = config.bloomThreshold;
        bloomPassNode.strength.value = config.bloomStrength;
        bloomPassNode.radius.value = config.bloomRadius;
        const scenePassColorWithAdd = scenePassColor as unknown as { add?: (n: unknown) => unknown };
        postProcessing.outputNode = (scenePassColorWithAdd.add ? scenePassColorWithAdd.add(bloomPassNode) : scenePassColor) as unknown as THREE.Node;

        animate();

        teardown = () => {
          ui.dispose();
          cameraAnimation.stop();
          controls.dispose();
          blackHoleSimulation.dispose();
          dustSystem.dispose();
          postProcessing?.dispose?.();
          renderer.dispose();

          const canvas = renderer.domElement;
          if (canvas.parentNode === root) {
            root.removeChild(canvas);
          }
        };
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        diagnostics.lastError = message;
        setInitError(message);
        console.error('Failed to initialize WebGPU renderer:', e);
      }
    })();

    return () => {
      disposed = true;
      stop();
    };
  }, []);

  if (unsupported) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
          padding: 24,
          textAlign: 'center',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
        data-testid="webgpu-unsupported"
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>WebGPU Not Supported</h1>
          <p style={{ marginTop: 10, opacity: 0.8 }}>
            This scene requires a browser with WebGPU support.
          </p>
          <p style={{ marginTop: 8, opacity: 0.8 }}>
            Try Chrome or Edge on desktop.
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
          background: '#000',
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
          padding: 24,
          textAlign: 'center',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
        data-testid="webgpu-init-error"
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>WebGPU Init Failed</h1>
          <pre style={{ marginTop: 14, maxWidth: 900, whiteSpace: 'pre-wrap', opacity: 0.8 }}>{initError}</pre>
        </div>
      </div>
    );
  }

  return <div ref={rootRef} />;
}
