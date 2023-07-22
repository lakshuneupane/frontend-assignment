import React from "react";
import bg from "../../assets/bg.png";

import "./header.css";

const Homepage = () => {
  return (
    <div className="vb_home">
        <div className="vb_home-content">
          <h2>
            Virtual<span className="gradient__text">Vibe</span>
          </h2>
          <h3>
            An Online <span>Shopping Store</span>...
          </h3>
          <p>
            Welcome you all to the VirtualVibe get a best product at <br />
            <span>Best Price</span>
          </p>
        </div>
        <div className="vb_home-image">
          <div>
            <img src={bg} alt="bg" />
          </div>
        </div>
    </div>
  );
};

export default Homepage;
