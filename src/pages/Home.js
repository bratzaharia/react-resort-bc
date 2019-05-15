import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

Hero.defaultProps = {
  hero: "defaultHero"
};
