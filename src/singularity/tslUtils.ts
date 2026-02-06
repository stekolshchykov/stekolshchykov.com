import {
  Fn,
  If,
  vec2,
  vec3,
  mat3,
  float,
  sin,
  cos,
  dot,
  fract,
  clamp,
  mix,
  step,
  pow,
  sub,
} from 'three/tsl';

// Clean-room TSL helpers that are mathematically equivalent to the reference project's utils.
// These are intentionally small and self-contained so we can keep the BlackHole node close to the reference.

export const rotateAxis = /*#__PURE__*/ Fn(([axis_immutable, angle_immutable]) => {
  const angle = float(angle_immutable).toVar();
  const axis = vec3(axis_immutable).toVar();
  const s = float(sin(angle)).toVar();
  const c = float(cos(angle)).toVar();
  const oc = float(sub(1.0, c)).toVar();

  return mat3(
    oc.mul(axis.x).mul(axis.x).add(c),
    oc.mul(axis.x).mul(axis.y).sub(axis.z.mul(s)),
    oc.mul(axis.z).mul(axis.x).add(axis.y.mul(s)),
    oc.mul(axis.x).mul(axis.y).add(axis.z.mul(s)),
    oc.mul(axis.y).mul(axis.y).add(c),
    oc.mul(axis.y).mul(axis.z).sub(axis.x.mul(s)),
    oc.mul(axis.z).mul(axis.x).sub(axis.y.mul(s)),
    oc.mul(axis.y).mul(axis.z).add(axis.x.mul(s)),
    oc.mul(axis.z).mul(axis.z).add(c)
  );
}).setLayout({
  name: 'rotateAxis',
  type: 'mat3',
  inputs: [
    { name: 'axis', type: 'vec3' },
    { name: 'angle', type: 'float' },
  ],
});

export const srgbToLinear = Fn(([rgb]) => {
  return mix(
    rgb.div(12.92),
    pow(rgb.add(0.055).div(1.055), vec3(2.4)),
    step(0.04045, rgb)
  );
});

export const linearToSrgb = Fn(([lin]) => {
  const low = lin.mul(12.92);
  const high = pow(lin, vec3(1.0 / 2.4)).mul(1.055).sub(0.055);
  return mix(low, high, step(0.0031308, lin));
});

export const whiteNoise2D = Fn(([coord]) => {
  return fract(sin(dot(coord, vec2(12.9898, 78.233))).mul(43758.5453));
}, { coord: 'vec2', return: 'float' });

export const lengthSqrt = Fn(([v]) => {
  return v.x.mul(v.x).add(v.y.mul(v.y)).add(v.z.mul(v.z)).sqrt();
}, { v: 'vec3', return: 'float' });

export const smoothRange = /*#__PURE__*/ Fn(([value, inMin, inMax, outMin, outMax]) => {
  const t = clamp(value.sub(inMin).div(inMax.sub(inMin)), 0.0, 1.0);
  const smoothT = t.mul(t).mul(float(3.0).sub(t.mul(2.0)));
  return mix(outMin, outMax, smoothT);
}, { value: 'float', inMin: 'float', inMax: 'float', outMin: 'float', outMax: 'float', return: 'float' });

const CatmulRom = /*#__PURE__*/ Fn(([T, D, C, B, A]) => {
  // 0.5 * (2*B + (-A + C)*T + (2*A -5*B + 4*C - D)*T^2 + (-A + 3*B - 3*C + D)*T^3)
  const t = float(T).toVar();
  const t2 = t.mul(t);
  const t3 = t2.mul(t);

  const term0 = B.mul(2.0);
  const term1 = A.negate().add(C).mul(t);
  const term2 = A.mul(2.0).sub(B.mul(5.0)).add(C.mul(4.0)).sub(D).mul(t2);
  const term3 = A.negate().add(B.mul(3.0)).sub(C.mul(3.0)).add(D).mul(t3);

  return term0.add(term1).add(term2).add(term3).mul(0.5);
}, { T: 'float', D: 'vec3', C: 'vec3', B: 'vec3', A: 'vec3', return: 'vec3' });

export const ColorRamp3_BSpline = /*#__PURE__*/ Fn(([T, A, B, C]) => {
  const AB = B.w.sub(A.w);
  const BC = C.w.sub(B.w);

  const iAB = T.sub(A.w).div(AB).saturate();
  const iBC = T.sub(B.w).div(BC).saturate();

  const p = vec3(sub(1.0, iAB), iAB.sub(iBC), iBC);

  const cA = CatmulRom(p.x, A.xyz, A.xyz, B.xyz, C.xyz);
  const cB = CatmulRom(p.y, A.xyz, B.xyz, C.xyz, C.xyz);
  const cC = C.xyz;

  If(T.lessThan(B.w), () => {
    return cA.xyz;
  });

  If(T.lessThan(C.w), () => {
    return cB.xyz;
  });

  return cC.xyz;
}, { T: 'float', A: 'vec4', B: 'vec4', C: 'vec4', return: 'vec3' });

export const vecToFac = /*#__PURE__*/ Fn(([vector]) => {
  return vector.r.mul(0.2126).add(vector.g.mul(0.7152)).add(vector.b.mul(0.0722)).toVar();
}, { vector: 'vec3', return: 'float' });
