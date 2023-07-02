// This is the main file for the portfolio website. It is the first file that is run when the website is loaded.
import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  return (
    <div className="adam-day-portfolio">
      <ChakraProvider>
        <Navbar currentPath={currentPath} />

        {currentPath === '/' && <AboutMe />}
        {currentPath === '/about' && <AboutMe />}
        {currentPath === '/resume' && <Resume />}
        {currentPath === '/portfolio' && <Portfolio />}
        {currentPath === '/contact' && <Contact />}

        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;