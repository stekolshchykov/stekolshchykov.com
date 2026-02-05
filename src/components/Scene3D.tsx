import { lazy, Suspense, useEffect, useRef, type ComponentType } from 'react';
import { AdditiveBlending, AmbientLight, BackSide, BoxGeometry, BufferGeometry, Color, ConeGeometry, EdgesGeometry, Float32BufferAttribute, Group, LineBasicMaterial, LineSegments, Material, Mesh, MeshStandardMaterial, PerspectiveCamera, PointLight, Points, PointsMaterial, Scene, ShaderMaterial, SphereGeometry, SRGBColorSpace, Texture, TextureLoader, WebGLRenderer, WireframeGeometry } from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createRoot } from 'react-dom/client';
import type { Locale } from '../content/stekolschikovContent';
import { logEvent, logEventThrottled, logRuntime } from '../observability/logger';
import { getWhaleCount, WHALE_DISC_TEXTURE_PATH, WHALE_GLB_PATH } from '../scene/whaleConfig';
import { BLACK_HOLE_FRAGMENT_SHADER, BLACK_HOLE_VERTEX_SHADER, createBlackHoleUniforms } from '../scene/blackHoleShader';

const AboutFace = lazy(() => import('./faces/AboutFace').then((m) => ({ default: m.AboutFace })));
const SkillsFace = lazy(() => import('./faces/SkillsFace').then((m) => ({ default: m.SkillsFace })));
const ProjectsFace = lazy(() => import('./faces/ProjectsFace').then((m) => ({ default: m.ProjectsFace })));
const ExperienceFace = lazy(() => import('./faces/ExperienceFace').then((m) => ({ default: m.ExperienceFace })));
const ContactFace = lazy(() => import('./faces/ContactFace').then((m) => ({ default: m.ContactFace })));
const EducationFace = lazy(() => import('./faces/EducationFace').then((m) => ({ default: m.EducationFace })));

interface Scene3DProps {
  targetRotation: { x: number; y: number };
  locale: Locale;
}

type CubeFaceComponent = ComponentType<{ locale: Locale }>;

