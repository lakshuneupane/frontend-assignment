import React from "react";

import "./home.css";
import Homepage from "../../components/homepage/Header";
import Arrival from "../../components/homepage/Arrival";


const Home = () => {
  return (
    <div className="home">
        <Homepage />
        <Arrival />
    </div>
  );
};

export default Home;
