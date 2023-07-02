// This is the main file for the portfolio website. It is the first file that is run when the website is loaded.
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import the routes
import Navbar from './components/Navbar';
import AboutMe from './components/aboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="adam-day-portfolio">
      <ChakraProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" component={AboutMe} />
            <Route path="/about" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Routes>

          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
