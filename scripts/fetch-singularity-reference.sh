#!/usr/bin/env bash
set -euo pipefail

# Downloads the README video reference for `MisterPrada/singularity` into gitignored `tmp/reference/`.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="${ROOT_DIR}/tmp/reference"
URL="${URL:-https://github.com/user-attachments/assets/e7810d45-6113-4dfc-8884-5c9fbdeca65d}"

mkdir -p "$OUT_DIR"

OUT_FILE="${OUT_DIR}/singularity.mp4"

echo "[singularity] Downloading reference mp4..."
curl -fsSL -L \
  -A "Mozilla/5.0" \
  -H "Accept: */*" \
  -o "$OUT_FILE" \
  "$URL"

echo "[singularity] Saved: $OUT_FILE"
ls -lh "$OUT_FILE"

