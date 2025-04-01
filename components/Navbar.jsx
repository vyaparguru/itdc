"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 py-2 shadow-md fixed top-0 left-0 w-full z-40">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="logo" width={250} height={10} />
          </Link>
        </div>

        <div className="flex items-center space-x-4 pr-4 md:pr-0">
        <div className="hidden md:flex space-x-6 pt-3">
          <Link href="/" className="pb-2">
            Home
          </Link>
          <Link href="/about" className="pb-2">
            About Us
          </Link>
          <Link href="/courses" className="pb-2">
            Courses
          </Link>
          <Link href="/gallery" className="pb-2">
            Gallery
          </Link>
          <Link href="/contact" className="pb-2">
            Contact Us
          </Link>
        </div>
          <Link
            href="/courses"
            className="hidden md:inline-block bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Apply Now
          </Link>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <div
              className={`block w-6 h-0.5 bg-black mb-1 transform transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`block w-6 h-0.5 bg-black mb-1 transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 focus:outline-none"
        >
          ✕
        </button> */}
        <div className="flex py-2 px-10">
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="logo" width={250} height={10} />
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4 pb-1 text-gray-800 px-4">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/courses" onClick={toggleMenu}>
            Courses
          </Link>
          <Link href="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link
            href="/donate"
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full text-center"
            onClick={toggleMenu}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;