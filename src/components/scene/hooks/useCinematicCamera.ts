import { useRef, useEffect } from 'react';
import { Vector3 } from 'three';
import { logRuntime } from '../../../observability/logger';

interface CinematicCameraConfig {
  targetRotation: { x: number; y: number };
  minZoom: number;
  maxZoom: number;
  defaultCameraDistance: number;
  isPhone: boolean;
  lowPowerMode: boolean;
  prefersReducedMotion: boolean;
  startAnimation: () => void;
  lockCamera: boolean;
}

interface PlanetOrbitConfig {
  radius: number;
  speed: number;
  phase: number;
  y: number;
  size: number;
}

const PLANET_ORBIT_Z_FACTOR = 0.62;
const SUN_POSITION = new Vector3(440, 220, -520);
const BLACK_HOLE_POSITION = new Vector3(-560, -140, -680);
const SAFETY_MULTIPLIER = 2;

const PLANETS_HIGH_POWER: PlanetOrbitConfig[] = [
  { radius: 260, speed: 0.65, phase: 0.3, y: -10, size: 16 },
  { radius: 360, speed: -0.42, phase: 1.1, y: 18, size: 13 },
  { radius: 210, speed: 0.9, phase: 2.2, y: 26, size: 11 },
  { radius: 510, speed: -0.26, phase: 2.85, y: -24, size: 9 },
];

const PLANETS_LOW_POWER: PlanetOrbitConfig[] = [
  { radius: 220, speed: 0.65, phase: 0.3, y: -10, size: 11 },
  { radius: 300, speed: -0.42, phase: 1.1, y: 18, size: 9 },
  { radius: 170, speed: 0.9, phase: 2.2, y: 26, size: 7 },
  { radius: 430, speed: -0.26, phase: 2.85, y: -24, size: 6 },
];

const TMP_VECTOR_A = new Vector3();
const TMP_VECTOR_B = new Vector3();
const TMP_VECTOR_C = new Vector3();
const TMP_VECTOR_D = new Vector3();

function smoothStep(t: number) {
  return t * t * (3 - 2 * t);
}

