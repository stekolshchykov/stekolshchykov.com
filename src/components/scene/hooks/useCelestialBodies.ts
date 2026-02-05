import { useEffect, useRef, RefObject } from 'react';
import {
  AdditiveBlending,
  BackSide,
  Color,
  DoubleSide,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  PointLight,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';
import { SUN_FRAGMENT_SHADER, SUN_VERTEX_SHADER, createSunUniforms } from '../../../scene/sunShader';
import { SUN_CORONA_FRAGMENT_SHADER, SUN_CORONA_VERTEX_SHADER } from '../../../scene/sunCoronaShader';
import { logEvent, logRuntime } from '../../../observability/logger';

interface CelestialBodiesConfig {
  sceneRef: RefObject<Scene | null>;
  lowPowerMode: boolean;
  initialized: boolean;
}

interface CelestialQualityPreset {
  blackHoleDetail: number;
  motionScale: number;
}

interface OrbitPlanet {
  mesh: Mesh;
  atmosphere: Mesh | null;
  ring: Mesh | null;
  surfaceMaterial: ShaderMaterial;
  radius: number;
  speed: number;
  phase: number;
  y: number;
  spinSpeed: number;
  atmospherePulse: number;
}

type BlackHoleVariant = 'cinematic' | 'physics' | 'hybrid';

const SUN_POSITION = new Vector3(440, 220, -520);
const BLACK_HOLE_POSITION = new Vector3(-560, -140, -680);

const AURA_VERTEX_SHADER = `
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const AURA_FRAGMENT_SHADER = `
uniform vec3 uColor;
uniform float uPower;
uniform float uTime;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  float fresnel = 1.0 - max(dot(normalize(vNormal), normalize(vViewDir)), 0.0);
  float pulse = 0.9 + 0.1 * sin(uTime * 2.4);
  float glow = pow(fresnel, 2.35) * uPower * pulse;
  gl_FragColor = vec4(uColor * glow, glow);
}
`;

const PLANET_VERTEX_SHADER = `
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vModelPos;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vModelPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const PLANET_FRAGMENT_SHADER = `
uniform float uTime;
uniform float uSeed;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uRimColor;

varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vModelPos;

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
  float amp = 0.55;
  for (int i = 0; i < 4; i++) {
    value += noise(p) * amp;
    p *= 2.03;
    amp *= 0.5;
  }
  return value;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 lightDir = normalize(vec3(0.45, 0.82, 0.28));

  vec3 p = normalize(vModelPos);
  float bandsNoise = fbm(p * 2.2 + vec3(uSeed, uTime * 0.08, 0.0));
  float bands = 0.5 + 0.5 * sin((p.y * 8.5 + bandsNoise * 2.3 + uSeed * 6.0) * 3.2);
  float storms = smoothstep(0.62, 1.0, fbm(p * 6.4 + vec3(uTime * 0.16, uSeed * 1.8, uTime * 0.1)));
  float veins = 0.5 + 0.5 * sin((p.x + p.z) * 18.0 + bandsNoise * 4.0);

  vec3 albedo = mix(uColorA, uColorB, bands);
  albedo += storms * 0.2 * uRimColor;
  albedo *= 0.84 + veins * 0.16;

  float diffuse = max(dot(normal, lightDir), 0.0);
  float lit = 0.25 + diffuse * 0.75;
  float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

  vec3 color = albedo * lit + uRimColor * rim * 0.66;
  gl_FragColor = vec4(color, 1.0);
}
`;

const ACCRETION_VERTEX_SHADER = `
varying vec2 vUv;
varying float vRadius;
varying float vAngle;

void main() {
  vUv = uv;
  vec3 p = position;
  vRadius = length(p.xy);
  vAngle = atan(p.y, p.x);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

const ACCRETION_FRAGMENT_SHADER = `
uniform float uTime;
uniform float uDensity;
uniform float uNoiseScale;
uniform float uFlowSpeed;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uDetail;
uniform vec3 uColorHot;
uniform vec3 uColorMid;
uniform vec3 uColorOuter;

