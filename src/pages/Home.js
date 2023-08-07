import React, { useRef } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import About from "../components/About";
import Contact from "../components/Contact";
import { Element } from "react-scroll";

export default function Home() {
  const ref = useRef(null);
  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero>
        <Banner
          title="Beach Apartments"
          subtitle="Modern & Stylish Apartments perfect for family vacation"
        >
          <button onClick={scrollTo} className="btn-primary">
            Our Apartments
          </button>
        </Banner>
      </Hero>
      <About />
      <Services />
      <div ref={ref}>
        <FeaturedRooms />
      </div>
      <Element name="ContactSection">
        <Contact />
      </Element>
    </>
  );
}
