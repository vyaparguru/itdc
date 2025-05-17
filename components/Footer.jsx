"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "/public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-black py-6 md:py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-9 w-full md:w-1/2">
            <div>
              <Link href="/" className="text-xl font-bold">
                <Image src={logo} alt="logo" width={360} height={16} />
              </Link>
            </div>
            <p className="text-md mt-2">
            Jalandhar Institute of Drivers Training is a government-approved driver training institution dedicated to providing high-quality driving education and skill development. 
            </p>
          </div>
          <nav className="mb-0 md:mb-0 w-full md:w-1/3 flex flex-col md:items-center">
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
            <div className=" flex flex-col gap-1 space-y-4 mt-6 md:mt-0 md:mb-8">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#800000] mr-2" />
                <span>
                Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-[#800000] mr-2" />
                <span>+91 90560-66473,+91 90560-66373  </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#800000] mr-2" />
                <span>info@itdcpunjab.com </span>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div>
                  <Link
                    href="/register"
                    className="bg-[#800000] text-white px-4 mt-12 md:mt-0 py-2 rounded-md w-40 text-center"
                  >
                    Apply Now
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.facebook.com/people/Hoshiarpur-Institute-of-Automotive-and-Driving-Skills/100091049582544/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#800000] text-2xl "
                  >
                    <FaFacebook size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-center md:text-left text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-[#800000]">ITDC.</span> All rights reserved | Website Developed by{" "}
            <Link
              href="https://vyaparguru.com"
              className="text-black"
              target="_blank"
            >
              <span className="text-[#800000]">Vyapar Guru Infotech Pvt. Ltd.</span>
            </Link>
          </p>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/refund-and-cancellation" className="hover:underline">
              Refund and Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;