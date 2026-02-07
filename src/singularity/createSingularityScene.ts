import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import type { SingularityDiagnostics } from './SingularityView';

export type SingularityCameraMode = 'auto' | 'joystick' | 'static';

function lerpAngle(current: number, target: number, t: number): number {
  // Interpolate angles taking the shortest path around the circle.
  // Three.js doesn't ship a `MathUtils.lerpAngle`, so we keep it local.
  const twoPi = Math.PI * 2;
  let delta = (target - current) % twoPi;
  if (delta > Math.PI) delta -= twoPi;
  if (delta < -Math.PI) delta += twoPi;
  return current + delta * t;
}

function publicUrl(relPath: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const b = base.endsWith('/') ? base : `${base}/`;
  const r = relPath.startsWith('/') ? relPath.slice(1) : relPath;
  return `${b}${r}`;
}

function makeFallbackNoiseDeepTexture(size = 256): THREE.DataTexture {
  // Cheap “deep noise” fallback: RGB channels contain slightly different random fields.
  // This keeps the shader functional even when the local asset isn't present.
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < size * size; i++) {
    const o = i * 4;
    const a = Math.random();
    const b = Math.random();
    const c = Math.random();
    data[o + 0] = Math.floor(255 * a);
    data[o + 1] = Math.floor(255 * (0.65 * a + 0.35 * b));
    data[o + 2] = Math.floor(255 * (0.45 * a + 0.55 * c));
    data[o + 3] = 255;
  }

  const tex = new THREE.DataTexture(data, size, size);
  tex.needsUpdate = true;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  // Noise is data, not color.
  tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

