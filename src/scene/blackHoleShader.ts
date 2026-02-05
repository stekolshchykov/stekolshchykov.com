import { Vector2, Vector3, Matrix4 } from 'three';

export function createBlackHoleUniforms(lowPowerMode: boolean, width: number, height: number) {
  return {
    uTime: { value: 0 },
    uResolution: { value: new Vector2(width, height) },
    uCameraWorldPos: { value: new Vector3(0, 0, 30) },
    uCameraInverseViewMatrix: { value: new Matrix4() },

    // Physics Parameters - scaled for camera distance
    // Camera is at ~1500 world units, scaled by 0.02 = ~30 shader units
    // Accretion disk should be visible from this distance
    uSchwarzschildRadius: { value: 4.0 },
    uAccretionInner: { value: 6.0 },
    uAccretionOuter: { value: 25.0 },

    // Rendering Params
    uDiskDensity: { value: lowPowerMode ? 1.0 : 1.5 },
    uDiskNoiseScale: { value: 1.5 },
    uDopplerStrength: { value: 1.0 },
    uLensingStrength: { value: 0.8 },

    // Starfield Integration
    uStarDensity: { value: 0.15 },
    uStarBrightness: { value: 3.0 },
  };
}

export const BLACK_HOLE_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0); // Fullscreen quad
  }
