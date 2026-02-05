import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installGlobalErrorLogging, logRuntime } from './observability/logger';
import { StrictMode } from 'react';
import * as Sentry from "@sentry/browser";

installGlobalErrorLogging();
logRuntime('info', 'bootstrap', 'App bootstrap started');

// Initialize GlitchTip/Sentry
Sentry.init({
    dsn: "http://f5252e35da6842b8ab7fcc187a1e5566@45.88.106.237:4001/3",
    environment: import.meta.env.MODE, // 'development' or 'production'
    tracesSampleRate: 0.2,
    beforeBreadcrumb(breadcrumb) {
        if (
            breadcrumb.category === 'console' &&
            typeof breadcrumb.message === 'string' &&
            breadcrumb.message.includes('GPU stall due to ReadPixels')
        ) {
            return null;
        }
        if (
            breadcrumb.category === 'console' &&
            typeof breadcrumb.message === 'string' &&
            breadcrumb.message.includes('WebGL context lost')
        ) {
            breadcrumb.level = 'warning';
        }
        return breadcrumb;
    },
});

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
);
