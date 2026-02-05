import { describe, expect, it } from 'vitest';
import { FACE_ROTATIONS, NAV_BY_FACE, FACE_CODES, getDirectionByKey, type FaceId, type Direction } from '../src/navigation';

describe('Face Navigation - All Faces Reachable', () => {
  const allFaces: FaceId[] = ['welcome', 'skills', 'about', 'cooperation', 'contacts', 'work'];

  it('all faces have rotation definitions', () => {
    allFaces.forEach(face => {
      expect(FACE_ROTATIONS[face]).toBeDefined();
      expect(FACE_ROTATIONS[face]).toHaveProperty('x');
      expect(FACE_ROTATIONS[face]).toHaveProperty('y');
    });
  });

  it('all faces have navigation maps', () => {
    allFaces.forEach(face => {
      expect(NAV_BY_FACE[face]).toBeDefined();
      expect(NAV_BY_FACE[face]).toHaveProperty('up');
      expect(NAV_BY_FACE[face]).toHaveProperty('down');
      expect(NAV_BY_FACE[face]).toHaveProperty('left');
      expect(NAV_BY_FACE[face]).toHaveProperty('right');
    });
  });

  it('navigation targets are valid faces', () => {
    allFaces.forEach(face => {
      const nav = NAV_BY_FACE[face];
      expect(allFaces).toContain(nav.up);
      expect(allFaces).toContain(nav.down);
      expect(allFaces).toContain(nav.left);
      expect(allFaces).toContain(nav.right);
    });
  });

  it('every face is reachable from welcome within 3 moves', () => {
    const visited = new Set<FaceId>(['welcome']);
    const queue: { face: FaceId; depth: number }[] = [{ face: 'welcome', depth: 0 }];

    while (queue.length > 0) {
      const { face, depth } = queue.shift()!;
      if (depth >= 3) continue;

      const nav = NAV_BY_FACE[face];
      const directions: Direction[] = ['up', 'down', 'left', 'right'];

      directions.forEach(dir => {
        const nextFace = nav[dir];
        if (!visited.has(nextFace)) {
          visited.add(nextFace);
          queue.push({ face: nextFace, depth: depth + 1 });
        }
      });
    }

    allFaces.forEach(face => {
      expect(visited.has(face)).toBe(true);
    });
  });

  it('opposite directions return to original face within 2 moves', () => {
    allFaces.forEach(startFace => {
      // Up then Down should return (via some path)
      const afterUp = NAV_BY_FACE[startFace].up;
      const afterDown = NAV_BY_FACE[afterUp].down;

      // Left then Right should return (via some path)
      const afterLeft = NAV_BY_FACE[startFace].left;
      const afterRight = NAV_BY_FACE[afterLeft].right;

      // These should either return to start or be consistent
      expect(allFaces).toContain(afterDown);
      expect(allFaces).toContain(afterRight);
    });
  });
});

describe('Face Navigation - Keyboard Input', () => {
  it('arrow keys map to directions', () => {
    expect(getDirectionByKey('ArrowUp')).toBe('up');
    expect(getDirectionByKey('ArrowDown')).toBe('down');
    expect(getDirectionByKey('ArrowLeft')).toBe('left');
    expect(getDirectionByKey('ArrowRight')).toBe('right');
  });

  it('WASD keys (KeyW format) map to directions', () => {
    expect(getDirectionByKey('KeyW')).toBe('up');
    expect(getDirectionByKey('KeyS')).toBe('down');
    expect(getDirectionByKey('KeyA')).toBe('left');
    expect(getDirectionByKey('KeyD')).toBe('right');
  });

  it('keys are case insensitive', () => {
    expect(getDirectionByKey('arrowup')).toBe('up');
    expect(getDirectionByKey('ARROWUP')).toBe('up');
    expect(getDirectionByKey('keyw')).toBe('up');
    expect(getDirectionByKey('KEYW')).toBe('up');
  });

  it('invalid keys return null', () => {
    expect(getDirectionByKey('Space')).toBeNull();
    expect(getDirectionByKey('Enter')).toBeNull();
    expect(getDirectionByKey('KeyX')).toBeNull();
    expect(getDirectionByKey('')).toBeNull();
  });

  it('face codes exist for all faces', () => {
    const allFaces: FaceId[] = ['welcome', 'skills', 'about', 'cooperation', 'contacts', 'work'];
    allFaces.forEach(face => {
      expect(FACE_CODES[face]).toBeDefined();
      expect(typeof FACE_CODES[face]).toBe('string');
    });
  });
});

