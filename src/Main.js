import React from "react";
import Banner from "./components/Main/Banner.js";
import "./components/Main/Main.css";

const Main = () => {
  return (
    <main>
      <div className="bg-primary-dark">
        <Banner />
      </div>
    </main>
  );
};

export default Main;