`;

export const BLACK_HOLE_FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec2 uResolution;
  
  uniform vec3 uCameraWorldPos;
  uniform mat4 uCameraInverseViewMatrix;

  uniform float uSchwarzschildRadius;
  uniform float uAccretionInner;
  uniform float uAccretionOuter;

  uniform float uDiskDensity;
  uniform float uDiskNoiseScale;
  uniform float uDopplerStrength;
  uniform float uLensingStrength;

  varying vec2 vUv;

  #define MAX_STEPS 96
  #define STEP_SIZE 0.1
  #define PI 3.14159265359

  // --- Noise Functions ---
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + vec2(45.32));
    return fract(p.x * p.y);
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    // Simple fast 3D noise
    float n = i.x + i.y * 57.0 + i.z * 113.0;
    return mix(mix(mix(hash(i.xy), hash(i.xy + vec2(1.0, 0.0)), f.x),
                   mix(hash(i.xy + vec2(0.0, 1.0)), hash(i.xy + vec2(1.0, 1.0)), f.x), f.y),
               mix(mix(hash(i.xy + vec2(0.0, 0.0)), hash(i.xy + vec2(1.0, 0.0)), f.x),
                   mix(hash(i.xy + vec2(0.0, 1.0)), hash(i.xy + vec2(1.0, 1.0)), f.x), f.y), f.z);
  }
  
  // 3D Value Noise for volumetric look
  float fbm(vec3 p) {
    float f = 0.0;
    float w = 0.5;
    for (int i = 0; i < 4; i++) {
      f += w * noise(p);
      p *= 2.02;
      w *= 0.5;
    }
    return f;
  }

  // --- Color Palettes ---
  vec3 getBlackbody(float t) {
    // Kelvin-ish color mapping
    return 0.5 * vec3(1.0, 0.5, 0.1) * exp(t) + vec3(0.1, 0.2, 0.8) * exp(-t*0.5);
  }

  // --- Main Raymarching ---
  void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= uResolution.x / uResolution.y;

    // Camera Ray Generation
    vec4 rayDir4 = uCameraInverseViewMatrix * vec4(normalize(vec3(uv, -1.5)), 0.0);
    vec3 rayDir = normalize(rayDir4.xyz);
    vec3 camPos = uCameraWorldPos; // Scaled world pos from JS
    
    vec3 pos = camPos;
    vec3 accumColor = vec3(0.0);
    float accumDensity = 0.0;
    
    // Pre-calculate rotation for disk animation
    float time = uTime * 0.4;
    mat2 rot = mat2(cos(time), sin(time), -sin(time), cos(time));

    // Phase 2 #19: Kerr spin parameter (near-maximal 0.99)
    float a = 0.99; 

    for(int i = 0; i < MAX_STEPS; i++) {
      float r = length(pos);
      
      // Event Horizon
      if(r < uSchwarzschildRadius) {
        accumColor = mix(accumColor, vec3(0.0), 1.0 - accumDensity); // Black out core
        accumDensity = 1.0;
        break;
      }
      
      // --- Accretion Disk Volumetric Sampling ---
      // Flatten the coordinate space to a disk
      float diskH = abs(pos.y);
      float diskR = length(pos.xz);
      
      if(diskR > uAccretionInner && diskR < uAccretionOuter) {
        // Volumetric bounds
        float verticalFade = smoothstep(0.8, 0.0, diskH); // Thin disk
        float radialFade = smoothstep(uAccretionInner, uAccretionInner + 1.0, diskR) * smoothstep(uAccretionOuter, uAccretionOuter - 4.0, diskR);
        
        if(verticalFade > 0.01 && radialFade > 0.01) {
            // Turbulence
            vec3 noisePos = pos * uDiskNoiseScale;
            noisePos.xz *= rot; // Rotate noise
            float density = fbm(noisePos + vec3(0.0, time, 0.0));
            
            // Phase 2 #23: Temperature Gradient (Shakura-Sunyaev approximation)
            // T ~ R^-0.75. We normalize it for color mapping.
            float tRel = pow(uAccretionInner / diskR, 0.75);
            
            // Phase 1 #27: Accretion Rate Variability
            float accretionRate = 1.0 + 0.35 * sin(time * 0.8 + diskR * 0.4);
            
            // Realistic color mapping: Blue-hot inside, Red-cool outside
            vec3 hotColor = vec3(0.2, 0.6, 1.0); // Cyan-blue hot
            vec3 midColor = vec3(1.0, 0.4, 0.1); // Orange-red mid
            vec3 emission = mix(midColor, hotColor, tRel * 1.5 + density * 0.4);
            emission *= accretionRate * (0.8 + tRel * 0.4);
            
            // Phase 1 #24: Relativistic Beaming (Doppler) Enhancement
            float beta = sqrt(uSchwarzschildRadius / (2.0 * diskR)); // Orbital velocity approx
            vec3 vel = normalize(vec3(-pos.z, 0.0, pos.x)); 
            float cosPhi = dot(vel, -rayDir); 
            
            // Relativistic Doppler Factor D
            float gamma = 1.0 / sqrt(1.0 - beta * beta);
            float dopplerD = 1.0 / (gamma * (1.0 - beta * cosPhi));
            
            // Emission scales by D^3 (beaming)
            float beam = pow(dopplerD, 3.0) * uDopplerStrength;
            
            float sampleDensity = density * verticalFade * radialFade * 0.2 * uDiskDensity;
            accumColor += emission * beam * sampleDensity * (1.0 - accumDensity);
            accumDensity += sampleDensity;
        }
      }
      
      if(accumDensity >= 1.0) break;

      // --- Gravitational Lensing & Kerr Distortion ---
      vec3 toCenter = normalize(-pos);
      float distSq = dot(pos, pos);
      
      // Newtonian + General Relativity bend approximation
      float bendForce = (uSchwarzschildRadius * 6.0 * uLensingStrength) / (distSq * 1.5);
      
      // Phase 2 #33: Frame Dragging (Spacetime rotation near spinning BH)
      float omega = a / (distSq + a*a); // Simplified frame dragging
      rayDir.xz = mat2(cos(omega), sin(omega), -sin(omega), cos(omega)) * rayDir.xz;

      // Variable step size
      float stepL = STEP_SIZE * (1.0 + r * 0.1); 
      
      rayDir = normalize(rayDir + toCenter * bendForce * stepL);
      pos += rayDir * stepL;
      
      if(r > uAccretionOuter * 1.5) break; // Exit volume
    }
    
    // Background Stars (if not fully occluded)
    if(accumDensity < 1.0) {
        // Simple starfield for background
        float star = pow(hash(rayDir.xy * 20.0), 20.0) * 0.5;
        accumColor += vec3(star) * (1.0 - accumDensity);
    }
    
    // Tone mapping
    accumColor = accumColor / (accumColor + vec3(1.0));
    accumColor = pow(accumColor, vec3(0.4545)); // Gamma

    gl_FragColor = vec4(accumColor, 1.0);
  }
`;

