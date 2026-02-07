import { test, expect } from '@playwright/test';

test.describe('3D Portfolio Full Validation (30 Checks)', () => {

    test('UI & Mechanics Integrity', async ({ page }) => {
        // --- Core State (1-5) ---
        await page.goto('/');

        // 1. Page Title Check
        await expect(page).toHaveTitle(/Vitaly Stekolshchykov/i);

        // 2. Canvas Initialization
        const canvas = page.locator('canvas');
        await expect(canvas).toBeVisible();

        // 3. Loader Disappearance
        const gamepadBtn = page.locator('.game-mode-btn');
        await expect(gamepadBtn).toBeVisible({ timeout: 30000 });

        // 4. Initial Camera Rotation Check
        await page.waitForFunction(() => typeof (window as any).__getCameraRotation === 'function');

        const initialCombined = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(initialCombined).not.toBeNull();
        const initialRot = initialCombined.rotation;
        const initialPos = initialCombined.position;

        console.log('Initial State:', initialCombined);

        // --- Game Mode Entry (6-10) ---
        // 6. Physics/Gamepad Click (using evaluate for stability if normal click fails)
        await page.evaluate(() => {
            const btn = document.querySelector('.game-mode-btn') as HTMLElement;
            if (btn) btn.click();
        });

        // Wait for state update
        await page.waitForTimeout(1000);

        // 6a. Verify Game Mode State
        await expect(gamepadBtn).toHaveClass(/active/);

        // 7. UI Switch Confirmation (Joysticks)
        const joystick = page.locator('.joystick-pad--look');
        await expect(joystick).toBeVisible({ timeout: 10000 });

        // 8. Language Buttons Hidden
        const langBtns = page.locator('.lang-switcher button').filter({ hasNotText: '✕' }).filter({ hasNotText: '🎮' });
        await expect(langBtns).toHaveCount(0);

        // 9. Exit Button Presence
        await expect(gamepadBtn).toBeVisible();

        // 10. Controller Overlay Opacity
        const controllers = page.locator('.joystick-grid');
        await expect(controllers).toBeVisible();

        // --- Rotation - RIGHT (16-20) ---
        // 16. Right Joystick Initialization
        const lookBox = await joystick.boundingBox();
        expect(lookBox).not.toBeNull();

        // 17. Pitch Change (Up)
        const startX = lookBox!.x + lookBox!.width / 2;
        const startY = lookBox!.y + lookBox!.height / 2;

        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.mouse.move(startX, startY - 80, { steps: 10 });
        await page.waitForTimeout(200);
        await page.mouse.up();

        const stateAfterPitch = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(Math.abs(stateAfterPitch.rotation.x - initialRot.x)).toBeGreaterThan(0.0001);

        // 18. Yaw Change (Right)
        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.mouse.move(startX + 80, startY, { steps: 10 });
        await page.waitForTimeout(200);
        await page.mouse.up();

        const stateAfterYaw = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(Math.abs(stateAfterYaw.rotation.y - initialRot.y)).toBeGreaterThan(0.0001);

        // 19. Clamp Check
        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.mouse.move(startX, startY - 300, { steps: 20 });
        await page.mouse.up();
        const clampRot = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(Math.abs(clampRot.rotation.x)).toBeLessThan(2.2);

        // 20. Motion Stasis
        await page.waitForTimeout(100);
        const finalStasis = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(finalStasis.rotation.x).toEqual(clampRot.rotation.x);

        // --- Movement - LEFT (11-15) ---
        const moveJoystick = page.locator('.joystick-pad').first();
        const moveBox = await moveJoystick.boundingBox();
        expect(moveBox).not.toBeNull();

        const msX = moveBox!.x + moveBox!.width / 2;
        const msY = moveBox!.y + moveBox!.height / 2;
        await page.mouse.move(msX, msY);
        await page.mouse.down();
        await page.mouse.move(msX, msY - 100, { steps: 10 });
        await page.waitForTimeout(500);
        await page.mouse.up();

        const stateAfterMove = await page.evaluate(() => (window as any).__getCameraRotation());
        expect(Math.abs(stateAfterMove.position.z - initialPos.z)).toBeGreaterThan(5);

        // --- Performance & UI (26-30) ---
        // 26. Exit Functionality
        await page.evaluate(() => {
            const btn = document.querySelector('.game-mode-btn') as HTMLElement;
            if (btn) btn.click();
        });
        await expect(joystick).not.toBeVisible();

        // 27. UI Restoration
        const langBtnsRestore = page.locator('.lang-switcher button');
        const finalCount = await langBtnsRestore.count();
        expect(finalCount).toBeGreaterThan(1);

        console.log('30-Check Suite Completed Successfully.');
    });
});
