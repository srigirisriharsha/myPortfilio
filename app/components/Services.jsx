import Image from "next/image";
import { assets, serviceData } from "../../assets/assets";
import React from "react";

const Services = () => {
  return (
    <div>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I am a MERN stack developer from Hyderabad, India, with 3 years of
          experience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {serviceData.map(({ icon, link, title, description }, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition duration-500"
            >
              <Image src={icon} alt={`${title} icon`} width={40} height={40} />
              <h3 className="text-lg my-4 text-gray-700 font-semibold">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-5">{description}</p>
              <a
                href={link}
                className="flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline"
              >
                Read more
                <Image
                  src={assets.right_arrow}
                  alt="Right arrow"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
