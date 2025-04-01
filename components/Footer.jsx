"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "/public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-black py-0 md:py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-9 w-full md:w-1/2">
            <div>
            <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="logo" width={250} height={10} />
          </Link>
            </div>
            <p className="text-md mt-2">
            Hoshiarpur Institute of Automotive and Skill Driving Society is registered under the Societies Registration Act (XXI of 1960) and as amended by Punjab Government Act.1957.
            </p>
          </div>
          <nav className="mb-8 md:mb-0 w-full md:w-1/3 flex flex-col md:items-center">
            <ul className="flex flex-col space-y-2 text-md">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:underline">
                 Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-full md:w-1/2 text-start">
            <div className="flex flex-col gap-1 space-y-4 mt-10 md:mt-0 mb-8">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                <span>Red Cross Building, Bazar Vakilan, Hoshiarpur, Punjab</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-red-500 mr-2" />
                <span>9056500975, 9056500976, 9056500977  </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-red-500 mr-2" />
                <span>hiadshoshiarpur@gmail.com </span>
              </div>
              <div className="flex gap-6">
              <Link
                href="/courses"
                className="bg-red-500 hover:bg-red-700 text-white px-4 mt-10 md:mt-0 py-2 rounded-md w-40 text-center"
              >
                Apply Now
              </Link>
              <Link
                  href="https://www.facebook.com/people/Hoshiarpur-Institute-of-Automotive-and-Driving-Skills/100091049582544/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700 text-2xl"
                >
                  <FaFacebook size={30}/>
                </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-center md:text-left text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HIADS. All rights reserved | Website Developed by Vyapar Guru Infotech Pvt. Ltd.
          </p>
          {/* <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/refund-and-cancellation" className="hover:underline">
              Refund and Cancellation
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;