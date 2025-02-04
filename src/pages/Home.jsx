import React from "react";
import OurApp from "../components/OurApp";
import { Button } from "../components/Buttons";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className=""> {/* Navbar 80px */}
      <HeroSection />
      <OurApp />
    </div>
  );
};

export default Home;
