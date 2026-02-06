#!/usr/bin/env bash
set -euo pipefail

PORT=${PORT:-4173}
# Use IPv6 any-address so `localhost` (which often resolves to ::1) works.
# On macOS this is typically dual-stack (also accepts IPv4).
HOST=${HOST:-::}
LOG_FILE="${LOG_FILE:-tmp/dev-serve.log}"

echo "[dev-serve] Ensuring nothing listens on :$PORT..."
if lsof -i :"$PORT" -sTCP:LISTEN -Fp >/dev/null 2>&1; then
  # `lsof -Fp` outputs multiple record types (p=pid, f=fd, etc). Only kill pids.
  PIDS="$(lsof -i :"$PORT" -sTCP:LISTEN -Fp | sed -n 's/^p//p' | tr '\n' ' ' | xargs echo || true)"
  if [[ -n "${PIDS}" ]]; then
    # shellcheck disable=SC2086
    kill ${PIDS} || true
  fi
  sleep 0.5
fi

echo "[dev-serve] Starting Vite dev on $HOST:$PORT ..."
nohup npm run dev -- --host "$HOST" --port "$PORT" --strictPort >"$LOG_FILE" 2>&1 < /dev/null &
PID=$!
echo $PID > tmp/dev-serve.pid

for i in {1..40}; do
  if lsof -i :"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    break
  fi
  sleep 0.2
done

if ! lsof -i :"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "[dev-serve] ERROR: server did not start on :$PORT"
  echo "[dev-serve] Tail of $LOG_FILE:"
  tail -n 50 "$LOG_FILE" || true
  exit 1
fi

echo "[dev-serve] PID $PID"
echo "[dev-serve] Logs: $LOG_FILE"
echo "[dev-serve] Local:   http://127.0.0.1:$PORT/"
echo "[dev-serve] Local:   http://localhost:$PORT/"
echo "[dev-serve] Local:   http://[::1]:$PORT/"
if command -v ipconfig >/dev/null 2>&1; then
  IP="$(ipconfig getifaddr en0 2>/dev/null || true)"
  if [[ -n "${IP}" ]]; then
    echo "[dev-serve] Network: http://$IP:$PORT/"
  fi
fi
