import { useEffect, useRef, useState } from 'react';

interface JoystickProps {
    onMove: (x: number, y: number) => void;
    className?: string;
}

export function Joystick({ onMove, className }: JoystickProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleStart = (clientX: number, clientY: number) => {
            setActive(true);
            handleMove(clientX, clientY);
        };

        const handleMove = (clientX: number, clientY: number) => {
            if (!active || !container) return;
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const maxDist = rect.width / 2;

            let dx = clientX - centerX;
            let dy = clientY - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > maxDist) {
                dx = (dx / dist) * maxDist;
                dy = (dy / dist) * maxDist;
            }

            setPosition({ x: dx, y: dy });
            onMove(dx / maxDist, dy / maxDist);
        };

        const handleEnd = () => {
            setActive(false);
            setPosition({ x: 0, y: 0 });
            onMove(0, 0);
        };

        const onTouchStart = (e: TouchEvent) => {
            e.preventDefault(); // Prevent scroll
            handleStart(e.touches[0].clientX, e.touches[0].clientY);
        };

        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            if (active) handleMove(e.touches[0].clientX, e.touches[0].clientY);
        };

        const onMouseDown = (e: MouseEvent) => {
            handleStart(e.clientX, e.clientY);
        };

        const onMouseMove = (e: MouseEvent) => {
            if (active) handleMove(e.clientX, e.clientY);
        };

        const onMouseUp = () => {
            if (active) handleEnd();
        };

        container.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', handleEnd);
        container.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            container.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', handleEnd);
            container.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [active, onMove]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ touchAction: 'none' }}
        >
            <div
                style={{
                    width: '40%',
                    height: '40%',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 65, 0.5)',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
}
