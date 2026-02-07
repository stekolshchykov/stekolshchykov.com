import { test, expect } from '@playwright/test';

test.describe('Game Mode Joystick', () => {
    test('LOOK joystick should rotate camera', async ({ page }) => {
        // 1. Load the page
        await page.goto('/');

        // 2. Wait for loading to finish (simple check for canvas or removal of loader)
        await page.waitForSelector('canvas', { timeout: 30000 });

        // 3. Enter Game Mode (Click the gamepad button)
        // We need to identify the button. Based on previous code, it has class 'game-mode-btn'
        await page.click('.game-mode-btn');

        // 4. Wait for Game Mode UI (Joysticks)
        const lookJoystick = page.locator('.joystick-pad--look');
        await expect(lookJoystick).toBeVisible();

        // 5. Setup Console Listener to catch Telemetry Logs
        const rotationLogs: { x: number, y: number }[] = [];
        page.on('console', msg => {
            const text = msg.text();
            // We expect TelemetryLogger to log frames. 
            // We might need to expose a global function to get camera rotation if logs are too noisy.
            // Alternatively, we can evaluate code in the page context.
        });

        // 6. Access Camera Rotation via Window Object (Need to expose it or use telemetry)
        // For this test to be robust, let's inject a script to expose usage
        await page.evaluate(() => {
            (window as any).__getCameraRotation = () => {
                // This assumes we can access the scene or camera from window. 
                // Since we don't have global access easily, we rely on the visual debug overlay 
                // OR we assume the TelemetryLogger is printing to console.
                return 0; // Placeholder
            };
        });

        // 6. Capture Initial Rotation
        const initialRotation = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(initialRotation).not.toBeNull();
        console.log('Initial Rotation:', initialRotation);

        const box = await lookJoystick.boundingBox();
        if (!box) throw new Error('Joystick not found');

        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        // Drag Up (Pitch) significantly
        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.mouse.move(startX, startY - 100, { steps: 5 });
        await page.waitForTimeout(200); // Wait for frame updates
        await page.mouse.up();

        // Wait a bit for momentum/decay if any
        await page.waitForTimeout(100);

        // 7. Capture Final Rotation
        const finalRotation = await page.evaluate(() => (window as any).__getCameraRotation());
        console.log('Final Rotation:', finalRotation);

        // 8. Assert Change
        // Moving joystick UP should change Pitch (X axis usually, or Y if using Euler)
        // Depending on camera implementation, X or Y or both will change.
        const deltaX = Math.abs(finalRotation.x - initialRotation.x);
        const deltaY = Math.abs(finalRotation.y - initialRotation.y);

        console.log(`Delta: X=${deltaX}, Y=${deltaY}`);

        // We expect SOME rotation.
        expect(deltaX + deltaY).toBeGreaterThan(0.001);
    });
});
```
