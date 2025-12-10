import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react"; // optional icons

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="lg:hidden relative">
      {/* Hamburger icon */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light "
        aria-label="Toggle menu"
      >
         <Menu size={24} />
      </button>

      {/* Mobile menu */}

      <div
        className={`fixed top-0 right-0 h-full w-3/5 p-5 shadow-lg transform transition-transform duration-300 lg:hidden bg-primary-dark border-l-4 border-highlight-light
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="float-right p-1 rounded-md text-white focus:ring-2 focus:ring-primary-light"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X size={26} />
        </button>
        <ul className="flex flex-col gap-10 mt-20 text-white font-bold pl-2">
          <li>
            <HashLink smooth to="/#about" onClick={toggleMenu}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#menu" onClick={toggleMenu}>
              Menu
            </HashLink>
          </li>
          <li>
            <Link to="/reservation" onClick={toggleMenu}>
              Reservation
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#order-online" onClick={toggleMenu}>
              Order Online
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#login" onClick={toggleMenu}>
              Login
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
