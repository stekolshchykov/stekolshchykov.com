#!/usr/bin/env bash
set -euo pipefail

# Extracts a few keyframes from `tmp/reference/singularity.mp4` into `tmp/reference/`.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIR="${ROOT_DIR}/tmp/reference"
IN_FILE="${DIR}/singularity.mp4"

if [[ ! -f "$IN_FILE" ]]; then
  echo "Missing $IN_FILE. Run: bash scripts/fetch-singularity-reference.sh" >&2
  exit 1
fi

mkdir -p "$DIR"

TIMES=("$@")
if [[ ${#TIMES[@]} -eq 0 ]]; then
  TIMES=(1.0 2.5 4.0)
fi

echo "[singularity] Extracting frames from: $IN_FILE"
for t in "${TIMES[@]}"; do
  # Use exact seek and grab one frame.
  out="${DIR}/ref_${t}.png"
  ffmpeg -hide_banner -loglevel error -y -ss "$t" -i "$IN_FILE" -frames:v 1 "$out"
  echo "  - $out"
done
