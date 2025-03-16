import Image from "next/image";
import { assets, serviceData } from "../../assets/assets";
import React from "react";
import { motion } from "motion/react";
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am a MERN stack developer from Hyderabad, India, with 3 years of
        experience.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5"
      >
        {serviceData.map(({ icon, link, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={`${title} icon`} width={40} height={40} />
            <h3 className="text-lg my-4 text-gray-700 font-semibold dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">
              {description}
            </p>
            <a
              href={link}
              className=" dark:text-white flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline"
            >
              Read more
              <Image
                src={assets.right_arrow}
                alt="Right arrow"
                width={16}
                height={16}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
