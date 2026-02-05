import { Vector2 } from 'three';

export function createBlackHoleUniforms(lowPowerMode: boolean, width: number, height: number) {
  return {
    uTime: { value: 0 },
    uResolution: { value: new Vector2(width, height) },
    uBlackHoleOffset: { value: new Vector2(-0.72, 0.16) },
    uCameraDistance: { value: lowPowerMode ? 19.8 : 23.8 },
    uCameraYaw: { value: -0.2 },
    uCameraPitch: { value: -0.08 },
    uBlackHoleMass: { value: lowPowerMode ? 0.64 : 0.82 },
    uStepSize: { value: lowPowerMode ? 0.18 : 0.085 },
    uGravitationalLensing: { value: lowPowerMode ? 2.06 : 2.96 },
    uDiskInnerRadius: { value: 2.75 },
    uDiskOuterRadius: { value: 8.6 },
    uDiskBrightness: { value: lowPowerMode ? 2.12 : 3.35 },
    uDiskTemperature: { value: 14500.0 },
    uDiskRotationSpeed: { value: -4.5 },
    uDiskScreenTilt: { value: lowPowerMode ? 0.38 : 0.32 },
    uDiskScreenAngle: { value: -0.62 },
    uMorphStrength: { value: lowPowerMode ? 0.52 : 0.78 },
    uStarDensity: { value: lowPowerMode ? 0.15 : 0.23 },
    uStarSize: { value: lowPowerMode ? 1.45 : 1.2 },
    uStarBrightness: { value: lowPowerMode ? 0.8 : 1.12 },
    uNebulaStrength: { value: lowPowerMode ? 0.32 : 0.5 },
    uRaySteps: { value: lowPowerMode ? 88.0 : 156.0 },
  };
}

