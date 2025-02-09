import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Import the App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* App component contains routing and page structure */}
  </StrictMode>
);
