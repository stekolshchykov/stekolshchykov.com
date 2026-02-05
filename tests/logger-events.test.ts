import { describe, expect, it } from 'vitest';
import { clearRuntimeLogs, getRuntimeLogs, logEvent } from '../src/observability/logger';

describe('logger event taxonomy', () => {
  it('stores structured event names in logs', () => {
    clearRuntimeLogs();
    logEvent('navigation.input.key', { key: 'ArrowUp', direction: 'up', to: 'contacts' });
    logEvent('scene.whale.load.start', { whaleCount: 3 });

    const logs = getRuntimeLogs();
    expect(logs.length).toBe(2);
    expect(logs[0].event).toBe('navigation.input.key');
    expect(logs[1].event).toBe('scene.whale.load.start');
  });
});