export function Scene3D({ targetRotation, locale }: Scene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef(targetRotation);
  const startAnimationRef = useRef<(() => void) | null>(null);
  const rotationBurstRef = useRef({ active: false, startMs: 0, seed: 0 });
  const hasInitializedTargetRef = useRef(false);

  useEffect(() => {
    targetRotationRef.current = targetRotation;
    if (hasInitializedTargetRef.current) {
      rotationBurstRef.current = {
        active: true,
        startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
        seed: rotationBurstRef.current.seed + 1,
      };
    } else {
      hasInitializedTargetRef.current = true;
    }
    logRuntime('debug', 'scene3d', 'Target rotation updated', targetRotation);
    startAnimationRef.current?.();
  }, [targetRotation]);

  useEffect(() => {
    if (!containerRef.current || !webglContainerRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPhone = viewportWidth < 700;
    const isCompactViewport = viewportWidth < 900;
    const isTablet = viewportWidth < 1100;
    const isLowCoreCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
    const lowPowerMode = prefersReducedMotion || isCompactViewport || isLowCoreCpu;
    const maxPixelRatio = lowPowerMode ? 1 : 1.5;
    const targetFPS = lowPowerMode ? 24 : 60;
    const floatAmplitude = lowPowerMode ? 8 : 20;
    const lightCount = lowPowerMode ? 3 : 6;
    const faceSize = isPhone ? 420 : isTablet ? 620 : 860;
    const facePadding = isPhone ? 14 : isTablet ? 20 : 28;
    const faceAlpha = lowPowerMode ? 0.92 : 0.78;
    const faceDepth = Math.round(faceSize * 0.58);
    const cubeSize = faceDepth * 2;
    const minZoom = Math.max(720, cubeSize * 0.95);
    const maxZoom = Math.max(2200, cubeSize * 2.5);
    logEvent('scene.performance.mode', {
      viewportWidth,
      viewportHeight,
      lowPowerMode,
      targetFPS,
      isTablet,
      isPhone,
      faceSize,
      cubeSize,
    });

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, viewportWidth / viewportHeight, 1, 5000);
    camera.position.z = isPhone ? 1250 : isTablet ? 1400 : 1500;

    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(cssRenderer.domElement);

    const webglScene = new Scene();
    const webglRenderer = new WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    webglContainerRef.current.appendChild(webglRenderer.domElement);

    const blackHoleUniforms = createBlackHoleUniforms(lowPowerMode, viewportWidth, viewportHeight);
    const blackHoleGeometry = new SphereGeometry(4200, lowPowerMode ? 22 : 32, lowPowerMode ? 14 : 24);
    const blackHoleMaterial = new ShaderMaterial({
      uniforms: blackHoleUniforms,
      vertexShader: BLACK_HOLE_VERTEX_SHADER,
      fragmentShader: BLACK_HOLE_FRAGMENT_SHADER,
      side: BackSide,
      depthWrite: false,
      depthTest: false,
    });
    const blackHoleSky = new Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHoleSky.frustumCulled = false;
    blackHoleSky.renderOrder = -1000;
    webglScene.add(blackHoleSky);
    logEvent('scene.blackhole.shader.ready', { mode: 'webgl-raymarch', lowPowerMode });

    // Particle whale flock in the background.
    type WhaleActor = {
      group: Group;
      orbitX: number;
      baseY: number;
      baseZ: number;
      phase: number;
      speed: number;
      bobSpeed: number;
      bobAmp: number;
      zAmp: number;
      yawAmp: number;
      rollAmp: number;
      direction: 1 | -1;
      yawBase: number;
      yawCurrent: number;
      pitchCurrent: number;
      rollCurrent: number;
      headingOffset: number;
      foregroundRunner: boolean;
      waveSpeed: number;
      points?: Points;
      line?: LineSegments;
      basePositions?: Float32Array;
    };
    const whaleActors: WhaleActor[] = [];
    const whaleGeometries: BufferGeometry[] = [];
    const whaleMaterials: Material[] = [];
    const whaleTextures: Texture[] = [];
    let sceneDisposed = false;
    const whaleCount = getWhaleCount(lowPowerMode, isTablet);
    logEvent('scene.whale.load.start', { whaleCount, source: WHALE_GLB_PATH });

    const whaleSprite = new TextureLoader().load(
      WHALE_DISC_TEXTURE_PATH,
      () => logRuntime('info', 'scene3d', 'Whale sprite loaded', { source: WHALE_DISC_TEXTURE_PATH }),
      undefined,
      (error) => logRuntime('warn', 'scene3d', 'Whale sprite load failed, fallback to no map', { error: String(error) })
    );
    whaleSprite.colorSpace = SRGBColorSpace;
    whaleTextures.push(whaleSprite);

    const getWhaleColor = (index: number) => {
      const seed = (index + 1) * 19.37;
      const hue = (Math.sin(seed) * 0.5 + 0.5 + Math.random() * 0.35) % 1;
      const saturation = 0.56 + Math.random() * 0.33;
      const lightness = 0.5 + Math.random() * 0.2;
      return new Color().setHSL(hue, saturation, lightness);
    };

    const createFallbackWhales = () => {
      for (let i = 0; i < whaleCount; i++) {
        const whaleColor = getWhaleColor(i);
        const whaleGroup = new Group();
        const material = new MeshStandardMaterial({
          color: whaleColor,
          emissive: whaleColor.clone().multiplyScalar(0.22),
          emissiveIntensity: 0.65,
          transparent: true,
          opacity: 0.5,
          roughness: 0.9,
          metalness: 0.02,
        });
        whaleMaterials.push(material);

        const bodyGeometry = new SphereGeometry(80, 16, 12);
        whaleGeometries.push(bodyGeometry);
        const body = new Mesh(bodyGeometry, material);
        body.scale.set(2, 0.75, 0.65);
        whaleGroup.add(body);

        const tailGeometry = new ConeGeometry(20, 68, 12);
        whaleGeometries.push(tailGeometry);
        const tail = new Mesh(tailGeometry, material);
        tail.position.set(-145, 0, 0);
        tail.rotation.z = Math.PI / 2;
        whaleGroup.add(tail);

        webglScene.add(whaleGroup);
        whaleActors.push({
          group: whaleGroup,
          orbitX: cubeSize * (0.2 + i * 0.05),
          baseY: cubeSize * (0.06 - i * 0.05),
          baseZ: cubeSize * (0.28 + i * 0.04),
          phase: (Math.PI * 2 * i) / whaleCount,
          speed: (lowPowerMode ? 0.045 : 0.06) + i * 0.01,
          bobSpeed: 0.6 + i * 0.1,
          bobAmp: 7 + i * 3,
          zAmp: 16 + i * 4,
          yawAmp: 0.09,
          rollAmp: 0.02,
          direction: i % 2 === 0 ? 1 : -1,
          yawBase: i % 2 === 0 ? -Math.PI / 2 : Math.PI / 2,
          yawCurrent: i % 2 === 0 ? -Math.PI / 2 : Math.PI / 2,
          pitchCurrent: 0,
          rollCurrent: 0,
          headingOffset: 0,
          foregroundRunner: i === 0,
          waveSpeed: 0.5 + i * 0.12,
        });
      }

      logEvent('scene.whale.fallback.enabled', { actors: whaleActors.length, reason: 'local_glb_load_failed' }, 'warn');
    };

    const whaleLoader = new GLTFLoader();
    whaleLoader.load(
      WHALE_GLB_PATH,
      (gltf) => {
        if (sceneDisposed) return;

        let sourceGeometry: BufferGeometry | null = null;
        gltf.scene.traverse((child) => {
          const meshCandidate = child as Mesh;
          if (!sourceGeometry && meshCandidate.isMesh && meshCandidate.geometry) {
            sourceGeometry = meshCandidate.geometry as BufferGeometry;
          }
        });

        if (!sourceGeometry) {
          logEvent('scene.whale.load.error', { reason: 'no_geometry_in_glb' }, 'warn');
          createFallbackWhales();
          return;
        }

        for (let i = 0; i < whaleCount; i++) {
          const whaleColor = getWhaleColor(i);
          const geometry = sourceGeometry.clone();
          whaleGeometries.push(geometry);

          const pointsMaterial = new PointsMaterial({
            size: lowPowerMode ? 2.15 : 2.7,
            alphaTest: 0.45,
            transparent: true,
            blending: AdditiveBlending,
            map: whaleSprite,
            vertexColors: true,
            depthWrite: false,
            opacity: lowPowerMode ? 0.82 : 0.72,
          });
          whaleMaterials.push(pointsMaterial);

          const positionAttr = geometry.getAttribute('position');
          const colors = new Float32Array(positionAttr.count * 3);
          for (let c = 0; c < colors.length; c += 3) {
            colors[c] = whaleColor.r;
            colors[c + 1] = whaleColor.g;
            colors[c + 2] = whaleColor.b;
          }
          geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

          const points = new Points(geometry, pointsMaterial);

          const wireframeGeometry = new WireframeGeometry(geometry);
          whaleGeometries.push(wireframeGeometry);
          const wireColor = whaleColor.clone().offsetHSL(0, -0.12, 0.08);
          const lineMaterial = new LineBasicMaterial({
            color: wireColor,
            transparent: true,
            opacity: lowPowerMode ? 0.035 : 0.06,
            depthTest: false,
          });
          whaleMaterials.push(lineMaterial);
          const line = new LineSegments(wireframeGeometry, lineMaterial);

          const whaleGroup = new Group();
          whaleGroup.add(line);
          whaleGroup.add(points);
          const scale = lowPowerMode ? 1.55 + i * 0.2 : 2.05 + i * 0.24;
          whaleGroup.scale.setScalar(scale);
          webglScene.add(whaleGroup);

          whaleActors.push({
            group: whaleGroup,
            points,
            line,
            basePositions: Float32Array.from((positionAttr.array as Float32Array).slice()),
            orbitX: cubeSize * (lowPowerMode ? 0.24 + i * 0.05 : 0.3 + i * 0.06),
            baseY: cubeSize * (0.06 - i * 0.05),
            baseZ: cubeSize * (lowPowerMode ? 0.27 + i * 0.04 : 0.34 + i * 0.05),
            phase: (Math.PI * 2 * i) / whaleCount,
            speed: (lowPowerMode ? 0.055 : 0.075) + i * 0.012,
            bobSpeed: 0.68 + i * 0.1,
            bobAmp: (lowPowerMode ? 8 : 10) + i * 3,
            zAmp: (lowPowerMode ? 18 : 22) + i * 4,
            yawAmp: 0.095 + i * 0.01,
            rollAmp: 0.02 + i * 0.008,
            direction: i % 2 === 0 ? 1 : -1,
            yawBase: i % 2 === 0 ? -Math.PI / 2 : Math.PI / 2,
            yawCurrent: i % 2 === 0 ? -Math.PI / 2 : Math.PI / 2,
            pitchCurrent: 0,
            rollCurrent: 0,
            headingOffset: 0,
            foregroundRunner: i === 0,
            waveSpeed: 0.65 + i * 0.16,
          });
        }
        logEvent('scene.whale.load.success', { actors: whaleActors.length, source: WHALE_GLB_PATH });
      },
      undefined,
      (error) => {
        logEvent('scene.whale.load.error', { reason: String(error), source: WHALE_GLB_PATH }, 'error');
        createFallbackWhales();
      }
    );

    const cubeGeometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const edges = new EdgesGeometry(cubeGeometry);
    const lineMaterial = new LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new LineSegments(edges, lineMaterial);
    webglScene.add(wireframe);

    const ambientLight = new AmbientLight(0x404040, 0.5);
    webglScene.add(ambientLight);

    const lights: PointLight[] = [];
    const lightColors = [0x8b5cf6, 0x3b82f6, 0x10b981, 0xef4444, 0xf97316, 0x06b6d4];
    for (let i = 0; i < lightCount; i++) {
      const light = new PointLight(lightColors[i], lowPowerMode ? 0.2 : 0.3, 600);
      webglScene.add(light);
      lights.push(light);
    }

    const cubeGroup = new Group();
    const faceActors: Array<{
      object: CSS3DObject;
      basePosition: [number, number, number];
      baseRotation: [number, number, number];
      normal: [number, number, number];
      phase: number;
    }> = [];

    const faces: Array<{
      component: CubeFaceComponent;
      color: string;
      position: [number, number, number];
      rotation: [number, number, number];
    }> = [
      { component: AboutFace as CubeFaceComponent, color: '#8b5cf6', position: [0, 0, faceDepth], rotation: [0, 0, 0] },
      { component: SkillsFace as CubeFaceComponent, color: '#3b82f6', position: [0, 0, -faceDepth], rotation: [0, Math.PI, 0] },
      { component: ProjectsFace as CubeFaceComponent, color: '#10b981', position: [faceDepth, 0, 0], rotation: [0, Math.PI / 2, 0] },
      { component: ExperienceFace as CubeFaceComponent, color: '#ef4444', position: [-faceDepth, 0, 0], rotation: [0, -Math.PI / 2, 0] },
      { component: ContactFace as CubeFaceComponent, color: '#f97316', position: [0, faceDepth, 0], rotation: [-Math.PI / 2, 0, 0] },
      { component: EducationFace as CubeFaceComponent, color: '#06b6d4', position: [0, -faceDepth, 0], rotation: [Math.PI / 2, 0, 0] },
    ];

    const roots: ReturnType<typeof createRoot>[] = [];
    faces.forEach((face, index) => {
      const element = document.createElement('div');
      element.className = 'cube-face-shell';
      element.style.width = `${faceSize}px`;
      element.style.height = `${faceSize}px`;
      element.style.padding = `${facePadding}px`;
      element.style.background = `linear-gradient(135deg, rgba(8, 15, 26, ${faceAlpha}) 0%, rgba(13, 22, 35, ${Math.max(0.55, faceAlpha - 0.1)}) 100%)`;
      element.style.border = `3px solid ${face.color}`;
      element.style.borderRadius = isPhone ? '16px' : '24px';
      element.style.boxShadow = `0 0 42px ${face.color}30, inset 0 0 30px ${face.color}08`;
      element.style.overflow = 'auto';
      element.style.contain = 'layout style paint';
      element.style.willChange = 'transform';
      if (!lowPowerMode) {
        element.style.backdropFilter = 'blur(2px)';
      }

      const FaceComponent = face.component;
      const root = createRoot(element);
      root.render(
        <Suspense fallback={<div style={{ color: '#cbd5e1', padding: '1rem' }}>Loading...</div>}>
          <FaceComponent locale={locale} />
        </Suspense>
      );
      roots.push(root);

      const object = new CSS3DObject(element);
      object.position.set(face.position[0], face.position[1], face.position[2]);
      object.rotation.set(face.rotation[0], face.rotation[1], face.rotation[2]);

      cubeGroup.add(object);
      const length = Math.hypot(face.position[0], face.position[1], face.position[2]) || 1;
      faceActors.push({
        object,
        basePosition: [face.position[0], face.position[1], face.position[2]],
        baseRotation: [face.rotation[0], face.rotation[1], face.rotation[2]],
        normal: [face.position[0] / length, face.position[1] / length, face.position[2] / length],
        phase: index * 1.37,
      });
      const light = lights[index % lights.length];
      if (light) {
        light.position.set(face.position[0], face.position[1], face.position[2]);
      }
    });

    scene.add(cubeGroup);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      logRuntime('debug', 'scene3d-controls', 'Drag started', { x: e.clientX, y: e.clientY });
      previousMousePosition = { x: e.clientX, y: e.clientY };
      velocityRef.current = { x: 0, y: 0 };
      startAnimationRef.current?.();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        velocityRef.current.y = deltaX * 0.005;
        velocityRef.current.x = deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
        startAnimationRef.current?.();
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      logRuntime('debug', 'scene3d-controls', 'Drag ended');
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z += e.deltaY * 0.5;
      camera.position.z = Math.max(minZoom, Math.min(maxZoom, camera.position.z));
      logRuntime('debug', 'scene3d-controls', 'Zoom changed', {
        deltaY: e.deltaY,
        cameraZ: camera.position.z,
      });
      startAnimationRef.current?.();
    };

    const interactionTarget = containerRef.current;
    interactionTarget.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    interactionTarget.addEventListener('wheel', onWheel, { passive: false });

    let animationId = 0;
    let lastTime = 0;
    let hasRenderedOnce = false;
    const frameDelay = 1000 / targetFPS;

    const hasMotion = () => {
      const dx = targetRotationRef.current.x - currentRotationRef.current.x;
      const dy = targetRotationRef.current.y - currentRotationRef.current.y;
      return (
        isDragging ||
        Math.abs(velocityRef.current.x) > 0.0002 ||
        Math.abs(velocityRef.current.y) > 0.0002 ||
        Math.abs(dx) > 0.0005 ||
        Math.abs(dy) > 0.0005
      );
    };

    const animate = (currentTime: number) => {
      animationId = 0;

      if (lowPowerMode && hasRenderedOnce && !hasMotion()) {
        return;
      }
      animationId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameDelay) return;
      lastTime = currentTime - (deltaTime % frameDelay);

      blackHoleSky.position.copy(camera.position);
      blackHoleMaterial.uniforms.uTime.value = currentTime * 0.001;

      if (!isDragging) {
        currentRotationRef.current.x += velocityRef.current.x;
        currentRotationRef.current.y += velocityRef.current.y;

        const dx = targetRotationRef.current.x - currentRotationRef.current.x;
        const dy = targetRotationRef.current.y - currentRotationRef.current.y;

        const rotationLerp = lowPowerMode ? 0.075 : 0.06;
        currentRotationRef.current.x += dx * rotationLerp;
        currentRotationRef.current.y += dy * rotationLerp;

        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      currentRotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, currentRotationRef.current.x));

      cubeGroup.rotation.x = currentRotationRef.current.x;
      cubeGroup.rotation.y = currentRotationRef.current.y;
      wireframe.rotation.x = currentRotationRef.current.x;
      wireframe.rotation.y = currentRotationRef.current.y;

      const floatY = Math.sin(currentTime * 0.0005) * floatAmplitude;
      cubeGroup.position.y = floatY;
      wireframe.position.y = floatY;

      let burst = 0;
      if (!prefersReducedMotion && rotationBurstRef.current.active) {
        const progress = (currentTime - rotationBurstRef.current.startMs) / (lowPowerMode ? 640 : 860);
        if (progress >= 1) {
          rotationBurstRef.current.active = false;
        } else {
          const envelope = Math.sin(Math.PI * progress);
          burst = Math.pow(Math.max(envelope, 0), 1.45);
        }
      }
      const explodeDistance = cubeSize * (lowPowerMode ? 0.12 : 0.22) * burst;
      const wobbleAmount = (lowPowerMode ? 0.022 : 0.036) * burst;
      faceActors.forEach((face) => {
        const wave = Math.sin(currentTime * 0.009 + face.phase + rotationBurstRef.current.seed) * cubeSize * 0.007 * burst;
        face.object.position.set(
          face.basePosition[0] + face.normal[0] * (explodeDistance + wave),
          face.basePosition[1] + face.normal[1] * (explodeDistance + wave),
          face.basePosition[2] + face.normal[2] * (explodeDistance + wave)
        );
        face.object.rotation.set(
          face.baseRotation[0] + Math.sin(currentTime * 0.011 + face.phase) * wobbleAmount,
          face.baseRotation[1] + Math.cos(currentTime * 0.01 + face.phase) * wobbleAmount,
          face.baseRotation[2] + Math.sin(currentTime * 0.012 + face.phase) * wobbleAmount * 0.65
        );
      });
      const wireScale = 1 + burst * 0.06;
      wireframe.scale.set(wireScale, wireScale, wireScale);

      if (whaleActors.length > 0) {
        const t = currentTime * 0.001;
        let visibleWhales = 0;
        const dampAngle = (from: number, to: number, factor: number) => {
          const twoPi = Math.PI * 2;
          let delta = (to - from + Math.PI) % twoPi;
          if (delta < 0) delta += twoPi;
          delta -= Math.PI;
          return from + delta * factor;
        };
        const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

        whaleActors.forEach((actor) => {
          const motion = t * actor.speed + actor.phase;
          const orbit = motion * actor.direction;
          let targetX = Math.cos(orbit) * actor.orbitX;
          let targetY = actor.baseY + Math.sin(orbit * actor.bobSpeed) * actor.bobAmp;
          let targetZ = actor.baseZ + Math.sin(orbit) * actor.zAmp;

          if (actor.foregroundRunner) {
            // Periodically push one whale close to (and slightly through) the camera for cinematic passes.
            const passSignal = Math.sin(t * (lowPowerMode ? 0.23 : 0.29) + actor.phase * 0.9);
            const passAmount = clamp((passSignal - 0.72) / 0.28, 0, 1);
            if (passAmount > 0) {
              const passZ = camera.position.z + (lowPowerMode ? 24 : 80);
              targetX = targetX * (1 - passAmount * 0.85);
              targetY = targetY * (1 - passAmount * 0.9);
              targetZ = targetZ * (1 - passAmount) + passZ * passAmount;
            }
          }

          actor.group.position.x += (targetX - actor.group.position.x) * 0.08;
          actor.group.position.y += (targetY - actor.group.position.y) * 0.08;
          actor.group.position.z += (targetZ - actor.group.position.z) * 0.06;

          const orbitNext = (motion + actor.speed * 0.75) * actor.direction;
          let nextX = Math.cos(orbitNext) * actor.orbitX;
          let nextY = actor.baseY + Math.sin(orbitNext * actor.bobSpeed) * actor.bobAmp;
          let nextZ = actor.baseZ + Math.sin(orbitNext) * actor.zAmp;

          if (actor.foregroundRunner) {
            const nextPassSignal = Math.sin((t + actor.speed * 0.6) * (lowPowerMode ? 0.23 : 0.29) + actor.phase * 0.9);
            const nextPassAmount = clamp((nextPassSignal - 0.72) / 0.28, 0, 1);
            if (nextPassAmount > 0) {
              const passZ = camera.position.z + (lowPowerMode ? 24 : 80);
              nextX = nextX * (1 - nextPassAmount * 0.85);
              nextY = nextY * (1 - nextPassAmount * 0.9);
              nextZ = nextZ * (1 - nextPassAmount) + passZ * nextPassAmount;
            }
          }

          const forwardX = nextX - targetX;
          const forwardY = nextY - targetY;
          const forwardZ = nextZ - targetZ;
          const horizontalSpeed = Math.hypot(forwardX, forwardZ);

          const heading = horizontalSpeed > 0.0001 ? Math.atan2(forwardZ, forwardX) + actor.headingOffset : actor.yawCurrent;
          const yawTarget = heading + Math.sin(motion * 0.4 + actor.phase) * actor.yawAmp;
          actor.yawCurrent = dampAngle(actor.yawCurrent, yawTarget, 0.08);
          actor.group.rotation.y = actor.yawCurrent;

          const pitchFromPath = horizontalSpeed > 0.0001 ? -Math.atan2(forwardY, horizontalSpeed) : 0;
          const pitchTarget = clamp(pitchFromPath + Math.sin(motion * 0.45 + actor.phase) * 0.014, -0.09, 0.09);
          const rollTarget = clamp(Math.sin(orbit * 1.12 + actor.phase) * actor.rollAmp, -0.05, 0.05);
          actor.pitchCurrent += (pitchTarget - actor.pitchCurrent) * 0.12;
          actor.rollCurrent += (rollTarget - actor.rollCurrent) * 0.12;
          actor.group.rotation.x = actor.pitchCurrent;
          actor.group.rotation.z = actor.rollCurrent;

          if (actor.points && actor.basePositions) {
            const attr = actor.points.geometry.getAttribute('position');
            const positions = attr.array as Float32Array;
            const base = actor.basePositions;
            for (let i = 1; i < positions.length; i += 3) {
              positions[i] =
                base[i] + 0.48 * Math.cos(base[i - 1] * 0.05 + base[i + 1] * 0.03 + t * actor.waveSpeed + actor.phase);
            }
            attr.needsUpdate = true;
          }

          if (actor.group.position.z > -cubeSize * 0.35 && actor.group.position.z < cubeSize * 0.9) {
            visibleWhales += 1;
          }
        });

        logEventThrottled('scene.whale.frame', 1200, 'scene.whale.frame.update', {
          actors: whaleActors.length,
          visibleWhales,
        });
        logEventThrottled('scene.render.visibility', 2200, 'scene.render.visibility', {
          visibleWhales,
          totalWhales: whaleActors.length,
        });
      }

      cssRenderer.render(scene, camera);
      webglRenderer.render(webglScene, camera);
      hasRenderedOnce = true;
    };

    const startAnimation = () => {
      if (animationId === 0) {
        animationId = requestAnimationFrame(animate);
      }
    };
    startAnimationRef.current = startAnimation;
    startAnimation();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
      webglRenderer.setSize(window.innerWidth, window.innerHeight);
      blackHoleMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      logRuntime('info', 'scene3d', 'Scene resized', {
        width: window.innerWidth,
        height: window.innerHeight,
      });
      startAnimation();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      logRuntime('info', 'scene3d', 'Scene cleanup started');
      sceneDisposed = true;
      cancelAnimationFrame(animationId);
      startAnimationRef.current = null;
      window.removeEventListener('resize', handleResize);
      interactionTarget.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      interactionTarget.removeEventListener('wheel', onWheel);

      if (containerRef.current && cssRenderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(cssRenderer.domElement);
      }
      if (webglContainerRef.current && webglRenderer.domElement.parentNode === webglContainerRef.current) {
        webglContainerRef.current.removeChild(webglRenderer.domElement);
      }

      webglRenderer.dispose();
      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();
      whaleGeometries.forEach((geometry) => geometry.dispose());
      whaleMaterials.forEach((material) => material.dispose());
      whaleTextures.forEach((texture) => texture.dispose());
      cubeGeometry.dispose();
      edges.dispose();
      lineMaterial.dispose();
      roots.forEach((root) => root.unmount());
      logRuntime('info', 'scene3d', 'Scene cleanup completed');
    };
  }, [locale]);

  return (
    <>
      <div ref={webglContainerRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
    </>
  );
}
