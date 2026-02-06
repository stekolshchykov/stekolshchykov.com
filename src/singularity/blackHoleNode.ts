import * as THREE from 'three/webgpu';
import {
  Fn,
  Loop,
  vec3,
  vec4,
  float,
  uniform,
  step,
  mix,
  max,
  abs,
  texture,
  normalize,
  sub,
  remapClamp,
  equirectUV,
  positionGeometry,
  positionWorld,
  cameraPosition,
  modelWorldMatrix,
  faceDirection,
  time,
} from 'three/tsl';

import {
  rotateAxis,
  whiteNoise2D,
  lengthSqrt,
  smoothRange,
  ColorRamp3_BSpline,
  vecToFac,
  linearToSrgb,
  srgbToLinear,
} from './tslUtils';

type TslUniform<T> = THREE.UniformNode<T>;

export type SingularityUniforms = {
  // Raymarch
  iterations: TslUniform<number>;
  stepSize: TslUniform<number>;
  noiseFactor: TslUniform<number>;
  power: TslUniform<number>;

  // Debug / shaping (kept for 1:1 UI parity with reference)
  clamp1: TslUniform<number>;
  clamp2: TslUniform<number>;

  originRadius: TslUniform<number>;
  width: TslUniform<number>;
  uvMotion: TslUniform<number>;

  // Color ramp
  rampCol1: TslUniform<THREE.Color>;
  rampPos1: TslUniform<number>;
  rampCol2: TslUniform<THREE.Color>;
  rampPos2: TslUniform<number>;
  rampCol3: TslUniform<THREE.Color>;
  rampPos3: TslUniform<number>;

  rampEmission: TslUniform<number>;
  emissionColor: TslUniform<THREE.Color>;

  // Background
  backgroundIntensity: TslUniform<number>;
};

export function createDefaultSingularityUniforms(): SingularityUniforms {
  return {
    iterations: uniform(128),
    stepSize: uniform(0.0071),
    noiseFactor: uniform(0.01),
    power: uniform(0.3),

    clamp1: uniform(0.5),
    clamp2: uniform(1.0),

    originRadius: uniform(0.13),
    width: uniform(0.03),
    uvMotion: uniform(0.0),

    rampCol1: uniform(new THREE.Color(0.95, 0.71, 0.44)),
    rampPos1: uniform(0.05),
    rampCol2: uniform(new THREE.Color(0.14, 0.05, 0.03)),
    rampPos2: uniform(0.425),
    rampCol3: uniform(new THREE.Color(0, 0, 0)),
    rampPos3: uniform(1.0),

    rampEmission: uniform(2.0),
    emissionColor: uniform(new THREE.Color(0.14, 0.129, 0.09)),

    backgroundIntensity: uniform(2.0),
  };
}

