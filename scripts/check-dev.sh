#!/usr/bin/env bash
set -euo pipefail
PORT=${PORT:-4173}
if lsof -i :"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Dev server is listening on :$PORT"
  exit 0
else
  echo "Dev server NOT listening on :$PORT" >&2
  exit 1
fi
