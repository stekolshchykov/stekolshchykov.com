import { test, expect } from '@playwright/test';
import { PNG } from 'pngjs';

function getFrameStatsFromPng(png: PNG) {
  const { width: w, height: h, data } = png;

  let sum = 0;
  let sumSq = 0;
  let bright = 0;

  // Center window for “dark core” expectation.
  const cx0 = Math.floor(w * 0.46);
  const cx1 = Math.ceil(w * 0.54);
  const cy0 = Math.floor(h * 0.46);
  const cy1 = Math.ceil(h * 0.54);
  let centerSum = 0;
  let centerN = 0;

  // Annulus band as a rough proxy for the bright ring.
  const mx = w * 0.5;
  const my = h * 0.5;
  const r0 = Math.min(w, h) * 0.18;
  const r1 = Math.min(w, h) * 0.34;
  let ringSum = 0;
  let ringN = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      sum += lum;
      sumSq += lum * lum;
      if (lum > 30) bright += 1;

      if (x >= cx0 && x < cx1 && y >= cy0 && y < cy1) {
        centerSum += lum;
        centerN += 1;
      }

      const dx = x - mx;
      const dy = y - my;
      const rr = Math.sqrt(dx * dx + dy * dy);
      if (rr >= r0 && rr <= r1) {
        ringSum += lum;
        ringN += 1;
      }
    }
  }

  const n = data.length / 4;
  const mean = sum / n;
  const variance = sumSq / n - mean * mean;
  const centerMean = centerN > 0 ? centerSum / centerN : 0;
  const ringMean = ringN > 0 ? ringSum / ringN : 0;

  return { mean, variance, bright, n, w, h, centerMean, ringMean };
}

test('Singularity loads cleanly and renders a non-empty frame', async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err?.message ?? String(err));
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Wait for the app to install diagnostics (Scene3D is lazy-loaded).
  await expect.poll(
    async () =>
      page.evaluate(() => Boolean((window as unknown as { __SINGULARITY_DIAGNOSTICS__?: unknown }).__SINGULARITY_DIAGNOSTICS__)),
    { timeout: 60_000 }
  ).toBe(true);

  const diagnostics = await page.evaluate(
    () => (window as unknown as { __SINGULARITY_DIAGNOSTICS__?: { lastError?: string } }).__SINGULARITY_DIAGNOSTICS__
  );
  test.skip(diagnostics?.lastError === 'webgpu-unsupported', 'WebGPU not available and WebGL fallback disabled');

  await expect.poll(
    async () =>
      page.evaluate(
        () => (window as unknown as { __SINGULARITY_DIAGNOSTICS__?: { ready?: boolean } }).__SINGULARITY_DIAGNOSTICS__?.ready === true
      ),
    { timeout: 60_000 }
  ).toBe(true);

  // Ensure the preloader is out of the way before we measure pixels.
  await expect
    .poll(async () => page.evaluate(() => {
      const el = document.getElementById('preloader');
      if (!el) return true;
      const s = getComputedStyle(el);
      const op = Number.parseFloat(s.opacity || '1');
      return s.display === 'none' || op < 0.05;
    }), { timeout: 60_000 })
    .toBe(true);

  expect(pageErrors, `Page errors:\n${pageErrors.join('\n')}`).toHaveLength(0);
  expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toHaveLength(0);

  const vp = page.viewportSize() ?? { width: 1280, height: 720 };
  // Clip to the center region to avoid UI overlays (lang switcher + nav keys).
  const clip = {
    x: Math.floor(vp.width * 0.15),
    y: Math.floor(vp.height * 0.12),
    width: Math.max(1, Math.floor(vp.width * 0.7)),
    height: Math.max(1, Math.floor(vp.height * 0.76)),
  };
  const buf = await page.screenshot({ clip });
  const png = PNG.sync.read(buf);
  const stats = getFrameStatsFromPng(png);
  expect(stats.variance, `Frame variance too low: ${stats.variance} (mean=${stats.mean})`).toBeGreaterThan(0.35);
  expect(stats.bright, `Too few bright pixels: ${stats.bright}/${stats.n} (${stats.w}x${stats.h})`).toBeGreaterThan(40);

  // Loose “dark core” sanity check: the center should not be brighter than the ring band.
  expect(stats.centerMean, `Center too bright: centerMean=${stats.centerMean}, ringMean=${stats.ringMean}`).toBeLessThanOrEqual(
    stats.ringMean * 1.05
  );

  // Make sure there's an actual bright band (not just a flat gradient).
  expect(stats.ringMean, `Ring too dim vs overall mean: ringMean=${stats.ringMean}, mean=${stats.mean}`).toBeGreaterThan(
    stats.mean * 1.12
  );
});
