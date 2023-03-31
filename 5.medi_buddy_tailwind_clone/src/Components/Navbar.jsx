/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LOGO from "../assets/MediBuddyLogo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center max-w-screen-2xl m-auto p-4">
        <div>
          <img src={LOGO} alt="logo" className="w-28 sm:w-36  sm:h-11 h-9" />
        </div>
        <ul>
          <li className="text-[#1778F2] text-xs sm:text-sm font-bold">
            <a href="" className="cursor-pointer ">
              About Us
            </a>
            <a href="" className="cursor-pointer ml-7">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
