import { Vector2, Vector3, Matrix4 } from 'three';

export function createBlackHoleUniforms(lowPowerMode: boolean, width: number, height: number) {
  return {
    uTime: { value: 0 },
    uResolution: { value: new Vector2(width, height) },
    uCameraWorldPos: { value: new Vector3(0, 0, 30) },
    uCameraInverseViewMatrix: { value: new Matrix4() },
    uSunPosition: { value: new Vector3(0, 0, 0) }, // Scaled position for interaction

    // Physics constants
    uSchwarzschildRadius: { value: 5.0 }, // Event Horizon Radius
    uDiskInner: { value: 1.5 }, // Multiplier of Rs
    uDiskOuter: { value: 6.0 }, // Multiplier of Rs
    uDiskAlpha: { value: lowPowerMode ? 0.8 : 1.2 },
  };
}

export const BLACK_HOLE_VERTEX_SHADER = `
  varying vec3 vLocalPos; // Added

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    vLocalPos = position; // Pass local pos
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const BLACK_HOLE_FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uCameraWorldPos;
  uniform mat4 uCameraInverseViewMatrix;
  uniform vec3 uSunPosition; // Scaled sun position
  
  uniform float uSchwarzschildRadius;
  uniform float uDiskInner;
  uniform float uDiskOuter;
  uniform float uDiskAlpha;

  varying vec3 vWorldPos;
  varying vec3 vLocalPos; // Receive
  varying vec2 vUv;


  #define MAX_STEPS 48
  #define STEP_SIZE 0.06
  #define PI 3.14159265359

  // --- Noise Functions for Accretion Disk Texture ---
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + vec2(45.32));
    return fract(p.x * p.y);
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = i.x + i.y * 57.0 + i.z * 113.0;
    return mix(mix(mix(hash(i.xy), hash(i.xy + vec2(1.0, 0.0)), f.x),
                   mix(hash(i.xy + vec2(0.0, 1.0)), hash(i.xy + vec2(1.0, 1.0)), f.x), f.y),
               mix(mix(hash(i.xy + vec2(0.0, 0.0)), hash(i.xy + vec2(1.0, 0.0)), f.x),
                   mix(hash(i.xy + vec2(0.0, 1.0)), hash(i.xy + vec2(1.0, 1.0)), f.x), f.y), f.z);
  }

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

  void main() {
    // Volumetric Raymarching from Surface Inwards
    // vec3 bhCenter ... removed modelMatrix dependency
    vec3 localPos = vLocalPos; 

    
    vec3 rayDir = normalize(vWorldPos - uCameraWorldPos);
    vec3 currPos = localPos; // Start marching at surface, in local-ish space (aligned with world axes)
    
    // Note: If the group is Rotated, localPos is Rotated. But rayDir is World.
    // If we march in currPos using rayDir, we mix spaces if rotation exists.
    // BH only rotates nicely on Y.
    // Let's assume standard orientation for physics, or minimal rotation.
    
    vec3 col = vec3(0.0);
    float alpha = 0.0;
    
    float Rs = uSchwarzschildRadius;
    float innerR = Rs * uDiskInner;
    float outerR = Rs * uDiskOuter;
    
    // Animation
    float time = uTime * 0.5;
    mat2 rot = mat2(cos(time), sin(time), -sin(time), cos(time));
    
    for(int i=0; i<48; i++) {
        float r = length(currPos);
        
        // Event Horizon (Black Void)
        if(r < Rs) {
            col = vec3(0.0); // Black
            alpha = 1.0; 
            break;
        }
        
        // Accretion Disk (XZ Plane Volume)
        // Distance to plane
        float h = abs(currPos.y);
        float dR = length(currPos.xz);
        
        if(h < 1.5 && dR > innerR && dR < outerR) {
             // Sample Density
             float fade = smoothstep(1.5, 0.0, h) * smoothstep(innerR, innerR+1.0, dR) * smoothstep(outerR, outerR-2.0, dR);
             
             if(fade > 0.01) {
                 // Texture
                 vec3 pTex = currPos * 0.5;
                 pTex.zx *= rot; // Rotate disk
                 float den = fbm(pTex + vec3(0.0, time, 0.0));
                 
                 // Temperature Gradient (Hotter inside)
                 vec3 hot = vec3(0.1, 0.4, 1.0); // Blue Center
                 vec3 cold = vec3(1.0, 0.3, 0.05); // Red Edge
                 vec3 c = mix(cold, hot, smoothstep(outerR, innerR, dR));
                 
                 float emission = den * fade * uDiskAlpha * 0.15;
                 
                 // Additive blend
                 col += c * emission * (1.0 - alpha);
                 alpha += emission;
             }
        }
        
        if(alpha > 0.98) break;
        
        // Gravity Bending (Fake)
        // Pull ray towards origin
        vec3 toCenter = normalize(-currPos);
        float dist = r;
        float bend = (Rs * 15.0) / (dist*dist + 1.0);
        rayDir = normalize(rayDir + toCenter * bend * STEP_SIZE * 0.2);
        
        // Step
        currPos += rayDir * STEP_SIZE * (dist * 0.15 + 1.0); // Adaptive step
        
        if(r > 600.0) break; // Exited sphere
    }
    
    // Background distortion (Lensing)
    // If not opaque, add background stars distorted by rayDir
    if(alpha < 1.0) {
        float stars = pow(hash(rayDir.xy * 50.0), 30.0);
        col += vec3(stars) * (1.0 - alpha);
    }

    gl_FragColor = vec4(col, alpha);
  }
`;
