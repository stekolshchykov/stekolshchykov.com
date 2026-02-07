import * as THREE from 'three/webgpu';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import type BloomNode from 'three/addons/tsl/display/BloomNode.js';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { add, emissive, equirectUV, mrt, output, pass, texture } from 'three/tsl';

import type { SingularityDiagnostics } from './SingularityView';
import { createDebugPanel } from './DebugPanel';
import { GizmoHelper } from './GizmoHelper';
import { createDefaultSingularityUniforms, createSingularityColorNode } from './blackHoleNode';

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

  // Soft nebula gradient layer
  const g = ctx.createRadialGradient(width * 0.35, height * 0.55, 0, width * 0.35, height * 0.55, width * 0.65);
  g.addColorStop(0, 'rgba(90, 110, 255, 0.18)');
  g.addColorStop(0.4, 'rgba(140, 70, 220, 0.10)');
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
        float swirl = 0.6 + 0.4 * sin(8.0 * a + 14.0 * r - uTime * 0.7);
        float n = hash21(uv * 40.0 + uTime * 0.05);
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
  // Optional display flags (for SingularityBackground to pass)
  showDebugPanel?: boolean;
  showGizmo?: boolean;
  showWireCube?: boolean;
  controlsEnabled?: boolean;
}): Promise<{ dispose: () => void }> {
  const {
    canvas, debugRootEl, gizmoRootEl, diagnostics, onFirstFrame,
    getTargetRotation, getCameraMode, getJoystickInput, forceWebGL,
    showDebugPanel = true, showGizmo = true, showWireCube = false, controlsEnabled = false,
  } = params;

  const scene = new THREE.Scene();
  // Background is driven by a TSL backgroundNode to match the reference.
  scene.background = null;

  // WebGL fallback path: avoid `WebGPURenderer.init()` hangs in headless environments.
  if (forceWebGL) {
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new WebGLRenderer({
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

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
  camera.position.set(1, 0.5, 3);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGPURenderer({
    canvas,
    antialias: true,
    alpha: false,
    stencil: false,
    depth: true,
    forceWebGL: Boolean(forceWebGL),
  });

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.setClearColor('#010101', 1);

  const uniforms = createDefaultSingularityUniforms();

  // ------------------------------------------------------------------
  // ASSETS (LOCAL-ONLY; gitignored)
  // ------------------------------------------------------------------

  const texLoader = new THREE.TextureLoader();

  const noiseDeepUrl = publicUrl('.local/singularity/noise_deep.png');
  const nebulaUrl = publicUrl('.local/singularity/nebula.png');

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
  scene.backgroundNode = texture(starsTexture, equirectUV()).mul(uniforms.backgroundIntensity);

  const geometry = new THREE.SphereGeometry(1, 16, 16);
  const material = new THREE.MeshStandardNodeMaterial({ side: THREE.DoubleSide });
  const colorNode = createSingularityColorNode(uniforms, { noiseDeepTexture, starsTexture });
  material.colorNode = colorNode;
  material.emissiveNode = colorNode;
  material.roughness = 1.0;
  material.metalness = 0.0;

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Wireframe cube disabled - not needed for portfolio UI
  const cubeGroup = new THREE.Group();
  const cubeSize = 2.65;
  const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  const cubeEdges = new THREE.EdgesGeometry(cubeGeometry, 18);
  const cubeMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color(0.55, 0.74, 1.0),
    transparent: true,
    opacity: 0,
  });
  const cubeWire = new THREE.LineSegments(cubeEdges, cubeMaterial);
  cubeWire.visible = showWireCube;
  cubeGroup.add(cubeWire);
  scene.add(cubeGroup);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enabled = controlsEnabled;
  controls.minDistance = 0;
  controls.maxDistance = 1000;
  controls.target.set(0, 0, 0);

  // Spherical rig for smooth orbital camera animation
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
  let gizmo: GizmoHelper | null = null;
  if (showGizmo) {
    gizmo = new GizmoHelper(camera, { size: 100, padding: 8 });
    gizmoRootEl.appendChild(gizmo);
  }

  // ------------------------------------------------------------------
  // INIT + POSTPROCESS
  // ------------------------------------------------------------------

  let postProcessing: THREE.PostProcessing | null = null;
  let bloomNode: BloomNode | null = null;
  let debugPanel: ReturnType<typeof createDebugPanel> | null = null;

  const resize = () => {
    const w = Math.max(1, Math.floor(window.innerWidth));
    const h = Math.max(1, Math.floor(window.innerHeight));

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    // WebGPU postprocessing needs a resize hint.
    if (postProcessing && 'needsUpdate' in postProcessing) {
      (postProcessing as unknown as { needsUpdate: boolean }).needsUpdate = true;
    }
  };

  window.addEventListener('resize', resize, { passive: true });

  // Size the renderer/camera before init so targets match.
  resize();

  await renderer.init();

  // Build post chain once.
  postProcessing = new THREE.PostProcessing(renderer);
  const scenePass = pass(scene, camera);
  scenePass.setMRT(mrt({ output, emissive }));
  const scenePassColor = scenePass.getTextureNode('output');
  bloomNode = bloom(scenePassColor);
  bloomNode.strength.value = 0.217;
  bloomNode.radius.value = 0.0;
  bloomNode.threshold.value = 0.0;
  postProcessing.outputNode = add(scenePassColor, bloomNode);

  if (showDebugPanel) {
    debugPanel = createDebugPanel({
      debugRootEl,
      renderer,
      bloom: bloomNode,
      uniforms,
    });
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

    const cameraMode = getCameraMode?.() ?? 'auto';
    const joystick = getJoystickInput?.() ?? { x: 0, y: 0 };

    // Cinematic slow orbit around the black hole with gravitational pull effect
    const t = now / 1000;

    // Radius limits for all modes
    const minRadius = 2.2;
    const maxRadius = 4.5;

    if (cameraMode === 'joystick') {
      // Joystick mode: user controls theta and radius
      const joystickSensitivity = 2.0;
      const radiusSensitivity = 3.0;

      // X axis rotates around the black hole
      rigTheta += joystick.x * joystickSensitivity * dt;

      // Y axis moves closer/farther from black hole
      rigRadius -= joystick.y * radiusSensitivity * dt;
      rigRadius = clamp(rigRadius, minRadius, maxRadius);

      // Slight phi wobble for immersion
      const targetPhi = 0.18 + Math.sin(t * 0.08) * 0.05;
      rigPhi = rigPhi + (targetPhi - rigPhi) * 0.02;

      applyRigToCamera();
    } else if (cameraMode === 'static') {
      // Static mode: camera doesn't move
      applyRigToCamera();
    } else {
      // Auto mode: cinematic orbit
      // Slow spiral orbit - gets faster as it gets closer (gravitational acceleration)
      const pullCycle = 90; // seconds for one pull-release cycle

      // Gravitational pull - slowly approaches then retreats
      const pullPhase = (t % pullCycle) / pullCycle;
      const pullStrength = Math.sin(pullPhase * Math.PI * 2) * 0.5 + 0.5; // 0 to 1
      const targetRadius = maxRadius - pullStrength * (maxRadius - minRadius);

      // Angular velocity increases as radius decreases (Kepler's law feel)
      const angularSpeed = 0.03 + (1 - (targetRadius - minRadius) / (maxRadius - minRadius)) * 0.08;
      const targetTheta = t * angularSpeed + Math.sin(t * 0.05) * 0.15;

      // Slight vertical wobble for cinematic feel
      const targetPhi = 0.18 + Math.sin(t * 0.08) * 0.08;

      // Very smooth following for cinematic movement
      const follow = 1 - Math.exp(-dt * 0.8);
      rigTheta = lerpAngle(rigTheta, targetTheta, follow);
      rigPhi = rigPhi + (targetPhi - rigPhi) * follow;
      rigRadius = rigRadius + (targetRadius - rigRadius) * follow * 0.5;

      applyRigToCamera();
    }

    // Update controls/gizmo.
    controls.update();
    gizmo?.update();
    debugPanel?.update();

    const nextRotation = getTargetRotation?.();
    if (nextRotation) {
      cubeGroup.rotation.x = THREE.MathUtils.lerp(cubeGroup.rotation.x, nextRotation.x, 0.12);
      cubeGroup.rotation.y = lerpAngle(cubeGroup.rotation.y, nextRotation.y, 0.12);
    }

    // Render.
    if (postProcessing) {
      postProcessing.render();
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
      cubeEdges.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();

      postProcessing?.dispose?.();
      renderer.dispose();

      if (gizmo && gizmo.parentNode === gizmoRootEl) gizmoRootEl.removeChild(gizmo);
    },
  };
}
