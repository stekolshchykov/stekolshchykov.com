/**
 * Black hole simulation: a raymarched Schwarzschild black hole + accretion disk.
 *
 * Ported from https://github.com/dgreenheck/webgpu-black-hole (MIT).
 */

import * as THREE from 'three/webgpu';
import { uniform } from 'three/tsl';
import type { BlackHoleConfig } from './defaultConfig';
import { createBlackHoleShader } from './blackholeShader';

type TslUniform<T> = { value: T };

export interface BlackHoleUniforms {
  // === Physics ===
  blackHoleMass: TslUniform<number>;
  bhSpin: TslUniform<number>;
  metricType: TslUniform<number>;

  // === Disk geometry ===
  diskInnerRadius: TslUniform<number>;
  diskOuterRadius: TslUniform<number>;
  diskInclination: TslUniform<number>;

  // === Disk appearance ===
  diskTemperature: TslUniform<number>;
  temperatureFalloff: TslUniform<number>;
  diskBrightness: TslUniform<number>;
  diskRotationSpeed: TslUniform<number>;
  accretionRate: TslUniform<number>;
  diskEmissionScale: TslUniform<number>;
  exposure: TslUniform<number>;

  // === Turbulence ===
  turbulenceScale: TslUniform<number>;
  turbulenceStretch: TslUniform<number>;
  turbulenceSharpness: TslUniform<number>;
  turbulenceCycleTime: TslUniform<number>;
  turbulenceLacunarity: TslUniform<number>;
  turbulencePersistence: TslUniform<number>;

  // === Edge falloff ===
  diskEdgeSoftnessInner: TslUniform<number>;
  diskEdgeSoftnessOuter: TslUniform<number>;

  // === Relativistic ===
  gravitationalLensing: TslUniform<number>;
  dopplerStrength: TslUniform<number>;

  // === Performance ===
  stepSize: TslUniform<number>;
  baseStep: TslUniform<number>;
  maxSteps: TslUniform<number>;
  adaptiveEps: TslUniform<number>;
  maxDistance: TslUniform<number>;
  internalScale: TslUniform<number>;
  taaEnabled: TslUniform<number>;
  taaFrames: TslUniform<number>;
  jitterSeed: TslUniform<number>;

  // === Stars ===
  starsEnabled: TslUniform<number>;
  starBackgroundColor: TslUniform<THREE.Color>;
  starDensity: TslUniform<number>;
  starSize: TslUniform<number>;
  starBrightness: TslUniform<number>;

  // === Nebula ===
  nebulaEnabled: TslUniform<number>;
  nebula1Scale: TslUniform<number>;
  nebula1Density: TslUniform<number>;
  nebula1Brightness: TslUniform<number>;
  nebula1Color: TslUniform<THREE.Color>;

  nebula2Scale: TslUniform<number>;
  nebula2Density: TslUniform<number>;
  nebula2Brightness: TslUniform<number>;
  nebula2Color: TslUniform<THREE.Color>;

  // === Animation state ===
  time: TslUniform<number>;

  // === Camera ===
  resolution: TslUniform<THREE.Vector2>;
  cameraPosition: TslUniform<THREE.Vector3>;
  cameraTarget: TslUniform<THREE.Vector3>;
}

export class BlackHoleSimulation {
  public readonly scene: THREE.Scene;
  public readonly uniforms: BlackHoleUniforms;

  private blackHoleMesh: THREE.Mesh | null = null;

  constructor(scene: THREE.Scene, config: BlackHoleConfig) {
    this.scene = scene;
    this.uniforms = this.initializeUniforms(config);
  }

