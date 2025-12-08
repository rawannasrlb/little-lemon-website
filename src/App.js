import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import ConfirmedBooking from "./components/Reservation/ConfirmedBooking";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow">
        {/* Routes for separate pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
