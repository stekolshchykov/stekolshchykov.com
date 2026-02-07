export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LogEventName =
  | 'navigation.menu.rendered'
  | 'navigation.input.key'
  | 'navigation.input.click'
  | 'scene.whale.load.start'
  | 'scene.whale.load.success'
  | 'scene.whale.load.error'
  | 'scene.whale.frame.update'
  | 'scene.whale.fallback.enabled'
  | 'scene.blackhole.shader.ready'
  | 'scene.starfield.ready'
  | 'scene.performance.mode'
  | 'scene.render.visibility'
  | 'scene.cube.created'
  | 'scene.cube.visibility'
  | 'scene.celestial.ready';

export interface RuntimeLogEntry {
  ts: string;
  level: LogLevel;
  scope: string;
  message: string;
  event?: LogEventName;
  data?: unknown;
}

const STORAGE_KEY = 'stekolshchykov-runtime-logs';
const ENABLED_KEY = 'stekolshchykov-runtime-logs-enabled';
const MAX_LOGS = 3000;

let flushTimer: number | null = null;
let initialized = false;
const throttleMap = new Map<string, number>();
const logs: RuntimeLogEntry[] = loadLogs();

function getStorage() {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  return window.localStorage;
}

function isEnabled(): boolean {
  const storage = getStorage();
  if (!storage) return true;
  const raw = storage.getItem(ENABLED_KEY);
  if (raw === null) return true;
  return raw !== 'false';
}

function loadLogs(): RuntimeLogEntry[] {
  const storage = getStorage();
  if (!storage) return [];
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(-MAX_LOGS) : [];
  } catch {
    return [];
  }
}

function scheduleFlush() {
  if (flushTimer !== null) return;
  flushTimer = window.setTimeout(() => {
    flushTimer = null;
    const storage = getStorage();
    if (!storage) return;
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch {
      // ignore quota errors
    }
  }, 200);
}

function normalizeData(data?: unknown): unknown {
  if (data === undefined) return undefined;
  try {
    return JSON.parse(JSON.stringify(data));
  } catch {
    return String(data);
  }
}

function scopeFromEvent(event: LogEventName): string {
  if (event.startsWith('navigation.')) return 'navigation';
  if (event.startsWith('scene.whale.')) return 'scene.whale';
  if (event.startsWith('scene.blackhole.')) return 'scene.blackhole';
  if (event.startsWith('scene.performance.')) return 'performance';
  if (event.startsWith('scene.render.')) return 'scene';
  return 'app';
}

export function logRuntime(level: LogLevel, scope: string, message: string, data?: unknown) {
  if (!isEnabled()) return;
  const entry: RuntimeLogEntry = {
    ts: new Date().toISOString(),
    level,
    scope,
    message,
    data: normalizeData(data),
  };

  logs.push(entry);
  if (logs.length > MAX_LOGS) {
    logs.splice(0, logs.length - MAX_LOGS);
  }
  if (typeof window !== 'undefined') {
    scheduleFlush();
  }

  const prefix = `[${entry.ts}] [${level.toUpperCase()}] [${scope}] ${message}`;
  if (level === 'error') {
    console.error(prefix, entry.data ?? '');
  } else if (level === 'warn') {
    console.warn(prefix, entry.data ?? '');
  } else if (level === 'debug') {
    console.debug(prefix, entry.data ?? '');
  } else {
    console.info(prefix, entry.data ?? '');
  }
}

export function logEvent(event: LogEventName, data?: unknown, level: LogLevel = 'info') {
  logRuntime(level, scopeFromEvent(event), event, { event, ...(data && typeof data === 'object' ? data : { value: data }) });
  const last = logs[logs.length - 1];
  if (last) {
    last.event = event;
  }
}

export function logEventThrottled(
  throttleKey: string,
  intervalMs: number,
  event: LogEventName,
  data?: unknown,
  level: LogLevel = 'debug'
) {
  const now = Date.now();
  const prev = throttleMap.get(throttleKey) ?? 0;
  if (now - prev < intervalMs) return;
  throttleMap.set(throttleKey, now);
  logEvent(event, data, level);
}

export function getRuntimeLogs(): RuntimeLogEntry[] {
  return [...logs];
}

export function clearRuntimeLogs() {
  logs.length = 0;
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function getRuntimeLoggingEnabled() {
  return isEnabled();
}

export function setRuntimeLoggingEnabled(value: boolean) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(ENABLED_KEY, value ? 'true' : 'false');
}

export function downloadRuntimeLogs(filename = `runtime-log-${Date.now()}.json`) {
  if (typeof window === 'undefined') return;
  const payload = JSON.stringify(getRuntimeLogs(), null, 2);
  const blob = new Blob([payload], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function installGlobalErrorLogging() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  window.addEventListener('error', (event) => {
    logRuntime('error', 'window', 'Unhandled error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    logRuntime('error', 'window', 'Unhandled promise rejection', {
      reason: String(event.reason),
    });
  });

  (window as Window & { __APP_LOGGER__?: unknown }).__APP_LOGGER__ = {
    getRuntimeLogs,
    clearRuntimeLogs,
    downloadRuntimeLogs,
    setRuntimeLoggingEnabled,
    help: () => {
      console.group('Logger Help');
      console.info('getRuntimeLogs() - Returns all stored logs');
      console.info('clearRuntimeLogs() - Clears all stored logs');
      console.info('downloadRuntimeLogs() - Downloads logs as JSON');
      console.info('setRuntimeLoggingEnabled(bool) - Enable/disable logging');
      console.groupEnd();
    }
  };

  if (isEnabled()) {
    console.log(
      '%c 3D CV %c Logger Active. Type %c__APP_LOGGER__.help()%c for options.',
      'background: #3b82f6; color: white; padding: 2px 4px; border-radius: 2px;',
      'color: #9ca3af',
      'color: #3b82f6; font-weight: bold;',
      'color: #9ca3af'
    );
  }
}
