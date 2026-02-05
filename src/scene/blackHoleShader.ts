import { Vector2 } from 'three';

export function createBlackHoleUniforms(lowPowerMode: boolean, width: number, height: number) {
  return {
    uTime: { value: 0 },
    uResolution: { value: new Vector2(width, height) },
    uBlackHoleOffset: { value: new Vector2(-0.72, 0.16) },
    uCameraDistance: { value: lowPowerMode ? 19.8 : 23.8 },
    uCameraYaw: { value: -0.2 },
    uCameraPitch: { value: -0.08 },
    uBlackHoleMass: { value: lowPowerMode ? 0.43 : 0.52 },
    uStepSize: { value: lowPowerMode ? 0.3 : 0.19 },
    uGravitationalLensing: { value: lowPowerMode ? 1.75 : 2.25 },
    uDiskInnerRadius: { value: 2.75 },
    uDiskOuterRadius: { value: 8.6 },
    uDiskBrightness: { value: lowPowerMode ? 1.5 : 2.05 },
    uDiskTemperature: { value: 14500.0 },
    uDiskRotationSpeed: { value: -4.5 },
    uStarDensity: { value: lowPowerMode ? 0.07 : 0.11 },
    uStarSize: { value: lowPowerMode ? 1.45 : 1.2 },
    uStarBrightness: { value: lowPowerMode ? 0.58 : 0.78 },
    uNebulaStrength: { value: lowPowerMode ? 0.5 : 0.72 },
    uRaySteps: { value: lowPowerMode ? 58.0 : 104.0 },
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

    float rs = uBlackHoleMass * 2.0;

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

    for (int i = 0; i < 80; i++) {
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
      background += starField(rayDir);
      background += nebulaField(rayDir);
      color += background * (1.0 - alpha);
    }

    float bhScreenR = length(uv - uBlackHoleOffset);
    float apparentRadius = 0.165 + rs * 0.016;
    float photonRing = exp(-pow((bhScreenR - apparentRadius * 1.45) / (apparentRadius * 0.3), 2.0));
    color += vec3(0.73, 0.87, 1.0) * photonRing * 0.26;

    color = pow(max(color, vec3(0.0)), vec3(1.0 / 2.2));
    color = clamp(color * 1.06 - 0.015, 0.0, 1.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;