varying vec2 vUv;
varying float vRadius;
varying float vAngle;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
  float value = 0.0;
  float amp = 0.58;
  for (int i = 0; i < 5; i++) {
    value += snoise(p) * amp;
    p *= 2.01;
    amp *= 0.5;
  }
  return value * 0.5 + 0.5;
}

void main() {
  float normalizedRadius = clamp((vRadius - uInnerRadius) / max(uOuterRadius - uInnerRadius, 0.0001), 0.0, 1.0);
  float invR = 1.0 / (normalizedRadius + 0.08);
  float spiral = vAngle * 4.6 - invR * 2.35 + uTime * uFlowSpeed * 2.2;

  vec2 warp = vec2(cos(spiral), sin(spiral));
  vec3 noisePos = vec3(vUv * vec2(6.0, 3.0) + warp * 1.6, uTime * 0.18);

  float n1 = fbm(noisePos * uNoiseScale);
  float n2 = fbm((noisePos + vec3(4.2, 1.7, 0.0)) * (uNoiseScale * 2.1));
  float n3 = fbm((noisePos + vec3(8.6, -3.1, 0.0)) * (uNoiseScale * 4.2));

  float filament = sin(vAngle * 16.0 + uTime * 3.2 + n2 * 7.5);
  filament = pow(max(filament * 0.5 + 0.5, 0.0), 3.0);

  float turbulence = clamp(n1 * 0.52 + n2 * 0.33 + n3 * 0.15 + filament * 0.35, 0.0, 1.0);
  float temperature = pow(1.0 - normalizedRadius, 1.18);

  float beaming = 0.58 + 0.42 * sin(vAngle - uTime * 0.7);
  beaming = mix(0.74, 1.42, beaming);

  vec3 color = mix(uColorOuter, uColorMid, smoothstep(0.08, 0.66, temperature));
  color = mix(color, uColorHot, smoothstep(0.42, 0.98, temperature + turbulence * 0.18));
  color *= 0.55 + turbulence * 1.45;
  color *= beaming;

  float alpha = uDensity * (0.12 + turbulence * 0.9);
  alpha *= smoothstep(0.0, 0.12, normalizedRadius);
  alpha *= (1.0 - smoothstep(0.88, 1.0, normalizedRadius));
  alpha *= 0.45 + uDetail * 0.85;
  alpha = clamp(alpha, 0.0, 1.0);

  float brightness = (0.45 + turbulence * 2.4) * (0.85 + temperature * 2.9);
  brightness *= 0.8 + filament * 0.9;

  gl_FragColor = vec4(color * brightness, alpha);
}
`;

const EVENT_HORIZON_VERTEX_SHADER = `
varying vec3 vWorldPos;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const EVENT_HORIZON_FRAGMENT_SHADER = `
uniform float uTime;
uniform float uDetail;
uniform vec3 uEdgeColor;
uniform vec3 uGlowColor;
uniform vec3 uHorizonTint;

varying vec3 vWorldPos;
varying vec3 vWorldNormal;

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float ndv = clamp(dot(normal, viewDir), 0.0, 1.0);

  float rim = pow(1.0 - ndv, 3.8);
  float swirl = 0.5 + 0.5 * sin(uTime * 3.2 + atan(vWorldPos.z, vWorldPos.x) * 26.0);
  float pulse = 0.86 + 0.14 * sin(uTime * 4.4);
  float ring = rim * (0.32 + swirl * 0.68) * pulse * (0.75 + 0.4 * uDetail);

  vec3 color = mix(uHorizonTint, uEdgeColor, ring * 0.52);
  color += uGlowColor * ring * 0.28;
  gl_FragColor = vec4(color, 1.0);
}
`;

const PHOTON_RING_VERTEX_SHADER = `
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const PHOTON_RING_FRAGMENT_SHADER = `
uniform float uTime;
uniform float uOpacity;
uniform float uDetail;
uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;

