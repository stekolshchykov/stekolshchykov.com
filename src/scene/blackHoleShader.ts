import { Vector2 } from 'three';

export function createBlackHoleUniforms(lowPowerMode: boolean, width: number, height: number) {
  return {
    uTime: { value: 0 },
    uResolution: { value: new Vector2(width, height) },
    uCameraPos: { value: new Vector2(0, 0) }, // Not used directly in shader but good for debugging if needed
    uCameraDistance: { value: lowPowerMode ? 12.0 : 15.0 }, // Closer default for more impact
    uCameraYaw: { value: 0.0 },
    uCameraPitch: { value: 0.0 },

    // Physics Parameters
    uBlackHoleMass: { value: 1.0 },       // Normalized mass
    uSchwarzschildRadius: { value: 2.0 }, // Rs = 2GM/c^2
    uAccretionInner: { value: 5.0 },      // ~2.5 Rs
    uAccretionOuter: { value: 16.0 },     // ~8 Rs

    // High-Fidelity Rendering Params
    uDiskTemperature: { value: 8000.0 },  // Kelvin base
    uDiskDensity: { value: lowPowerMode ? 1.5 : 2.5 },
    uDopplerStrength: { value: 1.0 },     // Control relativistic beaming
    uLensingStrength: { value: 1.0 },

    // Animation/Noise
    uTimeScale: { value: 0.2 },
    uNoiseScale: { value: 2.0 },
    uDetailIter: { value: lowPowerMode ? 3 : 5 },
    uStepSize: { value: 0.1 },

    // Starfield Integration
    uStarDensity: { value: 0.15 },
    uStarBrightness: { value: 1.0 },
    uStarSize: { value: 1.0 }, // Added missing uniform
  };
}

