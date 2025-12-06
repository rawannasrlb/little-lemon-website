import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg'
import Nav from "./Nav.js";
import "./Header.css"

const Header = () => {
  return (
    <header className='container grid grid-cols-2 items-center py-3 lg:py-5'>
      <Link to="/"><img src={Logo} alt='Little Lemon Logo' className='header-logo' /></Link>
      <Nav/>
    </header>
  )
}

export default Header