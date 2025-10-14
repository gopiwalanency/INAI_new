import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
// import { HelmetProvider } from 'react-helmet';

// Add Helmet provider for better SSR support
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
