import React from "react";
import footerLogo from './assets/images/footer-logo.png'

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 justify-between text-center">
      <img
        src={footerLogo}
        alt="Little Lemon Footer Logo"
      />
      <ul className="footer-links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservation">Reservation</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
