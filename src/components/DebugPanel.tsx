import { useMemo, useState } from 'react';
import {
  clearRuntimeLogs,
  downloadRuntimeLogs,
  getRuntimeLoggingEnabled,
  getRuntimeLogs,
  setRuntimeLoggingEnabled,
} from '../observability/logger';

export function DebugPanel() {
  const [open, setOpen] = useState(false);
  const [logsVersion, setLogsVersion] = useState(0);
  const [enabled, setEnabled] = useState(getRuntimeLoggingEnabled());
  const [scopeFilter, setScopeFilter] = useState<'all' | 'navigation' | 'scene.whale' | 'performance'>('all');

  const logs = useMemo(() => {
    const allLogs = getRuntimeLogs();
    if (scopeFilter === 'all') return allLogs;
    return allLogs.filter((entry) => entry.scope === scopeFilter);
  }, [logsVersion, scopeFilter]);
  const last = logs[logs.length - 1];

  return (
    <aside className={open ? 'debug-panel is-open' : 'debug-panel'} aria-label="Runtime logs panel">
      <button type="button" className="debug-panel__toggle" onClick={() => setOpen((v) => !v)}>
        {open ? 'Logs -' : 'Logs +'}
      </button>

      {open ? (
        <div className="debug-panel__body">
          <p>
            entries: <strong>{logs.length}</strong>
          </p>
          <p>
            enabled: <strong>{enabled ? 'yes' : 'no'}</strong>
          </p>
          <label className="debug-panel__filter">
            scope:
            <select value={scopeFilter} onChange={(event) => setScopeFilter(event.target.value as typeof scopeFilter)}>
              <option value="all">all</option>
              <option value="navigation">navigation</option>
              <option value="scene.whale">scene.whale</option>
              <option value="performance">performance</option>
            </select>
          </label>
          {last ? (
            <p className="debug-panel__last" title={JSON.stringify(last.data ?? {})}>
              last: [{last.level}] {last.scope} - {last.event ?? last.message}
            </p>
          ) : (
            <p className="debug-panel__last">last: n/a</p>
          )}

          <div className="debug-panel__actions">
            <button
              type="button"
              onClick={() => {
                setRuntimeLoggingEnabled(!enabled);
                setEnabled(!enabled);
              }}
            >
              {enabled ? 'Disable' : 'Enable'}
            </button>
            <button
              type="button"
              onClick={() => {
                clearRuntimeLogs();
                setLogsVersion((v) => v + 1);
              }}
            >
              Clear
            </button>
            <button type="button" onClick={() => downloadRuntimeLogs()}>
              Download
            </button>
            <button type="button" onClick={() => setLogsVersion((v) => v + 1)}>
              Refresh
            </button>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
