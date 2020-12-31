import React, { Fragment } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from './components/navtabs/NavTabs';
import Checkout from './components/checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Background from './images/purp-background.jpg';
import { withRouter } from "react-router";

const background = {
  backgroundImage: `url(${Background})`
};

const NavbarRouter = withRouter(NavTabs);

function App() {
  return (
    <Router>
      <div className="background-image" style={{ ...background }}>
        <NavbarRouter />
        <Fragment>
          <Route path="/art-gallery" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/checkout" exact component={Checkout} />
        </Fragment>
      </div>
    </Router>
  );
}

export default App;
