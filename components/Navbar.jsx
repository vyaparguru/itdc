"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import logo from "/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => pathname === path ? "border-b-2 border-[#800000]" : ""; // Active link class

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
            <Link href="/" className={`pb-2 ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/about" className={`pb-2 ${isActive("/about")}`}>
              About Us
            </Link>
            <Link href="/courses" className={`pb-2 ${isActive("/courses")}`}>
              Courses
            </Link>
            <Link href="/gallery" className={`pb-2 ${isActive("/gallery")}`}>
              Gallery
            </Link>
            <Link href="/contact" className={`pb-2 ${isActive("/contact")}`}>
              Contact Us
            </Link>
          </div>
          <Link
            href="/apply"
            className="hidden md:inline-block bg-[#800000] text-white px-4 py-2 rounded-md"
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

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-100 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-68 bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="flex py-2 px-2">
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="logo" width={250} height={10} />
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4 pb-1 text-gray-800 px-4">
          <Link href="/" className={isActive("/")} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about")} onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/courses" className={isActive("/courses")} onClick={closeMenu}>
            Courses
          </Link>
          <Link href="/gallery" className={isActive("/gallery")} onClick={closeMenu}>
            Gallery
          </Link>
          <Link href="/contact" className={isActive("/contact")} onClick={closeMenu}>
            Contact Us
          </Link>
          <Link
            href="/apply"
            className="bg-[#800000] text-white px-4 py-2 rounded-md w-full text-center"
            onClick={closeMenu}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;