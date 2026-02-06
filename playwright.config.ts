import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 120_000,
  expect: {
    timeout: 30_000,
  },
  retries: process.env.CI ? 1 : 0,
  use: {
    // Use a dedicated port so E2E can run while `npm run dev` keeps 4173 busy.
    baseURL: 'http://127.0.0.1:4174',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            // Make WebGL deterministic in headless (software GL).
            '--use-angle=swiftshader',
            '--ignore-gpu-blocklist',
          ],
        },
      },
    },
  ],
  webServer: {
    // WebGPU is flaky in Chromium headless; use Three's WebGL backend for deterministic E2E.
    command: 'VITE_DISABLE_SENTRY=1 VITE_FORCE_WEBGL=1 npm run build && VITE_DISABLE_SENTRY=1 VITE_FORCE_WEBGL=1 npm run preview -- --host 127.0.0.1 --port 4174 --strictPort',
    url: 'http://127.0.0.1:4174',
    // Always own the server for deterministic results.
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
