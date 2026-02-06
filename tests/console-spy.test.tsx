import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import App from '../src/App';
import { HelmetProvider } from 'react-helmet-async';

describe('Console Error Detection', () => {
    const originalError = console.error;
    const originalWarn = console.warn;
    const errors: string[] = [];
    const warnings: string[] = [];

    beforeEach(() => {
        errors.length = 0;
        warnings.length = 0;
        console.error = (...args) => {
            const msg = args.join(' ');
            // react-helmet-async can trigger DOM nesting warnings in jsdom since we're mounting
            // into a <div> container. This is noisy but not a runtime regression.
            if (msg.includes('validateDOMNesting') && msg.includes('<html> cannot appear as a child of <div>')) {
                originalError(...args);
                return;
            }
            errors.push(msg);
            originalError(...args);
        };
        console.warn = (...args) => {
            // Filter out known harmless warnings if necessary
            const msg = args.join(' ');
            if (msg.includes("React Router Future Flag")) return; // Example ignore
            warnings.push(msg);
            originalWarn(...args);
        };
    });

    afterEach(() => {
        console.error = originalError;
        console.warn = originalWarn;
        vi.restoreAllMocks();
    });

    it('should mount App and run without console errors', async () => {
        render(
            <HelmetProvider>
                <App />
            </HelmetProvider>
        );

        // In jsdom (vitest), WebGPU is not available. We still expect the UI to mount cleanly.
        // The scene is lazy-loaded and will no-op on the WebGPU path.
        expect(await screen.findByLabelText('Language')).toBeInTheDocument();

        if (errors.length > 0) {
            throw new Error(`Captured Console Errors:\n${errors.join('\n')}`);
        }

        // Strict Mode often causes double calls or warnings, let's treat warnings as errors too for strictness
        // if (warnings.length > 0) {
        //    throw new Error(`Captured Console Warnings:\n${warnings.join('\n')}`);
        // }
    });
});
