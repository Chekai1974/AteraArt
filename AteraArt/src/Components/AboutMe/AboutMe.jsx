import React from "react";
import Footer from "../Footer/Footer";
import SashaPhoto from "../../Images/HomePagePhoto/AboutMeSasha.JPG";
import { useNavigate } from "react-router-dom";
function AboutMe() {
  const navigator = useNavigate();
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-content">
          <p id="since">
            I are incredibly happy that you are here! Since 2022, i have been
            capturing love stories, and to this day we wouldn’t want to do
            anything else! Love brought us together, and now we complement each
            other in capturing love.
          </p>
          <div className="sasha-info">
            <img src={SashaPhoto} alt="" />
            <div className="line"></div>
            <div className="info-text">
              <h2>
                Oleksanrda Cherniuk <br /> PHOTOGRAPHER & VIDEOGRAPHER
              </h2>
              <p>
                Hi there! I'm Ilhame After growing up in Mechelen, studying Law
                in Brussels, and pursuing photography courses in Antwerp, I now
                live in Heist-op-den-Berg with my first love and since 2019, my
                husband!. I enjoy coffee on a cozy terrace, whether it's with
                friends or by myself. Traveling brings me happiness. I thrive on
                meeting new people and find peace during a walk in a park or
                even a busy shopping street . The passion I have for my work is
                big, so much so that I decided to put away my Law degree and
                fully dedicate myself to my passion, which is capturing love. I
                simply can't imagine doing anything else. My goal is to create
                vibrant, touching, and unique images. For me, photography means
                capturing fleeting moments as well as the reality of a dream.
                Together with Fouad, we give our all to provide our couples with
                a unique experience!
              </p>
            </div>
          </div>
          <div className="contact-us">
            <h2>I CAN'T WAIT TO MEET YOU</h2>
            <p>
              Every story is exceptional;we want
              <br /> to capture your love in a unique way
            </p>
            <button
              className="contact-btn style2"
              onClick={() => navigator("/contact")}
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
