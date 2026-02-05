import { Color, Vector3 } from 'three';

export function createSunUniforms() {
  return {
    uTime: { value: 0 },
    // Physically based colors based on solar temperature (5778K)
    uColorA: { value: new Color('#fffef5') }, // Hot core / Bright granules (~5900K)
    uColorB: { value: new Color('#fff9e8') }, // Convection layer (~5600K)
    uColorC: { value: new Color('#ffb366') }, // Darker filaments / Sunspots (~3800K-5000K)
    uSurfaceNoiseScale: { value: 1.35 },
    uCoronaStrength: { value: 1.1 },
    uDisplacementScale: { value: 4.6 },
    uSunPosition: { value: new Vector3(0, 0, -200) }, // Default position
  };
}

export const SUN_VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;
  varying vec3 vLocalPos;
  varying float vNoise;

  uniform float uTime;
  uniform float uSurfaceNoiseScale;
  uniform float uDisplacementScale;

  // 3D simplex noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 ); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

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
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                   dot(p2,x2), dot(p3,x3) ) );
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amp = 0.58;
    for (int i = 0; i < 4; i++) {
      value += snoise(p) * amp;
      p *= 2.03;
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    vUv = uv;
    vLocalPos = normalize(position);

    float flow = uTime * 0.22;
    float lowFreq = fbm(position * (0.014 * uSurfaceNoiseScale) + vec3(flow, -flow * 0.37, flow * 0.22));
    float highFreq = snoise(position * (0.062 * uSurfaceNoiseScale) + vec3(-flow * 1.4, flow * 0.91, flow * 0.52));
    vNoise = lowFreq * 0.72 + highFreq * 0.28;

    vec3 displacedPosition = position + normal * ((0.42 + vNoise * 0.58) * uDisplacementScale);
    vec4 worldPos = modelMatrix * vec4(displacedPosition, 1.0);

    vWorldPos = worldPos.xyz;
    vNormal = normalize(normalMatrix * normal);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);

    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
\`;

export const SUN_FRAGMENT_SHADER = \`
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;
  varying vec3 vLocalPos;
  varying float vNoise;

  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uSurfaceNoiseScale;
  uniform float uCoronaStrength;
  uniform float uTime;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash(i + vec3(1.0, 1.0, 1.0));

    float nxy0 = mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y);
    float nxy1 = mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y);
    return mix(nxy0, nxy1, f.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amp = 0.56;
    for (int i = 0; i < 4; i++) {
      value += noise(p) * amp;
      p *= 2.08;
      amp *= 0.5;
    }
    return value;
  }

  // Eddington approximation for limb darkening
  float eddingtonLD(float mu) {
    const float u1 = 0.65;
    const float u2 = 0.23;
    return 1.0 - u1 * (1.0 - mu) - u2 * pow(1.0 - mu, 2.0);
  }

  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float ndv = clamp(dot(normal, viewDir), 0.0, 1.0);

    // Realistic limb darkening scale
    float limbScale = eddingtonLD(ndv);

    vec3 noisePos = vLocalPos * (4.8 * uSurfaceNoiseScale) + vec3(0.0, uTime * 0.08, uTime * 0.04);
    float convection = fbm(noisePos);
    
    // Multi-scale granulation enhancement (pre-Phase 2 hint)
    float granules = smoothstep(0.44, 0.9, convection);

    float filaments = abs(sin((vLocalPos.y * 35.0 + convection * 8.0) + uTime * 1.9));
    filaments = pow(filaments, 3.2);

    float sunspotsNoise = fbm(vLocalPos * 11.0 + vec3(uTime * 0.03, -uTime * 0.02, 0.0));
    float sunspots = smoothstep(0.78, 0.98, sunspotsNoise);
    sunspots *= 0.75 + 0.25 * sin(uTime * 9.0 + vLocalPos.x * 30.0);

    // Realistic color blending with limb darkening
    vec3 base = mix(uColorC, uColorB, granules);
    base = mix(base, uColorA, smoothstep(0.52, 1.0, granules + filaments * 0.24));
    base *= mix(0.76, 1.2, filaments);
    base = mix(base, base * 0.32, sunspots * 0.38);

    // Enhanced edge glow simulating chromosphere hint
    float edgeGlow = pow(1.0 - ndv, 2.45) * (0.55 + 0.45 * filaments) * uCoronaStrength;
    vec3 hAlphaCore = vec3(1.0, 0.4, 0.2); // Reddish H-alpha hint
    vec3 glow = mix(vec3(1.0, 0.62, 0.2), hAlphaCore, pow(1.0 - ndv, 2.0)) * edgeGlow * 0.9;

    float erupt = smoothstep(0.82, 1.0, granules + filaments * 0.2);
    vec3 eruptColor = vec3(1.0, 0.74, 0.35) * erupt * 0.55;

    // Final color with physical limb darkening
    vec3 color = base * limbScale * 1.34 + glow + eruptColor;
    color *= 1.08 + vNoise * 0.12;

    gl_FragColor = vec4(color, 1.0);
  }
\`;
`;
