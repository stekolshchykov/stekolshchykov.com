import React from 'react';

interface JoystickDebugProps {
    left: { x: number; y: number };
    right: { x: number; y: number };
    isGameMode: boolean;
}

export function JoystickDebug({ left, right, isGameMode }: JoystickDebugProps) {
    if (!isGameMode) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '100px',
            left: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#0f0',
            padding: '10px',
            fontFamily: 'monospace',
            fontSize: '12px',
            zIndex: 9999,
            pointerEvents: 'none',
            border: '1px solid #0f0'
        }}>
            <div>MODE: GAME</div>
            <div style={{ marginTop: '5px' }}>LEFT (MOVE):</div>
            <div>X: {left.x.toFixed(3)}</div>
            <div>Y: {left.y.toFixed(3)}</div>
            <div style={{ marginTop: '5px' }}>RIGHT (LOOK):</div>
            <div>X: {right.x.toFixed(3)}</div>
            <div>Y: {right.y.toFixed(3)}</div>
        </div>
    );
}
