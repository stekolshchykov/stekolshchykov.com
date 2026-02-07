import { Vector3, Euler, Camera } from 'three';

export interface TelemetryFrame {
    timestamp: number;
    joystickLeft: { x: number; y: number };
    joystickRight: { x: number; y: number };
    cameraRotation: { x: number; y: number; z: number };
    isGameMode: boolean;
}

export class TelemetryLogger {
    private static instance: TelemetryLogger;
    private logs: TelemetryFrame[] = [];
    private maxLogs = 600; // 10 seconds at 60fps
    private isRecording = false;

    private constructor() { }

    static getInstance(): TelemetryLogger {
        if (!TelemetryLogger.instance) {
            TelemetryLogger.instance = new TelemetryLogger();
        }
        return TelemetryLogger.instance;
    }

    start() {
        this.isRecording = true;
        this.logs = [];
        console.log('[Telemetry] Started recording...');
    }

    stop() {
        this.isRecording = false;
        console.log(`[Telemetry] Stopped. Captured ${this.logs.length} frames.`);
        this.dump();
    }

    logFrame(
        joystickLeft: { x: number; y: number },
        joystickRight: { x: number; y: number },
        camera: Camera,
        isGameMode: boolean
    ) {
        if (!this.isRecording) return;

        this.logs.push({
            timestamp: Date.now(),
            joystickLeft: { ...joystickLeft },
            joystickRight: { ...joystickRight },
            cameraRotation: {
                x: camera.rotation.x,
                y: camera.rotation.y,
                z: camera.rotation.z,
            },
            isGameMode,
        });

        if (this.logs.length >= this.maxLogs) {
            this.stop();
        }
    }

    dump() {
        if (this.logs.length === 0) return;

        // Analyze if look input is changing camera
        const activeLookFrames = this.logs.filter(
            (f) => Math.abs(f.joystickRight.x) > 0.1 || Math.abs(f.joystickRight.y) > 0.1
        );

        console.group('[Telemetry Analysis]');
        console.log('Total Frames:', this.logs.length);
        console.log('Frames with Look Input:', activeLookFrames.length);

        if (activeLookFrames.length > 0) {
            const first = activeLookFrames[0];
            const last = activeLookFrames[activeLookFrames.length - 1];
            const deltaRotX = Math.abs(last.cameraRotation.x - first.cameraRotation.x);
            const deltaRotY = Math.abs(last.cameraRotation.y - first.cameraRotation.y);

            console.log('First Active Frame:', first);
            console.log('Last Active Frame:', last);
            console.log(`Delta Rotation: X=${deltaRotX.toFixed(4)}, Y=${deltaRotY.toFixed(4)}`);

            if (deltaRotX < 0.001 && deltaRotY < 0.001) {
                console.error('❌ FAIL: Joystick input detected but Camera did NOT rotate!');
            } else {
                console.log('✅ PASS: Camera rotation detected during input.');
            }
        } else {
            console.warn('⚠️ No significant look input detected in logs.');
        }
        console.groupEnd();
    }
}
