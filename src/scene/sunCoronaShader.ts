// Uses a simple billboard-style or inverted sphere approach for glow
export const SUN_CORONA_VERTEX_SHADER = `
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying vec2 vUv;
varying vec3 vWorldNormal;

void main() {
  vUv = uv;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vNormal = normalize(normalMatrix * normal);
  vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  vViewPosition = -vPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const SUN_CORONA_FRAGMENT_SHADER = `
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec2 vUv;
varying vec3 vWorldNormal;

uniform float uTime;
uniform vec3 uColor;
uniform float uIntensity;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 127.13));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i + vec2(0.0, 0.0));
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.62;
  for (int i = 0; i < 5; i++) { // Increased octaves for detail
    value += noise(p) * amp;
    p *= 2.07;
    amp *= 0.5;
  }
  return value;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);

  float fresnel = pow(max(0.0, 1.0 - dot(normal, viewDir)), 2.8);
  
  // Use world normal for consistent direction (helmet streamers come from poles)
  vec3 worldNormal = normalize(vWorldNormal);
  float angle = atan(worldNormal.y, worldNormal.x);
  
  // Helmet streamers effect: elongated structures near poles
  float polarAngle = abs(worldNormal.y);
  float streamersStrength = pow(polarAngle, 0.35); // Broaden streamers
  
  float turbulence = fbm(vec2(angle * 2.8, vUv.y * 7.5 + uTime * 0.04));
  
  // Streamers frequency and shape
  float streamers = sin(angle * 18.0 + turbulence * 5.2 + uTime * 0.6);
  streamers = pow(max(streamers * 0.5 + 0.5, 0.0), 3.5);
  
  // Add secondary, finer filaments
  float filaments = sin(angle * 45.0 + turbulence * 12.0 - uTime * 1.2);
  filaments = pow(max(filaments * 0.5 + 0.5, 0.0), 6.0);

  float flicker = 0.88 + 0.12 * sin(uTime * 4.8 + turbulence * 8.0);
  
  // Combine effects for total alpha
  float baseAlpha = fresnel * (0.25 + streamers * 1.4 + filaments * 0.6 + turbulence * 0.4);
  float alpha = baseAlpha * flicker * uIntensity;
  alpha = clamp(alpha, 0.0, 1.0);

  // Realistic solar color palette (white-yellow streamers over orange-red core)
  vec3 hotColor = vec3(1.0, 0.94, 0.82); // Near-white hot plasma
  vec3 baseColor = uColor * 0.8;
  vec3 color = mix(baseColor, hotColor, streamers * 0.6 + filaments * 0.4);
  
  gl_FragColor = vec4(color, alpha);
}
`;
