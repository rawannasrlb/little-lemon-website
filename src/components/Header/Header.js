import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Nav from "./Nav.js";
import "./Header.css"

const Header = () => {
  return (
    <header className='container grid grid-cols-2 items-center py-5'>
      <img src={Logo} alt='Little Lemon Logo' className='header-logo' />
      <Nav/>
    </header>
  )
}

export default Header