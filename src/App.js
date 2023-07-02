// This is the main file for the portfolio website. It is the first file that is run when the website is loaded.
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import the routes
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="adam-day-portfolio">
      <ChakraProvider>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/about" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
