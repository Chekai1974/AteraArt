import React, { useState } from "react";
import logo from "../../Images/logo.png";
import logo_burger from "../../Images/HomePagePhoto/logo_burger.png";
import { NavLink, useLocation } from "react-router-dom";
function Navigation() {
  const [burger, set_burger] = useState(false);
  const location = useLocation();
  let pageTitle = "";

  switch (location.pathname) {
    case "/":
      pageTitle =
        "BELGIUM BASED INTERNATIONAL WEDDING PHOTOGRAPHER & VIDEOGRAPHER for couples madly in love";
      break;
    case "/aboutme":
      pageTitle = "The Paper Crown Team Nice to meet you!";
      break;
    case "/contact":
      pageTitle =
        "I booked this talented couple together with my wife for our wedding photography & videography";
      break;
    default:
      pageTitle = "Navigation";
      break;
  }
  return (
    <div className={`nav-container ${burger && "active"}`}>
      <div className="nav-content">
        <div className="navigation">
          <img src={logo} id="logo" alt="" />
          <div className="burger-logo" onClick={() => set_burger(!burger)}>
            <img src={logo_burger} alt="" />
          </div>
          <div className="routs">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => set_burger(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="aboutme"
              className={location.pathname === "/aboutme" ? "active" : ""}
              onClick={() => set_burger(false)}
            >
              About me
            </NavLink>
            <NavLink
              to="contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => set_burger(false)}
            >
              Contact Me
            </NavLink>
          </div>
        </div>
        <div className="title">
          <p>{pageTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
