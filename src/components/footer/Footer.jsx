import React from "react";
import logo from "../../assets/logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-first">
          <img src={logo} alt="logo" />
          <p>M7PJ+9RW, Kathmandu 44618</p>
        </div>
        <div className="footer-second">
          <div className="text">
            <h2>Links</h2>
            <a>Social Media</a>
            <a>Counters</a>
            <a>contact</a>
          </div>
          <div className="text">
            <h2>Company</h2>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
            <a>Contact</a>
          </div>
          <div className="text">
            <h2>Get in Touch!</h2>
            <a>M7PJ+9RW, Kathmandu 44618</a>
            <a>+977 9860300580</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © Copyright by Laxman Neupane
      </div>
    </div>
  );
};

export default Footer;
