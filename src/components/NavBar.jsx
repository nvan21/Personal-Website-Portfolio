import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOnMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="flex w-full justify-between items-center fixed top-0 z-20">
      <div className="w-full flex justify-between items-center sm:px-16 px-6 py-5 bg-black">
        <p className="font-main text-primary_text font-bold text-2xl">
          Nathan Van Utrecht
        </p>
        <ul className="hidden sm:flex gap-9 items-center font-main text-secondary_text text-lg font-medium">
          <li className="hover-default">
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li className="hover-default">
            <AnchorLink href="#work">Work</AnchorLink>
          </li>
          <li className="hover-default">
            <AnchorLink href="#projects">Projects</AnchorLink>
          </li>
          <li className="hover-default">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
        <div className="sm:hidden">
          {!menuVisible ? (
            <IoMenuOutline
              className="text-secondary_text text-4xl hover-default"
              onClick={handleOnMenuClick}
            />
          ) : (
            <IoCloseSharp
              className="text-secondary_text text-4xl hover-default"
              onClick={handleOnMenuClick}
            />
          )}

          {menuVisible && (
            <div className="absolute top-20 right-0 p-6 mx-4 my-2 bg-secondary rounded-xl min-w-[200px]">
              <ul className="flex flex-col gap-4 font-main text-secondary_text text-lg font-medium">
                <li className="hover-default">
                  <AnchorLink href="#about">About</AnchorLink>
                </li>
                <li className="hover-default">
                  <AnchorLink href="#work">Work</AnchorLink>
                </li>
                <li className="hover-default">
                  <AnchorLink href="#projects">Projects</AnchorLink>
                </li>
                <li className="hover-default">
                  <AnchorLink href="#contact">Contact</AnchorLink>
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
