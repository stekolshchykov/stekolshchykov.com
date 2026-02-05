import { describe, expect, it } from 'vitest';
import { Euler, Vector3 } from 'three';
import { FACE_ROTATIONS, NAV_BY_FACE, type FaceId } from '../src/navigation';

type Vec3 = [number, number, number];

const BASE_NORMALS: Record<FaceId, Vec3> = {
  welcome: [0, 0, 1],
  skills: [0, 0, -1],
  about: [-1, 0, 0],
  cooperation: [1, 0, 0],
  contacts: [0, 1, 0],
  work: [0, -1, 0],
};

function rotate(v: Vec3, rx: number, ry: number): Vec3 {
  const [x0, y0, z0] = v;
  const rotated = new Vector3(x0, y0, z0).applyEuler(new Euler(rx, ry, 0, 'XYZ'));
  return [rotated.x, rotated.y, rotated.z];
}

function expectedNav(face: FaceId) {
  const rot = FACE_ROTATIONS[face];
  const entries = (Object.keys(BASE_NORMALS) as FaceId[]).map((candidate) => {
    const [x, y, z] = rotate(BASE_NORMALS[candidate], rot.x, rot.y);
    return { candidate, x, y, z };
  });

  const current = entries.reduce((best, item) => (item.z > best.z ? item : best));
  const opposite = entries.reduce((best, item) => (item.z < best.z ? item : best));
  const sides = entries.filter((item) => item.candidate !== current.candidate && item.candidate !== opposite.candidate);

  const up = sides.reduce((best, item) => (item.y > best.y ? item : best));
  const down = sides.reduce((best, item) => (item.y < best.y ? item : best));
  const left = sides.reduce((best, item) => (item.x < best.x ? item : best));
  const right = sides.reduce((best, item) => (item.x > best.x ? item : best));

  return {
    current: current.candidate,
    up: up.candidate,
    left: left.candidate,
    down: down.candidate,
    right: right.candidate,
  };
}

describe('cube navigation map', () => {
  it('matches cube geometry for all faces', () => {
    (Object.keys(FACE_ROTATIONS) as FaceId[]).forEach((face) => {
      const expected = expectedNav(face);
      expect(expected.current).toBe(face);
      expect(NAV_BY_FACE[face]).toEqual({
        up: expected.up,
        left: expected.left,
        down: expected.down,
        right: expected.right,
      });
    });
  });

  it('from welcome, pressing up twice lands on skills', () => {
    const afterFirstUp = NAV_BY_FACE.welcome.up;
    const afterSecondUp = NAV_BY_FACE[afterFirstUp].up;
    expect(afterFirstUp).toBe('contacts');
    expect(afterSecondUp).toBe('skills');
  });
});
