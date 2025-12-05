import React from "react";
import Banner from "./Banner.js";
import Specials from "./Specials.js";
import "./Main.css";
import Reviews from "./Reviews.js";
import About from "./About.js";

const Main = () => {
  return (
    <main className="grid grid-col-1">
      <div className="grid grid-col-1">
        <Banner />
        <Specials />
      </div>
      <Reviews />
      <About />
    </main>
  );
};

export default Main;
