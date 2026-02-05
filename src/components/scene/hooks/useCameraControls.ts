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

                velocityRef.current.y = deltaX * 0.005;
                velocityRef.current.x = deltaY * 0.005;

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

    const updatePhysics = (lowPowerMode: boolean) => {
        if (!isDraggingRef.current) {
            // Apply Velocity
            currentRotationRef.current.x += velocityRef.current.x;
            currentRotationRef.current.y += velocityRef.current.y;

            // Apply Target Lerp
            const dx = targetRotationRef.current.x - currentRotationRef.current.x;
            const dy = targetRotationRef.current.y - currentRotationRef.current.y;
            const rotationLerp = lowPowerMode ? 0.075 : 0.06;

            currentRotationRef.current.x += dx * rotationLerp;
            currentRotationRef.current.y += dy * rotationLerp;

            // Decaying velocity
            velocityRef.current.x *= 0.95;
            velocityRef.current.y *= 0.95;
        }

        // Clamp Pitch
        currentRotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, currentRotationRef.current.x));
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
