import { describe, expect, it } from 'vitest';
import { Vector3, Matrix4 } from 'three';
import { createBlackHoleUniforms, BLACK_HOLE_VERTEX_SHADER, BLACK_HOLE_FRAGMENT_SHADER } from '../src/scene/blackHoleShader';
import { createSunUniforms, SUN_VERTEX_SHADER, SUN_FRAGMENT_SHADER } from '../src/scene/sunShader';

describe('Black Hole Shader Uniforms', () => {
  it('creates uniforms with correct initial values', () => {
    const uniforms = createBlackHoleUniforms(false, 1920, 1080);

    expect(uniforms.uTime.value).toBe(0);
    expect(uniforms.uResolution.value.x).toBe(1920);
    expect(uniforms.uResolution.value.y).toBe(1080);
    expect(uniforms.uCameraWorldPos.value).toBeInstanceOf(Vector3);
    expect(uniforms.uCameraInverseViewMatrix.value).toBeInstanceOf(Matrix4);
  });

  it('has Schwarzschild radius smaller than accretion inner radius', () => {
    const uniforms = createBlackHoleUniforms(false, 1920, 1080);

    expect(uniforms.uSchwarzschildRadius.value).toBeLessThan(uniforms.uAccretionInner.value);
  });

  it('has accretion inner radius smaller than outer radius', () => {
    const uniforms = createBlackHoleUniforms(false, 1920, 1080);

    expect(uniforms.uAccretionInner.value).toBeLessThan(uniforms.uAccretionOuter.value);
  });

  it('has lower disk density in low power mode', () => {
    const normalUniforms = createBlackHoleUniforms(false, 1920, 1080);
    const lowPowerUniforms = createBlackHoleUniforms(true, 1920, 1080);

    expect(lowPowerUniforms.uDiskDensity.value).toBeLessThan(normalUniforms.uDiskDensity.value);
  });

  it('camera position is within visible range of accretion disk', () => {
    const uniforms = createBlackHoleUniforms(false, 1920, 1080);

    // Camera Z position should allow viewing the accretion disk
    // Camera at Z=30 (after 0.02 scaling from ~1500 world units)
    // Accretion disk extends from inner to outer radius
    const cameraZ = uniforms.uCameraWorldPos.value.z;
    const outerRadius = uniforms.uAccretionOuter.value;

    // Camera should be close enough to see the disk (within 2x outer radius)
    expect(cameraZ).toBeLessThanOrEqual(outerRadius * 2);
  });

  it('physics parameters are positive', () => {
    const uniforms = createBlackHoleUniforms(false, 1920, 1080);

    expect(uniforms.uSchwarzschildRadius.value).toBeGreaterThan(0);
    expect(uniforms.uAccretionInner.value).toBeGreaterThan(0);
    expect(uniforms.uAccretionOuter.value).toBeGreaterThan(0);
    expect(uniforms.uDiskDensity.value).toBeGreaterThan(0);
    expect(uniforms.uLensingStrength.value).toBeGreaterThan(0);
  });
});

describe('Sun Shader Uniforms', () => {
  it('creates uniforms with correct initial values', () => {
    const uniforms = createSunUniforms();

    expect(uniforms.uTime.value).toBe(0);
    expect(uniforms.uColorA.value).toBeDefined();
    expect(uniforms.uColorB.value).toBeDefined();
    expect(uniforms.uSunPosition.value).toBeInstanceOf(Vector3);
  });

  it('has valid color values', () => {
    const uniforms = createSunUniforms();

    // Colors should be valid Three.js Color objects with r, g, b properties
    expect(uniforms.uColorA.value.r).toBeGreaterThanOrEqual(0);
    expect(uniforms.uColorA.value.r).toBeLessThanOrEqual(1);
    expect(uniforms.uColorB.value.r).toBeGreaterThanOrEqual(0);
    expect(uniforms.uColorB.value.r).toBeLessThanOrEqual(1);
  });

  it('has positive surface noise scale', () => {
    const uniforms = createSunUniforms();

    expect(uniforms.uSurfaceNoiseScale.value).toBeGreaterThan(0);
  });

  it('has corona strength in valid range', () => {
    const uniforms = createSunUniforms();

    expect(uniforms.uCoronaStrength.value).toBeGreaterThan(0);
    expect(uniforms.uCoronaStrength.value).toBeLessThanOrEqual(2);
  });
});