export function createSingularityColorNode(
  uniforms: SingularityUniforms,
  textures: {
    noiseDeepTexture: THREE.Texture;
    starsTexture: THREE.Texture;
  }
): THREE.Node {
  // Clean-room implementation that mirrors the *structure and math* of the reference project's BlackHole node.
  // The goal here is visual parity, not "creative" changes.
  return Fn(() => {
    const _step = uniforms.stepSize;
    const noiseAmp = uniforms.noiseFactor;
    const power = uniforms.power;
    const originRadius = uniforms.originRadius;
    const bandWidth = uniforms.width;
    const iterCount = uniforms.iterations;

    // ==== Geometry- and view-dependent bases ====
    const objCoords = positionGeometry.mul(vec3(1, 1, -1)).xzy; // flip Z then swizzle
    const isBackface = step(0.0, faceDirection.negate());       // 1 backface, 0 front

    // Camera point in object space (identity in our scene, but keep the structure)
    const camPointObj = cameraPosition.mul(modelWorldMatrix).mul(vec3(1, 1, -1)).xzy;

    // Pick coords from camera for backfaces, from geometry for frontfaces
    const startCoords = mix(objCoords, camPointObj, isBackface);

    // Incoming view direction in world, then to object-like swizzle
    const viewInWorld = normalize(sub(cameraPosition, positionWorld)).mul(vec3(1, 1, -1)).xzy;
    const rayDir = viewInWorld.negate().toVar(); // initial march direction

    // White noise to jitter start
    const noiseWhite = whiteNoise2D(objCoords.xy).mul(noiseAmp);
    const jitter = rayDir.mul(noiseWhite);

    // Ray initial position
    const rayPos = startCoords.sub(jitter).toVar();

    // Accumulators
    const colorAcc = vec3(0).toVar();
    const alphaAcc = float(0.0).toVar();

    Loop(iterCount, () => {
      // Steering term toward center
      const rNorm = normalize(rayPos);
      const rLen = lengthSqrt(rayPos);
      const steerMag = _step.mul(power).div(rLen.mul(rLen));
      const range = remapClamp(rLen, 1.0, 0.5, 0.0, 1.0); // fade steering
      const steer = rNorm.mul(steerMag.mul(range));
      const steeredDir = normalize(rayDir.sub(steer));

      // Advance once
      const advance = rayDir.mul(_step);
      rayPos.addAssign(advance);

      // Local measures in XY plane and rotating UVs
      const xyLen = lengthSqrt(rayPos.mul(vec3(1, 1, 0)));
      const rotPhase = xyLen.mul(4.270).sub(time.mul(0.1));
      const uvAxis = vec3(0, 0, 1);
      const uvRot = rayPos.mul(rotateAxis(uvAxis, rotPhase));
      const uv = uvRot.mul(2);

      // Deep noise sample
      const noiseDeep = texture(textures.noiseDeepTexture, uv);

      // Z band shaping
      const bandMin = bandWidth.negate();
      const bandEnds = vec3(bandMin, 0.0, bandWidth);           // [-w, 0, w]
      const dz = sub(bandEnds, vec3(rayPos.z));
      const zQuad = dz.mul(dz).div(bandWidth);
      const zBand = max(bandWidth.sub(zQuad).div(bandWidth), 0.0);

      // Modulated noise amplitude
      const noiseAmp3 = noiseDeep.xyz.mul(zBand);
      const noiseAmpLen = lengthSqrt(noiseAmp3);

      // Pseudo normal via offset noise
      const uvForNormal = uv.mul(1.002);
      const noiseNormal = texture(textures.noiseDeepTexture, uvForNormal).xyz.mul(zBand);
      const noiseNormalLen = lengthSqrt(noiseNormal);

      // Color ramp evaluation
      const rampInput =
        xyLen
          .add(noiseAmpLen.sub(0.780).mul(1.5))
          .add(noiseAmpLen.sub(noiseNormalLen).mul(19.750));

      const rampA = vec4(uniforms.rampCol1, uniforms.rampPos1);
      const rampB = vec4(uniforms.rampCol2, uniforms.rampPos2);
      const rampC = vec4(uniforms.rampCol3, uniforms.rampPos3);

      const baseCol = ColorRamp3_BSpline(rampInput.x, rampA, rampB, rampC);
      const emissiveCol = baseCol.mul(uniforms.rampEmission).add(uniforms.emissionColor);

      // Core suppression near origin
      const rLenNow = lengthSqrt(rayPos);
      const insideCore = rLenNow.lessThan(originRadius);
      const shadedCol = mix(emissiveCol, vec3(0), insideCore);

      // Alpha shaping
      const zAbs = abs(rayPos.z);
      const aNoise = noiseAmpLen.sub(0.750).mul(-0.60);
      const aPre = zAbs.add(aNoise);
      const aRadial = smoothRange(xyLen, 1.0, 0.0, 0.0, 1.0);
      const aBand = smoothRange(aPre, bandWidth, 0.0, 0.0, aRadial);
      const alphaLocal = mix(aBand, 1.0, insideCore);

      // Front-to-back compositing (match reference formula)
      const oneMinusA = alphaAcc.oneMinus();
      const alphaFac = vecToFac(vec3(alphaLocal));
      const weight = oneMinusA.mul(alphaFac);
      const newColor = mix(colorAcc, shadedCol, weight);
      const newAlpha = mix(alphaAcc, 1.0, alphaFac);

      // Second advance and steering update
      rayPos.addAssign(advance);
      rayDir.assign(steeredDir);
      colorAcc.assign(newColor);
      alphaAcc.assign(newAlpha);
    });

    // ==== Environment blend on remaining transparency ====
    const dirForEnv = rayDir.mul(vec3(1, -1, 1)).xzy;
    const env = linearToSrgb(
      texture(textures.starsTexture, equirectUV(dirForEnv)).mul(uniforms.backgroundIntensity)
    );

    const trans = float(1.0).sub(alphaAcc);
    const finalRGB = mix(colorAcc, env, trans.mul(1.0));
    return srgbToLinear(finalRGB);
  })() as unknown as THREE.Node;
}
