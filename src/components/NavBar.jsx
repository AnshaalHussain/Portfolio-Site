import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-800 text-gray-300">
      <div>
        <h2>Anshaal Hussain</h2>
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="md:hidden z-10">
        <FaBars />
      </div>

      {/* Mobile Menu */}
      <ul className="absolute top-0 left-0 w-full h-screen bg-blue-800 flex flex-col justify-center items-center">
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
