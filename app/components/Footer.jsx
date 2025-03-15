import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="text-2xl">
          Sri Harsha Srigiri <b className="text-red-500">.</b>
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets?.mail_icon} alt="" className="w-6" />
          srigirisriharsha@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Sri Harsha Srigiri. All rights reserved</p>
        <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sri-harsha-srigiri/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sriharsha.srigiri.7"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sri_harsha_srigiri/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/SrigiriSri"
            >
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