export function useCinematicCamera({
  targetRotation,
  minZoom,
  maxZoom,
  defaultCameraDistance,
  isPhone,
  lowPowerMode,
  prefersReducedMotion,
  startAnimation,
  lockCamera,
}: CinematicCameraConfig) {
  const orbitSubjectRef = useRef(new Vector3());
  const orbitLookRef = useRef(new Vector3());
  const orbitCameraRef = useRef(new Vector3());
  const orbitTargetRef = useRef(new Vector3());
  const safeCameraRef = useRef(new Vector3(0, 0, maxZoom * 0.62));
  const transitionCountRef = useRef(0);
  const hasInitializedTargetRef = useRef(false);

  const cameraFlightRef = useRef({
    active: false,
    startMs: 0,
    durationMs: 4200,
    shotReady: false,
    startCameraDistance: 0,
    targetCameraDistance: 0,
    phase: 0,
    shotMode: 'anchored' as 'anchored' | 'planet-orbit',
    orbitPlanetIndex: 0,
    lookPlanetIndex: 1,
    orbitDirection: 1 as 1 | -1,
    orbitTurns: 1.45,
    orbitRadius: 150,
    orbitLift: 28,
    orbitScale: 1.25,
  });

  const rotationBurstRef = useRef({ active: false, startMs: 0, seed: 0 });

  const getPlanetConfigs = () => (lowPowerMode ? PLANETS_LOW_POWER : PLANETS_HIGH_POWER);

  const getNoFlySpheres = (timeSec: number) => {
    const planetConfigs = getPlanetConfigs();
    const spheres: Array<{ center: Vector3; radius: number }> = [
      { center: SUN_POSITION, radius: (lowPowerMode ? 174 : 214) * SAFETY_MULTIPLIER },
      { center: BLACK_HOLE_POSITION, radius: (lowPowerMode ? 196 : 248) * SAFETY_MULTIPLIER },
    ];

    for (const planet of planetConfigs) {
      const angle = timeSec * planet.speed + planet.phase;
      spheres.push({
        center: new Vector3(
          SUN_POSITION.x + Math.cos(angle) * planet.radius,
          SUN_POSITION.y + planet.y,
          SUN_POSITION.z + Math.sin(angle) * planet.radius * PLANET_ORBIT_Z_FACTOR
        ),
        radius: Math.max(42, planet.size * 16) * SAFETY_MULTIPLIER,
      });
    }
    return spheres;
  };

  const applyAvoidance = (candidate: Vector3, timeSec: number) => {
    const spheres = getNoFlySpheres(timeSec);
    const start = safeCameraRef.current;
    const end = candidate.clone();

    for (const sphere of spheres) {
      const seg = TMP_VECTOR_A.copy(end).sub(start);
      const segLenSq = seg.lengthSq();
      if (segLenSq > 0.0001) {
        const t = Math.max(
          0,
          Math.min(1, TMP_VECTOR_B.copy(sphere.center).sub(start).dot(seg) / segLenSq)
        );
        const closest = TMP_VECTOR_C.copy(start).addScaledVector(seg, t);
        const d = closest.distanceTo(sphere.center);
        if (d < sphere.radius) {
          const normal = TMP_VECTOR_D.copy(closest).sub(sphere.center);
          if (normal.lengthSq() < 0.0001) {
            normal.copy(end).sub(sphere.center);
          }
          if (normal.lengthSq() < 0.0001) {
            normal.set(0, 1, 0);
          }
          normal.normalize();
          const correction = sphere.radius - d + 18;
          end.addScaledVector(normal, correction);
        }
      }

      const finalDist = end.distanceTo(sphere.center);
      if (finalDist < sphere.radius + 10) {
        const normal = TMP_VECTOR_A.copy(end).sub(sphere.center);
        if (normal.lengthSq() < 0.0001) {
          normal.set(0, 1, 0);
        } else {
          normal.normalize();
        }
        end.copy(sphere.center).addScaledVector(normal, sphere.radius + 10);
      }
    }

    safeCameraRef.current.copy(end);
    return end;
  };

  useEffect(() => {
    if (lockCamera) {
      cameraFlightRef.current.active = false;
      rotationBurstRef.current.active = false;
      startAnimation();
      return;
    }
    if (!hasInitializedTargetRef.current) {
      hasInitializedTargetRef.current = true;
      return;
    }

    transitionCountRef.current += 1;
    const transitionCount = transitionCountRef.current;
    const allowOrbitShot = !prefersReducedMotion && !isPhone && transitionCount % 4 === 0;
    const planetConfigs = getPlanetConfigs();
    const orbitPlanetIndex = Math.floor(Math.random() * planetConfigs.length);
    let lookPlanetIndex = Math.floor(Math.random() * planetConfigs.length);
    if (lookPlanetIndex === orbitPlanetIndex) {
      lookPlanetIndex = (lookPlanetIndex + 1) % planetConfigs.length;
    }

    cameraFlightRef.current = {
      ...cameraFlightRef.current,
      active: true,
      startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
      durationMs: (lowPowerMode ? 3400 : 3800) + Math.random() * (lowPowerMode ? 700 : 1200),
      shotReady: false,
      phase: Math.random() * Math.PI * 2,
      shotMode: allowOrbitShot ? 'planet-orbit' : 'anchored',
      orbitPlanetIndex,
      lookPlanetIndex,
      orbitDirection: Math.random() < 0.5 ? -1 : 1,
      orbitTurns: 1.2 + Math.random() * 0.8,
      orbitRadius: lowPowerMode ? 138 + Math.random() * 20 : 162 + Math.random() * 38,
      orbitLift: lowPowerMode ? 20 + Math.random() * 12 : 26 + Math.random() * 20,
      orbitScale: allowOrbitShot ? 1.3 : 1.16,
    };

    rotationBurstRef.current = {
      active: true,
      startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
      seed: rotationBurstRef.current.seed + 1,
    };

    logRuntime('debug', 'scene3d-camera', 'Camera transition triggered', {
      shotMode: cameraFlightRef.current.shotMode,
      durationMs: cameraFlightRef.current.durationMs,
    });

    startAnimation();
  }, [targetRotation, isPhone, lowPowerMode, prefersReducedMotion, startAnimation, lockCamera]);

  const updateCameraFlight = (
    currentTime: number,
    userCameraDistance: number,
    floatY: number,
    lookAtTarget: Vector3,
    motionScale = 1
  ) => {
    if (lockCamera) {
      const anchoredLook = new Vector3(0, floatY * 0.55, 0);
      lookAtTarget.lerp(anchoredLook, 0.2);
      return {
        cameraDistance: defaultCameraDistance,
        cameraYaw: 0,
        cameraPitch: 0,
        cameraRoll: 0,
        flightEnvelope: 0,
        flightSwirl: 0,
        burst: 0,
        cameraOverridePosition: null,
        lookAtOverride: null,
      };
    }
    let cameraDistance = userCameraDistance;
    let flightEnvelope = 0;
    let flightSwirl = 0;
    let cameraYaw = 0;
    let cameraPitch = 0;
    let cameraRoll = 0;
    let cameraOverridePosition: Vector3 | null = null;
    let lookAtOverride: Vector3 | null = null;

    if (!prefersReducedMotion && cameraFlightRef.current.active) {
      const flight = cameraFlightRef.current;

      if (!flight.shotReady) {
        flight.startCameraDistance = userCameraDistance;
        flight.targetCameraDistance = Math.max(
          minZoom * (lowPowerMode ? 0.82 : 0.76),
          Math.min(maxZoom * 0.78, userCameraDistance * (flight.shotMode === 'planet-orbit' ? 0.84 : 0.92))
        );
        flight.shotReady = true;
      }

      const progress = (currentTime - flight.startMs) / flight.durationMs;
      if (progress >= 1) {
        cameraFlightRef.current.active = false;
      } else {
        const clampedProgress = Math.max(0, Math.min(1, progress));
        const eased = smoothStep(clampedProgress);
        const envelope = Math.pow(Math.sin(Math.PI * clampedProgress), 1.35);

        flightEnvelope = envelope;
        flightSwirl = clampedProgress * Math.PI * 2 + flight.phase;

        const shotDistance =
          flight.startCameraDistance + (flight.targetCameraDistance - flight.startCameraDistance) * eased;
        const settleOscillation = Math.sin(clampedProgress * Math.PI * 1.8 + flight.phase) * Math.exp(-clampedProgress * 4.8);
        cameraDistance = Math.max(
          minZoom * 0.72,
          Math.min(maxZoom, shotDistance + settleOscillation * (lowPowerMode ? 8 : 14))
        );

        if (flight.shotMode === 'planet-orbit') {
          const planetConfigs = getPlanetConfigs();
          const orbitPlanet = planetConfigs[flight.orbitPlanetIndex] ?? planetConfigs[0];
          const lookPlanet = planetConfigs[flight.lookPlanetIndex] ?? planetConfigs[1];
          const timeSec = currentTime * 0.001;

          const orbitPlanetAngle = timeSec * orbitPlanet.speed + orbitPlanet.phase;
          const lookPlanetAngle = timeSec * lookPlanet.speed + lookPlanet.phase;

          orbitSubjectRef.current.set(
            SUN_POSITION.x + Math.cos(orbitPlanetAngle) * orbitPlanet.radius,
            SUN_POSITION.y + orbitPlanet.y,
            SUN_POSITION.z + Math.sin(orbitPlanetAngle) * orbitPlanet.radius * PLANET_ORBIT_Z_FACTOR
          );
          orbitLookRef.current.set(
            SUN_POSITION.x + Math.cos(lookPlanetAngle) * lookPlanet.radius,
            SUN_POSITION.y + lookPlanet.y,
            SUN_POSITION.z + Math.sin(lookPlanetAngle) * lookPlanet.radius * PLANET_ORBIT_Z_FACTOR
          );

          const orbitAngle = flight.phase + clampedProgress * Math.PI * 2 * flight.orbitTurns * flight.orbitDirection;
          const orbitRadius = flight.orbitRadius * (1 + 0.1 * Math.sin(clampedProgress * Math.PI * 2));
          const orbitLift = Math.sin(clampedProgress * Math.PI * 1.3 + flight.phase * 0.7) * flight.orbitLift;

          orbitCameraRef.current.set(
            orbitSubjectRef.current.x + Math.cos(orbitAngle) * orbitRadius,
            orbitSubjectRef.current.y + orbitLift,
            orbitSubjectRef.current.z + Math.sin(orbitAngle) * orbitRadius * 0.72
          );
          orbitTargetRef.current.copy(orbitLookRef.current).lerp(orbitSubjectRef.current, 0.16);

          cameraOverridePosition = applyAvoidance(orbitCameraRef.current, timeSec);
          lookAtOverride = orbitTargetRef.current;
        } else {
          const amp = (lowPowerMode ? 0.035 : 0.055) * motionScale;
          cameraYaw = Math.sin(flightSwirl) * amp * envelope;
          cameraPitch = Math.cos(flightSwirl * 0.9) * amp * 0.65 * envelope;
          cameraRoll = Math.sin(flightSwirl * 0.75) * (lowPowerMode ? 0.012 : 0.02) * motionScale * envelope;
        }
      }
    }

    let burst = 0;
    if (!prefersReducedMotion && rotationBurstRef.current.active) {
      const progress = (currentTime - rotationBurstRef.current.startMs) / (lowPowerMode ? 620 : 860);
      if (progress >= 1) {
        rotationBurstRef.current.active = false;
      } else {
        const envelope = Math.sin(Math.PI * progress);
        burst = Math.pow(Math.max(envelope, 0), 1.45);
      }
    }

    if (cameraFlightRef.current.active && lookAtOverride) {
      lookAtTarget.lerp(lookAtOverride, 0.9);
    } else {
      const anchoredLook = new Vector3(0, floatY * 0.55, 0);
      lookAtTarget.lerp(anchoredLook, 0.16);
    }

    return {
      cameraDistance,
      cameraYaw,
      cameraPitch,
      cameraRoll,
      flightEnvelope,
      flightSwirl,
      burst,
      cameraOverridePosition,
      lookAtOverride,
    };
  };

  return {
    cameraFlightRef,
    rotationBurstRef,
    updateCameraFlight,
  };
}
