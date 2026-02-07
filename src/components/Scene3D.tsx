import { useRef, useEffect } from 'react';
import type { Locale } from '../content/stekolschikovContent';
import { logEvent } from '../observability/logger';

// Hooks
import { useSceneInit } from './scene/hooks/useSceneInit';
import { useStarField } from './scene/hooks/useStarField';
import { useCameraControls } from './scene/hooks/useCameraControls';
import { useCinematicCamera } from './scene/hooks/useCinematicCamera';
import { useAdaptiveQuality } from './scene/hooks/useAdaptiveQuality';
import { usePostProcessing } from './scene/hooks/usePostProcessing';
import { FaceActor } from './scene/CubeStructure';
import { AdditiveBlending, Color, DynamicDrawUsage, InstancedMesh, MeshBasicMaterial, Object3D, SphereGeometry, Vector3 } from 'three';
import { useCubeSystem } from './scene/hooks/useCubeSystem';
import { useSingularityPhysics } from './scene/hooks/useSingularityPhysics';

// Toggle for Cube Visibility
const SHOW_CUBE = true;

interface Scene3DProps {
  targetRotation: { x: number; y: number };
  locale: Locale;
  onReady?: () => void;
  isGameMode?: boolean;
  joystickInput?: { x: number; y: number };
  lookJoystickInput?: { x: number; y: number };
  withSingularityBackground?: boolean;
}

