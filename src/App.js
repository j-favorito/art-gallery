import React, { Fragment } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}>
      <div className="background-image" style={{ ...background }}>
        <NavbarRouter />
        <Switch>
          <Route exact path="/art-gallery" component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route exact path={process.env.PUBLIC_URL + '/gallery'} component={Gallery} />
          <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
          <Route exact path={process.env.PUBLIC_URL + '/checkout'} component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
