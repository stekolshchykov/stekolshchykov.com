import { test, expect } from '@playwright/test';

test('Cube app loads cleanly and mounts the 3D scene', async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() !== 'error') return;
    const loc = msg.location();
    const suffix = loc?.url ? ` (${loc.url}:${loc.lineNumber ?? 0})` : '';
    consoleErrors.push(`${msg.text()}${suffix}`);
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err?.message ?? String(err));
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Main app container should render.
  await expect(page.locator('.cube-app')).toBeVisible({ timeout: 60_000 });

  // Loader should disappear once Scene3D renders its first frame.
  await expect(page.locator('.app-loader')).toHaveCount(0, { timeout: 60_000 });

  // Language switcher present (RU/EN/UK).
  await expect(page.locator('.lang-switcher .lang-btn')).toHaveCount(3);

  // Desktop navigation keys present.
  await expect(page.locator('.desktop-nav .nav-key')).toHaveCount(4);

  // Scene layers mounted.
  await expect(page.locator('[data-testid="scene-css3d"]')).toHaveCount(1);
  await expect(page.locator('[data-testid="scene-webgl"]')).toHaveCount(1);

  // CSS3D cube faces should be created.
  await expect(page.locator('.cube-face-shell')).toHaveCount(6, { timeout: 60_000 });

  // WebGL canvas should be present (starfield + wireframe layer).
  await expect(page.locator('[data-testid="scene-webgl"] canvas')).toHaveCount(1, { timeout: 60_000 });

  expect(pageErrors, `Page errors:\n${pageErrors.join('\n')}`).toHaveLength(0);
  expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toHaveLength(0);
});

