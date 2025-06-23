import React from "react";
import { motion } from "framer-motion";

const Loading = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-themeBlack">
        <motion.div
            className="w-14 h-14 border-4 border-gray-300 border-t-4 border-t-themeBlue rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <p className="mt-6 text-gray-500 text-lg">Loading...</p>
    </div>
);

export default Loading;
