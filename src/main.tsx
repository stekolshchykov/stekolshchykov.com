import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installGlobalErrorLogging, logRuntime } from './observability/logger';
import { StrictMode } from 'react';

installGlobalErrorLogging();
logRuntime('info', 'bootstrap', 'App bootstrap started');

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
);
