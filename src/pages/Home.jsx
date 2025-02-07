import React from "react";
import OurApp from "../components/OurApp";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <div className="bg-themeBlack"> {/* Navbar 80px */}
      <HeroSection />
      <ServiceSection />
      <OurApp />
    </div>
  );
};

export default Home;