  private initializeUniforms(config: BlackHoleConfig): BlackHoleUniforms {
    return {
      // === Physics ===
      blackHoleMass: uniform(config.blackHoleMass ?? 1.0) as unknown as TslUniform<number>,
      bhSpin: uniform(config.bhSpin ?? 0.0) as unknown as TslUniform<number>,
      metricType: uniform(config.metricType ?? 0.0) as unknown as TslUniform<number>,

      // === Disk geometry ===
      diskInnerRadius: uniform(config.diskInnerRadius ?? 3.0) as unknown as TslUniform<number>,
      diskOuterRadius: uniform(config.diskOuterRadius ?? 12.0) as unknown as TslUniform<number>,
      diskInclination: uniform(config.diskInclination ?? 0.0) as unknown as TslUniform<number>,

      // === Disk appearance ===
      diskTemperature: uniform(config.diskTemperature ?? 10.0) as unknown as TslUniform<number>,
      temperatureFalloff: uniform(config.temperatureFalloff ?? 0.75) as unknown as TslUniform<number>,
      diskBrightness: uniform(config.diskBrightness ?? 2.0) as unknown as TslUniform<number>,
      diskRotationSpeed: uniform(config.diskRotationSpeed ?? 0.3) as unknown as TslUniform<number>,
      accretionRate: uniform(config.accretionRate ?? 1.0) as unknown as TslUniform<number>,
      diskEmissionScale: uniform(config.diskEmissionScale ?? 1.0) as unknown as TslUniform<number>,
      exposure: uniform(config.exposure ?? 1.0) as unknown as TslUniform<number>,

      // === Turbulence ===
      turbulenceScale: uniform(config.turbulenceScale ?? 1.0) as unknown as TslUniform<number>,
      turbulenceStretch: uniform(config.turbulenceStretch ?? 5.0) as unknown as TslUniform<number>,
      turbulenceSharpness: uniform(config.turbulenceSharpness ?? 1.0) as unknown as TslUniform<number>,
      turbulenceCycleTime: uniform(config.turbulenceCycleTime ?? 10.0) as unknown as TslUniform<number>,
      turbulenceLacunarity: uniform(config.turbulenceLacunarity ?? 2.0) as unknown as TslUniform<number>,
      turbulencePersistence: uniform(config.turbulencePersistence ?? 0.5) as unknown as TslUniform<number>,

      // === Disk edge falloff ===
      diskEdgeSoftnessInner: uniform(config.diskEdgeSoftnessInner ?? 0.15) as unknown as TslUniform<number>,
      diskEdgeSoftnessOuter: uniform(config.diskEdgeSoftnessOuter ?? 0.15) as unknown as TslUniform<number>,

      // === Relativistic effects ===
      gravitationalLensing: uniform(config.gravitationalLensing ?? 1.5) as unknown as TslUniform<number>,
      dopplerStrength: uniform(config.dopplerStrength ?? 1.0) as unknown as TslUniform<number>,

      // === Performance ===
      stepSize: uniform(config.stepSize ?? 0.3) as unknown as TslUniform<number>,
      baseStep: uniform(config.baseStep ?? 0.6) as unknown as TslUniform<number>,
      maxSteps: uniform(config.maxSteps ?? 80) as unknown as TslUniform<number>,
      adaptiveEps: uniform(config.adaptiveEps ?? 0.08) as unknown as TslUniform<number>,
      maxDistance: uniform(config.maxDistance ?? 140) as unknown as TslUniform<number>,
      internalScale: uniform(config.internalScale ?? 1.0) as unknown as TslUniform<number>,
      taaEnabled: uniform(config.taaEnabled ? 1.0 : 0.0) as unknown as TslUniform<number>,
      taaFrames: uniform(config.taaFrames ?? 8) as unknown as TslUniform<number>,
      jitterSeed: uniform(config.jitterSeed ?? 1) as unknown as TslUniform<number>,

      // === Stars ===
      starsEnabled: uniform(config.starsEnabled ? 1.0 : 0.0) as unknown as TslUniform<number>,
      starBackgroundColor: uniform(new THREE.Color(config.starBackgroundColor ?? '#000000')) as unknown as TslUniform<THREE.Color>,
      starDensity: uniform(config.starDensity ?? 0.003) as unknown as TslUniform<number>,
      starSize: uniform(config.starSize ?? 2.0) as unknown as TslUniform<number>,
      starBrightness: uniform(config.starBrightness ?? 1.0) as unknown as TslUniform<number>,

      // === Nebula ===
      nebulaEnabled: uniform(config.nebulaEnabled ? 1.0 : 0.0) as unknown as TslUniform<number>,
      nebula1Scale: uniform(config.nebula1Scale ?? 2.0) as unknown as TslUniform<number>,
      nebula1Density: uniform(config.nebula1Density ?? 0.5) as unknown as TslUniform<number>,
      nebula1Brightness: uniform(config.nebula1Brightness ?? 0.15) as unknown as TslUniform<number>,
      nebula1Color: uniform(new THREE.Color(config.nebula1Color ?? '#1a0033')) as unknown as TslUniform<THREE.Color>,

      nebula2Scale: uniform(config.nebula2Scale ?? 6.0) as unknown as TslUniform<number>,
      nebula2Density: uniform(config.nebula2Density ?? 0.5) as unknown as TslUniform<number>,
      nebula2Brightness: uniform(config.nebula2Brightness ?? 0.15) as unknown as TslUniform<number>,
      nebula2Color: uniform(new THREE.Color(config.nebula2Color ?? '#4d1a26')) as unknown as TslUniform<THREE.Color>,

      // === Animation ===
      time: uniform(0) as unknown as TslUniform<number>,

      // === Camera ===
      resolution: uniform(new THREE.Vector2(window.innerWidth, window.innerHeight)) as unknown as TslUniform<THREE.Vector2>,
      cameraPosition: uniform(new THREE.Vector3(0, 5, 20)) as unknown as TslUniform<THREE.Vector3>,
      cameraTarget: uniform(new THREE.Vector3(0, 0, 0)) as unknown as TslUniform<THREE.Vector3>,
    };
  }

