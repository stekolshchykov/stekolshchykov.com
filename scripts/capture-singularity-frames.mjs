import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:4173/';
const OUT_DIR = path.resolve(process.cwd(), 'tmp/reference');

function parseTimes(argv) {
  const rest = argv.slice(2);
  if (rest.length === 0) return [1.0, 2.5, 4.0];
  return rest.map((s) => Number(s)).filter((n) => Number.isFinite(n) && n >= 0);
}

const times = parseTimes(process.argv).sort((a, b) => a - b);

await fs.mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ['--enable-unsafe-webgpu'],
});

const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
});

page.on('console', (msg) => {
  if (msg.type() === 'error') {
    // Keep output minimal but useful for debugging capture failures.
    // eslint-disable-next-line no-console
    console.error('[capture] console.error:', msg.text());
  }
});

await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

await page.waitForFunction(() => (window.__SINGULARITY_DIAGNOSTICS__?.ready === true), null, { timeout: 60_000 });
await page.waitForFunction(() => {
  const pre = document.getElementById('preloader');
  if (!pre) return true;
  const s = getComputedStyle(pre);
  return s.display === 'none' || Number(s.opacity) < 0.05;
}, null, { timeout: 60_000 });

// Hide debug UI for clean captures.
await page.evaluate(() => {
  const dp = document.getElementById('debug-panel');
  if (dp) dp.style.display = 'none';
});

let last = 0;
for (const t of times) {
  const waitMs = Math.max(0, (t - last) * 1000);
  if (waitMs) await page.waitForTimeout(waitMs);
  last = t;

  const tLabel = Number.isInteger(t) ? t.toFixed(1) : String(t);
  const fileName = `our_${tLabel}.png`;
  const outPath = path.join(OUT_DIR, fileName);

  await page.screenshot({
    path: outPath,
    clip: { x: 0, y: 0, width: 1280, height: 720 },
  });

  // eslint-disable-next-line no-console
  console.log(`[capture] wrote ${outPath}`);
}

await browser.close();
