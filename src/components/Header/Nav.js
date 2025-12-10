import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className="">
      <ul className="nav-list flex flex-wrap justify-between font-secondary text-highlight-dark font-bold text-[1rem]">
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
    </nav>
  );
};

export default Nav;
