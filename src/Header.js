import React from 'react'
import Logo from './assets/images/Logo.svg'
const Header = () => {
  return (
    <header>
      <img src={Logo} alt='Little Lemon Logo' className='header-logo' />
    </header>
  )
}

export default Header
