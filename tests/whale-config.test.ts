import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { getWhaleCount, WHALE_DISC_TEXTURE_PATH, WHALE_GLB_PATH } from '../src/scene/whaleConfig';

describe('whale asset config', () => {
  it('uses local assets in public folder', () => {
    expect(WHALE_GLB_PATH).toBe('/assets/whale/Whale-Poly.glb');
    expect(WHALE_DISC_TEXTURE_PATH).toBe('/assets/whale/disc.png');

    expect(existsSync(resolve(process.cwd(), 'public/assets/whale/Whale-Poly.glb'))).toBe(true);
    expect(existsSync(resolve(process.cwd(), 'public/assets/whale/disc.png'))).toBe(true);
  });

  it('calculates whale actor count by mode', () => {
    expect(getWhaleCount(true, false)).toBe(2);
    expect(getWhaleCount(false, true)).toBe(3);
    expect(getWhaleCount(false, false)).toBe(5);
  });
});
