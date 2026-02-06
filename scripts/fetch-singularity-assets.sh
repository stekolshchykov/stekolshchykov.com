#!/usr/bin/env bash
set -euo pipefail

# Local-only asset fetcher for visual parity with `MisterPrada/singularity`.
# NOTE: The upstream repo has no LICENSE. These files are downloaded for local dev only
# and must NOT be committed. We keep them under `public/.local/` which is gitignored.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="${ROOT_DIR}/public/.local/singularity"

mkdir -p "$OUT_DIR"

echo "[singularity] Downloading local assets into: $OUT_DIR"

curl -fsSL -o "${OUT_DIR}/noise_deep.png" \
  "https://raw.githubusercontent.com/MisterPrada/singularity/master/static/textures/noise_deep.png"

curl -fsSL -o "${OUT_DIR}/nebula.png" \
  "https://raw.githubusercontent.com/MisterPrada/singularity/master/static/textures/hdr/nebula.png"

# Optional (not used by default scene yet, but useful for experimentation)
curl -fsSL -o "${OUT_DIR}/starmap_2020_4k.exr" \
  "https://raw.githubusercontent.com/MisterPrada/singularity/master/static/textures/hdr/starmap_2020_4k.exr" || true

echo "[singularity] Done."
ls -lh "$OUT_DIR"

