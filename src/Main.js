import React from "react";
import Banner from "./components/Main/Banner.js";
import Specials from "./components/Main/Specials.js";
import "./components/Main/Main.css";
import Reviews from "./components/Main/Reviews.js";
import About from "./components/Main/About.js";

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
