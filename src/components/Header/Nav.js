import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=''>
      <ul className="nav-list flex flex-wrap justify-between font-secondary text-highlight-dark font-bold text-[1rem]">
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><a href='#order-online'>Order Online</a></li>
        <li><a href='#login'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav
