import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Lorem ipsum dolor siyt amet Magn cotrporis adipiscibnt elit."
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Lorem ipsum dolor siyt amet Magn cotrporis adipiscibnt elit."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum dolor siyt amet Magn cotrporis adipiscibnt elit."
      },
      {
        icon: <FaBeer />,
        title: "Pure Beer",
        info: "Lorem ipsum dolor siyt amet Magn cotrporis adipiscibnt elit."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
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
