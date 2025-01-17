import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
<Navbar/>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    {/* Footer */}
    <footer
      style={{
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        // marginTop: '20px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, 
      }}
    >
      © 2025 Damian Paz V. Todos los derechos reservados.
    </footer>
  </Router>
);

export default App;