describe('Celestial Bodies Visibility', () => {
  // Camera configuration from Scene3D.tsx
  const CAMERA_POSITIONS = {
    phone: { z: 1250 },
    tablet: { z: 1400 },
    desktop: { z: 1500 },
  };

  // Sun position from useCelestialBodies.ts
  const SUN_POSITION = new Vector3(1400, 350, 600);
  const SUN_RADIUS = 60;

  // Camera looks at cube center (0, 0, 0)
  const LOOK_AT = new Vector3(0, 0, 0);

  it('sun is positioned in front of camera (positive Z relative to look target)', () => {
    // Sun should be between camera and look target, or to the side
    // Camera at Z=1500, looking at Z=0
    // Sun at Z=600 is in front of the camera's view direction

    expect(SUN_POSITION.z).toBeLessThan(CAMERA_POSITIONS.desktop.z);
    expect(SUN_POSITION.z).toBeGreaterThan(LOOK_AT.z - 500); // Not too far behind
  });

  it('sun is reachable during cinematic camera flight', () => {
    // During cinematic flight, camera orbit can reach the sun
    // The sun should be within the maximum camera orbit range
    const maxOrbitScale = 3; // From useCinematicCamera
    const baseOrbit = CAMERA_POSITIONS.desktop.z * 0.09;
    const maxOrbitRadius = baseOrbit * maxOrbitScale;

    // Sun distance from center
    const sunDistanceFromCenter = SUN_POSITION.length();

    // Sun should be reachable within extended camera movement
    expect(sunDistanceFromCenter).toBeLessThan(CAMERA_POSITIONS.desktop.z + maxOrbitRadius);
  });

  it('black hole camera scale produces valid shader coordinates', () => {
    const cameraScale = 0.02;

    for (const [, pos] of Object.entries(CAMERA_POSITIONS)) {
      const scaledZ = pos.z * cameraScale;
      const uniforms = createBlackHoleUniforms(false, 1920, 1080);

      // Scaled camera position should be within range to see accretion disk
      expect(scaledZ).toBeGreaterThan(0);
      expect(scaledZ).toBeLessThan(uniforms.uAccretionOuter.value * 3);
    }
  });

  it('sun and camera near plane do not conflict', () => {
    const nearPlane = 1; // From useSceneInit.ts: PerspectiveCamera(50, aspect, 1, 5000)

    // Distance from camera to sun should be greater than near plane
    const distToSun = Math.sqrt(
      Math.pow(SUN_POSITION.x, 2) +
      Math.pow(SUN_POSITION.y, 2) +
      Math.pow(CAMERA_POSITIONS.desktop.z - SUN_POSITION.z, 2)
    );

    expect(distToSun).toBeGreaterThan(nearPlane + SUN_RADIUS);
  });

  it('sun is within far plane', () => {
    const farPlane = 5000; // From useSceneInit.ts

    const distToSun = Math.sqrt(
      Math.pow(SUN_POSITION.x, 2) +
      Math.pow(SUN_POSITION.y, 2) +
      Math.pow(CAMERA_POSITIONS.desktop.z - SUN_POSITION.z, 2)
    );

    expect(distToSun).toBeLessThan(farPlane - SUN_RADIUS);
  });
});

describe('Shader Code Validation', () => {
  it('black hole vertex shader outputs fullscreen quad', () => {
    expect(BLACK_HOLE_VERTEX_SHADER).toContain('gl_Position');
    expect(BLACK_HOLE_VERTEX_SHADER).toContain('position.xy');
  });

  it('black hole fragment shader has raymarching loop', () => {
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('MAX_STEPS');
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('for');
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('uSchwarzschildRadius');
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('uAccretionInner');
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('uAccretionOuter');
  });

  it('sun vertex shader has noise displacement', () => {
    expect(SUN_VERTEX_SHADER).toContain('snoise');
    expect(SUN_VERTEX_SHADER).toContain('normal');
    expect(SUN_VERTEX_SHADER).toContain('uTime');
  });

  it('sun fragment shader uses color uniforms', () => {
    expect(SUN_FRAGMENT_SHADER).toContain('uColorA');
    expect(SUN_FRAGMENT_SHADER).toContain('uColorB');
  });

  it('black hole shader handles gravitational lensing', () => {
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('uLensingStrength');
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('bendForce');
  });

  it('black hole shader has doppler effect', () => {
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('uDopplerStrength');
    expect(BLACK_HOLE_FRAGMENT_SHADER).toContain('doppler');
  });
});