export function Scene3D({
  targetRotation,
  locale,
  onReady,
  isGameMode = false,
  joystickInput = { x: 0, y: 0 },
  lookJoystickInput = { x: 0, y: 0 },
  withSingularityBackground = false,
}: Scene3DProps) {
  // --- Constants & Config ---
  const containerRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);
  const startAnimationRef = useRef<(() => void) | null>(null);
  const readyNotifiedRef = useRef(false);
  const isGameModeRef = useRef(isGameMode);

  const viewportWidth = window.innerWidth;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isPhone = viewportWidth < 700;
  const isTablet = viewportWidth < 1100;
  const isLowCoreCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const lowPowerMode = prefersReducedMotion || (isPhone && isLowCoreCpu);
  const maxPixelRatio = lowPowerMode ? 1 : 2.1;
  const targetFPS = lowPowerMode ? 24 : 60;
  const floatAmplitude = lowPowerMode ? 6 : 10;
  const activeFaceOpacity = lowPowerMode ? 0.76 : 0.82;
  const inactiveFaceOpacity = lowPowerMode ? 0.1 : 0.14;
  const lockCameraToActiveFace = true;

  // Geometry Config
  const faceSize = isPhone ? 420 : isTablet ? 620 : 860;
  const facePadding = isPhone ? 14 : isTablet ? 20 : 28;
  const faceAlpha = lowPowerMode ? 0.72 : 0.5;
  const faceDepth = Math.round(faceSize * 0.58);
  const cubeSize = faceDepth * 2;
  const cameraFov = 50;
  const faceHalf = faceSize * 0.5;
  const fovRadians = (cameraFov * Math.PI) / 180;
  const fitDistance = faceHalf / Math.tan(fovRadians / 2);
  const defaultCameraDistance = Math.max(
    isPhone ? 1200 : isTablet ? 1400 : 1600,
    fitDistance + faceDepth * 0.8
  );
  const minZoom = lockCameraToActiveFace ? defaultCameraDistance : Math.max(720, cubeSize * 0.95);
  const maxZoom = lockCameraToActiveFace ? defaultCameraDistance : Math.max(2200, cubeSize * 2.5);

  const startAnimation = () => startAnimationRef.current?.();
  const gameYawRef = useRef(0);
  const gamePitchRef = useRef(0);
  const gamePositionRef = useRef(new Vector3()); // Position for game mode
  const gameInitializedRef = useRef(false);

  // Store latest input in refs to avoid stale closures in animation loop
  const joystickInputRef = useRef(joystickInput);
  const lookJoystickInputRef = useRef(lookJoystickInput);

  useEffect(() => {
    joystickInputRef.current = joystickInput;
  }, [joystickInput]);

  useEffect(() => {
    lookJoystickInputRef.current = lookJoystickInput;
  }, [lookJoystickInput]);

  useEffect(() => {
    isGameModeRef.current = isGameMode;
  }, [isGameMode]);

  // --- Hooks Initialization ---

  // 1. Scene Setup
  const { sceneRef, webglSceneRef, cameraRef, cssRendererRef, webglRendererRef, initialized } = useSceneInit({
    pixelRatio: maxPixelRatio,
    isPhone,
    isTablet,
    containerRef,
    webglContainerRef
  });

  // 2. Star Field
  const { updateStarField, applyQuality: applyStarQuality } = useStarField({
    sceneRef: webglSceneRef,
    lowPowerMode,
    initialized,
    enabled: !withSingularityBackground,
  });

  const { updateSingularityPhysics } = useSingularityPhysics({
    sceneRef: webglSceneRef,
    lowPowerMode,
    initialized,
  });

  const { composerRef } = usePostProcessing({
    renderer: webglRendererRef.current,
    scene: webglSceneRef.current,
    camera: cameraRef.current,
    initialized,
    lowPowerMode,
    enabled: !withSingularityBackground,
  });

  const { qualityTier, qualityPreset, reportFrame } = useAdaptiveQuality({
    enabled: true,
    lowPowerMode,
    targetFPS,
  });

  // 4. Camera Controls (Interaction)
  const {
    currentRotationRef,
    targetRotationRef,
    velocityRef,
    userCameraDistanceRef,
    isDraggingRef,
    updatePhysics
  } = useCameraControls({
    interactionTargetRef: containerRef,
    minZoom,
    maxZoom,
    defaultCameraDistance,
    startAnimation
  });

  // Telemetry for Joystick Debugging
  useEffect(() => {
    if (isGameMode) {
      import('../observability/TelemetryLogger').then(({ TelemetryLogger }) => {
        TelemetryLogger.getInstance().start();
      });
    }
  }, [isGameMode]);

  useEffect(() => {
    applyStarQuality({
      starDensity: withSingularityBackground ? 0 : qualityPreset.starDensity,
      starTwinkle: qualityPreset.starTwinkle,
    });
    const webglRenderer = webglRendererRef.current;
    if (webglRenderer) {
      webglRenderer.setPixelRatio(
        Math.min(window.devicePixelRatio, maxPixelRatio * qualityPreset.pixelRatioScale)
      );
    }
    logEvent('scene.performance.mode', { qualityTier }, 'debug');
  }, [applyStarQuality, maxPixelRatio, qualityPreset, qualityTier, webglRendererRef]);

  useEffect(() => {
    if (!cameraRef.current) return;
    if (isGameMode) {
      const cam = cameraRef.current;
      const dir = new Vector3();
      cam.getWorldDirection(dir);
      const clampedY = Math.max(-0.999, Math.min(0.999, dir.y));
      gameYawRef.current = Math.atan2(dir.x, dir.z);
      gamePitchRef.current = Math.asin(clampedY);
      gamePositionRef.current.copy(cam.position);
      gameInitializedRef.current = true;
    } else {
      gameInitializedRef.current = false;
    }
  }, [cameraRef, isGameMode]);

  // Expose Camera for Testing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__getCameraRotation = () => {
        if (cameraRef.current) {
          const { x, y, z } = cameraRef.current.rotation;
          const pos = cameraRef.current.position;
          return { rotation: { x, y, z }, position: { x: pos.x, y: pos.y, z: pos.z } };
        }
        return null;
      };
    }
  }, []);

  // Sync Input Target
  useEffect(() => {
    if (targetRotationRef.current !== targetRotation) {
      targetRotationRef.current = targetRotation;
    }
  }, [targetRotation, targetRotationRef]);

  // 5. Cinematic Camera (Logic)
  const { updateCameraFlight, rotationBurstRef, cameraFlightRef } = useCinematicCamera({
    targetRotation,
    minZoom,
    maxZoom,
    isPhone,
    lowPowerMode,
    prefersReducedMotion,
    startAnimation,
    defaultCameraDistance,
    lockCamera: lockCameraToActiveFace,
  });

  // 6. Cube Structure (Managed by Hook)
  const cubeRefs = useCubeSystem({
    scene: sceneRef.current,
    webglScene: webglSceneRef.current,
    locale,
    createConfig: {
      faceSize,
      facePadding,
      faceAlpha,
      faceDepth,
      cubeSize,
      isPhone: isPhone || false,
      lowPowerMode,
    },
    isGameMode,
    showCube: SHOW_CUBE,
    initialized: initialized && !!sceneRef.current && !!webglSceneRef.current,
  });

  // --- Main Animation Loop & Resize ---
  useEffect(() => {
    if (!initialized) return;

    // We define the animation logic here to ensure refs are safe
    let animationId = 0;
    let frameCount = 0;
    let lastTime = 0;
    let hasRenderedOnce = false;
    const frameDelay = 1000 / targetFPS;
    const cubeWorldPos = new Vector3();
    const cameraDirection = new Vector3();
    const faceOutward = new Vector3();
    const gameForward = new Vector3();
    const gameRight = new Vector3();
    const gameUp = new Vector3(0, 1, 0);
    const gameLookTarget = new Vector3();
    const desiredCameraPosition = new Vector3();
    const gameMove = new Vector3();
    const previousCameraPosition = new Vector3();
    const smoothedCameraPosition = new Vector3();
    const smoothedLookAt = new Vector3();
    let hasSmoothedCamera = false;
    let hasPreviousCameraPosition = false;
    let activeFaceIndex = -1;

    type DustParticle = {
      angle: number;
      speed: number;
      baseRadius: number;
      baseHeight: number;
      wobble: number;
      wobbleSpeed: number;
      bob: number;
      bobSpeed: number;
      drift: number;
      scale: number;
      phase: number;
      phase2: number;
      hue: number;
      lightness: number;
      velocity: Vector3;
      position: Vector3;
    };
    const dustParticles: DustParticle[] = [];
    const dustDummy = new Object3D();
    const dustOrbitTarget = new Vector3();
    const dustWander = new Vector3();
    const dustFinalPosition = new Vector3();
    const dustZero = new Vector3(0, 0, 0);
    const dustCount = lowPowerMode ? 48 : 84;
    const dustMinRadius = cubeSize * (lowPowerMode ? 0.5 : 0.55);
    const dustMaxRadius = cubeSize * (lowPowerMode ? 0.9 : 1.15);
    const dustMaxHeight = cubeSize * (lowPowerMode ? 0.12 : 0.18);
    const dustScatterRadius = cubeSize * (lowPowerMode ? 1.6 : 2.25);
    const dustScatterClamp = cubeSize * (lowPowerMode ? 2.4 : 3.2);
    let dustMesh: InstancedMesh | null = null;
    let dustGeometry: SphereGeometry | null = null;
    let dustMaterial: MeshBasicMaterial | null = null;
    let dustWasGameMode = isGameModeRef.current;
    let dustTransition = 1;

    if (webglSceneRef.current) {
      dustGeometry = new SphereGeometry(lowPowerMode ? 3.0 : 4.2, 8, 8);
      dustMaterial = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: lowPowerMode ? 0.42 : 0.6,
        blending: AdditiveBlending,
        depthWrite: false,
        vertexColors: true,
      });
      dustMesh = new InstancedMesh(dustGeometry, dustMaterial, dustCount);
      dustMesh.instanceMatrix.setUsage(DynamicDrawUsage);
      dustMesh.frustumCulled = false;

      const color = new Color();
      for (let i = 0; i < dustCount; i += 1) {
        const baseRadius = dustMinRadius + Math.random() * (dustMaxRadius - dustMinRadius);
        const baseHeight = (Math.random() - 0.5) * dustMaxHeight * 2;
        const scale = (lowPowerMode ? 0.65 : 0.8) + Math.random() * (lowPowerMode ? 0.8 : 1.3);
        const hue = 0.48 + Math.random() * 0.4;
        const lightness = (lowPowerMode ? 0.66 : 0.7) + Math.random() * 0.18;
        const angle = Math.random() * Math.PI * 2;
        const scatterRadius = dustScatterRadius * (0.6 + Math.random() * 0.7);
        const scatterAngle = Math.random() * Math.PI * 2;
        const scatterHeight = (Math.random() - 0.5) * dustMaxHeight * 6;
        const scatterPos = new Vector3(
          Math.cos(scatterAngle) * scatterRadius,
          scatterHeight,
          Math.sin(scatterAngle) * scatterRadius
        );
        if (!isGameModeRef.current) {
          scatterPos.set(Math.cos(angle) * baseRadius, baseHeight, Math.sin(angle) * baseRadius);
        }
        const particle: DustParticle = {
          angle,
          speed: 0.12 + Math.random() * 0.35,
          baseRadius,
          baseHeight,
          wobble: (lowPowerMode ? 8 : 14) + Math.random() * (lowPowerMode ? 10 : 18),
          wobbleSpeed: 0.2 + Math.random() * 0.5,
          bob: (lowPowerMode ? 6 : 12) + Math.random() * (lowPowerMode ? 8 : 14),
          bobSpeed: 0.15 + Math.random() * 0.45,
          drift: (Math.random() - 0.5) * 0.6,
          scale,
          phase: Math.random() * Math.PI * 2,
          phase2: Math.random() * Math.PI * 2,
          hue,
          lightness,
          velocity: new Vector3(
            (Math.random() - 0.5) * (lowPowerMode ? 26 : 42),
            (Math.random() - 0.5) * (lowPowerMode ? 18 : 30),
            (Math.random() - 0.5) * (lowPowerMode ? 26 : 42)
          ),
          position: scatterPos,
        };
        dustParticles.push(particle);

        color.setHSL(hue, 0.55, lightness);
        dustMesh.setColorAt(i, color);

        dustDummy.position.copy(scatterPos);
        dustDummy.scale.setScalar(scale);
        dustDummy.updateMatrix();
        dustMesh.setMatrixAt(i, dustDummy.matrix);
      }
      if (dustMesh.instanceColor) dustMesh.instanceColor.needsUpdate = true;

      webglSceneRef.current.add(dustMesh);
    }

    const animate = (currentTime: number) => {
      animationId = 0;
      frameCount++;

      // Motion Check Optimization
      const rotationErrorX = targetRotationRef.current.x - currentRotationRef.current.x;
      const rotationErrorY = targetRotationRef.current.y - currentRotationRef.current.y;
      const gameMode = isGameModeRef.current;
      const joystick = joystickInputRef.current;
      const lookJoystick = lookJoystickInputRef.current;
      const hasJoystickMotion =
        gameMode &&
        (Math.abs(joystick.x) > 0.01 ||
          Math.abs(joystick.y) > 0.01 ||
          Math.abs(lookJoystick.x) > 0.01 ||
          Math.abs(lookJoystick.y) > 0.01);
      const hasMotion =
        isDraggingRef.current ||
        cameraFlightRef.current.active ||
        rotationBurstRef.current.active ||
        Math.abs(rotationErrorX) > 0.0006 ||
        Math.abs(rotationErrorY) > 0.0006 ||
        Math.abs(velocityRef.current.x) > 0.0002 ||
        Math.abs(velocityRef.current.y) > 0.0002 ||
        hasJoystickMotion;

      if (lowPowerMode && hasRenderedOnce && !hasMotion) {
        return;
      }

      // Frame Limiter
      animationId = requestAnimationFrame(animate);
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameDelay) return;
      lastTime = currentTime - (deltaTime % frameDelay);
      const deltaSeconds = deltaTime / 1000;
      reportFrame(deltaSeconds);

      const camera = cameraRef.current; // Primary declaration at the top of the loop

      // 1. Update Physics / Camera Controls
      if (!gameMode) {
        updatePhysics(lowPowerMode, deltaSeconds);
      } else {
        // Telemetry Logging in Game Mode
        if (camera) {
          import('../observability/TelemetryLogger').then(({ TelemetryLogger }) => {
            TelemetryLogger.getInstance().logFrame(
              joystick,
              lookJoystick,
              camera,
              gameMode
            );
          });
        }
      }

      // 2. Float Animation (Visibility is handled by useCubeSystem hook)
      const floatY = Math.sin(currentTime * 0.00035) * floatAmplitude;
      if (cubeRefs.current) {
        // Only update position if visible (optimization)
        if (cubeRefs.current.cubeGroup.visible) {
          cubeRefs.current.cubeGroup.position.y = floatY;
          cubeRefs.current.wireframe.position.y = floatY;
        }
      }

      // 2b. Joystick-based free flight in game mode (super fast - reach sun in ~10 sec)
      let gameCameraOverride: Vector3 | null = null;
      let gameLookAtOverride: Vector3 | null = null;
      if (gameMode && cameraRef.current) {
        const cam = cameraRef.current;
        const moveSpeed = lowPowerMode ? 55 : 75;
        // Increased look speed by ~50% to improve responsiveness
        const lookSpeed = lowPowerMode ? 4.2 : 7.0;
        const jx = joystickInputRef.current.x;
        const jy = joystickInputRef.current.y;
        const lx = lookJoystickInputRef.current.x;
        const ly = lookJoystickInputRef.current.y;

        if (!gameInitializedRef.current) {
          const dir = new Vector3();
          cam.getWorldDirection(dir);
          const clampedY = Math.max(-0.999, Math.min(0.999, dir.y));
          gameYawRef.current = Math.atan2(dir.x, dir.z);
          gamePitchRef.current = Math.asin(clampedY);
          gamePositionRef.current.copy(cam.position);
          gameInitializedRef.current = true;
        }

        const lookStep = Math.max(deltaSeconds, 1 / 120) * 1.4;
        gameYawRef.current += lx * lookSpeed * lookStep;
        gamePitchRef.current += ly * lookSpeed * lookStep;
        gamePitchRef.current = Math.max(-1.2, Math.min(1.2, gamePitchRef.current));

        const cosPitch = Math.cos(gamePitchRef.current);
        gameForward.set(
          Math.sin(gameYawRef.current) * cosPitch,
          Math.sin(gamePitchRef.current),
          Math.cos(gameYawRef.current) * cosPitch
        ).normalize();
        gameRight.crossVectors(gameForward, gameUp).normalize();

        gameMove.set(0, 0, 0);
        gameMove.addScaledVector(gameForward, jy);
        gameMove.addScaledVector(gameRight, jx);
        if (gameMove.lengthSq() > 0.0001) {
          gameMove.normalize();
        }

        // --- BLACK HOLE GRAVITY PULL ---
        const BLACK_HOLE_POSITION = new Vector3(-650, -70, -720);
        const toBH = new Vector3().subVectors(BLACK_HOLE_POSITION, gamePositionRef.current);
        const distSq = toBH.lengthSq();
        if (distSq > 1000) {
          const pullForce = Math.min(2200, 2500000 / (distSq + 2000));
          const pullVec = toBH.normalize().multiplyScalar(pullForce * deltaSeconds);
          gamePositionRef.current.add(pullVec);
        }

        gamePositionRef.current.addScaledVector(gameMove, moveSpeed * deltaSeconds);
        gameCameraOverride = gamePositionRef.current;
        gameLookAtOverride = gameLookTarget.copy(gamePositionRef.current).addScaledVector(gameForward, 200);
      }
      // Initialize flight variables with defaults so they are available for cube effects
      let flightEnvelope = 0;
      let flightSwirl = 0;
      let burst = 0;

      // Duplicate camera declaration removed here to fix scope error

      if (camera) {
        if (gameMode && gameCameraOverride && gameLookAtOverride) {
          camera.position.copy(gameCameraOverride);
          camera.lookAt(gameLookAtOverride);
          camera.rotation.z = 0;
        } else {
          // 3. Cinematic Flight & Camera Position
          const lookAtTarget = new Vector3(0, floatY, 0);
          const flightData = updateCameraFlight(
            currentTime,
            userCameraDistanceRef.current,
            floatY,
            lookAtTarget,
            qualityPreset.motionScale
          ) || {};

          const {
            cameraDistance = 1500,
            cameraYaw = 0,
            cameraPitch = 0,
            cameraRoll = 0,
            cameraOverridePosition = null,
            lookAtOverride = null
          } = flightData;

          // Extract values needed for outer scope
          flightEnvelope = flightData.flightEnvelope ?? 0;
          flightSwirl = flightData.flightSwirl ?? 0;
          burst = flightData.burst ?? 0;

          // Calculate Camera Position
          const orbitScale = lockCameraToActiveFace ? 0 : 1 + flightEnvelope * (cameraFlightRef.current.orbitScale - 1);
          const cameraOrbitRadius = lockCameraToActiveFace ? 0 : Math.max(56, cameraDistance * (0.072 * orbitScale));
          const cameraOffsetX = Math.sin(cameraYaw) * cameraOrbitRadius;
          const cameraOffsetY = Math.sin(cameraPitch) * cameraOrbitRadius * 0.42;
          const cameraOffsetZ = Math.cos(cameraYaw) * cameraOrbitRadius * 0.16;
          const effectiveLookAt = lookAtOverride ?? lookAtTarget;

          if (cameraOverridePosition) {
            desiredCameraPosition.copy(cameraOverridePosition);
          } else {
            desiredCameraPosition.set(cameraOffsetX, floatY + cameraOffsetY, cameraDistance + cameraOffsetZ);
          }

          if (!hasSmoothedCamera) {
            hasSmoothedCamera = true;
            smoothedCameraPosition.copy(desiredCameraPosition);
            smoothedLookAt.copy(effectiveLookAt);
          } else {
            const cameraBlend = Math.min(1, Math.max(0.06, 1 - Math.exp(-deltaSeconds * 6.6)));
            smoothedCameraPosition.lerp(desiredCameraPosition, cameraBlend);
            smoothedLookAt.lerp(effectiveLookAt, cameraBlend * 0.9);
          }

          camera.position.copy(smoothedCameraPosition);
          camera.lookAt(smoothedLookAt);
          camera.rotation.z = cameraRoll * qualityPreset.motionScale;

          // 4. Update Star Field
          let cameraSpeed = 0;
          if (hasPreviousCameraPosition) {
            cameraSpeed = camera.position.distanceTo(previousCameraPosition) / Math.max(deltaSeconds, 1 / 240);
          } else {
            hasPreviousCameraPosition = true;
          }
          previousCameraPosition.copy(camera.position);
          const rotationSpeed = Math.hypot(velocityRef.current.x, velocityRef.current.y) / Math.max(deltaSeconds, 1 / 240);
          const rotationBoost = rotationSpeed * (lowPowerMode ? 1600 : 2600);
          if (!withSingularityBackground) {
            updateStarField(deltaSeconds, camera.position, flightEnvelope, cameraSpeed + rotationBoost);
          }

          // Update Singularity Particles
          updateSingularityPhysics(deltaSeconds, currentTime * 0.001);
        }
      }

      // 6. Update Cube Jitter/Wobble
      if (cubeRefs.current) {
        const { cubeGroup, wireframe, faceActors } = cubeRefs.current;
        let strongestFacing = -1;
        let strongestFaceIndex = -1;

        // Tilt from Flight
        const cubeTiltX = Math.sin(flightSwirl * 1.2) * 0.014 * flightEnvelope * qualityPreset.motionScale;
        const cubeTiltY = Math.cos(flightSwirl * 0.95) * 0.022 * flightEnvelope * qualityPreset.motionScale;
        const cubeTiltZ = Math.sin(flightSwirl * 1.55) * 0.012 * flightEnvelope * qualityPreset.motionScale;

        cubeGroup.rotation.x = currentRotationRef.current.x + cubeTiltX;
        cubeGroup.rotation.y = currentRotationRef.current.y + cubeTiltY;
        cubeGroup.rotation.z = cubeTiltZ;

        wireframe.rotation.x = currentRotationRef.current.x + cubeTiltX * 1.06;
        wireframe.rotation.y = currentRotationRef.current.y + cubeTiltY * 1.06;
        wireframe.rotation.z = cubeTiltZ * 1.1;

        // Burst Effect (Exploding Faces)
        const explodeDistance = cubeSize * (lowPowerMode ? 0.045 : 0.09) * burst * qualityPreset.motionScale;
        const wobbleAmount = (lowPowerMode ? 0.0026 : 0.0054) * burst * qualityPreset.motionScale;
        if (camera) {
          cubeGroup.getWorldPosition(cubeWorldPos);
          cameraDirection.copy(camera.position).sub(cubeWorldPos).normalize();
        }

        faceActors.forEach((face: FaceActor, faceIndex: number) => {
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

          if (camera) {
            faceOutward
              .set(face.normal[0], face.normal[1], face.normal[2])
              .applyQuaternion(cubeGroup.quaternion)
              .normalize();
            const facing = Math.max(0, faceOutward.dot(cameraDirection));
            if (facing > strongestFacing) {
              strongestFacing = facing;
              strongestFaceIndex = faceIndex;
            }
            const emphasis = Math.pow(facing, 1.6);
            const opacity = inactiveFaceOpacity + (activeFaceOpacity - inactiveFaceOpacity) * emphasis;
            face.object.element.style.opacity = opacity.toFixed(3);
          }
        });

        const engageThreshold = lowPowerMode ? 0.62 : 0.56;
        const releaseThreshold = lowPowerMode ? 0.44 : 0.4;
        let nextActiveFaceIndex = activeFaceIndex;

        if (strongestFaceIndex === -1) {
          nextActiveFaceIndex = -1;
        } else if (activeFaceIndex === -1) {
          nextActiveFaceIndex = strongestFacing >= engageThreshold ? strongestFaceIndex : -1;
        } else if (strongestFacing < releaseThreshold) {
          nextActiveFaceIndex = -1;
        } else {
          nextActiveFaceIndex = strongestFaceIndex;
        }

        if (nextActiveFaceIndex !== activeFaceIndex) {
          if (activeFaceIndex >= 0) {
            faceActors[activeFaceIndex]?.object.element.classList.remove('cube-face-shell--active');
          }

          if (nextActiveFaceIndex >= 0) {
            const activeFaceElement = faceActors[nextActiveFaceIndex]?.object.element;
            if (activeFaceElement) {
              activeFaceElement.classList.add('cube-face-shell--active');
            }
          }

          activeFaceIndex = nextActiveFaceIndex;
        }

        const wireScale = 1 + burst * 0.06;
        wireframe.scale.set(wireScale, wireScale, wireScale);
      }

      // 6b. Update cube dust particles (bounded orbit around cube)
      if (dustMesh && dustParticles.length > 0) {
        if (gameMode !== dustWasGameMode) {
          dustWasGameMode = gameMode;
          dustTransition = 0;
        }
        dustTransition = Math.min(1, dustTransition + deltaSeconds * (lowPowerMode ? 0.6 : 1));
        const attachStrength = gameMode ? 0 : dustTransition;
        const scatterStrength = gameMode ? dustTransition : 1 - dustTransition;
        const timeSec = currentTime * 0.001;
        for (let i = 0; i < dustParticles.length; i += 1) {
          const dust = dustParticles[i];
          dust.angle += deltaSeconds * dust.speed;
          const wobble = Math.sin(timeSec * dust.wobbleSpeed + dust.phase) * dust.wobble;
          const bob = Math.cos(timeSec * dust.bobSpeed + dust.phase2) * dust.bob;
          const radius = Math.min(dustMaxRadius, Math.max(dustMinRadius, dust.baseRadius + wobble));
          const height = dust.baseHeight + bob;
          const driftAngle = dust.drift * timeSec;
          const x = Math.cos(dust.angle + driftAngle) * radius;
          const z = Math.sin(dust.angle + driftAngle) * radius;
          const orbitX = x;
          const orbitY = floatY + height;
          const orbitZ = z;
          dustOrbitTarget.set(orbitX, orbitY, orbitZ);

          if (scatterStrength > 0) {
            dustWander.set(
              (Math.sin(timeSec * 0.6 + dust.phase) + Math.cos(timeSec * 0.33 + dust.phase2)) * 0.4,
              Math.cos(timeSec * 0.5 + dust.phase) * 0.28,
              (Math.sin(timeSec * 0.42 + dust.phase2) + Math.cos(timeSec * 0.27 + dust.phase)) * 0.36
            );
            dust.velocity.addScaledVector(dustWander, deltaSeconds * (lowPowerMode ? 0.9 : 1.3));
            dust.velocity.multiplyScalar(Math.pow(0.985, deltaSeconds * 60));
            dust.position.addScaledVector(dust.velocity, deltaSeconds);
            if (dust.position.length() > dustScatterClamp) {
              dust.position.multiplyScalar(dustScatterClamp / dust.position.length());
              dust.velocity.multiplyScalar(0.45);
            }
          }

          if (attachStrength > 0) {
            dust.position.lerp(dustOrbitTarget, attachStrength * (lowPowerMode ? 0.08 : 0.12));
            dust.velocity.lerp(dustZero, attachStrength * 0.12);
          }

          dustFinalPosition.copy(dust.position).lerp(dustOrbitTarget, attachStrength);
          dustDummy.position.copy(dustFinalPosition);
          dustDummy.scale.setScalar(dust.scale * (0.85 + attachStrength * 0.15));
          dustDummy.updateMatrix();
          dustMesh.setMatrixAt(i, dustDummy.matrix);
        }
        dustMesh.instanceMatrix.needsUpdate = true;
      }

      // 7. Render
      const scene = sceneRef.current;
      const webglScene = webglSceneRef.current;
      const cssRenderer = cssRendererRef.current;
      const webglRenderer = webglRendererRef.current;

      if (scene && camera && cssRenderer) {
        cssRenderer.render(scene, camera);
      }
      if (webglScene && camera && webglRenderer) {
        if (composerRef.current) {
          composerRef.current.render();
        } else {
          webglRenderer.render(webglScene, camera);
        }
      }

      if (!readyNotifiedRef.current) {
        readyNotifiedRef.current = true;
        onReady?.();
      }

      hasRenderedOnce = true;
    };

    // Assign the starter
    startAnimationRef.current = () => {
      if (animationId === 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start immediately
    startAnimationRef.current();

    // Resize Handler works here too because it has closure access to everything
    const handleResize = () => {
      // Restart loop if needed or just let next frame handle it
      if (animationId === 0) startAnimationRef.current?.();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      animationId = 0;
      startAnimationRef.current = null;
      if (dustMesh && webglSceneRef.current) {
        webglSceneRef.current.remove(dustMesh);
      }
      dustGeometry?.dispose();
      dustMaterial?.dispose();
    };
  }, [
    initialized, targetFPS, lowPowerMode, floatAmplitude, cubeSize, activeFaceOpacity, inactiveFaceOpacity, prefersReducedMotion,
    updatePhysics, updateCameraFlight, updateStarField, reportFrame, qualityPreset,
    // Refs in dependencies is generally safe but technically unnecessary as they are stable.
    // However, we include `initialized` which is the signal that refs are ready.
    cameraFlightRef, cameraRef, cssRendererRef, currentRotationRef, isDraggingRef,
    rotationBurstRef, sceneRef, userCameraDistanceRef, velocityRef, webglRendererRef, webglSceneRef, onReady, withSingularityBackground
  ]);

  return (
    <>
      <div ref={webglContainerRef} data-testid="scene-webgl" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <div ref={containerRef} data-testid="scene-css3d" style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
    </>
  );
}
