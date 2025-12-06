import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Reservation from './pages/Reservation'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      {/* Routes for separate pages */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservation' element={<Reservation/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
