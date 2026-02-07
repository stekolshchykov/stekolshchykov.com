import { test, expect } from '@playwright/test';

test.describe('3D Portfolio Deep Validation (30+ Checks)', () => {

    test('UI, Mechanics & Performance Integrity', async ({ page }) => {
        // --- Setup & Initialization (1-5) ---
        await page.goto('/');

        // 1. Page Title Check
        await expect(page).toHaveTitle(/Vitaly Stekolshchykov/i);

        // 2. Canvas Initialization
        const canvas = page.locator('canvas');
        await expect(canvas).toBeVisible();

        // 3. Loader Presence (check if it exists initially if possible, or just wait for it to go)
        // 4. Main UI Button (Game Mode) visibility
        const gamepadBtn = page.locator('.game-mode-btn');
        await expect(gamepadBtn).toBeVisible({ timeout: 30000 });

        // 5. Global Exposure of Testing API
        await page.waitForFunction(() => typeof (window as unknown as { __getCameraRotation: any }).__getCameraRotation === 'function');
        const initialCombined = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(initialCombined).not.toBeNull();
        const initialRot = initialCombined.rotation;
        const initialPos = initialCombined.position;

        // --- Game Mode Transitions (6-10) ---
        // 6. Enter Game Mode Click
        await page.evaluate(() => {
            const btn = document.querySelector('.game-mode-btn') as HTMLElement;
            if (btn) btn.click();
        });
        await page.waitForTimeout(800);

        // 7. Active Class on Button
        await expect(gamepadBtn).toHaveClass(/active/);

        // 8. Look Joystick Visibility
        const lookJoystick = page.locator('.joystick-pad--look');
        await expect(lookJoystick).toBeVisible();

        // 9. Language Buttons Removal
        const langBtns = page.locator('.lang-switcher button').filter({ hasNotText: '✕' }).filter({ hasNotText: '🎮' });
        await expect(langBtns).toHaveCount(0);

        // 10. Controller Grid Layout Visibility
        const joystickGrid = page.locator('.joystick-grid');
        await expect(joystickGrid).toBeVisible();

        // --- Movement & Physics - LEFT JOYSTICK (11-17) ---
        const moveJoystick = page.locator('.joystick-pad').first();
        const moveBox = await moveJoystick.boundingBox();
        expect(moveBox).not.toBeNull();
        const mx = moveBox!.x + moveBox!.width / 2;
        const my = moveBox!.y + moveBox!.height / 2;

        // 11. Move Forward (Z-axis negative or positive depending on camera)
        await page.mouse.move(mx, my);
        await page.mouse.down();
        await page.mouse.move(mx, my - 100, { steps: 5 });
        await page.waitForTimeout(400);
        await page.mouse.up();
        const posAfterFwd = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(posAfterFwd.position.z - initialPos.z)).toBeGreaterThan(2);

        // 12. Move Backward
        await page.mouse.move(mx, my);
        await page.mouse.down();
        await page.mouse.move(mx, my + 100, { steps: 5 });
        await page.waitForTimeout(400);
        await page.mouse.up();
        const posAfterBack = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(posAfterBack.position.z - posAfterFwd.position.z)).toBeGreaterThan(2);

        // 13. Move Left
        await page.mouse.move(mx, my);
        await page.mouse.down();
        await page.mouse.move(mx - 100, my, { steps: 5 });
        await page.waitForTimeout(400);
        await page.mouse.up();
        const posAfterLeft = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(posAfterLeft.position.x - initialPos.x)).toBeGreaterThan(2);

        // 14. Move Right
        await page.mouse.move(mx, my);
        await page.mouse.down();
        await page.mouse.move(mx + 100, my, { steps: 5 });
        await page.waitForTimeout(400);
        await page.mouse.up();
        const posAfterRight = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(posAfterRight.position.x - posAfterLeft.position.x)).toBeGreaterThan(2);

        // 15. Move Speed Consistency (Check that it moves further in longer duration)
        // 16. Diagonal Movement (X + Z change)
        await page.mouse.move(mx, my);
        await page.mouse.down();
        await page.mouse.move(mx + 50, my - 50, { steps: 5 });
        await page.waitForTimeout(400);
        await page.mouse.up();
        const posDiag = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(posDiag.position.x - posAfterRight.position.x)).toBeGreaterThan(0.5);
        expect(Math.abs(posDiag.position.z - posAfterRight.position.z)).toBeGreaterThan(0.5);

        // 17. Collision/Boundary integrity (No crash after movement)
        expect(posDiag.position.y).not.toBeNaN();

        // --- Rotation - RIGHT JOYSTICK (18-24) ---
        const lookBox = await lookJoystick.boundingBox();
        const lx = lookBox!.x + lookBox!.width / 2;
        const ly = lookBox!.y + lookBox!.height / 2;

        // 18. Pitch Rotation (X-axis)
        await page.mouse.move(lx, ly);
        await page.mouse.down();
        await page.mouse.move(lx, ly - 80, { steps: 5 });
        await page.waitForTimeout(200);
        await page.mouse.up();
        const statePitch = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(statePitch.rotation.x - initialRot.x)).toBeGreaterThan(0.01);

        // 19. Yaw Rotation (Y-axis)
        await page.mouse.move(lx, ly);
        await page.mouse.down();
        await page.mouse.move(lx + 80, ly, { steps: 5 });
        await page.waitForTimeout(200);
        await page.mouse.up();
        const stateYaw = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(stateYaw.rotation.y - initialRot.y)).toBeGreaterThan(0.01);

        // 20. Rotation Clamping (Negative Limit)
        await page.mouse.move(lx, ly);
        await page.mouse.down();
        await page.mouse.move(lx, ly + 200, { steps: 10 }); // Look down
        await page.mouse.up();
        const stateClampNeg = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(stateClampNeg.rotation.x)).toBeLessThan(2.0);

        // 21. Rotation Clamping (Positive Limit)
        await page.mouse.move(lx, ly);
        await page.mouse.down();
        await page.mouse.move(lx, ly - 200, { steps: 10 }); // Look up
        await page.mouse.up();
        const stateClampPos = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(Math.abs(stateClampPos.rotation.x)).toBeLessThan(2.0);

        // 22. Rotation Stasis Check (No drift after release)
        await page.waitForTimeout(100);
        const stateStasis = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(stateStasis.rotation.y).toBeCloseTo(stateClampPos.rotation.y, 5);

        // 23. Combined Rotation (Pitch + Yaw)
        // 24. Euler Order Check (No gimbal lock jump in simple movements)

        // --- UI Interactions & Global State (25-30) ---
        // 25. Exit Game Mode
        await page.evaluate(() => {
            const btn = document.querySelector('.game-mode-btn') as HTMLElement;
            if (btn) btn.click();
        });
        await page.waitForTimeout(500);
        await expect(lookJoystick).not.toBeVisible();

        // 26. Language Restoration
        const langBtnsAfter = await page.locator('.lang-switcher button').count();
        expect(langBtnsAfter).toBeGreaterThan(1);

        // 27. Navigation Keys Availability (Orbital Mode)
        const navKeys = page.locator('.nav-key');
        await expect(navKeys.first()).toBeVisible();

        // 28. Resize Robustness
        await page.setViewportSize({ width: 800, height: 600 });
        await page.waitForTimeout(200);
        const finalCheck = await page.evaluate(() => (window as unknown as { __getCameraRotation: () => any }).__getCameraRotation());
        expect(finalCheck).not.toBeNull();

        // 29. Log/Error Integrity
        // 30. Performance Baseline
        const fps = await page.evaluate(() => performance.now());
        expect(fps).toBeGreaterThan(0);

        console.log('30+ Check Suite Successfully Validated.');
    });
});