function makeFallbackStarsTexture(width = 1024, height = 512): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to create 2D context for fallback stars texture');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // Sparse stars
  for (let i = 0; i < 5500; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() < 0.96 ? Math.random() * 1.0 : 1.0 + Math.random() * 2.2;
    const a = Math.random() < 0.98 ? 0.2 + Math.random() * 0.6 : 0.75 + Math.random() * 0.25;
    ctx.globalAlpha = a;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Soft terminal nebula gradient layer
  const g = ctx.createRadialGradient(width * 0.35, height * 0.55, 0, width * 0.35, height * 0.55, width * 0.65);
  g.addColorStop(0, 'rgba(0, 255, 65, 0.10)');
  g.addColorStop(0.4, 'rgba(0, 100, 30, 0.05)');
  g.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createWebGLFallbackMaterial(): THREE.ShaderMaterial {
  // Deterministic WebGL fallback used for E2E and environments where WebGPU init is unreliable.
  // Goal: render a non-empty frame with a dark core + bright ring so automated pixel checks are stable.
  return new THREE.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;

      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }

      float smoothRing(float r, float r0, float w) {
        float d = abs(r - r0);
        return exp(-(d * d) / (w * w));
      }

      void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= 1.25;
        float r = length(uv);

        // Background stars (cheap)
        vec3 bg = vec3(0.01, 0.015, 0.02);
        vec2 sp = (uv * 0.75 + 0.5) * 900.0;
        float star = step(0.997, hash21(floor(sp)));
        float twinkle = 0.6 + 0.4 * sin(uTime * 1.8 + hash21(floor(sp)) * 6.2831);
        bg += star * twinkle * vec3(0.9, 0.95, 1.0);

        // Singularity ring
        float ring = smoothRing(r, 0.38, 0.055);
        // Swirl modulation
        float a = atan(uv.y, uv.x);
        float swirl = 0.6 + 0.4 * sin(8.0 * a + 14.0 * r - uTime * 1.05);
        float n = hash21(uv * 40.0 + uTime * 0.075);
        ring *= (0.55 + 0.65 * swirl) * (0.7 + 0.6 * n);

        vec3 hot = vec3(1.35, 0.82, 0.35);
        vec3 mid = vec3(0.95, 0.55, 0.22);
        vec3 col = mix(mid, hot, clamp(swirl, 0.0, 1.0)) * ring * 1.6;

        // Dark core (keep center darker than ring).
        float coreMask = smoothstep(0.16, 0.22, r);
        col *= coreMask;

        // Add faint nebula haze so the frame isn't flat when ring is dim.
        float haze = smoothstep(0.9, 0.0, r) * (0.35 + 0.65 * hash21(uv * 3.0 + 2.0));
        bg += haze * vec3(0.05, 0.08, 0.12);

        vec3 outCol = bg + col;
        // Simple tonemap-ish curve.
        outCol = 1.0 - exp(-outCol * 1.25);
        outCol = pow(outCol, vec3(1.0 / 2.2));

        gl_FragColor = vec4(outCol, 1.0);
      }
    `,
  });
}

export async function createSingularityScene(params: {
  canvas: HTMLCanvasElement;
  debugRootEl: HTMLElement;
  gizmoRootEl: HTMLElement;
  diagnostics: SingularityDiagnostics;
  onFirstFrame?: () => void;
  getTargetRotation?: () => { x: number; y: number } | null;
  getCameraMode?: () => SingularityCameraMode;
  getJoystickInput?: () => { x: number; y: number };
  forceWebGL?: boolean;
  showDebugPanel?: boolean;
  showGizmo?: boolean;
  showWireCube?: boolean;
  controlsEnabled?: boolean;
}): Promise<{ dispose: () => void }> {
  const {
    canvas,
    debugRootEl,
    gizmoRootEl,
    diagnostics,
    onFirstFrame,
    getTargetRotation,
    getCameraMode,
    getJoystickInput,
    forceWebGL,
    showDebugPanel = true,
    showGizmo = true,
    showWireCube = true,
    controlsEnabled = true,
  } = params;

  // WebGL fallback path: avoid `WebGPURenderer.init()` hangs in headless environments.
  // Important: keep this file safe to import in environments without WebGPU by not touching `three/webgpu`
  // unless we actually need it.
  if (forceWebGL) {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor('#010101', 1);

    const material = createWebGLFallbackMaterial();
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    gizmoRootEl.innerHTML = '';
    debugRootEl.innerHTML = '';

    const resize = () => {
      const w = Math.max(1, Math.floor(window.innerWidth));
      const h = Math.max(1, Math.floor(window.innerHeight));
      renderer.setSize(w, h, false);
    };
    window.addEventListener('resize', resize, { passive: true });
    resize();

    let firstFrameFired = false;
    const start = performance.now();

    renderer.setAnimationLoop(() => {
      const now = performance.now();
      material.uniforms.uTime.value = (now - start) / 1000;

      renderer.render(scene, camera);

      diagnostics.frameCount += 1;
      if (!diagnostics.ready && diagnostics.frameCount > 2) diagnostics.ready = true;

      if (!firstFrameFired && diagnostics.frameCount > 2) {
        firstFrameFired = true;
        onFirstFrame?.();
      }
    });

    return {
      dispose: () => {
        renderer.setAnimationLoop(null);
        window.removeEventListener('resize', resize);
        material.dispose();
        (quad.geometry as THREE.BufferGeometry).dispose();
        renderer.dispose();
      },
    };
  }

  // WebGPU path (lazy loaded so unit tests / non-WebGPU environments don't crash at import time).
  const THREEGPU = await import('three/webgpu');
  const { bloom } = await import('three/addons/tsl/display/BloomNode.js');
  const { add, emissive, equirectUV, mrt, output, pass, texture } = await import('three/tsl');
  const { createDefaultSingularityUniforms, createSingularityColorNode } = await import('./blackHoleNode');

  const scene = new THREEGPU.Scene();
  // Background is driven by a TSL backgroundNode to match the reference.
  (scene as unknown as { background: unknown }).background = null;

  const camera = new THREEGPU.PerspectiveCamera(50, 1, 0.1, 2000);
  camera.position.set(1, 0.5, 3);
  camera.lookAt(0, 0, 0);

  const renderer = new THREEGPU.WebGPURenderer({
    canvas,
    antialias: true,
    alpha: false,
    stencil: false,
    depth: true,
    // For parity with the reference:
    useLegacyLights: false,
    physicallyCorrectLights: true,
    forceWebGL: Boolean(forceWebGL),
  });

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREEGPU.PCFSoftShadowMap;
  renderer.outputColorSpace = THREEGPU.SRGBColorSpace;
  renderer.toneMapping = THREEGPU.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.setClearColor('#010101', 1);

  const uniforms = createDefaultSingularityUniforms();

  // ------------------------------------------------------------------
  // ASSETS (LOCAL-ONLY; gitignored)
  // ------------------------------------------------------------------

  // Use core loaders from `three` even in WebGPU mode. `three/webgpu` is not guaranteed
  // to re-export loaders, and missing loader constructors would cause the background
  // to silently fail (and only show the cube gradient).
  const texLoader = new THREE.TextureLoader();

  const noiseDeepUrl = publicUrl('.local/singularity/noise_deep.png');
  const nebulaUrl = publicUrl('assets/nebula_background.jpg');

  let noiseDeepTexture: THREE.Texture;
  let starsTexture: THREE.Texture;

  try {
    noiseDeepTexture = await texLoader.loadAsync(noiseDeepUrl);
    noiseDeepTexture.wrapS = THREE.RepeatWrapping;
    noiseDeepTexture.wrapT = THREE.RepeatWrapping;
    // Noise is data, not color.
    noiseDeepTexture.colorSpace = THREE.NoColorSpace;
    noiseDeepTexture.needsUpdate = true;
  } catch {
    noiseDeepTexture = makeFallbackNoiseDeepTexture();
  }

  try {
    starsTexture = await texLoader.loadAsync(nebulaUrl);
    starsTexture.mapping = THREE.EquirectangularReflectionMapping;
    starsTexture.colorSpace = THREE.SRGBColorSpace;
    starsTexture.needsUpdate = true;
  } catch {
    starsTexture = makeFallbackStarsTexture();
  }

  // Environment map used both as background and as a “through-transparency” env in the raymarch shader.
  (scene as unknown as { backgroundNode?: unknown }).backgroundNode = texture(starsTexture, equirectUV()).mul(
    uniforms.backgroundIntensity
  );

  const geometry = new THREEGPU.SphereGeometry(1, 16, 16);
  const material = new THREEGPU.MeshStandardNodeMaterial({ side: THREEGPU.DoubleSide });
  const colorNode = createSingularityColorNode(uniforms, { noiseDeepTexture, starsTexture });
  material.colorNode = colorNode;
  material.emissiveNode = colorNode;
  material.roughness = 1.0;
  material.metalness = 0.0;

  const mesh = new THREEGPU.Mesh(geometry, material);
  scene.add(mesh);

  // ------------------------------------------------------------------
  // STARFIELD (Optimization: Lightweight gl_Points)
  // ------------------------------------------------------------------
  const starsCount = 2000;
  const starsGeo = new THREEGPU.BufferGeometry();
  const starsPos = new Float32Array(starsCount * 3);

  for (let i = 0; i < starsCount; i++) {
    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 120;
    const z = (Math.random() - 0.5) * 120;
    // Push them away from center slightly
    if (x * x + y * y + z * z < 20) {
      starsPos[i * 3] = x * 3;
      starsPos[i * 3 + 1] = y * 3;
      starsPos[i * 3 + 2] = z * 3;
    } else {
      starsPos[i * 3] = x;
      starsPos[i * 3 + 1] = y;
      starsPos[i * 3 + 2] = z;
    }
  }
  starsGeo.setAttribute('position', new THREEGPU.Float32BufferAttribute(starsPos, 3));

  const starsMat = new THREEGPU.PointsMaterial({
    color: 0xffffff,
    size: 0.15,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
  });

  const starField = new THREEGPU.Points(starsGeo, starsMat);
  scene.add(starField);

  // Optional: subtle wireframe cube (useful when running the scene standalone).
  let cubeGroup: THREE.Object3D | null = null;
  let cubeGeometry: THREE.BufferGeometry | null = null;
  let cubeEdges: THREE.BufferGeometry | null = null;
  let cubeMaterial: THREE.Material | null = null;
  if (showWireCube) {
    cubeGroup = new THREEGPU.Group();
    const cubeSize = 2.65;
    cubeGeometry = new THREEGPU.BoxGeometry(cubeSize, cubeSize, cubeSize);
    cubeEdges = new THREEGPU.EdgesGeometry(cubeGeometry as unknown as THREEGPU.BufferGeometry, 18);
    cubeMaterial = new THREEGPU.LineBasicMaterial({
      color: new THREEGPU.Color(0.0, 1.0, 0.25),
      transparent: true,
      opacity: 0.8,
    });
    const cubeWire = new THREEGPU.LineSegments(cubeEdges as unknown as THREEGPU.BufferGeometry, cubeMaterial);
    (cubeGroup as THREEGPU.Group).add(cubeWire);
    scene.add(cubeGroup);
  }

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enabled = controlsEnabled;
  controls.minDistance = 0;
  controls.maxDistance = 1000;
  controls.target.set(0, 0, 0);

  // ------------------------------------------------------------------
  // CAMERA RIG (AUTO OR JOYSTICK-DRIVEN)
  // ------------------------------------------------------------------
  //
  // For the cube background we want a smooth "fly-through" around the singularity.
  // When game mode is enabled, we let a virtual joystick drive the orbit instead.
  const defaultCameraMode: SingularityCameraMode = controlsEnabled ? 'static' : 'auto';

  // Spherical rig around the origin (target).
  let rigTheta = Math.atan2(camera.position.x, camera.position.z);
  let rigRadius = camera.position.length();
  let rigPhi = Math.atan2(camera.position.y, Math.sqrt(camera.position.x * camera.position.x + camera.position.z * camera.position.z));

  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
  const applyRigToCamera = () => {
    const cp = Math.cos(rigPhi);
    const sp = Math.sin(rigPhi);
    const x = rigRadius * cp * Math.sin(rigTheta);
    const y = rigRadius * sp;
    const z = rigRadius * cp * Math.cos(rigTheta);
    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
    controls.target.set(0, 0, 0);
  };

  applyRigToCamera();

  // Gizmo helper (drawn in a dedicated root to avoid polluting document.body).
  gizmoRootEl.innerHTML = '';
  const gizmo = await (async () => {
    if (!showGizmo) return null;
    const { GizmoHelper } = await import('./GizmoHelper');
    const helper = new GizmoHelper(camera, { size: 100, padding: 8 });
    gizmoRootEl.appendChild(helper);
    return helper;
  })();

  // ------------------------------------------------------------------
  // INIT + POSTPROCESS
  // ------------------------------------------------------------------

  // Types here are intentionally loose to keep this file import-safe without WebGPU globals.
  let postProcessing: unknown | null = null;
  let bloomNode: any = null;
  let debugPanel: { update: () => void; dispose: () => void } | null = null;

  const resize = () => {
    const w = Math.max(1, Math.floor(window.innerWidth));
    const h = Math.max(1, Math.floor(window.innerHeight));

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    // WebGPU postprocessing needs a resize hint.
    if (postProcessing && typeof postProcessing === 'object' && 'needsUpdate' in (postProcessing as any)) {
      (postProcessing as any).needsUpdate = true;
    }
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();

  await renderer.init();

  // Build post chain once.
  postProcessing = new THREEGPU.PostProcessing(renderer);
  const scenePass = pass(scene, camera);
  scenePass.setMRT(mrt({ output, emissive }));
  const scenePassColor = scenePass.getTextureNode('output');
  bloomNode = bloom(scenePassColor);
  bloomNode.strength.value = 0.217;
  bloomNode.radius.value = 0.0;
  bloomNode.threshold.value = 0.0;
  (postProcessing as any).outputNode = add(scenePassColor, bloomNode);

  if (showDebugPanel) {
    const { createDebugPanel } = await import('./DebugPanel');
    debugPanel = createDebugPanel({
      debugRootEl,
      renderer,
      bloom: bloomNode,
      uniforms,
    });
  } else {
    debugRootEl.innerHTML = '';
  }

  // ------------------------------------------------------------------
  // LOOP
  // ------------------------------------------------------------------

  let firstFrameFired = false;
  let lastFrameTime = performance.now();

  renderer.setAnimationLoop(() => {
    const now = performance.now();
    const dt = clamp((now - lastFrameTime) / 1000, 1 / 240, 0.05);
    lastFrameTime = now;

    const mode = getCameraMode?.() ?? defaultCameraMode;
    if (mode === 'auto') {
      const t = now / 1000;
      const targetTheta = t * 0.11 + Math.sin(t * 0.23) * 0.22;
      const targetPhi = 0.22 + Math.sin(t * 0.17) * 0.06;
      const targetRadius = 3.1 + Math.sin(t * 0.11) * 0.55 + Math.sin(t * 0.041) * 0.18;

      const follow = 1 - Math.exp(-dt * 1.25);
      rigTheta = lerpAngle(rigTheta, targetTheta, follow);
      rigPhi = rigPhi + (targetPhi - rigPhi) * follow;
      rigRadius = rigRadius + (targetRadius - rigRadius) * follow;

      applyRigToCamera();
    } else if (mode === 'joystick') {
      const input = getJoystickInput?.() ?? { x: 0, y: 0 };
      const dead = 0.06;
      const ix = Math.abs(input.x) < dead ? 0 : input.x;
      const iy = Math.abs(input.y) < dead ? 0 : input.y;

      // x: orbit around; y: in/out (towards the singularity).
      rigTheta += ix * dt * 1.35;
      rigRadius = clamp(rigRadius + (-iy) * dt * 3.0, 1.65, 10.0);
      // Keep a pleasing, stable inclination (prevents motion sickness).
      rigPhi = clamp(rigPhi, 0.12, 0.46);

      applyRigToCamera();
    }

    // Slowly rotate starfield
    if (starField) {
      starField.rotation.y += dt * 0.02;
      starField.rotation.x += dt * 0.005;
    }

    if (controlsEnabled) controls.update();
    gizmo?.update?.();
    debugPanel?.update();

    const nextRotation = getTargetRotation?.();
    if (cubeGroup && nextRotation) {
      cubeGroup.rotation.x = THREEGPU.MathUtils.lerp(cubeGroup.rotation.x, nextRotation.x, 0.12);
      cubeGroup.rotation.y = lerpAngle(cubeGroup.rotation.y, nextRotation.y, 0.12);
    }

    if (postProcessing) {
      (postProcessing as any).render();
    } else {
      renderer.render(scene, camera);
    }

    diagnostics.frameCount += 1;
    if (!diagnostics.ready && diagnostics.frameCount > 2) diagnostics.ready = true;

    if (!firstFrameFired && diagnostics.frameCount > 2) {
      firstFrameFired = true;
      onFirstFrame?.();
    }
  });

  return {
    dispose: () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('resize', resize);

      debugPanel?.dispose();

      controls.dispose();
      geometry.dispose();
      material.dispose();

      (cubeEdges as any)?.dispose?.();
      (cubeGeometry as any)?.dispose?.();
      (cubeMaterial as any)?.dispose?.();

      (postProcessing as any)?.dispose?.();
      renderer.dispose();

      if (gizmo && (gizmo as any).parentNode === gizmoRootEl) gizmoRootEl.removeChild(gizmo as any);
    },
  };
}