float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 2.1);

  float arc = sin((vUv.x + uTime * 0.05) * 6.28318530718 * 18.0);
  float streak = pow(max(arc * 0.5 + 0.5, 0.0), 5.0);
  float sparkle = hash(floor((vUv.x + uTime * 0.02) * 220.0));
  float twinkle = smoothstep(0.82, 1.0, sparkle) * (0.6 + 0.4 * sin(uTime * 12.0 + vUv.x * 120.0));

  float emission = fresnel * (0.2 + streak * 1.7 + twinkle * 1.2) * (0.6 + uDetail * 0.6);
  vec3 color = mix(uColorA, uColorB, streak * 0.65 + twinkle * 0.35);

  gl_FragColor = vec4(color * emission, clamp(emission * uOpacity, 0.0, 1.0));
}
`;

function resolveBlackHoleVariant(): BlackHoleVariant {
  if (typeof window === 'undefined') return 'hybrid';
  const queryVariant = new URLSearchParams(window.location.search).get('bh');
  if (queryVariant === 'cinematic' || queryVariant === 'physics' || queryVariant === 'hybrid') {
    return queryVariant;
  }
  const stored = window.localStorage.getItem('black-hole-variant');
  if (stored === 'cinematic' || stored === 'physics' || stored === 'hybrid') {
    return stored;
  }
  return 'hybrid';
}

function getBlackHoleStyle(variant: BlackHoleVariant, lowPowerMode: boolean) {
  const base = {
    coreRadius: lowPowerMode ? 78 : 110,
    ringRadius: lowPowerMode ? 150 : 218,
    diskInner: lowPowerMode ? 92 : 134,
    diskOuter: lowPowerMode ? 246 : 344,
    diskDensity: lowPowerMode ? 0.92 : 1.25,
    flowSpeed: 0.22,
    noiseScale: 2.25,
    spinSpeed: lowPowerMode ? 0.0012 : 0.0021,
    ringOpacity: lowPowerMode ? 0.42 : 0.64,
    auraPower: lowPowerMode ? 0.64 : 0.94,
    hot: new Color('#fffced'),
    mid: new Color('#ff8a47'),
    outer: new Color('#4f7fff'),
    ringColor: new Color('#d2e6ff'),
    auraColor: new Color('#7f9fff'),
  };

  if (variant === 'cinematic') {
    return {
      ...base,
      diskOuter: base.diskOuter * 1.12,
      diskDensity: base.diskDensity * 1.24,
      flowSpeed: 0.26,
      noiseScale: 2.62,
      ringOpacity: base.ringOpacity * 1.16,
      auraPower: base.auraPower * 1.2,
      hot: new Color('#fffef5'),
      mid: new Color('#ff9550'),
      outer: new Color('#6597ff'),
    };
  }

  if (variant === 'physics') {
    return {
      ...base,
      diskInner: base.diskInner * 1.06,
      diskOuter: base.diskOuter * 0.92,
      diskDensity: base.diskDensity * 0.9,
      flowSpeed: 0.17,
      noiseScale: 1.88,
      spinSpeed: base.spinSpeed * 0.72,
      ringOpacity: base.ringOpacity * 0.82,
      auraPower: base.auraPower * 0.72,
      hot: new Color('#ffe7c0'),
      mid: new Color('#ff7436'),
      outer: new Color('#406fda'),
    };
  }

  return base;
}

export function useCelestialBodies({ sceneRef, lowPowerMode, initialized }: CelestialBodiesConfig) {
  const sunMaterialRef = useRef<ShaderMaterial | null>(null);
  const sunCoronaMaterialRef = useRef<ShaderMaterial | null>(null);
  const sunAuraMaterialRef = useRef<ShaderMaterial | null>(null);
  const sunCoronaMeshRef = useRef<Mesh | null>(null);
  const sunGlowMeshRef = useRef<Mesh | null>(null);
  const sunLightRef = useRef<PointLight | null>(null);

  const blackHoleCoreMaterialRef = useRef<ShaderMaterial | null>(null);
  const blackHoleDiskMaterialRef = useRef<ShaderMaterial | null>(null);
  const blackHoleAuraMaterialRef = useRef<ShaderMaterial | null>(null);
  const blackHoleRingMaterialRef = useRef<ShaderMaterial | null>(null);
  const blackHoleRingRef = useRef<Mesh | null>(null);
  const blackHoleGroupRef = useRef<Group | null>(null);
  const blackHoleVariantRef = useRef<BlackHoleVariant>('hybrid');
  const blackHoleSpinRef = useRef(0.0022);

  const planetRefs = useRef<OrbitPlanet[]>([]);
  const qualityRef = useRef<CelestialQualityPreset>({
    blackHoleDetail: 1,
    motionScale: 1,
  });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !initialized) return;

    blackHoleVariantRef.current = resolveBlackHoleVariant();
    const bhStyle = getBlackHoleStyle(blackHoleVariantRef.current, lowPowerMode);
    blackHoleSpinRef.current = bhStyle.spinSpeed;
    logRuntime('info', 'scene.blackhole', 'Black hole variant selected', { variant: blackHoleVariantRef.current });

    const sunUniforms = createSunUniforms();
    sunUniforms.uSurfaceNoiseScale.value = lowPowerMode ? 1.05 : 1.52;
    sunUniforms.uCoronaStrength.value = lowPowerMode ? 0.92 : 1.22;
    sunUniforms.uDisplacementScale.value = lowPowerMode ? 3.4 : 5.6;
    sunUniforms.uSunPosition.value.copy(SUN_POSITION);

    const sunGeometry = new SphereGeometry(lowPowerMode ? 72 : 96, lowPowerMode ? 52 : 132, lowPowerMode ? 52 : 132);
    const sunMaterial = new ShaderMaterial({
      uniforms: sunUniforms,
      vertexShader: SUN_VERTEX_SHADER,
      fragmentShader: SUN_FRAGMENT_SHADER,
      transparent: false,
    });
    sunMaterialRef.current = sunMaterial;

    const sunMesh = new Mesh(sunGeometry, sunMaterial);
    sunMesh.position.copy(SUN_POSITION);
    scene.add(sunMesh);

    const sunGlowGeometry = new SphereGeometry(lowPowerMode ? 126 : 182, lowPowerMode ? 24 : 54, lowPowerMode ? 24 : 54);
    const sunGlowMaterial = new MeshBasicMaterial({
      color: new Color('#ffd17a'),
      transparent: true,
      opacity: lowPowerMode ? 0.34 : 0.42,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    const sunGlowMesh = new Mesh(sunGlowGeometry, sunGlowMaterial);
    sunGlowMesh.position.copy(sunMesh.position);
    scene.add(sunGlowMesh);
    sunGlowMeshRef.current = sunGlowMesh;

    const sunCoronaGeometry = new SphereGeometry(lowPowerMode ? 124 : 172, lowPowerMode ? 34 : 74, lowPowerMode ? 34 : 74);
    const sunCoronaMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color('#ffaa00') },
        uIntensity: { value: lowPowerMode ? 0.82 : 1.1 },
      },
      vertexShader: SUN_CORONA_VERTEX_SHADER,
      fragmentShader: SUN_CORONA_FRAGMENT_SHADER,
      side: DoubleSide,
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    sunCoronaMaterialRef.current = sunCoronaMaterial;

    const sunCoronaMesh = new Mesh(sunCoronaGeometry, sunCoronaMaterial);
    sunCoronaMesh.position.copy(sunMesh.position);
    scene.add(sunCoronaMesh);
    sunCoronaMeshRef.current = sunCoronaMesh;

    const sunAuraGeometry = new SphereGeometry(lowPowerMode ? 150 : 214, lowPowerMode ? 22 : 44, lowPowerMode ? 22 : 44);
    const sunAuraMaterial = new ShaderMaterial({
      uniforms: {
        uColor: { value: new Color('#ffbf6a') },
        uPower: { value: lowPowerMode ? 0.7 : 0.9 },
        uTime: { value: 0 },
      },
      vertexShader: AURA_VERTEX_SHADER,
      fragmentShader: AURA_FRAGMENT_SHADER,
      side: BackSide,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    sunAuraMaterialRef.current = sunAuraMaterial;

    const sunAuraMesh = new Mesh(sunAuraGeometry, sunAuraMaterial);
    sunAuraMesh.position.copy(sunMesh.position);
    scene.add(sunAuraMesh);

    const sunLight = new PointLight(
      new Color('#ffd7a1'),
      lowPowerMode ? 2.8 : 4.25,
      lowPowerMode ? 3400 : 4800,
      1.5
    );
    sunLight.position.copy(sunMesh.position);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    const fillLight = new HemisphereLight(new Color('#7bb9ff'), new Color('#060b15'), lowPowerMode ? 0.24 : 0.38);
    scene.add(fillLight);

    const blackHoleGroup = new Group();
    blackHoleGroup.position.copy(BLACK_HOLE_POSITION);
    scene.add(blackHoleGroup);
    blackHoleGroupRef.current = blackHoleGroup;

    const blackHoleCoreGeometry = new SphereGeometry(bhStyle.coreRadius, lowPowerMode ? 36 : 84, lowPowerMode ? 36 : 84);
    const blackHoleCoreMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDetail: { value: 1 },
        uEdgeColor: { value: bhStyle.hot.clone() },
        uGlowColor: { value: bhStyle.outer.clone() },
        uHorizonTint: { value: new Color('#02040a') },
      },
      vertexShader: EVENT_HORIZON_VERTEX_SHADER,
      fragmentShader: EVENT_HORIZON_FRAGMENT_SHADER,
      transparent: false,
      depthWrite: true,
    });
    blackHoleCoreMaterialRef.current = blackHoleCoreMaterial;
    const blackHoleCoreMesh = new Mesh(blackHoleCoreGeometry, blackHoleCoreMaterial);
    blackHoleGroup.add(blackHoleCoreMesh);

    const blackHoleDiskGeometry = new RingGeometry(
      bhStyle.diskInner,
      bhStyle.diskOuter,
      lowPowerMode ? 220 : 420,
      lowPowerMode ? 5 : 10
    );
    const blackHoleDiskMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDensity: { value: bhStyle.diskDensity },
        uNoiseScale: { value: bhStyle.noiseScale },
        uFlowSpeed: { value: bhStyle.flowSpeed },
        uInnerRadius: { value: bhStyle.diskInner },
        uOuterRadius: { value: bhStyle.diskOuter },
        uDetail: { value: 1 },
        uColorHot: { value: bhStyle.hot },
        uColorMid: { value: bhStyle.mid },
        uColorOuter: { value: bhStyle.outer },
      },
      vertexShader: ACCRETION_VERTEX_SHADER,
      fragmentShader: ACCRETION_FRAGMENT_SHADER,
      side: DoubleSide,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    blackHoleDiskMaterialRef.current = blackHoleDiskMaterial;

    const blackHoleDiskMesh = new Mesh(blackHoleDiskGeometry, blackHoleDiskMaterial);
    blackHoleDiskMesh.rotation.set(1.17, 0.12, 0);
    blackHoleGroup.add(blackHoleDiskMesh);

    const blackHoleRingGeometry = new TorusGeometry(
      bhStyle.ringRadius,
      lowPowerMode ? 7 : 12,
      lowPowerMode ? 22 : 42,
      lowPowerMode ? 144 : 280
    );
    const blackHoleRingMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: bhStyle.ringOpacity },
        uDetail: { value: 1 },
        uColorA: { value: bhStyle.ringColor.clone() },
        uColorB: { value: bhStyle.hot.clone() },
      },
      vertexShader: PHOTON_RING_VERTEX_SHADER,
      fragmentShader: PHOTON_RING_FRAGMENT_SHADER,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      side: DoubleSide,
    });
    blackHoleRingMaterialRef.current = blackHoleRingMaterial;
    const blackHoleRingMesh = new Mesh(blackHoleRingGeometry, blackHoleRingMaterial);
    blackHoleRingMesh.rotation.set(1.17, 0.12, 0);
    blackHoleGroup.add(blackHoleRingMesh);
    blackHoleRingRef.current = blackHoleRingMesh;

    const blackHoleAuraGeometry = new SphereGeometry(
      bhStyle.coreRadius * 1.9,
      lowPowerMode ? 22 : 42,
      lowPowerMode ? 22 : 42
    );
    const blackHoleAuraMaterial = new ShaderMaterial({
      uniforms: {
        uColor: { value: bhStyle.auraColor },
        uPower: { value: bhStyle.auraPower },
        uTime: { value: 0 },
      },
      vertexShader: AURA_VERTEX_SHADER,
      fragmentShader: AURA_FRAGMENT_SHADER,
      side: BackSide,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    blackHoleAuraMaterialRef.current = blackHoleAuraMaterial;

    const blackHoleAuraMesh = new Mesh(blackHoleAuraGeometry, blackHoleAuraMaterial);
    blackHoleGroup.add(blackHoleAuraMesh);

    const planets: Array<{
      mesh: Mesh;
      geometry: SphereGeometry;
      material: ShaderMaterial;
      atmosphereMesh: Mesh | null;
      atmosphereGeometry: SphereGeometry | null;
      atmosphereMaterial: ShaderMaterial | null;
      ringMesh: Mesh | null;
      ringGeometry: TorusGeometry | null;
      ringMaterial: MeshBasicMaterial | null;
      orbit: OrbitPlanet;
    }> = [];

    const createPlanet = (
      radius: number,
      size: number,
      speed: number,
      phase: number,
      y: number,
      colorA: string,
      colorB: string,
      rimColor: string,
      withRing = false
    ) => {
      const geometry = new SphereGeometry(size, lowPowerMode ? 22 : 58, lowPowerMode ? 22 : 58);
      const material = new ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uSeed: { value: 0.45 + phase * 0.7 },
          uColorA: { value: new Color(colorA) },
          uColorB: { value: new Color(colorB) },
          uRimColor: { value: new Color(rimColor) },
        },
        vertexShader: PLANET_VERTEX_SHADER,
        fragmentShader: PLANET_FRAGMENT_SHADER,
      });
      const mesh = new Mesh(geometry, material);
      scene.add(mesh);

      const atmosphereGeometry = new SphereGeometry(size * (lowPowerMode ? 1.1 : 1.14), lowPowerMode ? 16 : 36, lowPowerMode ? 16 : 36);
      const atmosphereMaterial = new ShaderMaterial({
        uniforms: {
          uColor: { value: new Color(rimColor) },
          uPower: { value: lowPowerMode ? 0.38 : 0.64 },
          uTime: { value: 0 },
        },
        vertexShader: AURA_VERTEX_SHADER,
        fragmentShader: AURA_FRAGMENT_SHADER,
        side: BackSide,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const atmosphereMesh = new Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphereMesh);

      let ringGeometry: TorusGeometry | null = null;
      let ringMaterial: MeshBasicMaterial | null = null;
      let ringMesh: Mesh | null = null;
      if (withRing) {
        ringGeometry = new TorusGeometry(
          size * (lowPowerMode ? 1.62 : 1.92),
          size * (lowPowerMode ? 0.22 : 0.28),
          lowPowerMode ? 12 : 22,
          lowPowerMode ? 72 : 144
        );
        ringMaterial = new MeshBasicMaterial({
          color: new Color('#f3dcb3'),
          transparent: true,
          opacity: lowPowerMode ? 0.38 : 0.58,
          blending: AdditiveBlending,
          depthWrite: false,
        });
        ringMesh = new Mesh(ringGeometry, ringMaterial);
        ringMesh.rotation.set(1.12, 0.2 + phase * 0.16, 0.14);
        scene.add(ringMesh);
      }

      const spinSpeed = (0.0018 + Math.abs(speed) * 0.0012) * (Math.random() < 0.5 ? -1 : 1);
      planets.push({
        mesh,
        geometry,
        material,
        atmosphereMesh,
        atmosphereGeometry,
        atmosphereMaterial,
        ringMesh,
        ringGeometry,
        ringMaterial,
        orbit: {
          mesh,
          atmosphere: atmosphereMesh,
          ring: ringMesh,
          surfaceMaterial: material,
          radius,
          speed,
          phase,
          y,
          spinSpeed,
          atmospherePulse: 0.03 + Math.random() * 0.03,
        },
      });
    };

    createPlanet(lowPowerMode ? 220 : 260, lowPowerMode ? 11 : 16, 0.65, 0.3, -10, '#7db7ff', '#c6eeff', '#8ed5ff');
    createPlanet(lowPowerMode ? 300 : 360, lowPowerMode ? 9 : 13, -0.42, 1.1, 18, '#ffb86d', '#ffe2a5', '#ffdba3', true);
    createPlanet(lowPowerMode ? 170 : 210, lowPowerMode ? 7 : 11, 0.9, 2.2, 26, '#67d8bf', '#b8ffe6', '#8ef8dc');
    createPlanet(lowPowerMode ? 430 : 510, lowPowerMode ? 6 : 9, -0.26, 2.85, -24, '#d598ff', '#f3d2ff', '#d2a7ff');
    planetRefs.current = planets.map((entry) => entry.orbit);

    logEvent('scene.celestial.ready', {
      lowPowerMode,
      blackHoleVariant: blackHoleVariantRef.current,
    });

    const onKeyDown = (event: KeyboardEvent) => {
      const nextVariant =
        event.key === '1' ? 'cinematic' : event.key === '2' ? 'physics' : event.key === '3' ? 'hybrid' : null;
      if (!nextVariant) return;
      window.localStorage.setItem('black-hole-variant', nextVariant);
      logRuntime('info', 'scene.blackhole', 'Black hole variant shortcut used', {
        variant: nextVariant,
      });
      window.location.reload();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      scene.remove(sunMesh);
      scene.remove(sunGlowMesh);
      scene.remove(sunCoronaMesh);
      scene.remove(sunAuraMesh);
      scene.remove(sunLight);
      scene.remove(fillLight);
      scene.remove(blackHoleGroup);

      planets.forEach((planet) => {
        scene.remove(planet.mesh);
        if (planet.atmosphereMesh) {
          scene.remove(planet.atmosphereMesh);
        }
        if (planet.ringMesh) {
          scene.remove(planet.ringMesh);
        }
        planet.geometry.dispose();
        planet.material.dispose();
        planet.atmosphereGeometry?.dispose();
        planet.atmosphereMaterial?.dispose();
        planet.ringGeometry?.dispose();
        planet.ringMaterial?.dispose();
      });

      sunGeometry.dispose();
      sunMaterial.dispose();
      sunGlowGeometry.dispose();
      sunGlowMaterial.dispose();
      sunCoronaGeometry.dispose();
      sunCoronaMaterial.dispose();
      sunAuraGeometry.dispose();
      sunAuraMaterial.dispose();
      blackHoleCoreGeometry.dispose();
      blackHoleCoreMaterial.dispose();
      blackHoleDiskGeometry.dispose();
      blackHoleDiskMaterial.dispose();
      blackHoleRingGeometry.dispose();
      blackHoleRingMaterial.dispose();
      blackHoleAuraGeometry.dispose();
      blackHoleAuraMaterial.dispose();
      planetRefs.current = [];
      blackHoleCoreMaterialRef.current = null;
      blackHoleDiskMaterialRef.current = null;
      blackHoleAuraMaterialRef.current = null;
      blackHoleRingMaterialRef.current = null;
      blackHoleGroupRef.current = null;
    };
  }, [sceneRef, lowPowerMode, initialized]);

  const applyQuality = (preset: CelestialQualityPreset) => {
    qualityRef.current = preset;
  };

  const updateCelestialUniforms = (currentTime: number) => {
    const timeSec = currentTime * 0.001;
    const blackHoleDetail = qualityRef.current.blackHoleDetail;
    const motionScale = qualityRef.current.motionScale;

    if (sunMaterialRef.current) {
      sunMaterialRef.current.uniforms.uTime.value = timeSec;
      sunMaterialRef.current.uniforms.uCoronaStrength.value = (lowPowerMode ? 0.92 : 1.2) * (0.9 + blackHoleDetail * 0.15);
    }
    if (sunCoronaMaterialRef.current) {
      sunCoronaMaterialRef.current.uniforms.uTime.value = timeSec;
      sunCoronaMaterialRef.current.uniforms.uIntensity.value = (lowPowerMode ? 0.82 : 1.1) * (0.9 + blackHoleDetail * 0.16);
    }
    if (sunAuraMaterialRef.current) {
      sunAuraMaterialRef.current.uniforms.uTime.value = timeSec;
      sunAuraMaterialRef.current.uniforms.uPower.value = (lowPowerMode ? 0.7 : 0.9) * (0.92 + blackHoleDetail * 0.2);
    }
    if (blackHoleCoreMaterialRef.current) {
      blackHoleCoreMaterialRef.current.uniforms.uTime.value = timeSec;
      blackHoleCoreMaterialRef.current.uniforms.uDetail.value = blackHoleDetail;
    }
    if (blackHoleDiskMaterialRef.current) {
      blackHoleDiskMaterialRef.current.uniforms.uTime.value = timeSec;
      blackHoleDiskMaterialRef.current.uniforms.uDetail.value = blackHoleDetail;
    }
    if (blackHoleAuraMaterialRef.current) {
      blackHoleAuraMaterialRef.current.uniforms.uTime.value = timeSec;
      blackHoleAuraMaterialRef.current.uniforms.uPower.value = (lowPowerMode ? 0.64 : 0.92) * (0.72 + blackHoleDetail * 0.38);
    }
    if (blackHoleRingMaterialRef.current) {
      blackHoleRingMaterialRef.current.uniforms.uTime.value = timeSec;
      blackHoleRingMaterialRef.current.uniforms.uDetail.value = blackHoleDetail;
      blackHoleRingMaterialRef.current.uniforms.uOpacity.value = (lowPowerMode ? 0.42 : 0.64) * (0.86 + blackHoleDetail * 0.2);
    }

    if (sunCoronaMeshRef.current) {
      const pulse = 1 + Math.sin(timeSec * 2.8) * 0.03;
      sunCoronaMeshRef.current.scale.set(pulse, pulse, pulse);
    }
    if (sunGlowMeshRef.current) {
      const glowPulse = 1 + Math.sin(timeSec * 1.9 + 0.7) * 0.022;
      sunGlowMeshRef.current.scale.set(glowPulse, glowPulse, glowPulse);
    }

    if (blackHoleGroupRef.current) {
      blackHoleGroupRef.current.rotation.y += blackHoleSpinRef.current * motionScale;
    }
    if (blackHoleRingRef.current) {
      const ringPulse = 1 + Math.sin(timeSec * 3.1) * 0.012;
      blackHoleRingRef.current.scale.set(ringPulse, ringPulse, ringPulse);
    }

    if (sunLightRef.current) {
      sunLightRef.current.intensity = (lowPowerMode ? 2.8 : 4.25) + Math.sin(timeSec * 2.2) * (lowPowerMode ? 0.07 : 0.16);
    }

    for (const planet of planetRefs.current) {
      const angle = timeSec * planet.speed + planet.phase;
      const px = SUN_POSITION.x + Math.cos(angle) * planet.radius;
      const py = SUN_POSITION.y + planet.y;
      const pz = SUN_POSITION.z + Math.sin(angle) * planet.radius * 0.62;
      planet.mesh.position.set(px, py, pz);
      planet.mesh.rotation.y += planet.spinSpeed * motionScale;
      planet.mesh.rotation.x = Math.sin(timeSec * 0.32 + planet.phase) * 0.1;
      planet.surfaceMaterial.uniforms.uTime.value = timeSec;

      if (planet.atmosphere) {
        const auraPulse = 1 + Math.sin(timeSec * 1.4 + planet.phase) * planet.atmospherePulse;
        planet.atmosphere.position.set(px, py, pz);
        planet.atmosphere.scale.set(auraPulse, auraPulse, auraPulse);
        planet.atmosphere.rotation.y += planet.spinSpeed * 0.55 * motionScale;
        const atmosphereMaterial = planet.atmosphere.material;
        if (atmosphereMaterial instanceof ShaderMaterial) {
          atmosphereMaterial.uniforms.uTime.value = timeSec;
        }
      }

      if (planet.ring) {
        planet.ring.position.set(px, py, pz);
        planet.ring.rotation.y += 0.0012 * motionScale;
      }
    }
  };

  const handleResize = (_width: number, _height: number) => undefined;

  return { updateCelestialUniforms, handleResize, applyQuality };
}
