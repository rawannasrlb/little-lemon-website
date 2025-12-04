import React from 'react'

const Nav = () => {
  return (
    <nav className=''>
      <ul className="nav-list flex flex-wrap justify-between font-secondary text-highlight-dark font-bold text-[1rem]">
        <li><a href='/about'>About</a></li>
        <li><a href='/menu'>Menu</a></li>
        <li><a href='/reservation'>Reservation</a></li>
        <li><a href='/order-online'>Order Online</a></li>
        <li><a href='/login'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav
