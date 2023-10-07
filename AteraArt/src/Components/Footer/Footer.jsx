import React from "react";
import inst from "../../Images/instagram.png";
import tg from "../../Images/telegram.png";
import wp from "../../Images/whatsapp.png";
import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="about-site">
          <div className="info">
            <p>
              The website was created to realize the author's vision, including:
            </p>
            <ul>
              <li>Implementing SMTPjs for email functionality</li>
              <li>
                Promoting learning in React, SCSS, HTML, and JavaScript (JS)
              </li>
            </ul>
          </div>

          <div className="routs">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutme"
              className={location.pathname === "/aboutme" ? "active" : ""}
            >
              About me
            </NavLink>
            <NavLink
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact Me
            </NavLink>
          </div>
        </div>
        <div className="privet">
          <div className="designed">
            <p>
              Copyright © 2023 All Rights Reserved by: Slyvka Marko
              <span>
                <a href="https://github.com/Chekai1974" target="blank">
                  Chekai1974
                </a>
              </span>
            </p>
          </div>
          <div className="links">
            <p>Links:</p>
            <a href="https://web.telegram.org/k/#@Ss_alexaaa" target="blank">
              <img src={tg} alt="" />
            </a>
            <a href="https://www.instagram.com/atera.art/" target="blank">
              <img src={inst} alt="" />
            </a>
            <a href="https://wa.me/0992775198?text=Привет!" target="blank">
              <img src={wp} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
