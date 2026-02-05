import { useRef, useEffect } from 'react';
import type { Locale } from '../content/stekolschikovContent';
import { logEvent } from '../observability/logger';

// Hooks
import { useSceneInit } from './scene/hooks/useSceneInit';
import { useStarField } from './scene/hooks/useStarField';
import { useCelestialBodies } from './scene/hooks/useCelestialBodies';
import { useCameraControls } from './scene/hooks/useCameraControls';
import { useCinematicCamera } from './scene/hooks/useCinematicCamera';
import { createCubeStructure, FaceActor } from './scene/CubeStructure';
import { Vector3, Group, LineSegments } from 'three';

// Toggle for Cube Visibility
const SHOW_CUBE = true;

interface Scene3DProps {
  targetRotation: { x: number; y: number };
  locale: Locale;
}

export function Scene3D({ targetRotation, locale }: Scene3DProps) {
  // --- Constants & Config ---
  const containerRef = useRef<HTMLDivElement>(null);
  const webglContainerRef = useRef<HTMLDivElement>(null);
  const startAnimationRef = useRef<(() => void) | null>(null);

  const viewportWidth = window.innerWidth;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isPhone = viewportWidth < 700;
  const isCompactViewport = viewportWidth < 900;
  const isTablet = viewportWidth < 1100;
  const isLowCoreCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const lowPowerMode = prefersReducedMotion || isCompactViewport || isLowCoreCpu;
  const maxPixelRatio = lowPowerMode ? 1 : 1.35;
  const targetFPS = lowPowerMode ? 24 : 50;
  const floatAmplitude = lowPowerMode ? 8 : 20;

  // Geometry Config
  const faceSize = isPhone ? 420 : isTablet ? 620 : 860;
  const facePadding = isPhone ? 14 : isTablet ? 20 : 28;
  const faceAlpha = lowPowerMode ? 0.92 : 0.78;
  const faceDepth = Math.round(faceSize * 0.58);
  const cubeSize = faceDepth * 2;
  const minZoom = Math.max(720, cubeSize * 0.95);
  const maxZoom = Math.max(2200, cubeSize * 2.5);

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
  const { updateCelestialUniforms, handleResize: handleCelestialResize } = useCelestialBodies({
    sceneRef: webglSceneRef,
    lowPowerMode
  });

  // 3. Star Field
  const { updateStarField } = useStarField({
    sceneRef: webglSceneRef,
    lowPowerMode,
    flightEnvelope: 0
  });

  // 4. Camera Controls (Interaction)
  const defaultCameraDistance = isPhone ? 1250 : isTablet ? 1400 : 1500;
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
    defaultCameraDistance: isPhone ? 1250 : isTablet ? 1400 : 1500,
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
    if (!initialized || !startAnimationRef.current) return;

    // We define the animation logic here to ensure refs are safe
    let animationId = 0;
    let lastTime = 0;
    let hasRenderedOnce = false;
    const frameDelay = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationId = 0;

      // Motion Check Optimization
      const hasMotion =
        isDraggingRef.current ||
        cameraFlightRef.current.active ||
        rotationBurstRef.current.active ||
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

      // 1. Update Physics / Camera Controls
      updatePhysics(lowPowerMode);

      // 2. Float Animation
      const floatY = Math.sin(currentTime * 0.0005) * floatAmplitude;
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
        burst = 0
      } = updateCameraFlight(
        currentTime,
        userCameraDistanceRef.current,
        floatY,
        lookAtTarget
      ) || {};

      // Calculate Camera Position
      const orbitScale = 1 + flightEnvelope * (cameraFlightRef.current.orbitScale - 1);
      const cameraOrbitRadius = Math.max(72, cameraDistance * (0.09 * orbitScale));
      const cameraOffsetX = Math.sin(cameraYaw) * cameraOrbitRadius;
      const cameraOffsetY = Math.sin(cameraPitch) * cameraOrbitRadius * 0.5;
      const cameraOffsetZ = Math.cos(cameraYaw) * cameraOrbitRadius * 0.18;

      const camera = cameraRef.current;
      if (camera) {
        camera.position.set(cameraOffsetX, floatY + cameraOffsetY, cameraDistance + cameraOffsetZ);
        camera.lookAt(lookAtTarget);
        camera.rotation.z = cameraRoll;

        // 4. Update Celestial Objects
        updateCelestialUniforms(currentTime, camera.position, camera.matrixWorld);

        // 5. Update Star Field
        updateStarField(deltaTime / 1000, camera.position);
      }

      // 6. Update Cube Jitter/Wobble
      if (cubeRefs.current) {
        const { cubeGroup, wireframe, faceActors } = cubeRefs.current;

        // Tilt from Flight
        const cubeTiltX = Math.sin(flightSwirl * 1.2) * 0.02 * flightEnvelope;
        const cubeTiltY = Math.cos(flightSwirl * 0.95) * 0.03 * flightEnvelope;
        const cubeTiltZ = Math.sin(flightSwirl * 1.55) * 0.02 * flightEnvelope;

        cubeGroup.rotation.x = currentRotationRef.current.x + cubeTiltX;
        cubeGroup.rotation.y = currentRotationRef.current.y + cubeTiltY;
        cubeGroup.rotation.z = cubeTiltZ;

        wireframe.rotation.x = currentRotationRef.current.x + cubeTiltX * 1.06;
        wireframe.rotation.y = currentRotationRef.current.y + cubeTiltY * 1.06;
        wireframe.rotation.z = cubeTiltZ * 1.1;

        // Burst Effect (Exploding Faces)
        const explodeDistance = cubeSize * (lowPowerMode ? 0.08 : 0.15) * burst;
        const wobbleAmount = (lowPowerMode ? 0.005 : 0.01) * burst;

        faceActors.forEach((face: FaceActor) => {
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
      }

      // 7. Render
      const scene = sceneRef.current;
      const webglScene = webglSceneRef.current;
      const cssRenderer = cssRendererRef.current;
      const webglRenderer = webglRendererRef.current;

      if (scene && webglScene && camera && cssRenderer && webglRenderer) {
        cssRenderer.render(scene, camera);
        webglRenderer.render(webglScene, camera);
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
      handleCelestialResize(window.innerWidth, window.innerHeight);
      // Restart loop if needed or just let next frame handle it
      if (animationId === 0) startAnimationRef.current?.();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      animationId = 0;
    };
  }, [
    initialized, targetFPS, lowPowerMode, floatAmplitude, cubeSize,
    updatePhysics, updateCameraFlight, updateCelestialUniforms, updateStarField, handleCelestialResize,
    // Refs in dependencies is generally safe but technically unnecessary as they are stable.
    // However, we include `initialized` which is the signal that refs are ready.
    cameraFlightRef, cameraRef, cssRendererRef, currentRotationRef, isDraggingRef,
    rotationBurstRef, sceneRef, userCameraDistanceRef, velocityRef, webglRendererRef, webglSceneRef
  ]);

  return (
    <>
      <div ref={webglContainerRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
    </>
  );
}
