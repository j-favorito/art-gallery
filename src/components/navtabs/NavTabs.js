import React from "react";
import { NavLink } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap'
import './NavTabs.css'

function NavTabs(props) {
  const {location}=props;
  return (
<Navbar className="nav-bar" expand="lg">
  <Navbar.Brand className="nav-text" href="https://j-favorito.github.io/art-gallery/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" activeKey={location.pathname}>
      <Nav.Link className="nav-text" href="https://j-favorito.github.io/about">About Artist</Nav.Link>
      <Nav.Link className="nav-text" href="https://j-favorito.github.io/gallery">Gallery</Nav.Link>
      <Nav.Link className="nav-text" href="https://j-favorito.github.io/contact">Contact</Nav.Link>
      <Nav.Link className="nav-text" href="https://j-favorito.github.io/checkout">Checkout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavTabs;

