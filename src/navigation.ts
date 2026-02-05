export type FaceId = 'welcome' | 'skills' | 'about' | 'cooperation' | 'contacts' | 'work';
export type Direction = 'up' | 'down' | 'left' | 'right';

export const FACE_ROTATIONS: Record<FaceId, { x: number; y: number }> = {
  welcome: { x: 0, y: 0 },
  skills: { x: 0, y: Math.PI },
  about: { x: 0, y: Math.PI / 2 },
  cooperation: { x: 0, y: -Math.PI / 2 },
  contacts: { x: Math.PI / 2, y: 0 },
  work: { x: -Math.PI / 2, y: 0 },
};

export const FACE_CODES: Record<FaceId, string> = {
  welcome: 'A',
  skills: 'A2',
  about: 'A3',
  cooperation: 'B',
  contacts: 'C',
  work: 'D',
};

export const NAV_BY_FACE: Record<FaceId, { up: FaceId; left: FaceId; down: FaceId; right: FaceId }> = {
  welcome: { up: 'contacts', left: 'about', down: 'work', right: 'cooperation' },
  skills: { up: 'contacts', left: 'cooperation', down: 'work', right: 'about' },
  about: { up: 'contacts', left: 'skills', down: 'work', right: 'welcome' },
  cooperation: { up: 'contacts', left: 'welcome', down: 'work', right: 'skills' },
  contacts: { up: 'skills', left: 'about', down: 'welcome', right: 'cooperation' },
  work: { up: 'welcome', left: 'about', down: 'skills', right: 'cooperation' },
};

export function getNavigationTargets(face: FaceId) {
  return NAV_BY_FACE[face];
}

export function getDirectionByKey(code: string): Direction | null {
  const normalized = code.toLowerCase();
  if (normalized === 'arrowup' || normalized === 'keyw') return 'up';
  if (normalized === 'arrowdown' || normalized === 'keys') return 'down';
  if (normalized === 'arrowleft' || normalized === 'keya') return 'left';
  if (normalized === 'arrowright' || normalized === 'keyd') return 'right';
  return null;
}
