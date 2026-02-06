import fs from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';

async function loadPng(filePath) {
  const buf = await fs.readFile(filePath);
  return PNG.sync.read(buf);
}

function computeMae(a, b) {
  const w = Math.min(a.width, b.width);
  const h = Math.min(a.height, b.height);

  let sum = 0;
  let n = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ia = (y * a.width + x) * 4;
      const ib = (y * b.width + x) * 4;
      sum += Math.abs(a.data[ia + 0] - b.data[ib + 0]);
      sum += Math.abs(a.data[ia + 1] - b.data[ib + 1]);
      sum += Math.abs(a.data[ia + 2] - b.data[ib + 2]);
      n += 3;
    }
  }

  return sum / (n * 255);
}

async function main() {
  const refDir = path.resolve(process.cwd(), 'tmp/reference');
  const threshold = Number(process.env.THRESHOLD ?? '0.12');

  let entries;
  try {
    entries = await fs.readdir(refDir);
  } catch {
    console.log(`[compare-frames] No ${refDir} directory, skipping.`);
    return;
  }

  const refs = entries.filter((f) => f.startsWith('ref_') && f.endsWith('.png')).sort();
  if (refs.length === 0) {
    console.log('[compare-frames] No ref_*.png frames found, skipping.');
    return;
  }

  let failed = false;

  for (const refName of refs) {
    const suffix = refName.slice('ref_'.length);
    const ourName = `our_${suffix}`;

    const refPath = path.join(refDir, refName);
    const ourPath = path.join(refDir, ourName);

    try {
      await fs.access(ourPath);
    } catch {
      console.log(`[compare-frames] Missing ${ourName}, skipping.`);
      continue;
    }

    const [refPng, ourPng] = await Promise.all([loadPng(refPath), loadPng(ourPath)]);
    const mae = computeMae(refPng, ourPng);

    const ok = mae <= threshold;
    console.log(`[compare-frames] ${refName} vs ${ourName}: MAE=${mae.toFixed(4)} ${ok ? 'OK' : 'FAIL'}`);
    if (!ok) failed = true;
  }

  if (failed) {
    console.error(`[compare-frames] One or more frame comparisons exceeded threshold=${threshold}.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[compare-frames] Error:', err);
  process.exit(1);
});

