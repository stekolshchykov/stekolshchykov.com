/**
 * Cinematic Camera Animation System
 *
 * Creates smooth, professional camera movements for showcasing the black hole.
 * Uses Catmull-Rom splines for continuous motion.
 *
 * Ported from https://github.com/dgreenheck/webgpu-black-hole (MIT).
 */

import * as THREE from 'three/webgpu';

interface Vec3Like {
  x: number;
  y: number;
  z: number;
}

interface CinematicKeyframe {
  position: Vec3Like;
  target: Vec3Like;
  duration: number;
}

type OrbitControlsLike = {
  enabled: boolean;
  target: THREE.Vector3;
};

function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const t2 = t * t;
  const t3 = t2 * t;

  return 0.5 * (
    (2 * p1) +
    (-p0 + p2) * t +
    (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
    (-p0 + 3 * p1 - 3 * p2 + p3) * t3
  );
}

const cinematicKeyframes: CinematicKeyframe[] = [
  // 1. Wide shot from above
  { position: { x: 0, y: -3, z: 20 }, target: { x: 0, y: 0, z: 0 }, duration: 5 },

  // 2. Rotate around, begin rising
  { position: { x: 15, y: -5, z: 12 }, target: { x: 0, y: 0, z: 0 }, duration: 4 },

  // More top-down, continuing orbit
  { position: { x: 10, y: -18, z: -10 }, target: { x: 0, y: 0, z: 0 }, duration: 4 },

  // 3. Swing back down to wide shot
  { position: { x: -5, y: -6, z: -24 }, target: { x: 0, y: 0, z: 0 }, duration: 3 },

  // Wide shot, begin zoom in
  { position: { x: -5, y: -1, z: -20 }, target: { x: 0, y: 0, z: 0 }, duration: 12 },

  // Zooming in closer
  { position: { x: 5, y: -1, z: 0 }, target: { x: 0, y: 0, z: 0 }, duration: 0 },
];

export class CameraAnimation {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly controls: OrbitControlsLike;
  private readonly keyframes: CinematicKeyframe[];

  private isPlaying: boolean;
  private currentTime: number;
  private readonly totalDuration: number;

  private readonly tempPosition: THREE.Vector3;
  private readonly tempTarget: THREE.Vector3;

  private readonly originalPosition: THREE.Vector3;
  private readonly originalTarget: THREE.Vector3;

  constructor(camera: THREE.PerspectiveCamera, controls: OrbitControlsLike) {
    this.camera = camera;
    this.controls = controls;
    this.keyframes = cinematicKeyframes;

    this.isPlaying = false;
    this.currentTime = 0;
    this.totalDuration = this.calculateTotalDuration();

    this.tempPosition = new THREE.Vector3();
    this.tempTarget = new THREE.Vector3();

    this.originalPosition = new THREE.Vector3();
    this.originalTarget = new THREE.Vector3();
  }

  private calculateTotalDuration(): number {
    return this.keyframes.reduce((sum, kf) => sum + kf.duration, 0);
  }

  private getKeyframe(index: number): CinematicKeyframe {
    const len = this.keyframes.length;
    return this.keyframes[((index % len) + len) % len];
  }

  start(): void {
    if (this.isPlaying) return;

    // Store current camera state.
    this.originalPosition.copy(this.camera.position);
    this.originalTarget.copy(this.controls.target);

    // Disable user controls during animation.
    this.controls.enabled = false;

    this.isPlaying = true;
    this.currentTime = 0;
  }

  stop(): void {
    if (!this.isPlaying) return;

    this.isPlaying = false;

    // Re-enable user controls.
    this.controls.enabled = true;

    // Keep current target (avoid snapping back).
    this.controls.target.copy(this.tempTarget);
  }

  toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }

    return this.isPlaying;
  }

  private getKeyframeInfo(globalTime: number): { index: number; localTime: number; duration: number } {
    let accumulatedTime = 0;

    for (let i = 0; i < this.keyframes.length; i++) {
      const kf = this.keyframes[i];
      if (globalTime < accumulatedTime + kf.duration) {
        return {
          index: i,
          localTime: globalTime - accumulatedTime,
          duration: kf.duration,
        };
      }
      accumulatedTime += kf.duration;
    }

    const lastIndex = this.keyframes.length - 1;
    return {
      index: lastIndex,
      localTime: this.keyframes[lastIndex].duration,
      duration: this.keyframes[lastIndex].duration,
    };
  }

  private interpolateSpline(index: number, t: number): void {
    const p0 = this.getKeyframe(index - 1);
    const p1 = this.getKeyframe(index);
    const p2 = this.getKeyframe(index + 1);
    const p3 = this.getKeyframe(index + 2);

    this.tempPosition.set(
      catmullRom(p0.position.x, p1.position.x, p2.position.x, p3.position.x, t),
      catmullRom(p0.position.y, p1.position.y, p2.position.y, p3.position.y, t),
      catmullRom(p0.position.z, p1.position.z, p2.position.z, p3.position.z, t)
    );

    this.tempTarget.set(
      catmullRom(p0.target.x, p1.target.x, p2.target.x, p3.target.x, t),
      catmullRom(p0.target.y, p1.target.y, p2.target.y, p3.target.y, t),
      catmullRom(p0.target.z, p1.target.z, p2.target.z, p3.target.z, t)
    );
  }

  update(deltaTime: number): void {
    if (!this.isPlaying) return;

    this.currentTime += deltaTime;

    if (this.currentTime >= this.totalDuration && this.totalDuration > 0) {
      this.currentTime = this.currentTime % this.totalDuration;
    }

    const info = this.getKeyframeInfo(this.currentTime);
    const t = info.duration > 0 ? info.localTime / info.duration : 0;

    this.interpolateSpline(info.index, t);

    this.camera.position.copy(this.tempPosition);
    this.controls.target.copy(this.tempTarget);
    this.camera.lookAt(this.tempTarget);
  }

  getProgress(): number {
    return this.totalDuration > 0 ? this.currentTime / this.totalDuration : 0;
  }

  get playing(): boolean {
    return this.isPlaying;
  }
}
