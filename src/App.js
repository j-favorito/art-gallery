import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/navtabs/NavTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Background from './images/background.jpg';

const background = {
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <>
      <Router>
        <div className="background-image" style={{ ...background }}>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </>
  );
}

export default App;
