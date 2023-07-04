// This is the main file for the portfolio website. It is the first file that is run when the website is loaded.
import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Home from './components/Home';


function App() {
  const [currentPath] = useState(window.location.pathname);
  const location = useLocation();

useEffect(() => {
  console.log('location changed to ' + location.pathname);
}, [location]);

  return (
    <div className="adam-day-portfolio">
      <ChakraProvider>
        <Navbar currentPath={currentPath} />
        {currentPath === '/' && <Home />}
        {location.pathname === '/about' && <AboutMe />}
        {location.pathname === '/resume' && <Resume />}
        {location.pathname === '/portfolio' && <Portfolio />}
        {location.pathname === '/contact' && <Contact />}
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;