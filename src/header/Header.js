/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ZVLogo from "../../src/assets/images/ZVLogo.jpg";

const Header = () => {
  return (
    <header className="main_header_class">
      <div className="main_logo_portfolio">
        <Link>
          <img src={ZVLogo} alt="" className="zv_logo_main" />
        </Link>
      </div>
      <div className="inner_header_class">
        <nav className="nav_main">
          <ul className="nav_inner">
            <li className="list_name">
              <span className="header_line">
                <Link to="/home" className="list_name_portfolio">
                  Home
                </Link>
              </span>
            </li>
            <li className="list_name">
              <span className="header_line">
                <Link to="/about" className="list_name_portfolio">
                  About
                </Link>
              </span>
            </li>
            <li className="list_name">
              <span className="header_line">
                <Link to="/project" className="list_name_portfolio">
                  Project
                </Link>
              </span>
            </li>
            <li className="list_name">
              <span className="header_line">
                <Link to="/services" className="list_name_portfolio">
                  Services
                </Link>
              </span>
            </li>
            <li className="list_name">
              <span className="header_line">
                <Link to="/contact" className="list_name_portfolio">
                  Contact
                </Link>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
