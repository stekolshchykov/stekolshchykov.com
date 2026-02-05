import { describe, expect, it } from 'vitest';
import { getDirectionByKey } from '../src/navigation';

describe('menu keyboard input mapping', () => {
  it('maps Arrow keys to directions', () => {
    expect(getDirectionByKey('ArrowUp')).toBe('up');
    expect(getDirectionByKey('ArrowDown')).toBe('down');
    expect(getDirectionByKey('ArrowLeft')).toBe('left');
    expect(getDirectionByKey('ArrowRight')).toBe('right');
  });

  it('maps WASD to directions', () => {
    expect(getDirectionByKey('KeyW')).toBe('up');
    expect(getDirectionByKey('KeyS')).toBe('down');
    expect(getDirectionByKey('KeyA')).toBe('left');
    expect(getDirectionByKey('KeyD')).toBe('right');
  });

  it('returns null for unknown keys', () => {
    expect(getDirectionByKey('Enter')).toBeNull();
    expect(getDirectionByKey('KeyQ')).toBeNull();
  });
});
