import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Import the App component
import { BrowserRouter } from 'react-router-dom'; // Routing

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Set the basename to the subdirectory where the app is deployed */}
    <BrowserRouter basename="/deploy-React-Vite-tailwind-app">
      <App /> {/* App component contains routing and page structure */}
    </BrowserRouter>
  </StrictMode>
);
