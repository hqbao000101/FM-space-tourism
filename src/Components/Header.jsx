import React from "react";
import { NavLink } from "react-router-dom";
import Group2 from "../assets/icons/Group 2.png";

const Header = () => {
  return (
    <header>
      <img src={Group2} alt="Group 2 Logo" />
      <hr />
      <nav>
        <NavLink to="/">
          <div className="nav_text active">
            <span>00</span>
            Home
          </div>
        </NavLink>
        <NavLink to="/destination">
          <div className="nav_text">
            <span>01</span>
            Destination
          </div>
        </NavLink>
        <NavLink to="/crew">
          <div className="nav_text">
            <span>02</span>
            Crew
          </div>
        </NavLink>
        <NavLink to="/technology">
          <div className="nav_text">
            <span>03</span>
            Technology
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
