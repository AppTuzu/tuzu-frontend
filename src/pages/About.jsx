import React from "react";
import OurApp from "../components/OurApp";
import FAQ from "../components/FAQ";

const About = () => {
  return (
    <div className="bg-themeBlack">
      <div className="pt-32 pb-16 flex items-center justify-center">
        <div
          className="text-center w-full flex flex-col justify-center gap-5 md:gap-8 items-center text-white py-20 px-7 sm:px-12 md:px-16 "
          style={{
            background:
              "radial-gradient(circle, rgba(32,32,32,0.15) 0%, rgba(115,115,115,0.15) 50%, rgba(12,192,223,0.15) 100%)",
          }}
        >
          <h1 className="font-bold text-5xl">Who are we</h1>
          <p className="text-xl md:text-2xl max-w-4xl">
            We are Tuzu, a dynamic startup dedicated to revolutionizing content
            editing. Our mission is to empower individuals and businesses alike
            by providing intuitive tools and expert support to create
            captivating content. With innovation at our core, we strive to
            redefine the editing experience, making it accessible, efficient,
            and enjoyable for all.
          </p>
        </div>
      </div>
      <FAQ />
      <OurApp />
    </div>
  );
};

export default About;