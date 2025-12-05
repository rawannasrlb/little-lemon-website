import React from "react";
import footerLogo from "../../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark/30">
      <div className="container grid grid-cols-2 lg:grid-cols-4 justify-between text-center gap-10 py-[10vw]">
        <div className="order-4 lg:order-1">
          <img
            src={footerLogo}
            alt="Little Lemon Footer Logo"
            className="w-[25%] lg:w-[50%]"
          />
        </div>
        {/* Navigation links */}
        <div className="order-1 lg:order-2 flex flex-col text-start gap-5 ">
          <h3 className="text-primary-dark">Navigation</h3>
          <ul className="footer-links flex flex-col gap-2 lg:gap-4">
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
        </div>
        {/* Contact links */}
        <div className="order-2 lg:order-3 flex flex-col text-start gap-5">
          <h3 className="text-primary-dark">Contact</h3>
          <ul className="footer-links flex flex-col gap-2 lg:gap-4">
            <li>
              <a href="/">Location</a>
            </li>
            <li>
              <a href="/">Phone Number</a>
            </li>
            <li>
              <a href="/">Email Address</a>
            </li>
          </ul>
        </div>
        {/* Social links */}
        <div className="order-3 lg:order-4 col-span-2 lg:col-span-1 flex flex-col text-start gap-5">
          <h3 className="text-primary-dark">Socials</h3>
          <ul className="footer-links flex flex-col gap-2 lg:gap-4">
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
        {/* copyrights for mobile */}
        <div className="order-5 col-span-1 lg:col-span-4 flex items-center justify-start lg:hidden">
          <p className="italic">2025 © Little Lemon</p>
        </div>
      </div>
      {/* copyrights for desktop */}
        <div className="lg:pb-10 lg:flex lg:items-center lg:justify-center hidden lg:block">
          <p className="italic">2025 © Little Lemon</p>
        </div>
    </footer>
  );
};

export default Footer;
