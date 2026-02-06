import {
  Fn,
  vec2,
  vec3,
  float,
  dot,
  sin,
  fract,
  floor,
  mix,
  smoothstep,
  clamp,
  normalize,
  length,
  pow,
  step,
  equirectUV,
} from 'three/tsl';

// Lightweight procedural background (stars + nebula), sampled by ray direction.
// Implemented from scratch (no external textures).

const hash21 = Fn(([p]) => {
  const n = sin(dot(p, vec2(127.1, 311.7))).mul(43758.5453);
  return fract(n);
}, { p: 'vec2', return: 'float' });

const hash31 = Fn(([p]) => {
  const n = sin(dot(p, vec3(127.1, 311.7, 74.7))).mul(43758.5453);
  return fract(n);
}, { p: 'vec3', return: 'float' });

const noise3D = Fn(([p]) => {
  const i = floor(p);
  const f = fract(p);
  const u = f.mul(f).mul(float(3.0).sub(f.mul(2.0)));

  const a = hash31(i);
  const b = hash31(i.add(vec3(1, 0, 0)));
  const c = hash31(i.add(vec3(0, 1, 0)));
  const d = hash31(i.add(vec3(1, 1, 0)));
  const e = hash31(i.add(vec3(0, 0, 1)));
  const f2 = hash31(i.add(vec3(1, 0, 1)));
  const g = hash31(i.add(vec3(0, 1, 1)));
  const h = hash31(i.add(vec3(1, 1, 1)));

  return mix(
    mix(mix(a, b, u.x), mix(c, d, u.x), u.y),
    mix(mix(e, f2, u.x), mix(g, h, u.x), u.y),
    u.z
  );
}, { p: 'vec3', return: 'float' });

const fbm = Fn(([p, lacunarity, persistence]) => {
  const value = float(0.0).toVar();
  const amp = float(0.5).toVar();
  const pos = p.toVar();

  value.addAssign(noise3D(pos).mul(amp));
  pos.mulAssign(lacunarity);
  amp.mulAssign(persistence);

  value.addAssign(noise3D(pos).mul(amp));
  pos.mulAssign(lacunarity);
  amp.mulAssign(persistence);

  value.addAssign(noise3D(pos).mul(amp));
  pos.mulAssign(lacunarity);
  amp.mulAssign(persistence);

  value.addAssign(noise3D(pos).mul(amp));
  return value;
}, { p: 'vec3', lacunarity: 'float', persistence: 'float', return: 'float' });

export const sampleBackground = Fn(([dir, intensity, t]) => {
  const d = normalize(dir);
  const uv = equirectUV(d).toVar();

  // === Stars ===
  const starGrid = uv.mul(float(900.0)).toVar();
  const cell = floor(starGrid).toVar();
  const f = fract(starGrid).toVar();

  // Low probability per-cell star, with a smooth radial falloff.
  const rnd = hash21(cell);
  const prob = float(0.0035);
  const on = step(float(1.0).sub(prob), rnd);
  const dist = length(f.sub(vec2(0.5)));

  const size = float(0.22).add(hash21(cell.add(vec2(19.2, 7.1))).mul(0.20));
  const core = smoothstep(size, float(0.0), dist);

  // Per-star temperature-ish tint.
  const tintRnd = hash21(cell.add(vec2(3.7, 11.9)));
  const warm = vec3(1.0, 0.88, 0.72);
  const cool = vec3(0.70, 0.86, 1.0);
  const starTint = mix(cool, warm, tintRnd);

  const star = starTint.mul(core.mul(on).mul(3.2));

  // === Nebula ===
  const nebN = fbm(d.mul(3.0).add(vec3(t.mul(0.01), 0.0, t.mul(0.008))), float(2.0), float(0.5)).toVar();
  const nebMask = smoothstep(0.45, 0.95, pow(nebN, float(1.35))).mul(0.18);
  const nebColA = vec3(0.02, 0.05, 0.10);
  const nebColB = vec3(0.10, 0.03, 0.14);
  const nebCol = mix(nebColA, nebColB, clamp(nebN.mul(1.1), 0.0, 1.0)).mul(nebMask);

  // Subtle dark vignette.
  const v = uv.sub(vec2(0.5));
  const vignette = clamp(float(1.0).sub(length(v).mul(1.25)), 0.0, 1.0);

  return star.add(nebCol).mul(intensity).mul(vignette);
}, { dir: 'vec3', intensity: 'float', t: 'float', return: 'vec3' });

