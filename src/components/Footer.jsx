import React from "react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer_links1 = [
    {
      title: "About us",
      link: "/about",
    },
    {
      title: "Contact us",
      link: "/contact-us",
    },
    {
      title: "Our app",
      link: "",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
  ];

  const footer_links2 = [
    {
      title: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms and conditions",
      link: "/terms-and-conditions",
    },
    {
      title: "Refund and cancellation policy",
      link: "/refund-and-cancellation-policy",
    },
  ];

  return (
    <div className="bg-themeBlack text-white w-full px-20 lg:px-32 xl:px-48 py-16 border-t border-t-themeBlue/30 flex flex-col md:flex-row justify-between gap-8">
      <div className="flex flex-col gap-3">
        {footer_links1.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="cursor-pointer hover:text-[#81b5be] pl-2 md:pl-0"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {footer_links2.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="cursor-pointer hover:text-[#81b5be] pl-2 md:pl-0"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col w-32 gap-1">
        <Link to="/">
          <img
            src="./logo.png"
            alt="Tuzu Logo"
            className="w-32 cursor-pointer"
          />
        </Link>
        <div className="flex justify-between px-3">
          <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
            <FaYoutube className="cursor-pointer hover:text-[#81b5be]" />
          </a>
          <a href="https://www.linkedin.com/company/tuzu-app/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="cursor-pointer hover:text-[#81b5be]" />
          </a>
          <a href="https://www.instagram.com/tuzu_app/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-[#81b5be]" />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
            <FaXTwitter className="cursor-pointer hover:text-[#81b5be]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
