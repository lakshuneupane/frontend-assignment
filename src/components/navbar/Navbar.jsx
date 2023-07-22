import React from "react";
import logo from "./logo.png";

import "./navbar.css";
const Menu = () => {
  return (
    <>
      <p>
        <a href="/">Home</a>
      </p>
      <p>
        <a href="/about">About</a>
      </p>
      <p>
        <a href="/products">Products</a>
      </p>
      <p>
        <a href="/services">Services</a>
      </p>
    </>
  );
};
const Navbar = () => {
  return (
    <div className="vb_navbar">
      <div className="vb_navbar-wrapper">
        <div className="vb_navbar-logo">
          <img src={logo} />
        </div>
        <div className="vb_navbar-menu">
          <Menu />
        </div>
      </div>
      <div className="vb_navbar-login">
        <button><a href="/login">Log in</a></button>
      </div>
    </div>
  );
};

export default Navbar;
