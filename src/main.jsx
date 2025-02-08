import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DeploymentGuide from './Steps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <App />
  <DeploymentGuide/>
    </div>
  </StrictMode>,
);
