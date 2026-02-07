import { useRef, useEffect, RefObject } from 'react';
import { logRuntime } from '../../../observability/logger';

interface CameraControlsConfig {
    interactionTargetRef: RefObject<HTMLElement | null>;
    minZoom: number;
    maxZoom: number;
    defaultCameraDistance: number;
    startAnimation: () => void | undefined;
}

export function useCameraControls({
    interactionTargetRef,
    minZoom,
    maxZoom,
    defaultCameraDistance,
    startAnimation
}: CameraControlsConfig) {
    const currentRotationRef = useRef({ x: 0, y: 0 });
    const targetRotationRef = useRef({ x: 0, y: 0 });
    const velocityRef = useRef({ x: 0, y: 0 });
    const userCameraDistanceRef = useRef(defaultCameraDistance);
    const isDraggingRef = useRef(false);
    const previousMousePositionRef = useRef({ x: 0, y: 0 });
    const previousRotationRef = useRef({ x: 0, y: 0 });
    const lastTargetRef = useRef({ x: 0, y: 0 });
    const transitionRef = useRef({
        active: false,
        elapsed: 0,
        duration: 1.8,
        from: { x: 0, y: 0 },
        to: { x: 0, y: 0 },
    });

    useEffect(() => {
        const element = interactionTargetRef.current;
        if (!element) return;

        const onMouseDown = (e: MouseEvent) => {
            isDraggingRef.current = true;
            logRuntime('debug', 'scene3d-controls', 'Drag started', { x: e.clientX, y: e.clientY });
            previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
            velocityRef.current = { x: 0, y: 0 };
            startAnimation();
        };

        const onMouseMove = (e: MouseEvent) => {
            if (isDraggingRef.current) {
                const deltaX = e.clientX - previousMousePositionRef.current.x;
                const deltaY = e.clientY - previousMousePositionRef.current.y;

                const dragSensitivity = 0.0032;
                const nextVelocityY = deltaX * dragSensitivity;
                const nextVelocityX = deltaY * dragSensitivity;

                // Smooth input to avoid jitter from uneven pointer events.
                velocityRef.current.y = velocityRef.current.y * 0.7 + nextVelocityY * 0.3;
                velocityRef.current.x = velocityRef.current.x * 0.7 + nextVelocityX * 0.3;

                previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
                startAnimation();
            }
        };

        const onMouseUp = () => {
            isDraggingRef.current = false;
            logRuntime('debug', 'scene3d-controls', 'Drag ended');
        };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            userCameraDistanceRef.current += e.deltaY * 0.5;
            userCameraDistanceRef.current = Math.max(minZoom, Math.min(maxZoom, userCameraDistanceRef.current));
            logRuntime('debug', 'scene3d-controls', 'Zoom changed', {
                deltaY: e.deltaY,
                cameraZ: userCameraDistanceRef.current,
            });
            startAnimation();
        };

        element.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        element.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            element.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            element.removeEventListener('wheel', onWheel);
        };
    }, [interactionTargetRef, minZoom, maxZoom, startAnimation]);

    const updatePhysics = (lowPowerMode: boolean, deltaSeconds = 1 / 60) => {
        const safeDelta = Math.min(0.05, Math.max(1 / 240, deltaSeconds));

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const shortestAngleDelta = (from: number, to: number) =>
            Math.atan2(Math.sin(to - from), Math.cos(to - from));

        if (isDraggingRef.current) {
            currentRotationRef.current.x += velocityRef.current.x;
            currentRotationRef.current.y += velocityRef.current.y;
            targetRotationRef.current = { ...currentRotationRef.current };
            transitionRef.current.active = false;
            transitionRef.current.elapsed = 0;
            lastTargetRef.current = { ...targetRotationRef.current };
        } else {
            const target = targetRotationRef.current;
            const lastTarget = lastTargetRef.current;
            const deltaTargetX = target.x - lastTarget.x;
            const deltaTargetY = shortestAngleDelta(lastTarget.y, target.y);
            const targetChanged = Math.abs(deltaTargetX) > 0.0008 || Math.abs(deltaTargetY) > 0.0008;

            if (targetChanged) {
                const travel = Math.hypot(deltaTargetX, deltaTargetY);
                const duration = Math.min(2.5, Math.max(1.5, 1.4 + travel * 0.5));
                transitionRef.current = {
                    active: true,
                    elapsed: 0,
                    duration,
                    from: { ...currentRotationRef.current },
                    to: { x: target.x, y: target.y },
                };
                lastTargetRef.current = { ...target };
            }

            if (transitionRef.current.active) {
                transitionRef.current.elapsed += safeDelta;
                const progress = Math.min(1, transitionRef.current.elapsed / transitionRef.current.duration);
                const eased = easeOutCubic(progress);
                const from = transitionRef.current.from;
                const to = transitionRef.current.to;
                const dy = shortestAngleDelta(from.y, to.y);

                currentRotationRef.current.x = from.x + (to.x - from.x) * eased;
                currentRotationRef.current.y = from.y + dy * eased;

                if (progress >= 1) {
                    transitionRef.current.active = false;
                    currentRotationRef.current.x = to.x;
                    currentRotationRef.current.y = to.y;
                }
            } else {
                // Subtle settle to target to avoid micro-jitter.
                const snap = lowPowerMode ? 0.08 : 0.12;
                const dx = target.x - currentRotationRef.current.x;
                const dy = shortestAngleDelta(currentRotationRef.current.y, target.y);
                currentRotationRef.current.x += dx * snap;
                currentRotationRef.current.y += dy * snap;
            }
        }

        currentRotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, currentRotationRef.current.x));

        const prev = previousRotationRef.current;
        const dx = currentRotationRef.current.x - prev.x;
        const dy = currentRotationRef.current.y - prev.y;
        velocityRef.current.x = dx;
        velocityRef.current.y = dy;
        previousRotationRef.current = { x: currentRotationRef.current.x, y: currentRotationRef.current.y };
    };

    return {
        currentRotationRef,
        targetRotationRef,
        velocityRef,
        userCameraDistanceRef,
        isDraggingRef,
        updatePhysics
    };
}
