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
}

export function useCinematicCamera({
    targetRotation,
    minZoom,
    maxZoom,
    isPhone,
    lowPowerMode,
    prefersReducedMotion,
    startAnimation
}: CinematicCameraConfig) {
    const canvasSmoothStep = (t: number) => t * t * (3 - 2 * t);

    // Flight State
    const cameraFlightRef = useRef({
        active: false,
        startMs: 0,
        durationMs: 1080,
        yawAmp: 0,
        pitchAmp: 0,
        rollAmp: 0,
        phase: 0,
        shotReady: false,
        distanceMode: 'far' as 'near' | 'far' | 'close',
        startCameraDistance: 0,
        targetCameraDistance: 0,
        orbitScale: 1,
        targetSubject: 'blackhole' as 'blackhole' | 'sun',
    });

    const rotationBurstRef = useRef({ active: false, startMs: 0, seed: 0 });
    const transitionCountRef = useRef(0);
    const hasInitializedTargetRef = useRef(false);

    // Trigger Flight on Target Update
    useEffect(() => {
        if (hasInitializedTargetRef.current) {
            rotationBurstRef.current = {
                active: true,
                startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
                seed: rotationBurstRef.current.seed + 1,
            };
            transitionCountRef.current += 1;

            // Determine Shot Type
            const shouldRunCloseShot = transitionCountRef.current % 2 === 0;
            const distanceMode = shouldRunCloseShot ? 'close' : Math.random() < 0.5 ? 'near' : 'far';

            // Determine Target Subject (Sun vs Black Hole)
            const targetSubject = Math.random() > 0.65 ? 'sun' : 'blackhole';
            const nearShot = distanceMode === 'near';
            const closeShot = distanceMode === 'close';

            cameraFlightRef.current = {
                ...cameraFlightRef.current,
                active: true,
                startMs: typeof performance !== 'undefined' ? performance.now() : Date.now(),
                durationMs: closeShot ? 1460 : nearShot ? 1260 : 1380,
                yawAmp: (Math.random() * 2 - 1) * (closeShot ? 0.78 : 0.64),
                pitchAmp: (Math.random() * 2 - 1) * (closeShot ? 0.38 : 0.3),
                rollAmp: (Math.random() * 2 - 1) * (closeShot ? 0.22 : 0.18),
                phase: Math.random() * Math.PI * 2,
                shotReady: false,
                distanceMode,
                orbitScale: closeShot ? 2.1 : nearShot ? 1.65 : 1.15,
                targetSubject,
            };

            logRuntime('debug', 'scene3d-camera', 'Camera flight triggered', {
                shot: distanceMode,
                subject: targetSubject
            });
        } else {
            hasInitializedTargetRef.current = true;
        }
        startAnimation();
    }, [targetRotation, startAnimation]);

    // Main Update Function
    const updateCameraFlight = (
        currentTime: number,
        userCameraDistance: number,
        floatY: number,
        lookAtTarget: Vector3
    ) => {
        let cameraDistance = userCameraDistance;
        let flightEnvelope = 0;
        let flightSwirl = 0;
        let cameraYaw = 0;
        let cameraPitch = 0;
        let cameraRoll = 0;

        // --- Camera Flight Logic ---
        if (!prefersReducedMotion && cameraFlightRef.current.active) {
            const flight = cameraFlightRef.current;

            // Initialization Frame
            if (!flight.shotReady) {
                flight.startCameraDistance = userCameraDistance;
                flight.targetCameraDistance = flight.distanceMode === 'close'
                    ? Math.max(minZoom * 0.52, 420)
                    : flight.distanceMode === 'near'
                        ? Math.max(minZoom * 0.72, minZoom - 180)
                        : Math.min(maxZoom * 0.82, minZoom + (maxZoom - minZoom) * 0.42 + Math.random() * 80);
                flight.shotReady = true;
            }

            // Progression
            const durationMs = lowPowerMode ? flight.durationMs * 0.82 : flight.durationMs;
            const progress = (currentTime - flight.startMs) / durationMs;

            if (progress >= 1) {
                cameraFlightRef.current.active = false;
            } else {
                // Easing
                const eased = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                const distancePulse = Math.sin(Math.PI * eased);
                const envelope = Math.pow(Math.sin(Math.PI * progress), 1.1);
                const swirl = progress * Math.PI * 2.8 + flight.phase;

                flightEnvelope = envelope;
                flightSwirl = swirl;

                // Shake/Move amplitudes
                const ampMultiplier = lowPowerMode ? 0.55 : 1;
                cameraYaw = flight.yawAmp * envelope * ampMultiplier;
                cameraPitch = flight.pitchAmp * envelope * Math.cos(swirl) * ampMultiplier;
                cameraRoll = flight.rollAmp * envelope * Math.sin(swirl * 1.2) * ampMultiplier;

                // Zoom Interpolation
                const shotDistance =
                    flight.startCameraDistance + (flight.targetCameraDistance - flight.startCameraDistance) * distancePulse;
                const minDynamicZoom = flight.distanceMode === 'close'
                    ? Math.max(minZoom * 0.42, 360)
                    : flight.distanceMode === 'near'
                        ? Math.max(minZoom * 0.68, minZoom - 260)
                        : minZoom;
                cameraDistance = Math.max(minDynamicZoom, Math.min(maxZoom, shotDistance));
            }
        }

        // --- Burst / Wobble for Cube ---
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

        // --- Look At Logic ---
        if (cameraFlightRef.current.active && cameraFlightRef.current.targetSubject === 'sun') {
            const sunBias = isPhone
                ? new Vector3(400, 100, -300)
                : new Vector3(700, 150, -600);

            const progress = (currentTime - cameraFlightRef.current.startMs) / (lowPowerMode ? cameraFlightRef.current.durationMs * 0.82 : cameraFlightRef.current.durationMs);
            const smoothProgress = Math.min(1, Math.max(0, canvasSmoothStep(progress)));

            lookAtTarget.lerp(sunBias, smoothProgress * 0.95);
        } else {
            const bhBias = new Vector3(0, floatY * 0.5, 0);
            lookAtTarget.lerp(bhBias, 0.1);
        }

        return {
            cameraDistance,
            cameraYaw,
            cameraPitch,
            cameraRoll,
            flightEnvelope,
            flightSwirl,
            burst
        };
    };

    return {
        cameraFlightRef,
        rotationBurstRef,
        updateCameraFlight
    };
}