export const BLACK_HOLE_VERTEX_SHADER = `
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const BLACK_HOLE_FRAGMENT_SHADER = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uBlackHoleOffset;
  uniform float uCameraDistance;
  uniform float uCameraYaw;
  uniform float uCameraPitch;
  uniform float uBlackHoleMass;
  uniform float uStepSize;
  uniform float uGravitationalLensing;
  uniform float uDiskInnerRadius;
  uniform float uDiskOuterRadius;
  uniform float uDiskBrightness;
  uniform float uDiskTemperature;
  uniform float uDiskRotationSpeed;
  uniform float uDiskScreenTilt;
  uniform float uDiskScreenAngle;
  uniform float uMorphStrength;
  uniform float uStarDensity;
  uniform float uStarSize;
  uniform float uStarBrightness;
  uniform float uNebulaStrength;
  uniform float uRaySteps;

  const float PI = 3.141592653589793;

  float hash21(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float hash31(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }

  vec2 hash22(vec2 p) {
    return vec2(
      fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453),
      fract(sin(dot(p, vec2(269.5, 183.3))) * 43758.5453)
    );
  }

  float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);

    float a = hash31(i);
    float b = hash31(i + vec3(1.0, 0.0, 0.0));
    float c = hash31(i + vec3(0.0, 1.0, 0.0));
    float d = hash31(i + vec3(1.0, 1.0, 0.0));
    float e = hash31(i + vec3(0.0, 0.0, 1.0));
    float f2 = hash31(i + vec3(1.0, 0.0, 1.0));
    float g = hash31(i + vec3(0.0, 1.0, 1.0));
    float h = hash31(i + vec3(1.0, 1.0, 1.0));

    float x1 = mix(a, b, u.x);
    float x2 = mix(c, d, u.x);
    float y1 = mix(x1, x2, u.y);

    float x3 = mix(e, f2, u.x);
    float x4 = mix(g, h, u.x);
    float y2 = mix(x3, x4, u.y);

    return mix(y1, y2, u.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.52;
    vec3 pos = p;
    for (int i = 0; i < 4; i++) {
      value += noise3D(pos) * amplitude;
      pos *= 2.03;
      amplitude *= 0.5;
    }
    return value;
  }

  vec3 blackbodyApprox(float temperatureKelvin) {
    float t = clamp(temperatureKelvin, 1000.0, 40000.0) / 100.0;
    float r;
    float g;
    float b;

    if (t <= 66.0) {
      r = 255.0;
      g = 99.4708025861 * log(t) - 161.1195681661;
      if (t <= 19.0) {
        b = 0.0;
      } else {
        b = 138.5177312231 * log(t - 10.0) - 305.0447927307;
      }
    } else {
      r = 329.698727446 * pow(t - 60.0, -0.1332047592);
      g = 288.1221695283 * pow(t - 60.0, -0.0755148492);
      b = 255.0;
    }

    return clamp(vec3(r, g, b) / 255.0, 0.0, 1.0);
  }

  vec3 starField(vec3 rayDir) {
    float theta = atan(rayDir.z, rayDir.x);
    float phi = asin(clamp(rayDir.y, -1.0, 1.0));
    vec2 scaled = vec2(theta, phi) * (58.0 / max(uStarSize, 0.3));
    vec2 cell = floor(scaled);
    vec2 cellUV = fract(scaled);

    float starChance = step(1.0 - uStarDensity, hash21(cell));
    vec2 starPos = hash22(cell + 42.0) * 0.82 + 0.09;
    float distToStar = length(cellUV - starPos);
    float baseSize = hash21(cell + 100.0) * 0.03 + 0.01;
    float finalStarSize = baseSize * uStarSize;
    float core = smoothstep(finalStarSize, 0.0, distToStar);
    float glow = smoothstep(finalStarSize * 3.2, 0.0, distToStar) * 0.35;
    float twinkle = 0.82 + 0.18 * sin(uTime * 0.55 + hash21(cell + 8.0) * 12.0);
    float intensity = (core + glow) * starChance * twinkle;
    vec3 starColor = mix(vec3(0.82, 0.9, 1.0), vec3(1.0, 0.92, 0.76), hash21(cell + 200.0));
    return starColor * intensity * uStarBrightness;
  }

  vec3 nebulaField(vec3 rayDir) {
    float n1 = fbm(rayDir * 2.0 + vec3(uTime * 0.03, 0.0, 0.0));
    float n2 = fbm(rayDir * 5.4 - vec3(0.0, uTime * 0.022, 0.0));
    float layer1 = clamp((n1 - 0.45) * 1.9, 0.0, 1.0);
    float layer2 = clamp((n2 - 0.52) * 2.2, 0.0, 1.0);

    vec3 color1 = vec3(0.05, 0.14, 0.3) * layer1;
    vec3 color2 = vec3(0.22, 0.08, 0.2) * layer2;
    return (color1 + color2) * uNebulaStrength;
  }

  vec4 accretionDiskColor(float hitR, float hitAngle, float time, vec3 rayDir) {
    float normR = clamp((hitR - uDiskInnerRadius) / (uDiskOuterRadius - uDiskInnerRadius), 0.0, 1.0);
    float tempK = uDiskTemperature * pow(max(uDiskInnerRadius / max(hitR, 0.001), 0.001), 0.76);
    vec3 diskColor = blackbodyApprox(tempK);

    float rotationSign = sign(uDiskRotationSpeed);
    vec3 velocityDir = normalize(vec3(-sin(hitAngle) * rotationSign, 0.0, cos(hitAngle) * rotationSign));
    float velocityMagnitude = 1.0 / sqrt(max(hitR / uDiskInnerRadius, 0.02));
    float beta = velocityMagnitude * 0.27;
    float cosTheta = dot(velocityDir, rayDir);
    float dopplerFactor = 1.0 / max(1.0 - beta * cosTheta, 0.22);
    float dopplerBoost = pow(dopplerFactor, 2.6);
    diskColor *= clamp(dopplerBoost, 0.18, 4.8);

    float edgeIn = smoothstep(0.0, 0.17, normR);
    float edgeOut = 1.0 - smoothstep(0.78, 1.0, normR);
    float edgeMask = edgeIn * edgeOut;

    float phase = time * uDiskRotationSpeed / pow(max(hitR, 0.2), 1.5);
    float a = hitAngle + phase;
    vec3 noiseCoord = vec3(
      hitR * 1.45,
      cos(a) / 0.62,
      sin(a) / 0.62
    );
    float turbulence = fbm(noiseCoord + vec3(0.0, 0.0, time * 0.14));
    float rings = pow(clamp(turbulence, 0.0, 1.0), 2.8);

    float finalOpacity = rings * edgeMask;
    vec3 finalColor = diskColor * (0.4 + rings * 1.08) * uDiskBrightness;
    return vec4(finalColor, finalOpacity);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;
    float closeFactor = clamp((18.0 - uCameraDistance) / 15.0, 0.0, 1.0);
    float sceneZoom = mix(1.0, 2.8, closeFactor);
    uv /= sceneZoom;

    float rs = uBlackHoleMass * 2.0;
    float baseApparentRadius = 0.26 + rs * 0.04;

    vec3 camTarget = vec3(uBlackHoleOffset.x * 5.0, uBlackHoleOffset.y * 3.4, 0.0);
    float yawSin = sin(uCameraYaw);
    float yawCos = cos(uCameraYaw);
    vec3 camPos = camTarget + vec3(
      yawSin * uCameraDistance,
      2.6 + uCameraPitch * uCameraDistance,
      yawCos * uCameraDistance
    );
    vec3 camForward = normalize(camTarget - camPos);
    vec3 camRight = normalize(cross(vec3(0.0, 1.0, 0.0), camForward));
    vec3 camUp = cross(camForward, camRight);

    vec3 rayDir = normalize(camForward + camRight * uv.x + camUp * uv.y);
    vec3 rayPos = camPos;
    vec3 prevPos = camPos;
    vec3 color = vec3(0.0);
    float alpha = 0.0;
    bool escaped = false;
    bool captured = false;

    for (int i = 0; i < 192; i++) {
      if (float(i) >= uRaySteps || escaped || captured || alpha > 0.992) {
        break;
      }

      float r = length(rayPos);
      if (r < rs * 1.01) {
        captured = true;
        break;
      }

      if (r > 120.0) {
        escaped = true;
        break;
      }

      vec3 toCenter = -rayPos / max(r, 0.0001);
      float bendStrength = rs / max(r * r, 0.0001) * uStepSize * uGravitationalLensing;
      rayDir = normalize(rayDir + toCenter * bendStrength);

      prevPos = rayPos;
      rayPos += rayDir * uStepSize;

      bool crossedPlane = (prevPos.y * rayPos.y) < 0.0;
      if (crossedPlane && alpha < 0.99) {
        float t = -prevPos.y / (rayPos.y - prevPos.y);
        vec3 hitPos = mix(prevPos, rayPos, t);
        float hitR = length(hitPos.xz);
        if (hitR > uDiskInnerRadius && hitR < uDiskOuterRadius) {
          float hitAngle = atan(hitPos.z, hitPos.x);
          vec4 disk = accretionDiskColor(hitR, hitAngle, uTime, rayDir);
          float remaining = 1.0 - alpha;
          color += disk.rgb * disk.a * remaining;
          alpha += disk.a * remaining;
        }
      }
    }

    if (!captured) {
      escaped = true;
    }

    if (escaped && alpha < 0.999) {
      vec3 background = vec3(0.004, 0.008, 0.014);
      background += starField(rayDir) + nebulaField(rayDir);

      // Stronger lensing shell so nearby stars/nebula visibly bend around the event horizon.
      vec2 bhScreenVec = uv - uBlackHoleOffset;
      float bhScreenDist = max(length(bhScreenVec), 0.0008);
      vec2 bhRadial = bhScreenVec / bhScreenDist;
      vec2 bhTangent = vec2(-bhRadial.y, bhRadial.x);

      float lensRadius = baseApparentRadius * (1.28 + closeFactor * 0.52);
      float lensWidth = baseApparentRadius * (0.36 + closeFactor * 0.08);
      float ringLens = exp(-pow((bhScreenDist - lensRadius) / lensWidth, 2.0));
      float nearLens = exp(-pow((bhScreenDist - baseApparentRadius * 0.98) / (baseApparentRadius * 0.28), 2.0));
      float haloLens = exp(-pow((bhScreenDist - baseApparentRadius * 2.15) / (baseApparentRadius * 0.78), 2.0));

      float gravity = clamp((baseApparentRadius * (1.85 + closeFactor * 0.7)) / bhScreenDist, 0.0, 4.2);
      float lensStrength = gravity * (0.22 + ringLens * 1.05 + nearLens * 0.62 + haloLens * 0.28);

      vec2 lensUV =
        uv +
        bhTangent * lensStrength * baseApparentRadius * (0.62 + ringLens * 0.4) -
        bhRadial * lensStrength * baseApparentRadius * (0.34 + nearLens * 0.18);

      // Mild chromatic split reinforces the "space is bending" read without extra geometry.
      vec2 chromaOffset = bhTangent * baseApparentRadius * (0.015 + ringLens * 0.014);
      vec3 lensedDir = normalize(camForward + camRight * lensUV.x + camUp * lensUV.y);
      vec3 lensedDirR = normalize(camForward + camRight * (lensUV.x + chromaOffset.x) + camUp * (lensUV.y + chromaOffset.y));
      vec3 lensedDirB = normalize(camForward + camRight * (lensUV.x - chromaOffset.x) + camUp * (lensUV.y - chromaOffset.y));

      vec3 lensedStars = starField(lensedDir);
      vec3 lensedStarsR = starField(lensedDirR);
      vec3 lensedStarsB = starField(lensedDirB);
      vec3 lensedNebula = nebulaField(lensedDir);
      vec3 lensedBackground = vec3(lensedStarsR.r, lensedStars.g, lensedStarsB.b) + lensedNebula;

      float spaceStretch = clamp(ringLens * 1.4 + nearLens * 0.9 + haloLens * 0.45, 0.0, 2.6);
      background += lensedBackground * spaceStretch;
      background = mix(
        background,
        lensedBackground + vec3(0.014, 0.024, 0.04),
        clamp(lensStrength * 0.48 + ringLens * 0.3, 0.0, 0.92)
      );
      color += background * (1.0 - alpha);
    }

    vec2 bhVec = uv - uBlackHoleOffset;
    float bhAngle = atan(bhVec.y, bhVec.x);
    float morphPulse = 0.5 + 0.5 * sin(uTime * 0.86);
    float morphAmp = uMorphStrength * (0.72 + closeFactor * 0.52);
    float angularWarp =
      sin(bhAngle * 3.0 + uTime * 1.7) * 0.14 +
      sin(bhAngle * 5.0 - uTime * 1.26) * 0.1 +
      sin(bhAngle * 9.0 + uTime * 2.34) * 0.05;
    float noiseWarp = (noise3D(vec3(cos(bhAngle) * 2.8, sin(bhAngle) * 2.8, uTime * 0.31)) - 0.5) * 2.0;
    float warp = (angularWarp + noiseWarp * 0.18) * morphAmp * (0.7 + 0.6 * morphPulse);
    float bhScreenR = length(bhVec) * (1.0 + warp);
    float apparentRadius = baseApparentRadius * (1.0 + morphAmp * 0.14 * sin(uTime * 0.92));

    float shadowCore = 1.0 - smoothstep(apparentRadius * 0.82, apparentRadius * 0.95, bhScreenR);
    float shadowFeather = 1.0 - smoothstep(apparentRadius * 0.95, apparentRadius * 1.08, bhScreenR);
    color *= 1.0 - shadowCore * 0.996;
    color *= 1.0 - shadowFeather * 0.28;

    float photonCore = exp(-pow((bhScreenR - apparentRadius * 1.0) / (apparentRadius * 0.045), 2.0));
    float photonRing = exp(-pow((bhScreenR - apparentRadius * 1.18) / (apparentRadius * 0.095), 2.0));
    float photonOuter = exp(-pow((bhScreenR - apparentRadius * 1.58) / (apparentRadius * 0.16), 2.0));
    color += vec3(0.96, 0.99, 1.0) * photonCore * 0.94;
    color += vec3(0.66, 0.86, 1.0) * photonRing * 0.5;
    color += vec3(0.2, 0.37, 0.58) * photonOuter * 0.15;
    float lensArc = exp(-pow((bhScreenR - apparentRadius * 1.36) / (apparentRadius * 0.12), 2.0));
    color += vec3(0.58, 0.78, 1.0) * lensArc * (0.22 + closeFactor * 0.18);

    float focusBoost = exp(-pow((bhScreenR - apparentRadius * 1.18) / (apparentRadius * 0.42), 2.0));
    color *= 1.0 + focusBoost * 0.26;

    // Force a readable accretion ellipse on screen so the black-hole "ring" remains visible.
    vec2 diskUV = uv - uBlackHoleOffset;
    float c = cos(uDiskScreenAngle);
    float s = sin(uDiskScreenAngle);
    vec2 diskRot = vec2(
      c * diskUV.x - s * diskUV.y,
      s * diskUV.x + c * diskUV.y
    );
    diskRot.y /= max(uDiskScreenTilt, 0.18);
    float diskAngle = atan(diskRot.y, diskRot.x);
    float diskWarp = sin(diskAngle * 4.0 - uTime * 1.35) * 0.12 * morphAmp;
    vec2 diskMorphed = vec2(
      diskRot.x * (1.0 + diskWarp),
      diskRot.y * (1.0 - diskWarp * 0.55)
    );
    float diskScreenR = length(diskMorphed);
    float ellipseCore = exp(-pow((diskScreenR - apparentRadius * 1.28) / (apparentRadius * 0.09), 2.0));
    float ellipseGlow = exp(-pow((diskScreenR - apparentRadius * 1.52) / (apparentRadius * 0.2), 2.0));
    float ellipseMask = 1.0 - shadowCore * 0.8;
    color += vec3(0.92, 0.98, 1.0) * ellipseCore * 0.68 * ellipseMask;
    color += vec3(0.48, 0.73, 0.98) * ellipseGlow * 0.24 * ellipseMask;

    color = max(color, vec3(0.0));
    color = pow(color, vec3(0.9));
    color = clamp(color * 1.28 - 0.01, 0.0, 1.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;
