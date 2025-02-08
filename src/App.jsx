import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ModelContext } from "./context/ModelContext";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";

const App = () => {
  const { isModalOpen, toggleModal } = useContext(ModelContext);

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="font-poppins overflow-x-hidden selection:bg-themeYellow selection:text-themeBlue">
      
      <Navbar />

      <AnimatePresence>
      {/* modeal */}
      {isModalOpen && (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}} className="fixed inset-0 w-full h-screen bg-themeBlue/7 z-50 px-8 backdrop-blur-[2px]" onClick={toggleModal}>

          <motion.div initial={{y: -450, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -300, opacity: 0}} transition={{ duration: 0.5, type: 'spring', damping: 10 }} className="bg-themeBlack rounded-3xl border-2 border-themeBlue/40 text-white flex flex-col gap-5 justify-center items-center px-5 sm:px-10 lg:px-14 py-9 md:py-12 w-full max-w-2xl mx-auto mt-20 relative" onClick={(e) => e.stopPropagation()}>

            <IoMdClose onClick={toggleModal} className="absolute right-5 top-4 text-3xl md:top-5 md:right-7 cursor-pointer hover:bg-zinc-600 rounded-full p-0.5 hover:scale-105" />
            <h2 className="text-2xl font-bold">Stay Tuned</h2>
            <p className="text-center font-light">Get ready for a game-changing social media content editing app! Our product is in the works, promising seamless editing and unmatched creativity. Stay tuned for exclusive updates.</p>
            <div className="flex gap-8 items-center justify-center">
              <img src='../src/assets/android-logo.png' alt="Google Play Store Logo" className="w-36"/>
              <img src='../src/assets/apple-logo.png' alt="App Store Logo" className="w-36"/>
            </div>
            
          </motion.div>

        </motion.div>
      )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </div>
  );
};

export default App;
