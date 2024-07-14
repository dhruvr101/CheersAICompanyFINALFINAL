import React, { useState } from "react";
import "../../components/styles/newsletter.css";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Logic for subscribing can go here
    // For now, just toggle the popup
    setSubscribed(true);

    // Reset subscribed state after 3 seconds (simulating a reset)
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Let's work</h6>
            <h2>
              Explore the <span className="highlight">hidden</span> ideas and
              subscribe!
            </h2>
          </div>

          <div className="newsletter__form">
            <input type="email" placeholder="Email" />
            <button className="secondary__btn subscribe__btn" onClick={handleSubscribe}>
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      {subscribed && (
        <div className="popup">
          <p>Thank you for subscribing!</p>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
