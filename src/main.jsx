import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Import the App component
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <App /> {/* App component contains routing and page structure */}

    </BrowserRouter>

  </StrictMode>
);
