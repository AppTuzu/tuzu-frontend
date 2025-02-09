import React from "react";
import OurApp from "../components/OurApp";
import FAQ from "../components/FAQ";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope  } from "react-icons/fa";

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
      <div className="py-16 flex flex-col items-center justify-center gap-5 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Have more queries?</h2>
          <h3 className="text-3xl font-semibold">Contact us</h3>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Button icon={<IoLogoWhatsapp />} title={"Chat with us"} />
          <Button icon={<FaEnvelope  />} title={"Write to us"} />
        </div>
      </div>
      <OurApp />
    </div>
  );
};

const Button = ({icon, title}) => {
  return (
    <button className="bg-themeYellow text-black w-64 px-8 py-3 text-lg rounded-lg justify-center flex items-center gap-3 font-semibold cursor-pointer hover:scale-[102%] hover:shadow-lg shadow-themeYellow/30 active:scale-99 transition-all duration-300">
      {icon}
      {title}
    </button>
  );
}

export default About;
