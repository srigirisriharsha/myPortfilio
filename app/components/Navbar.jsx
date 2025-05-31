import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Header background"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-lg dark:bg-gray-900/80 dark:shadow-gray-800/30"
            : ""
        }`}
      >
        <a href="#top" className="relative z-10">
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">
            Sri Harsha Srigiri <b className="text-red-500">.</b>
          </div>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? ""
              : "bg-white/80 shadow-lg backdrop-blur-sm dark:bg-gray-800/50 dark:shadow-gray-700/30"
          }`}
        >
          {["Home", "About Me", "Services", "My Work", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="font-Ovo text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme toggle icon"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-Ovo"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Navigation arrow"
              className="w-3"
            />
          </a>
          <button
            className="block md:hidden ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu icon"
              className="w-6"
            />
          </button>
        </div>
        <div
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out"
        >
          <button
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu icon"
              className="w-5 cursor-pointer"
            />
          </button>
          {["Home", "About Me", "Services", "My Work", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-Ovo text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
