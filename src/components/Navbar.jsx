import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {NavButton} from './Buttons'

const HamburgerMenu = () => {
  return (
    <nav className="flex justify-between items-center sm:px-14 px-6 py-4 bg-[radial-gradient(circle,_#2d2d2d,_#202020)]">
      {/* [radial-gradient(circle,_#2d2d2d,_#202020)]" */}
      {/* bg-radial from-[#202020] to-[#2d2d2d] */}
      <div>
        <img src="./logo.png" alt="Tuzu Logo" className="w-32 cursor-pointer" />
      </div>

      <div className="flex items-center justify-center">
        <div className="hidden lg:flex items-center font-light gap-12">
          <Link to={"/about"} className="text-white text-lg group">
            About us 
            <div className="w-0 h-[2px] bg-white/70 origin-left group-hover:w-full transition-all duration-500" />
          </Link>

          <p className="text-white text-lg group cursor-pointer">Our app
            <div className="w-0 h-[2px] bg-white/70 origin-left group-hover:w-full transition-all duration-500" />
          </p>

          <NavButton />

        </div>

        <div className="lg:hidden">
          <Icon />
        </div>
      </div>
    </nav>
  );
};

const Icon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      onClick={toggleMenu}
      initial={{ borderRadius: "8px" }}
      animate={{ borderRadius: isOpen ? "100%" : "8px" }}
      // transition={{duration: 0.5, ease: "linear", delay: 0}}
      className={`bg-zinc-600 ${isOpen ? "px-2" : "px-3"} py-1 cursor-pointer`}
    >
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 23 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          initial={{ x1: 1, y1: 1, x2: 22, y2: 1 }}
          animate={{
            x1: isOpen ? 4 : 1,
            y1: isOpen ? 1 : 1,
            x2: isOpen ? 18 : 22,
            y2: isOpen ? 13 : 1,
          }}
          x1="1"
          y1="1"
          x2="22"
          y2="1"
          stroke="#202020"
          strokeWidth="2"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          strokeLinecap="round"
        />
        <motion.line
          initial={{ x1: 1, y1: 7, x2: 22, y2: 7 }}
          animate={{
            x1: isOpen ? 11 : 1,
            y1: isOpen ? 7 : 7,
            x2: isOpen ? 11 : 22,
            y2: isOpen ? 7 : 7,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          x1="1"
          y1="7"
          x2="22"
          y2="7"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.line
          initial={{ x1: 1, y1: 13, x2: 22, y2: 13 }}
          animate={{
            x1: isOpen ? 4 : 1,
            y1: isOpen ? 13 : 13,
            x2: isOpen ? 18 : 22,
            y2: isOpen ? 1 : 13,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          x1="1"
          y1="13"
          x2="22"
          y2="13"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default HamburgerMenu;
