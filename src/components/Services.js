import React, { Component } from "react";
import Title from "./Title";
import { FaShoppingBasket, FaSun, FaParking, FaMountain } from "react-icons/fa";

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaSun />,
        title: "Right next to the beach!",
        info: "Just one minute walking distance to the beach!",
      },
      {
        icon: <FaParking />,
        title: "Private Parking!",
        info: "Outdoor private parking right in front of the apartment complex.",
      },
      {
        icon: <FaMountain />,
        title: "Great location!",
        info: "Amazing view of the green hills of Thassos.",
      },
      {
        icon: <FaShoppingBasket />,
        title: "Market Nearby!",
        info: "Great little mini-market right behind the building with amazing groceries and all the necessities.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.Services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
