import React from 'react'
import Logo from './assets/images/Logo.svg'
import Nav from "./Nav.js";

const Header = () => {
  return (
    <header className='grid grid-cols-2 items-center'>
      <img src={Logo} alt='Little Lemon Logo' className='header-logo' />
      <Nav/>
    </header>
  )
}

export default Header