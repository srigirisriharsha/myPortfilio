import Image from "next/image";
import { assets, serviceData, toolsData } from "../../assets/assets";
import React from "react";
import { motion } from "motion/react";
const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      id="services"
      className="w-full py-10 scroll-mt-20 dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
        >
          Professional Expertise
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center text-5xl font-Ovo font-bold dark:text-white"
        >
          Core Competencies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
        >
          Full Stack Developer specializing in modern web technologies with a
          proven track record of delivering scalable solutions and leading
          development teams.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceData.map(({ icon, link, title, description }, index) => (
            <motion.div
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.15 }}
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-8 cursor-pointer hover:shadow-lg dark:hover:shadow-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <Image
                src={icon}
                alt={`${title} icon`}
                width={40}
                height={40}
                className="dark:invert"
              />
              <h3 className="text-lg my-4 font-semibold text-gray-800 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
              {link && (
                <a
                  href={link}
                  className="flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Learn more
                  <Image
                    src={
                      isDarkMode ? assets.right_arrow_white : assets.right_arrow
                    }
                    alt="Right arrow"
                    width={16}
                    height={16}
                  />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-Ovo font-semibold text-center mb-8 text-gray-800 dark:text-white">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {toolsData.map((tool, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                key={index}
                className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-800/30 border border-gray-200 dark:border-gray-700"
              >
                <Image
                  src={tool}
                  alt="Development tool"
                  width={32}
                  height={32}
                  className="dark:invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
