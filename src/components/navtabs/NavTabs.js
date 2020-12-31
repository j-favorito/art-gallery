import React from "react";
import { NavLink } from "react-router-dom";
import './NavTabs.css'

function NavTabs() {
  return (
      <ul className="nav nav-tabs nav-bar">
        <li className="nav-item">
          <NavLink to="/art-gallery" exact className="nav-link nav-text">
            Home
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link nav-text">
            About Artist
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className="nav-link nav-text">
            Gallery
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link nav-text">
            Contact
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/checkout" className="nav-link nav-text">
            Checkout
        </NavLink>
        </li>
      </ul>
  );
}

export default NavTabs;