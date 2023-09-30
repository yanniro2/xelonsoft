import React, { useState } from "react";

function Navigation() {
  const [toggle, setToggle] = useState(false); // Initialize the toggle state as false

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className="w-screen bg-dark-shade fixed top-0 left-0 right-0 z-[1000] shadow ">
      <nav className="container flex justify-between mx-auto items-center text-gray-400  py-3 lg:py-5 px-3  xl:py-5 2xl:py-5">
        <a href="/" className="logo">
          Xelonsoft
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex md:space-x-5 ${
            toggle ? "hidden" : "block"
          }`}>
          <li>
            <a href={"/"} className="a">
              Home
            </a>
          </li>
          <li>
            <a href={"/about"} className="a">
              About
            </a>
          </li>
          <li>
            <a href={"/service"} className="a">
              Services
            </a>
          </li>
          <li>
            <a href={"/contact"} className="a">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {toggle && (
          <ul
            className="md:hidden fixed w-screen h-screen z-[100] top-0 bottom-0 left-0 right-0   flex items-center justify-evenly flex-col backdrop-blur  "
            onClick={toggleMobileMenu}>
            <li className="w-3/4 flex items-center justify-center text-center">
              <a href={"/"} className="a text-black bg-white p-3 w-full">
                Home
              </a>
            </li>
            <li className="w-3/4 flex items-center justify-center text-center">
              <a href={"/about"} className="a text-black bg-white p-3 w-full">
                About
              </a>
            </li>
            <li className="w-3/4 flex items-center justify-center text-center">
              <a href={"/service"} className="a text-black bg-white p-3 w-full">
                Services
              </a>
            </li>
            <li className="w-3/4 flex items-center justify-center text-center">
              <a href={"/contact"} className="a text-black bg-white p-3 w-full">
                Contact
              </a>
            </li>
          </ul>
        )}

        {/* Call Me Button */}
        <button className="btn hidden md:block">Call me</button>
      </nav>
    </header>
  );
}

export default Navigation;
