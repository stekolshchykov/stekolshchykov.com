// Uses a simple billboard-style or inverted sphere approach for glow
export const SUN_CORONA_VERTEX_SHADER = `
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  vViewPosition = -vPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const SUN_CORONA_FRAGMENT_SHADER = `
varying vec3 vNormal;
varying vec3 vViewPosition;

uniform float uTime;
uniform vec3 uColor;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Fresnel glow
  float dotNV = dot(normal, viewDir);
  float intensity = pow(0.6 - dotNV, 4.0);
  
  // Pulse
  float pulse = 0.8 + 0.2 * sin(uTime * 2.0);
  
  gl_FragColor = vec4(uColor, intensity * pulse * 1.5);
}
`;
