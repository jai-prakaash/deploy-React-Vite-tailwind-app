import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Routing
import About from './pages/Aboutme';
import Article from './pages/Article';
import Home from './pages/Home';
import DeploymentGuide from './Steps';

function App() {
  return (
    <>
      <header>
        <h1> Hello Everyone </h1>
      </header>

      <nav>
        <ul>
          <li> <Link to="/home">Home</Link> </li>
          <li> <Link to="/article">Articles</Link> </li>
          <li> <Link to="/aboutme">About Me</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<DeploymentGuide />} /> {/* Default page */}
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/aboutme" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
