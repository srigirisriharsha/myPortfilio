import { assets } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Header = ({ isDarkMode }) => {
  return (
    <div className="w-full text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
          className="relative flex justify-center w-full mb-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 dark:opacity-30 animate-pulse max-w-[128px] mx-auto aspect-square"></div>
          <Image
            alt="Sri Harsha Srigiri's profile"
            src={assets.profile_img}
            className="rounded-full w-32 ring-4 ring-white dark:ring-gray-700 relative z-10 shadow-xl mx-auto"
          />
        </motion.div>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-800 dark:text-gray-200"
        >
          Hi! I'm Sri Harsha Srigiri
          <Image
            src={assets.hand_icon}
            alt="Waving hand"
            className="w-6 dark:invert"
          />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
        >
          Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="max-w-3xl mx-auto font-Ovo text-gray-600 dark:text-gray-300"
        >
          Software Engineer with 3 years of hands-on experience in building
          responsive, high-performance web applications using React.js, Next.js,
          TypeScript, and JavaScript.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            href="#contact"
            className="group px-10 py-3 border-2 border-gray-900 dark:border-white rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            Contact Me
            <Image
              src={isDarkMode ? assets.right_arrow : assets.right_arrow_white}
              alt="Arrow icon"
              className="w-4 group-hover:invert dark:group-hover:invert-0 transition-all"
            />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            href="/Sri_Harsha_Srigiri_Resume.pdf"
            download
            className="group px-10 py-3 border-2 rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
          >
            Download Resume
            <Image
              src={assets.download_icon}
              alt="Download icon"
              className="w-4 dark:invert transition-all"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
