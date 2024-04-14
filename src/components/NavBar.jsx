import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOnMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="flex w-full justify-between items-center fixed top-0 z-20">
      <div className="w-full flex justify-between items-center sm:px-16 px-6 py-5 bg-metal">
        <p className="font-roboto text-cream font-bold text-2xl">
          Nathan Van Utrecht
        </p>
        <ul className="hidden sm:flex gap-9 items-center font-roboto text-light_gold text-lg font-medium">
          <li className="hover:text-cream transition-all duration-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-cream transition-all duration-500 cursor-pointer">
            <a href="#work">Work</a>
          </li>
          <li className="hover:text-cream transition-all duration-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="sm:hidden">
          {menuVisible ? (
            <IoMenuOutline
              className="text-light_gold text-4xl hover:text-cream transition-all duration-500 cursor-pointer"
              onClick={handleOnMenuClick}
            />
          ) : (
            <IoCloseSharp
              className="text-light_gold text-4xl hover:text-cream transition-all duration-500 cursor-pointer"
              onClick={handleOnMenuClick}
            />
          )}

          {!menuVisible && (
            <div className="absolute top-20 right-0 p-6 mx-4 my-2 bg-gray rounded-xl min-w-[200px]">
              <ul className="flex flex-col gap-4 font-roboto text-light_gold text-lg font-medium">
                <li className="hover:text-cream transition-all duration-500 cursor-pointer">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-cream transition-all duration-500 cursor-pointer">
                  <a href="#work">Work</a>
                </li>
                <li className="hover:text-cream transition-all duration-500 cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
