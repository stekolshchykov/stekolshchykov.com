import { useRef, useEffect } from 'react';
import type { Locale } from '../content/stekolschikovContent';
import { logEvent } from '../observability/logger';

// Hooks
import { useSceneInit } from './scene/hooks/useSceneInit';
import { useStarField } from './scene/hooks/useStarField';
import { useCelestialBodies } from './scene/hooks/useCelestialBodies';
import { useCameraControls } from './scene/hooks/useCameraControls';
import { useCinematicCamera } from './scene/hooks/useCinematicCamera';
import { useAdaptiveQuality } from './scene/hooks/useAdaptiveQuality';
import { usePostProcessing } from './scene/hooks/usePostProcessing';
import { createCubeStructure, FaceActor } from './scene/CubeStructure';
import { Vector3, Group, LineSegments, Frustum, Matrix4 } from 'three';

// Toggle for Cube Visibility
const SHOW_CUBE = true;

interface Scene3DProps {
  targetRotation: { x: number; y: number };
  locale: Locale;
  onReady?: () => void;
}

export function Scene3D({ targetRotation, locale, onReady }: Scene3DProps) {
  // --- Constants & Config ---
  const containerRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);
  const startAnimationRef = useRef<(() => void) | null>(null);
  const readyNotifiedRef = useRef(false);

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

  // --- Hooks Initialization ---

  // 1. Scene Setup
  const { sceneRef, webglSceneRef, cameraRef, cssRendererRef, webglRendererRef, initialized } = useSceneInit({
    pixelRatio: maxPixelRatio,
    isPhone,
    isTablet,
    containerRef,
    webglContainerRef
  });

  // 2. Celestial Bodies (Sun, Black Hole)
  // We pass null if not initialized, the hook handles it safely
  const { updateCelestialUniforms, handleResize: handleCelestialResize, applyQuality: applyCelestialQuality } = useCelestialBodies({
    sceneRef: webglSceneRef,
    cameraRef,
    lowPowerMode,
    initialized
  });

  // 3. Star Field
  const { updateStarField, applyQuality: applyStarQuality } = useStarField({
    sceneRef: webglSceneRef,
    lowPowerMode,
    initialized
  });

  const { composerRef } = usePostProcessing({
    renderer: webglRendererRef.current,
    scene: webglSceneRef.current,
    camera: cameraRef.current,
    initialized,
    lowPowerMode
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

  useEffect(() => {
    applyCelestialQuality({
      blackHoleDetail: qualityPreset.blackHoleDetail,
      motionScale: qualityPreset.motionScale,
    });
    applyStarQuality({
      starDensity: qualityPreset.starDensity,
      starTwinkle: qualityPreset.starTwinkle,
    });
    const webglRenderer = webglRendererRef.current;
    if (webglRenderer) {
      webglRenderer.setPixelRatio(
        Math.min(window.devicePixelRatio, maxPixelRatio * qualityPreset.pixelRatioScale)
      );
    }
    logEvent('scene.performance.mode', { qualityTier }, 'debug');
  }, [applyCelestialQuality, applyStarQuality, maxPixelRatio, qualityPreset, qualityTier, webglRendererRef]);

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

  // 6. Cube Structure
  const cubeRefs = useRef<{
    cubeGroup: Group;
    wireframe: LineSegments;
    faceActors: FaceActor[];
  } | null>(null);

  // --- Cube Lifecycle ---
  const hasCreatedCube = useRef(false);

  useEffect(() => {
    // Reset if initialization is lost (e.g. StrictMode or Context Loss)
    if (!initialized) {
      hasCreatedCube.current = false;
      return;
    }

    // Only create cube when initialized is true (guarantees refs are populated)
    if (initialized && !hasCreatedCube.current && sceneRef.current && webglSceneRef.current) {
      const { cubeGroup, wireframe, faceActors } = createCubeStructure({
        locale,
        faceSize,
        facePadding,
        faceAlpha,
        faceDepth,
        cubeSize,
        isPhone: isPhone || false,
        lowPowerMode,
      });

      if (SHOW_CUBE) {
        webglSceneRef.current.add(wireframe);
        sceneRef.current.add(cubeGroup);
      }

      cubeRefs.current = { cubeGroup, wireframe, faceActors };
      hasCreatedCube.current = true;
      logEvent('scene.cube.created', { locale });
    }
  }, [initialized, locale, faceSize, facePadding, faceAlpha, faceDepth, cubeSize, isPhone, lowPowerMode, sceneRef, webglSceneRef]);

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
    const previousCameraPosition = new Vector3();
    const smoothedCameraPosition = new Vector3();
    const smoothedLookAt = new Vector3();
    let hasSmoothedCamera = false;
    let hasPreviousCameraPosition = false;
    const faceFlashTimeouts = new Map<number, number>();
    let activeFaceIndex = -1;

    const animate = (currentTime: number) => {
      animationId = 0;
      frameCount++;

      // Motion Check Optimization
      const rotationErrorX = targetRotationRef.current.x - currentRotationRef.current.x;
      const rotationErrorY = targetRotationRef.current.y - currentRotationRef.current.y;
      const hasMotion =
        isDraggingRef.current ||
        cameraFlightRef.current.active ||
        rotationBurstRef.current.active ||
        Math.abs(rotationErrorX) > 0.0006 ||
        Math.abs(rotationErrorY) > 0.0006 ||
        Math.abs(velocityRef.current.x) > 0.0002 ||
        Math.abs(velocityRef.current.y) > 0.0002;

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

      // 1. Update Physics / Camera Controls
      updatePhysics(lowPowerMode, deltaSeconds);

      // 2. Float Animation
      const floatY = Math.sin(currentTime * 0.00035) * floatAmplitude;
      if (cubeRefs.current) {
        cubeRefs.current.cubeGroup.position.y = floatY;
        cubeRefs.current.wireframe.position.y = floatY;
      }

      // 3. Cinematic Flight & Camera Position
      const lookAtTarget = new Vector3(0, floatY, 0);
      const {
        cameraDistance = 1500,
        cameraYaw = 0,
        cameraPitch = 0,
        cameraRoll = 0,
        flightEnvelope = 0,
        flightSwirl = 0,
        burst = 0,
        cameraOverridePosition = null,
        lookAtOverride = null
      } = updateCameraFlight(
        currentTime,
        userCameraDistanceRef.current,
        floatY,
        lookAtTarget,
        qualityPreset.motionScale
      ) || {};

      // Calculate Camera Position
      const orbitScale = lockCameraToActiveFace ? 0 : 1 + flightEnvelope * (cameraFlightRef.current.orbitScale - 1);
      const cameraOrbitRadius = lockCameraToActiveFace ? 0 : Math.max(56, cameraDistance * (0.072 * orbitScale));
      const cameraOffsetX = Math.sin(cameraYaw) * cameraOrbitRadius;
      const cameraOffsetY = Math.sin(cameraPitch) * cameraOrbitRadius * 0.42;
      const cameraOffsetZ = Math.cos(cameraYaw) * cameraOrbitRadius * 0.16;
      const effectiveLookAt = lookAtOverride ?? lookAtTarget;

      const camera = cameraRef.current;
      if (camera) {
        const desiredCameraPosition = new Vector3();
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

        // 4. Update Celestial Objects
        updateCelestialUniforms(currentTime);

        // 5. Update Star Field
        let cameraSpeed = 0;
        if (hasPreviousCameraPosition) {
          cameraSpeed = camera.position.distanceTo(previousCameraPosition) / Math.max(deltaSeconds, 1 / 240);
        } else {
          hasPreviousCameraPosition = true;
        }
        previousCameraPosition.copy(camera.position);
        const rotationSpeed = Math.hypot(velocityRef.current.x, velocityRef.current.y) / Math.max(deltaSeconds, 1 / 240);
        const rotationBoost = rotationSpeed * (lowPowerMode ? 1600 : 2600);
        updateStarField(deltaSeconds, camera.position, flightEnvelope, cameraSpeed + rotationBoost);
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
              if (!prefersReducedMotion) {
                activeFaceElement.classList.remove('cube-face-shell--flash');
                void activeFaceElement.getBoundingClientRect();
                activeFaceElement.classList.add('cube-face-shell--flash');
                const existingTimeout = faceFlashTimeouts.get(nextActiveFaceIndex);
                if (existingTimeout !== undefined) {
                  window.clearTimeout(existingTimeout);
                }
                const timeout = window.setTimeout(() => {
                  activeFaceElement.classList.remove('cube-face-shell--flash');
                  faceFlashTimeouts.delete(nextActiveFaceIndex);
                }, lowPowerMode ? 340 : 620);
                faceFlashTimeouts.set(nextActiveFaceIndex, timeout);
              }
            }
          }

          activeFaceIndex = nextActiveFaceIndex;
        }

        const wireScale = 1 + burst * 0.06;
        wireframe.scale.set(wireScale, wireScale, wireScale);
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

      // --- DEBUG: Visibility Log (Every ~1 sec) ---
      if (import.meta.env.DEV && frameCount % 60 === 0 && camera) {
        const frustum = new Frustum();
        const matrix = new Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        frustum.setFromProjectionMatrix(matrix);

        // `cubeGroup` is a Group with CSS3D children (no geometry), so frustum checks
        // must target the wireframe mesh that has a valid geometry.
        const cubeVisible = cubeRefs.current ? frustum.intersectsObject(cubeRefs.current.wireframe) : false;

        // Basic distance checks
        const sunPos = new Vector3(700, 150, -600);
        const distToSun = camera.position.distanceTo(sunPos);
        const distToCenter = camera.position.distanceTo(new Vector3(0, floatY, 0));

        console.log('[Scene3D Debug]', {
          camPos: camera.position.toArray().map(v => Math.round(v)),
          lookAt: effectiveLookAt.toArray().map(v => Math.round(v)),
          distToSun: Math.round(distToSun),
          distToCenter: Math.round(distToCenter),
          cubeVisible,
          cubeRef: !!cubeRefs.current,
          webglChildren: webglSceneRef.current?.children.length,
          cssChildren: sceneRef.current?.children.length,
          initialized
        });
      }
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
      handleCelestialResize(window.innerWidth, window.innerHeight);
      // Restart loop if needed or just let next frame handle it
      if (animationId === 0) startAnimationRef.current?.();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      faceFlashTimeouts.forEach((timeout) => {
        window.clearTimeout(timeout);
      });
      faceFlashTimeouts.clear();
      animationId = 0;
      startAnimationRef.current = null;
    };
  }, [
    initialized, targetFPS, lowPowerMode, floatAmplitude, cubeSize, activeFaceOpacity, inactiveFaceOpacity, prefersReducedMotion,
    updatePhysics, updateCameraFlight, updateCelestialUniforms, updateStarField, handleCelestialResize, reportFrame, qualityPreset,
    // Refs in dependencies is generally safe but technically unnecessary as they are stable.
    // However, we include `initialized` which is the signal that refs are ready.
    cameraFlightRef, cameraRef, cssRendererRef, currentRotationRef, isDraggingRef,
    rotationBurstRef, sceneRef, userCameraDistanceRef, velocityRef, webglRendererRef, webglSceneRef, onReady
  ]);

  return (
    <>
      <div ref={webglContainerRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
    </>
  );
}
