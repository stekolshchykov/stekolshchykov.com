// Simple, proven atmospheric glow shader (Fresnel-based)
export const SUN_CORONA_VERTEX_SHADER = `
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const SUN_CORONA_FRAGMENT_SHADER = `
varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 uColor;
uniform float uIntensity;
uniform float uTime;

void main() {
  vec3 viewVector = normalize(-vPosition);
  float dotProduct = dot(vNormal, viewVector);
  
  // Power function creates the soft falloff
  // pow(0.0) is edge, pow(1.0) is center
  float glow = 1.0 - dotProduct;
  glow = pow(max(glow, 0.0), 3.0); // Adjust power for glow sharpness (higher = sharper edge)

  // Dynamic pulse
  float pulse = 0.95 + 0.05 * sin(uTime * 2.0);
  
  // Add some very subtle noise for "heat haze" look if desired, but keeping it clean for now
  
  gl_FragColor = vec4(uColor, glow * uIntensity * pulse);
}
`;
