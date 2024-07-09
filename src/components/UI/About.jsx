// About.jsx

import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h2>About CheersAI</h2>
            <p>
              Hey! We're a team passionate about mental health and technology. Here’s our story:
            </p>

            <h3>Our Story</h3>
            <p>
              We saw people close to us struggling with anxiety and lacking support. So, we created CheersAI: a free, accessible, and user-friendly mental health platform.
            </p>

            <h3>Our AI Therapist</h3>
            <p>
              Our AI therapist offers 24/7 support. You can chat and call with it, and it remembers everything about you, providing personalized care whenever you need it.
            </p>

            <h3>Our Motto</h3>
            <p>
              Our motto, "Made for those that struggle," reflects our commitment to inclusivity. Everyone deserves access to mental health resources, regardless of gender, religion, race, or ethnicity. CheersAI will always be free, forever.
            </p>

            <h3>Our Mission</h3>
            <p>
              Our true mission is to make an impact. That’s why we started CheersAI and why we’ll continue to innovate. Every signup helps us move closer to that goal.
            </p>

            <p>
              If you have ideas, feedback, or just want to chat, email us, connect on LinkedIn, or visit our portfolio.
            </p>

            <p>
              Thank you,<br />
              The CheersAI Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
