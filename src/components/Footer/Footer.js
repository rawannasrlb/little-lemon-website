import React from "react";
import footerLogo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-primary-dark/30">
      <div className="container grid grid-cols-2 lg:grid-cols-4 justify-between text-center gap-10 py-[10vw] lg:py-[6vw]">
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
          <ul className="footer-links flex flex-col gap-2 lg:gap-4 text-[#686868]">
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#menu">
                Menu
              </HashLink>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <HashLink smooth to="/#order-online">
                Order Online
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#login">
                Login
              </HashLink>
            </li>
          </ul>
        </div>
        {/* Contact links */}
        <div className="order-3 lg:order-3 col-span-2 lg:col-span-1 flex flex-col text-start gap-5">
          <h3 className="text-primary-dark">Contact</h3>
          <ul className="footer-links flex flex-col gap-2 lg:gap-4">
            <li className="flex items-center gap-3 text-[#686868]">
              <i className="fa-solid fa-location-dot fa-sm text-primary-dark"></i>
              <a href="/">Location</a>
            </li>
            <li className="flex items-center gap-3 text-[#686868]">
              <i className="fa-solid fa-phone fa-sm text-primary-dark"></i>
              <a href="/">+1 00000 000 0</a>
            </li>
            <li className="flex items-center gap-3 text-[#686868]">
              <i className="fa-solid fa-envelope fa-sm text-primary-dark"></i>
              <a href="/">support@littlelemon</a>
            </li>
          </ul>
        </div>
        {/* Social links */}
        <div className="order-2 lg:order-4 flex flex-col text-start gap-5">
          <h3 className="text-primary-dark">Socials</h3>
          <ul className="footer-links flex gap-3 lg:gap-5">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-md text-[#686868] hover:text-highlight-light"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-md text-[#686868] hover:text-highlight-light"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter fa-md text-[#686868] hover:text-highlight-light"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok fa-md text-[#686868] hover:text-highlight-light"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* copyrights for mobile */}
        <div className="order-5 col-span-1 lg:col-span-4 flex items-center justify-start lg:hidden">
          <p className="italic">2025 © Little Lemon</p>
        </div>
      </div>
      {/* copyrights for desktop */}
      <div className="lg:pb-10 lg:flex lg:items-center lg:justify-center hidden">
        <p className="italic">2025 © Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
