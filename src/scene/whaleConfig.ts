export const WHALE_GLB_PATH = '/assets/whale/Whale-Poly.glb';
export const WHALE_DISC_TEXTURE_PATH = '/assets/whale/disc.png';

export function getWhaleCount(lowPowerMode: boolean, isTablet: boolean): number {
  if (lowPowerMode) return 2;
  if (isTablet) return 3;
  return 5;
}