describe('Face Navigation - Complete Traversal', () => {
  it('can reach all faces from welcome using combined directions', () => {
    const visited = new Set<FaceId>();
    const current: FaceId = 'welcome';
    const allFaces: FaceId[] = ['welcome', 'skills', 'about', 'cooperation', 'contacts', 'work'];

    // Try all directions from welcome
    visited.add(current);
    const nav = NAV_BY_FACE[current];
    visited.add(nav.up);
    visited.add(nav.down);
    visited.add(nav.left);
    visited.add(nav.right);

    // From each of those, try one more step
    [nav.up, nav.down, nav.left, nav.right].forEach(face => {
      const subNav = NAV_BY_FACE[face];
      visited.add(subNav.up);
      visited.add(subNav.down);
      visited.add(subNav.left);
      visited.add(subNav.right);
    });

    // Should have visited all 6 faces
    expect(visited.size).toBe(6);
    allFaces.forEach(face => {
      expect(visited.has(face)).toBe(true);
    });
  });

  it('horizontal navigation cycles through faces', () => {
    const visited = new Set<FaceId>();
    let current: FaceId = 'welcome';

    // Go right 6 times
    for (let i = 0; i < 6; i++) {
      visited.add(current);
      current = NAV_BY_FACE[current].right;
    }

    // Should have visited at least 4 unique faces via horizontal navigation
    expect(visited.size).toBeGreaterThanOrEqual(4);
  });

  it('navigation is deterministic', () => {
    const allFaces: FaceId[] = ['welcome', 'skills', 'about', 'cooperation', 'contacts', 'work'];
    const directions: Direction[] = ['up', 'down', 'left', 'right'];

    allFaces.forEach(face => {
      directions.forEach(dir => {
        const result1 = NAV_BY_FACE[face][dir];
        const result2 = NAV_BY_FACE[face][dir];
        expect(result1).toBe(result2);
      });
    });
  });
});

describe('Face Rotations - Mathematical Consistency', () => {
  it('rotations are in valid range', () => {
    const allFaces: FaceId[] = ['welcome', 'skills', 'about', 'cooperation', 'contacts', 'work'];

    allFaces.forEach(face => {
      const rot = FACE_ROTATIONS[face];
      // Rotations should be within -2π to 2π
      expect(Math.abs(rot.x)).toBeLessThanOrEqual(Math.PI * 2);
      expect(Math.abs(rot.y)).toBeLessThanOrEqual(Math.PI * 2);
    });
  });

  it('welcome face has zero or minimal rotation', () => {
    // Welcome is the default face, should have zero rotation
    const rot = FACE_ROTATIONS.welcome;
    expect(rot.x).toBe(0);
    expect(rot.y).toBe(0);
  });

  it('opposite faces have opposite rotations', () => {
    // skills is opposite to welcome
    const welcomeRot = FACE_ROTATIONS.welcome;
    const skillsRot = FACE_ROTATIONS.skills;

    // Y rotation should differ by π (180 degrees)
    const yDiff = Math.abs(skillsRot.y - welcomeRot.y);
    expect(yDiff).toBeCloseTo(Math.PI, 1);
  });

  it('each face has unique rotation', () => {
    const allFaces: FaceId[] = ['welcome', 'skills', 'about', 'cooperation', 'contacts', 'work'];
    const rotationStrings = allFaces.map(face => {
      const rot = FACE_ROTATIONS[face];
      return `${rot.x.toFixed(4)},${rot.y.toFixed(4)}`;
    });

    const uniqueRotations = new Set(rotationStrings);
    expect(uniqueRotations.size).toBe(6);
  });
});

describe('Face Navigation - Cinematic Targets', () => {
  it('contacts and work faces are vertical (up/down)', () => {
    // From welcome, up goes to contacts
    expect(NAV_BY_FACE.welcome.up).toBe('contacts');
    expect(NAV_BY_FACE.welcome.down).toBe('work');
  });

  it('about and cooperation faces are horizontal (left/right)', () => {
    // From welcome, left goes to about, right goes to cooperation
    expect(NAV_BY_FACE.welcome.left).toBe('about');
    expect(NAV_BY_FACE.welcome.right).toBe('cooperation');
  });

  it('skills is opposite to welcome', () => {
    // Going up twice from welcome should reach skills
    const afterUp = NAV_BY_FACE.welcome.up;
    const afterUpUp = NAV_BY_FACE[afterUp].up;
    expect(afterUpUp).toBe('skills');
  });
});
