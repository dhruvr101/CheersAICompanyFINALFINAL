import React from "react";
import "../styles/hero.css";

import heroDarkImg from "../images/hero-img.png";
import lightImg from "../../components/images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  return (
    <section className="hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>Introducing</h2>
              <h2></h2>
              <h2 className="highlight">Next-Gen Therapy</h2>
            </div>
            <p className="description">
              Chat and Call with an AI Therapist that <span className="gradient-text">remembers you</span>.
              <br />
              24/7 <span className="gradient-text">Personalized</span> and <span className="gradient-text">Science-backed</span> support.
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Get Started For Free</button>
             
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
