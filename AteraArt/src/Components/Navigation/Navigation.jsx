import React from "react";
import logo from "../../Images/logo.png"
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navigation() {
  const location = useLocation();
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="navigation">
          <img src={logo} alt="" />
          <div className="routs">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </NavLink>
            <NavLink
              to="aboutme"
              className={location.pathname === "/aboutme" ? "active" : ""}
            >
              About me
            </NavLink>
            <NavLink
              to="albums"
              className={location.pathname === "/albums" ? "active" : ""}
            >
              Albums
            </NavLink>
            <NavLink
              to="booking"
              className={location.pathname === "/booking" ? "active" : ""}
            >
              Booking
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
