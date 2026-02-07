import { Color, Vector3 } from 'three';

// --- Proven "Fireball" Sun Shader ---
// Based on standard creating procedural stars/suns in Three.js
// Features: Vertex Displacement, 3-Layer Noise (Base, Detail, Flare), Rim Lighting

export function createSunUniforms() {
  return {
    uTime: { value: 0 },
    uColorA: { value: new Color('#ffaa33') }, // Core
    uColorB: { value: new Color('#ff3300') }, // Edge
    uColorC: { value: new Color('#ffffff') }, // Flare
    uSurfaceSpeed: { value: 0.15 },
    uNoiseScale: { value: 1.0 },
    uSunPosition: { value: new Vector3(0, 0, 0) },
  };
}

export const SUN_VERTEX_SHADER = `
  uniform float uTime;
  uniform float uSurfaceSpeed;
  uniform float uNoiseScale;
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vNoise;

  // GLSL Textureless Classic 3D Noise (Simplex)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i); 
    vec4 p = permute( permute( permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Vertex Displacement (Pulsing Star)
    float time = uTime * uSurfaceSpeed;
    float noise = snoise(position * uNoiseScale + vec3(time));
    vNoise = noise;
    
    vec3 newPos = position + normal * (noise * 5.0); // displace by 5 units
    
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPos, 1.0);
  }
`;

export const SUN_FRAGMENT_SHADER = `
  uniform float uTime;
  uniform float uSurfaceSpeed;
  uniform vec3 uColorA; // Darker/Edge (Red/Orange)
  uniform vec3 uColorB; // Lighter/Core (Yellow/Gold)
  uniform vec3 uColorC; // Flares (White)
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vNoise; // From vertex

  // Simplified Noise for Fragment details
  float hash(float n) { return fract(sin(n) * 43758.5453123); }
  float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                   mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
               mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                   mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
  }

  // FBM (Fractal Brownian Motion) for detailed surface
  float fbm(vec3 p) {
    float f = 0.0;
    float w = 0.5;
    for (int i = 0; i < 5; i++) {
        f += w * noise(p);
        p *= 2.02; 
        w *= 0.5;
    }
    return f;
  }

  void main() {
    float n = fbm(vPosition * 0.05 + vec3(0.0, uTime * 0.1, 0.0));
    float spots = fbm(vPosition * 0.1 + vec3(uTime * 0.5));
    
    // Mix colors based on noise
    vec3 col = mix(uColorA, uColorB, n + spots * 0.2);
    
    // Rim lighting (Fresnel)
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float val = dot(vNormal, viewDir);
    float rim = 1.0 - max(val, 0.0);
    rim = pow(rim, 2.0);
    
    col += uColorC * rim * 1.5;

    gl_FragColor = vec4(col, 1.0);
  }
`;
