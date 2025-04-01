"use client";

import React from "react";
import Image from "next/image"; // Use Next.js Image component
import image4 from "/public/banner1.jpg";
import image5 from "/public/banner2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[65vh] bg-gray-100 pb-[5.5rem] px-6 md:px-0 pt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center md:px-16">
          <div className="md:w-3/5 mb-8 md:mb-0 ">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-5">
              Welcome to <span className="text-red-600">Hoshiarpur Institute of Automotive & Driving Skills</span>
            </h2>
            <p className="text-gray-600">
            Hoshiarpur Institute of Automotive and Skill Driving Society is registered under the Societies Registration Act (XXI of 1960) 
            and as amended by Punjab Government Act.1957. Institute of Automotive and Driving Skills Hoshiarpur will be a milestone comfort 
            for all Punjab, especially for the Majha and Doaba region candidates. This facility is the second in the state of Punjab.
            </p>
          </div>

          <div className="md:w-2/5 flex justify-center items-center relative">
            <Image
              src={image5}
              alt="image4"
              className="object-cover rounded-lg shadow-lg"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;