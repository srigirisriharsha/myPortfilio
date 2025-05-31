import Image from "next/image";
import { assets, workData } from "../../assets/assets";
import React from "react";
import { motion } from "motion/react";
const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      id="work"
      className="w-full py-10 scroll-mt-20 dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
        >
          Professional Experience
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center text-5xl font-Ovo dark:text-white"
        >
          Work History
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300"
        >
          Software Engineer with expertise in React.js, Next.js, and modern web
          technologies, focused on building responsive and high-performance
          applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {workData.map((experience, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15 }}
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {experience.duration}
                    </p>
                    <div className="hidden sm:block text-gray-400">•</div>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <Image
                        src={
                          isDarkMode
                            ? assets.project_icon_dark
                            : assets.project_icon
                        }
                        alt="Location"
                        width={16}
                        height={16}
                      />
                      {experience.location}
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={isDarkMode ? assets.code_icon_dark : assets.code_icon}
                    alt="Company icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
