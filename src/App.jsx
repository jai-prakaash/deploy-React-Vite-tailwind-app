import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing
import Navbar from './Navbar'; // Import Navbar component
import HomePage from './Home'; // Import Home page component
import AboutPage from './About'; // Import About page component
import ContactPage from './Contact'; // Import Contact page component
import DeploymentGuide from './Steps'; // Import DeploymentGuide component

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be visible on all pages */}

      <Routes>
        <Route path="/" element={<><HomePage /><DeploymentGuide /></>} />        {/* Home page with DeploymentGuide */}
        <Route path="/about" element={<AboutPage />} />  {/* About page route */}
        <Route path="/contact" element={<ContactPage />} /> {/* Contact page route */}
      </Routes>
    </Router>
  );
}

export default App;
