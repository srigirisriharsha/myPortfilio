import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sri-harsha-srigiri/",
    },
    { name: "Facebook", url: "https://www.facebook.com/sriharsha.srigiri.7" },
    { name: "Instagram", url: "https://www.instagram.com/sri_harsha_srigiri/" },
    { name: "X", url: "https://x.com/SrigiriSri" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Sri Harsha Srigiri <b className="text-red-500">.</b>
          </div>
          <a
            href="mailto:srigirisriharsha@gmail.com"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets?.mail_icon}
              alt="Email"
              className="w-6"
            />
            srigirisriharsha@gmail.com
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Sri Harsha Srigiri. All rights reserved
            </p>
            <ul className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
