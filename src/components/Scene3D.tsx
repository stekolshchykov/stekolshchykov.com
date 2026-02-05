import { lazy, Suspense, useEffect, useRef, type ComponentType } from 'react';
import { AdditiveBlending, BackSide, BoxGeometry, BufferGeometry, Color, EdgesGeometry, Float32BufferAttribute, Group, LineBasicMaterial, LineSegments, Material, Mesh, PerspectiveCamera, Points, PointsMaterial, Scene, ShaderMaterial, SphereGeometry, Vector3, WebGLRenderer, WireframeGeometry } from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { createRoot } from 'react-dom/client';
import type { Locale } from '../content/stekolschikovContent';
import { logEvent, logRuntime } from '../observability/logger';
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
  const cameraFlightRef = useRef({
    active: false,
    startMs: 0,
    durationMs: 1080,
    yawAmp: 0,
    pitchAmp: 0,
    rollAmp: 0,
    phase: 0,
    shotReady: false,
    distanceMode: 'far' as 'near' | 'far',
    startCameraDistance: 0,
    targetCameraDistance: 0,
    startShaderDistance: 0,
    targetShaderDistance: 0,
    orbitScale: 1,
    offsetX: 0,
    offsetY: 0,
    shaderYawBias: 0,
    shaderPitchBias: 0,
  });
  const hasInitializedTargetRef = useRef(false);

  useEffect(() => {
    targetRotationRef.current = targetRotation;
    if (hasInitializedTargetRef.current) {
      rotationBurstRef.current = {
        active: true,
        startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
        seed: rotationBurstRef.current.seed + 1,
      };
      const nearShot = Math.random() < 0.5;
      cameraFlightRef.current = {
        active: true,
        startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
        durationMs: nearShot ? 1260 : 1380,
        yawAmp: (Math.random() * 2 - 1) * 0.64,
        pitchAmp: (Math.random() * 2 - 1) * 0.3,
        rollAmp: (Math.random() * 2 - 1) * 0.18,
        phase: Math.random() * Math.PI * 2,
        shotReady: false,
        distanceMode: nearShot ? 'near' : 'far',
        startCameraDistance: 0,
        targetCameraDistance: 0,
        startShaderDistance: 0,
        targetShaderDistance: 0,
        orbitScale: nearShot ? 1.65 : 1.15,
        offsetX: (Math.random() * 2 - 1) * 0.3,
        offsetY: (Math.random() * 2 - 1) * 0.2,
        shaderYawBias: (Math.random() * 2 - 1) * 0.8,
        shaderPitchBias: (Math.random() * 2 - 1) * 0.5,
      };
      logRuntime('debug', 'scene3d-camera', 'Camera flight triggered', {
        shot: nearShot ? 'near' : 'far',
        yawAmp: cameraFlightRef.current.yawAmp,
        pitchAmp: cameraFlightRef.current.pitchAmp,
        rollAmp: cameraFlightRef.current.rollAmp,
      });
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
    const maxPixelRatio = lowPowerMode ? 1 : 1.35;
    const targetFPS = lowPowerMode ? 24 : 50;
    const floatAmplitude = lowPowerMode ? 8 : 20;
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
    const previousCameraPosition = new Vector3(camera.position.x, camera.position.y, camera.position.z);
    let cameraDistance = camera.position.z;

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
    const baseBlackHoleYaw = blackHoleUniforms.uCameraYaw.value;
    const baseBlackHolePitch = blackHoleUniforms.uCameraPitch.value;
    const baseBlackHoleOffsetX = blackHoleUniforms.uBlackHoleOffset.value.x;
    const baseBlackHoleOffsetY = blackHoleUniforms.uBlackHoleOffset.value.y;
    const baseDiskScreenAngle = blackHoleUniforms.uDiskScreenAngle.value;
    const baseDiskScreenTilt = blackHoleUniforms.uDiskScreenTilt.value;
    const blackHoleSky = new Mesh(blackHoleGeometry, blackHoleMaterial);
    blackHoleSky.frustumCulled = false;
    blackHoleSky.renderOrder = -1000;
    webglScene.add(blackHoleSky);
    logEvent('scene.blackhole.shader.ready', { mode: 'webgl-raymarch', lowPowerMode });

    const spaceGeometries: BufferGeometry[] = [];
    const spaceMaterials: Material[] = [];

    const deepStarCount = lowPowerMode ? 2200 : 5200;
    const deepStarSpread = lowPowerMode ? 7600 : 10500;
    const deepStarPositions = new Float32Array(deepStarCount * 3);
    const deepStarColors = new Float32Array(deepStarCount * 3);
    const safeVoid = cubeSize * 0.7;
    for (let i = 0; i < deepStarCount; i++) {
      const idx = i * 3;
      let x = (Math.random() * 2 - 1) * deepStarSpread;
      let y = (Math.random() * 2 - 1) * deepStarSpread * 0.82;
      let z = (Math.random() * 2 - 1) * deepStarSpread;
      if (Math.abs(x) < safeVoid && Math.abs(y) < safeVoid && Math.abs(z) < safeVoid) {
        x *= 2.6;
        y *= 2.4;
        z *= 2.6;
      }
      deepStarPositions[idx] = x;
      deepStarPositions[idx + 1] = y;
      deepStarPositions[idx + 2] = z;

      const starHue = 0.54 + Math.random() * 0.16;
      const starSat = 0.16 + Math.random() * 0.28;
      const starLum = 0.68 + Math.random() * 0.3;
      const color = new Color().setHSL(starHue, starSat, Math.min(0.95, starLum));
      deepStarColors[idx] = color.r;
      deepStarColors[idx + 1] = color.g;
      deepStarColors[idx + 2] = color.b;
    }

    const deepStarGeometry = new BufferGeometry();
    deepStarGeometry.setAttribute('position', new Float32BufferAttribute(deepStarPositions, 3));
    deepStarGeometry.setAttribute('color', new Float32BufferAttribute(deepStarColors, 3));
    spaceGeometries.push(deepStarGeometry);

    const deepStarMaterial = new PointsMaterial({
      size: lowPowerMode ? 2.2 : 2.45,
      transparent: true,
      opacity: lowPowerMode ? 0.56 : 0.7,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true,
    });
    spaceMaterials.push(deepStarMaterial);
    const deepStars = new Points(deepStarGeometry, deepStarMaterial);
    deepStars.frustumCulled = false;
    webglScene.add(deepStars);

    const tunnelStarCount = lowPowerMode ? 1200 : 2800;
    const tunnelDepth = lowPowerMode ? 1500 : 2300;
    const tunnelRadius = lowPowerMode ? 640 : 980;
    const tunnelPositions = new Float32Array(tunnelStarCount * 3);
    const tunnelColors = new Float32Array(tunnelStarCount * 3);
    const tunnelSpeeds = new Float32Array(tunnelStarCount);
    for (let i = 0; i < tunnelStarCount; i++) {
      const idx = i * 3;
      const radius = Math.sqrt(Math.random()) * tunnelRadius;
      const angle = Math.random() * Math.PI * 2;
      tunnelPositions[idx] = Math.cos(angle) * radius;
      tunnelPositions[idx + 1] = Math.sin(angle) * radius * (0.55 + Math.random() * 0.5);
      tunnelPositions[idx + 2] = -Math.random() * tunnelDepth;

      const warpColor = new Color().setHSL(0.56 + Math.random() * 0.14, 0.2 + Math.random() * 0.24, 0.76 + Math.random() * 0.18);
      tunnelColors[idx] = warpColor.r;
      tunnelColors[idx + 1] = warpColor.g;
      tunnelColors[idx + 2] = warpColor.b;
      tunnelSpeeds[i] = 0.55 + Math.random() * 1.35;
    }

    const tunnelGeometry = new BufferGeometry();
    tunnelGeometry.setAttribute('position', new Float32BufferAttribute(tunnelPositions, 3));
    tunnelGeometry.setAttribute('color', new Float32BufferAttribute(tunnelColors, 3));
    spaceGeometries.push(tunnelGeometry);
    const tunnelMaterial = new PointsMaterial({
      size: lowPowerMode ? 2.2 : 2.8,
      transparent: true,
      opacity: lowPowerMode ? 0.62 : 0.74,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true,
    });
    spaceMaterials.push(tunnelMaterial);
    const tunnelStars = new Points(tunnelGeometry, tunnelMaterial);
    tunnelStars.frustumCulled = false;
    const tunnelGroup = new Group();
    tunnelGroup.add(tunnelStars);
    webglScene.add(tunnelGroup);

    logEvent('scene.starfield.ready', { deepStars: deepStarCount, tunnelStars: tunnelStarCount, lowPowerMode });

    const cubeGeometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const edges = new EdgesGeometry(cubeGeometry);
    const lineMaterial = new LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new LineSegments(edges, lineMaterial);
    webglScene.add(wireframe);

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
      element.style.overflow = 'hidden';
      element.style.contain = 'layout style paint';
      element.style.willChange = 'transform';
      if (!lowPowerMode) {
        element.style.backdropFilter = 'blur(2px)';
      }

      const scrollHost = document.createElement('div');
      scrollHost.className = 'cube-face-scroll';
      element.appendChild(scrollHost);

      const FaceComponent = face.component;
      const root = createRoot(scrollHost);
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
      cameraDistance += e.deltaY * 0.5;
      cameraDistance = Math.max(minZoom, Math.min(maxZoom, cameraDistance));
      logRuntime('debug', 'scene3d-controls', 'Zoom changed', {
        deltaY: e.deltaY,
        cameraZ: cameraDistance,
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
        cameraFlightRef.current.active ||
        rotationBurstRef.current.active ||
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
      const frameDeltaSeconds = Math.min(0.05, deltaTime / 1000);

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

      const floatY = Math.sin(currentTime * 0.0005) * floatAmplitude;
      cubeGroup.position.y = floatY;
      wireframe.position.y = floatY;

      let cameraYaw = 0;
      let cameraPitch = 0;
      let cameraRoll = 0;
      let flightEnvelope = 0;
      let flightSwirl = 0;
      let flightOffsetX = 0;
      let flightOffsetY = 0;
      let flightShaderYaw = 0;
      let flightShaderPitch = 0;
      if (!prefersReducedMotion && cameraFlightRef.current.active) {
        const flight = cameraFlightRef.current;
        if (!flight.shotReady) {
          flight.startCameraDistance = cameraDistance;
          if (flight.distanceMode === 'near') {
            flight.targetCameraDistance = Math.max(minZoom * 0.8, minZoom - 120);
            flight.targetShaderDistance = lowPowerMode
              ? 12 + Math.random() * 4
              : 7 + Math.random() * 4.6;
          } else {
            flight.targetCameraDistance = Math.min(
              maxZoom * 0.82,
              minZoom + (maxZoom - minZoom) * 0.42 + Math.random() * 80
            );
            flight.targetShaderDistance = lowPowerMode
              ? 24 + Math.random() * 9
              : 32 + Math.random() * 18;
          }
          flight.startShaderDistance = blackHoleMaterial.uniforms.uCameraDistance.value;
          flight.shotReady = true;
          logRuntime('info', 'scene3d-camera', 'Camera shot configured', {
            shot: flight.distanceMode,
            fromCameraDistance: flight.startCameraDistance,
            toCameraDistance: flight.targetCameraDistance,
            fromBlackHoleDistance: flight.startShaderDistance,
            toBlackHoleDistance: flight.targetShaderDistance,
          });
        }
        const durationMs = lowPowerMode
          ? flight.durationMs * 0.82
          : flight.durationMs;
        const progress = (currentTime - flight.startMs) / durationMs;
        if (progress >= 1) {
          const finalDistance = flight.shotReady ? flight.targetCameraDistance : cameraDistance;
          cameraDistance = Math.max(minZoom, Math.min(maxZoom, finalDistance));
          if (flight.shotReady) {
            blackHoleMaterial.uniforms.uCameraDistance.value = flight.targetShaderDistance;
          }
          cameraFlightRef.current.active = false;
        } else {
          const eased = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          const envelope = Math.pow(Math.sin(Math.PI * progress), 1.1);
          const swirl = progress * Math.PI * 2.8 + flight.phase;
          flightEnvelope = envelope;
          flightSwirl = swirl;
          const ampMultiplier = lowPowerMode ? 0.55 : 1;
          cameraYaw = flight.yawAmp * envelope * ampMultiplier;
          cameraPitch = flight.pitchAmp * envelope * Math.cos(swirl) * ampMultiplier;
          cameraRoll = flight.rollAmp * envelope * Math.sin(swirl * 1.2) * ampMultiplier;

          if (flight.shotReady) {
            const shotDistance =
              flight.startCameraDistance + (flight.targetCameraDistance - flight.startCameraDistance) * eased;
            cameraDistance = Math.max(minZoom, Math.min(maxZoom, shotDistance));

            const shaderDistance =
              flight.startShaderDistance + (flight.targetShaderDistance - flight.startShaderDistance) * eased;
            blackHoleMaterial.uniforms.uCameraDistance.value = shaderDistance;

            flightOffsetX = flight.offsetX * envelope;
            flightOffsetY = flight.offsetY * envelope;
            flightShaderYaw = flight.shaderYawBias * envelope;
            flightShaderPitch = flight.shaderPitchBias * envelope;
          }
        }
      }

      const cubeTiltX = Math.sin(flightSwirl * 1.2) * 0.2 * flightEnvelope;
      const cubeTiltY = Math.cos(flightSwirl * 0.95) * 0.32 * flightEnvelope;
      const cubeTiltZ = Math.sin(flightSwirl * 1.55) * 0.24 * flightEnvelope;
      cubeGroup.rotation.x = currentRotationRef.current.x + cubeTiltX;
      cubeGroup.rotation.y = currentRotationRef.current.y + cubeTiltY;
      cubeGroup.rotation.z = cubeTiltZ;
      wireframe.rotation.x = currentRotationRef.current.x + cubeTiltX * 1.06;
      wireframe.rotation.y = currentRotationRef.current.y + cubeTiltY * 1.06;
      wireframe.rotation.z = cubeTiltZ * 1.1;

      blackHoleMaterial.uniforms.uCameraYaw.value =
        baseBlackHoleYaw - cameraYaw * 1.9 - cubeTiltY * 0.55 + flightShaderYaw;
      blackHoleMaterial.uniforms.uCameraPitch.value =
        baseBlackHolePitch + cameraPitch * 1.55 - cubeTiltX * 0.42 + flightShaderPitch;
      blackHoleMaterial.uniforms.uBlackHoleOffset.value.set(
        Math.max(-0.95, Math.min(-0.14, baseBlackHoleOffsetX - cameraYaw * 0.3 - cubeTiltY * 0.11 + flightOffsetX)),
        Math.max(-0.16, Math.min(0.4, baseBlackHoleOffsetY + cameraPitch * 0.2 + cubeTiltX * 0.09 + flightOffsetY))
      );
      blackHoleMaterial.uniforms.uDiskScreenAngle.value =
        baseDiskScreenAngle + cameraYaw * 1.08 + cubeTiltY * 0.55 + Math.sin(currentTime * 0.00022) * 0.05;
      blackHoleMaterial.uniforms.uDiskScreenTilt.value = Math.max(
        0.22,
        baseDiskScreenTilt + Math.abs(cameraPitch) * 0.2 + Math.sin(currentTime * 0.0003 + flightSwirl) * 0.02
      );

      const orbitScale = 1 + flightEnvelope * (cameraFlightRef.current.orbitScale - 1);
      const cameraOrbitRadius = Math.max(72, cameraDistance * (0.09 * orbitScale));
      const cameraOffsetX = Math.sin(cameraYaw) * cameraOrbitRadius;
      const cameraOffsetY = Math.sin(cameraPitch) * cameraOrbitRadius * 0.5;
      const cameraOffsetZ = Math.cos(cameraYaw) * cameraOrbitRadius * 0.18;
      camera.position.set(cameraOffsetX, floatY + cameraOffsetY, cameraDistance + cameraOffsetZ);
      camera.lookAt(0, floatY, 0);
      camera.rotation.z = cameraRoll;
      blackHoleSky.position.copy(camera.position);
      const cameraDelta = camera.position.distanceTo(previousCameraPosition);
      previousCameraPosition.copy(camera.position);

      deepStars.rotation.y += frameDeltaSeconds * (lowPowerMode ? 0.008 : 0.014);
      deepStars.rotation.x += frameDeltaSeconds * (lowPowerMode ? 0.0016 : 0.0028);
      deepStarMaterial.opacity = (lowPowerMode ? 0.5 : 0.62) + flightEnvelope * 0.18;

      tunnelGroup.position.copy(camera.position);
      tunnelGroup.quaternion.copy(camera.quaternion);
      const tunnelAttr = tunnelGeometry.getAttribute('position');
      const tunnelArray = tunnelAttr.array as Float32Array;
      const speedFromCamera = Math.min(5.5, cameraDelta / 9);
      const flightSpeedBoost = 1 + speedFromCamera + flightEnvelope * (lowPowerMode ? 5 : 8.5);
      const tunnelBaseSpeed = lowPowerMode ? 260 : 380;
      const tunnelSpeed = tunnelBaseSpeed * flightSpeedBoost;
      for (let i = 0; i < tunnelStarCount; i++) {
        const idx = i * 3;
        tunnelArray[idx + 2] += frameDeltaSeconds * tunnelSpeed * tunnelSpeeds[i];
        if (tunnelArray[idx + 2] > 110) {
          const radius = Math.sqrt(Math.random()) * tunnelRadius;
          const angle = Math.random() * Math.PI * 2;
          tunnelArray[idx] = Math.cos(angle) * radius;
          tunnelArray[idx + 1] = Math.sin(angle) * radius * (0.55 + Math.random() * 0.5);
          tunnelArray[idx + 2] = -tunnelDepth * (0.9 + Math.random() * 0.4);
        }
      }
      tunnelAttr.needsUpdate = true;
      tunnelMaterial.size = (lowPowerMode ? 2.5 : 3.2) + flightEnvelope * (lowPowerMode ? 1.1 : 1.9);
      tunnelMaterial.opacity = Math.min(0.92, (lowPowerMode ? 0.5 : 0.6) + flightEnvelope * 0.28 + speedFromCamera * 0.05);

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
      spaceGeometries.forEach((geometry) => geometry.dispose());
      spaceMaterials.forEach((material) => material.dispose());
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
