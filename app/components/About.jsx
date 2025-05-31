import { assets, infoList, toolsData } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      id="about"
      className="w-full py-16 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center text-5xl font-Ovo font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="w-64 sm:w-80 rounded-3xl relative group mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 dark:opacity-30 group-hover:opacity-25 dark:group-hover:opacity-40 transition-opacity"></div>
            <Image
              src={assets.user_image}
              alt={"user"}
              className="w-full rounded-3xl relative z-10 ring-4 ring-white/50 dark:ring-gray-700/50 shadow-xl mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="flex-1"
          >
            <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate and accomplished software engineer with over 3 years
              of experience in building web and desktop applications. Proficient
              in creating intuitive user interfaces with HTML, CSS, and
              Bootstrap. Skilled in using modern development tools like Visual
              Studio Code, and experienced in version control systems including
              Git, SVN, and Bitbucket. Adept at collaborating in Agile
              environments with tools like Jira, and passionate about delivering
              clean, maintainable code and seamless user experiences.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30 group transition-all"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
              Tools I use
            </h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex items-center gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-700/30 transition-all duration-300"
                >
                  <Image
                    src={tool}
                    alt={"Tool"}
                    className="w-5 sm:w-7 dark:invert"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