export const BLACK_HOLE_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const BLACK_HOLE_FRAGMENT_SHADER = `


  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uCameraDistance;
  uniform float uCameraYaw;
  uniform float uCameraPitch;
  
  uniform float uBlackHoleMass;
  uniform float uSchwarzschildRadius;
  uniform float uAccretionInner;
  uniform float uAccretionOuter;
  
  uniform float uDiskTemperature;
  uniform float uDiskDensity;
  uniform float uDopplerStrength;
  uniform float uLensingStrength;
  uniform float uStarSize; // Added missing uniform
  
  uniform float uTimeScale;
  uniform float uNoiseScale;
  uniform int uDetailIter;
  
  // Custom added uniform for raymarching step size
  uniform float uStepSize;

  varying vec2 vUv;

  const float PI = 3.14159265359;
  const float C = 299792458.0; // Speed of light (physically unrelated here but good for constants)

  // -- NOISE FUNCTIONS --


  // 3D Value Noise for smooth gas structures
  float hash1(float n) { return fract(sin(n) * 43758.5453123); }
  float hash3(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
  
  float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + p.z * 113.0;
    return mix(mix(mix(hash1(n + 0.0), hash1(n + 1.0), f.x),
                   mix(hash1(n + 57.0), hash1(n + 58.0), f.x), f.y),
               mix(mix(hash1(n + 113.0), hash1(n + 114.0), f.x),
                   mix(hash1(n + 170.0), hash1(n + 171.0), f.x), f.y), f.z);
  }

  // FBM with rotation/advection
  float fbm(vec3 p) {
    float f = 0.0;
    float w = 0.5;
    for (int i = 0; i < 5; i++) {
      if (i >= uDetailIter) break;
      f += w * noise(p);
      p *= 2.02;
      w *= 0.5;
    }
    return f;
  }

  // Domain warped noise for swirling fluid
  float flowNoise(vec3 p, float t) {
    vec3 offset = vec3(t * 0.5, 0.0, t * 0.2);
    float n1 = fbm(p + offset);
    float n2 = fbm(p + vec3(n1 * 2.0) - offset);
    return fbm(p + vec3(n2 * 4.0));
  }

  // -- MISSING HASH FUNCTIONS --
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + vec2(45.32));
    return fract(p.x * p.y);
  }

  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx + vec3(33.33));
    return fract((p3.xx+p3.yz)*p3.zy);
  }

  // -- SPECTRAL HELPER --
  
  vec3 blackbody(float Temp) {
    vec3 col = vec3(255.);
    col.x = 56100000. * pow(Temp,(-3. / 2.)) + 148.;
    col.y = 100040000. * pow(Temp,(-3. / 2.)) + 165.;
    col.z = 194180000. * pow(Temp,(-3. / 2.)) + 255.;
    col /= 255.;
    if (Temp > 6500.) col = mix(vec3(0.4, 0.6, 1.0), col, 0.5); // Blue shift bias for hot disks
    return clamp(col, 0.0, 1.0); 
  }


  vec3 starField(vec3 rayDir) {
    float theta = atan(rayDir.z, rayDir.x);
    float phi = asin(clamp(rayDir.y, -1.0, 1.0));
    vec2 scaled = vec2(theta, phi) * (58.0 / max(uStarSize, 0.3));
    vec2 cell = floor(scaled);
    vec2 cellUV = fract(scaled);

    float starChance = step(1.0 - uStarDensity, hash21(cell));
    vec2 starPos = hash22(cell + vec2(42.0)) * 0.82 + vec2(0.09);
    float distToStar = length(cellUV - starPos);
    float baseSize = hash21(cell + vec2(100.0)) * 0.03 + 0.01;
    float finalStarSize = baseSize * uStarSize;
    float core = smoothstep(finalStarSize, 0.0, distToStar);
    float glow = smoothstep(finalStarSize * 3.2, 0.0, distToStar) * 0.35;
    float twinkle = 0.82 + 0.18 * sin(uTime * 0.55 + hash21(cell + vec2(8.0)) * 12.0);
    float intensity = (core + glow) * starChance * twinkle;
    vec3 starColor = mix(vec3(0.82, 0.9, 1.0), vec3(1.0, 0.92, 0.76), hash21(cell + vec2(200.0)));
    return starColor * intensity * uStarBrightness;
  }

  // -- VOLUMETRIC DISK LOGIC --

  float getDiskDensity(vec3 p) {
    float r = length(p);
    if (r < uAccretionInner || r > uAccretionOuter) return 0.0;
    
    float h = abs(p.y);
    float diskHeight = 0.5 + (r - uAccretionInner) * 0.1; // Flaring disk
    if (h > diskHeight) return 0.0;

    float density = uDiskDensity * exp(-2.0 * h / diskHeight); // Falloff height
    
    // Add noise/structure
    float speed = sqrt(1.0 / max(r, 0.1)) * 4.0;
    float angle = atan(p.z, p.x) + speed * uTime * uTimeScale;
    vec3 noiseCoord = vec3(r * 0.5, angle * 2.0, h * 2.0);
    
    // Warped flow
    float noiseVal = flowNoise(noiseCoord * uNoiseScale, uTime * uTimeScale * 0.5);
    density *= smoothstep(0.2, 0.8, noiseVal); 
    
    // Soft edges
    density *= smoothstep(uAccretionInner, uAccretionInner + 1.0, r);
    density *= smoothstep(uAccretionOuter, uAccretionOuter - 2.0, r);
    
    return density;
  }

  vec3 getDiskColor(vec3 p, vec3 viewDir) {
    float r = length(p);
    
    // Temp gradient: Inner is hotter
    float temp = uDiskTemperature * pow(uAccretionInner / r, 0.75);
    vec3 baseColor = blackbody(temp);
    
    // Doppler Beaming
    // Velocity vector for circular orbit in XZ plane
    vec3 vel = normalize(vec3(-p.z, 0.0, p.x));
    float beta = 0.5 * sqrt(uAccretionInner / r); // Approximation of orbital velocity relative to c
    float doppler = 1.0 / (1.0 - beta * dot(vel, viewDir));
    float beaming = pow(doppler, 3.0); // Relativistic beaming power
    
    return baseColor * mix(1.0, beaming, uDopplerStrength);
  }

  void main() {
    // 1. Ray Setup
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= uResolution.x / uResolution.y;

    // Camera Basis
    vec3 camPos = vec3(0.0, 0.0, uCameraDistance);
    
    // Rotate camera pos based on yaw/pitch
    float cy = cos(uCameraYaw), sy = sin(uCameraYaw);
    float cp = cos(uCameraPitch), sp = sin(uCameraPitch);
    
    // Yaw rotation (around Y)
    camPos.xz = mat2(cy, -sy, sy, cy) * camPos.xz;
    // Pitch rotation (around X local) - simplified for orbit
    camPos.yz = mat2(cp, -sp, sp, cp) * camPos.yz;

    vec3 camTarget = vec3(0.0);
    vec3 camFwd = normalize(camTarget - camPos);
    vec3 camRight = normalize(cross(vec3(0.0, 1.0, 0.0), camFwd));
    vec3 camUp = cross(camFwd, camRight);

    vec3 rayDir = normalize(camFwd + camRight * uv.x + camUp * uv.y);
    vec3 rayPos = camPos;

    vec3 accumColor = vec3(0.0);
    float accumDensity = 0.0;
    
    bool hitHorizon = false;
    float stepLen = uStepSize;

    // 2. Ray Marching Loop
    for(int i = 0; i < 128; i++) { // Max iterations
        // Distance to BH center
        float rSq = dot(rayPos, rayPos);
        float r = sqrt(rSq);
        
        // Event Horizon check
        if (r < uSchwarzschildRadius) {
            hitHorizon = true;
            break; 
        }
        
        // Escape condition
        if (r > uCameraDistance * 2.0 && i > 10) break;

        // Gravity Bending (Newtonian + correction for visual lensing)
        // Force direction
        vec3 gDir = -normalize(rayPos);
        
        // Bending factor: 1/r^2 falloff
        // Adaptive strength to fake GR light bending
        float bend = (uSchwarzschildRadius * 1.5) / rSq; 
        
        rayDir = normalize(rayDir + gDir * bend * uStepSize * uLensingStrength);
        
        // Adaptive Step
        // Smaller steps near BH and disk
        float dDisk = max(abs(rayPos.y) - 1.0, 0.0); // Vertical distance to disk plane approx
        float proximity = min(r - uSchwarzschildRadius, dDisk);
        stepLen = max(uStepSize * 0.2, proximity * 0.15); 
        
        // Move Ray
        rayPos += rayDir * stepLen;
        
        // Volumetric Sampling
        float density = getDiskDensity(rayPos);
        if (density > 0.01) {
            vec3 emission = getDiskColor(rayPos, rayDir);
            float absorb = exp(-density * stepLen * 0.5);
            vec3 contrib = emission * density * stepLen * (1.0 - accumDensity); // Emission-Absorption approx
            accumColor += contrib;
            accumDensity += (1.0 - absorb) * (1.0 - accumDensity);
            
            if (accumDensity > 0.98) break; // Opaque
        }
    }

    // 3. Background / Shadow
    if (hitHorizon) {
        accumColor = mix(accumColor, vec3(0.0), 1.0 - accumDensity); // Black hole core
    } else {
        // Sample Background (Starfield/Nebula)
        // We use the FINAL rayDir which has been bent by gravity -> Gravitational Lensing!
        vec3 bg = starField(rayDir); // Removed nebulaField(rayDir) as it was undefined
        accumColor += bg * (1.0 - accumDensity);
    }
    
    // 4. Tone Mapping & Output
    // Simple Reinhard-ish
    accumColor = accumColor / (accumColor + vec3(1.0));
    // Gamma correction
    accumColor = pow(accumColor, vec3(1.0/2.2));
    
    gl_FragColor = vec4(accumColor, 1.0);
`;