  public createBlackHole(): void {
    // Clean up existing mesh.
    if (this.blackHoleMesh) {
      this.scene.remove(this.blackHoleMesh);
      const meshMaterial = this.blackHoleMesh.material;
      const meshGeometry = this.blackHoleMesh.geometry;

      if (Array.isArray(meshMaterial)) {
        meshMaterial.forEach((m) => m.dispose());
      } else {
        meshMaterial.dispose();
      }
      meshGeometry.dispose();

      this.blackHoleMesh = null;
    }

    // Create inverted sphere geometry (render from inside).
    const geometry = new THREE.SphereGeometry(100, 32, 32);
    geometry.scale(-1, 1, 1);

    // Create material with our raymarching shader.
    const material = new THREE.MeshBasicNodeMaterial();
    material.colorNode = this.createRaymarchingShader();
    material.side = THREE.DoubleSide;

    this.blackHoleMesh = new THREE.Mesh(geometry, material);
    this.blackHoleMesh.frustumCulled = false;
    this.scene.add(this.blackHoleMesh);
  }

  private createRaymarchingShader(): unknown {
    return createBlackHoleShader(this.uniforms);
  }

  public updateUniforms(config: Partial<BlackHoleConfig>): void {
    const u = this.uniforms;

    // Physics
    if (config.blackHoleMass !== undefined) u.blackHoleMass.value = config.blackHoleMass;
    if (config.bhSpin !== undefined) u.bhSpin.value = config.bhSpin;
    if (config.metricType !== undefined) u.metricType.value = config.metricType;

    // Disk geometry
    if (config.diskInnerRadius !== undefined) u.diskInnerRadius.value = config.diskInnerRadius;
    if (config.diskOuterRadius !== undefined) u.diskOuterRadius.value = config.diskOuterRadius;
    if (config.diskInclination !== undefined) u.diskInclination.value = config.diskInclination;

    // Disk appearance
    if (config.diskTemperature !== undefined) u.diskTemperature.value = config.diskTemperature;
    if (config.temperatureFalloff !== undefined) u.temperatureFalloff.value = config.temperatureFalloff;
    if (config.diskBrightness !== undefined) u.diskBrightness.value = config.diskBrightness;
    if (config.diskRotationSpeed !== undefined) u.diskRotationSpeed.value = config.diskRotationSpeed;
    if (config.accretionRate !== undefined) u.accretionRate.value = config.accretionRate;
    if (config.diskEmissionScale !== undefined) u.diskEmissionScale.value = config.diskEmissionScale;
    if (config.exposure !== undefined) u.exposure.value = config.exposure;

    // Turbulence pattern
    if (config.turbulenceScale !== undefined) u.turbulenceScale.value = config.turbulenceScale;
    if (config.turbulenceStretch !== undefined) u.turbulenceStretch.value = config.turbulenceStretch;
    if (config.turbulenceSharpness !== undefined) u.turbulenceSharpness.value = config.turbulenceSharpness;
    if (config.turbulenceCycleTime !== undefined) u.turbulenceCycleTime.value = config.turbulenceCycleTime;
    if (config.turbulenceLacunarity !== undefined) u.turbulenceLacunarity.value = config.turbulenceLacunarity;
    if (config.turbulencePersistence !== undefined) u.turbulencePersistence.value = config.turbulencePersistence;

    // Disk edge falloff
    if (config.diskEdgeSoftnessInner !== undefined) u.diskEdgeSoftnessInner.value = config.diskEdgeSoftnessInner;
    if (config.diskEdgeSoftnessOuter !== undefined) u.diskEdgeSoftnessOuter.value = config.diskEdgeSoftnessOuter;

    // Relativistic effects
    if (config.gravitationalLensing !== undefined) u.gravitationalLensing.value = config.gravitationalLensing;
    if (config.dopplerStrength !== undefined) u.dopplerStrength.value = config.dopplerStrength;

    // Performance
    if (config.stepSize !== undefined) u.stepSize.value = config.stepSize;
    if (config.baseStep !== undefined) u.baseStep.value = config.baseStep;
    if (config.maxSteps !== undefined) u.maxSteps.value = config.maxSteps;
    if (config.adaptiveEps !== undefined) u.adaptiveEps.value = config.adaptiveEps;
    if (config.maxDistance !== undefined) u.maxDistance.value = config.maxDistance;
    if (config.internalScale !== undefined) u.internalScale.value = config.internalScale;
    if (config.taaEnabled !== undefined) u.taaEnabled.value = config.taaEnabled ? 1.0 : 0.0;
    if (config.taaFrames !== undefined) u.taaFrames.value = config.taaFrames;
    if (config.jitterSeed !== undefined) u.jitterSeed.value = config.jitterSeed;

    // Stars
    if (config.starsEnabled !== undefined) u.starsEnabled.value = config.starsEnabled ? 1.0 : 0.0;
    if (config.starBackgroundColor !== undefined) u.starBackgroundColor.value.set(config.starBackgroundColor);
    if (config.starDensity !== undefined) u.starDensity.value = config.starDensity;
    if (config.starSize !== undefined) u.starSize.value = config.starSize;
    if (config.starBrightness !== undefined) u.starBrightness.value = config.starBrightness;

    // Nebula layer 1
    if (config.nebulaEnabled !== undefined) u.nebulaEnabled.value = config.nebulaEnabled ? 1.0 : 0.0;
    if (config.nebula1Scale !== undefined) u.nebula1Scale.value = config.nebula1Scale;
    if (config.nebula1Density !== undefined) u.nebula1Density.value = config.nebula1Density;
    if (config.nebula1Brightness !== undefined) u.nebula1Brightness.value = config.nebula1Brightness;
    if (config.nebula1Color !== undefined) u.nebula1Color.value.set(config.nebula1Color);

    // Nebula layer 2
    if (config.nebula2Scale !== undefined) u.nebula2Scale.value = config.nebula2Scale;
    if (config.nebula2Density !== undefined) u.nebula2Density.value = config.nebula2Density;
    if (config.nebula2Brightness !== undefined) u.nebula2Brightness.value = config.nebula2Brightness;
    if (config.nebula2Color !== undefined) u.nebula2Color.value.set(config.nebula2Color);
  }

  public updateCamera(camera: THREE.PerspectiveCamera): void {
    this.uniforms.cameraPosition.value.copy(camera.position);

    // Calculate camera target from view direction.
    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(camera.quaternion);
    const target = camera.position.clone().add(direction.multiplyScalar(10));
    this.uniforms.cameraTarget.value.copy(target);
  }

  public update(deltaTime: number, camera: THREE.PerspectiveCamera): void {
    this.uniforms.time.value += deltaTime;
    this.updateCamera(camera);
  }

  public onResize(width: number, height: number): void {
    this.uniforms.resolution.value.set(width, height);
  }

  public regenerate(): void {
    this.createBlackHole();
  }

  public dispose(): void {
    if (!this.blackHoleMesh) return;

    this.scene.remove(this.blackHoleMesh);

    const meshMaterial = this.blackHoleMesh.material;
    const meshGeometry = this.blackHoleMesh.geometry;

    if (Array.isArray(meshMaterial)) {
      meshMaterial.forEach((m) => m.dispose());
    } else {
      meshMaterial.dispose();
    }
    meshGeometry.dispose();

    this.blackHoleMesh = null;
  }
}
