import React from "react";

import "../styles/counter.css";

const counterData = [
  {
    number: "4k",
    text: "Users",
  },
  {
    number: "$3000",
    text: "Funded",
  },
  {
    number: "10k",
    text: "Chats Completed",
  },
];

const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div className="counter__item" key={index}>
              <h3 className="counter__number">{item.number}</h3>
              <h4 className="counter__title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
