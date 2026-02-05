import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { installGlobalErrorLogging, logRuntime } from './observability/logger';

installGlobalErrorLogging();
logRuntime('info', 'bootstrap', 'App bootstrap started');

createRoot(document.getElementById('root')!).render(<App />);
  
