"use client";

import React from "react";
import Image from "next/image";
import image5 from "/public/about.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[65vh] bg-gray-100 px-6 md:px-0 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center md:px-16">
          <div className="md:w-3/5 mb-8 md:mb-0 ">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-5">
              Welcome to <span className="text-[#800000]">Jalandhar Institute Of Drivers Training</span>
            </h2>
            <p className="text-gray-600">
            Jalandhar Institute of Drivers Training is a government-approved driver training institution dedicated to providing high-quality driving education and skill development. Located in Kartarpur Distt. Jalandhar, we specialize in professional driver training for all types of heavy vehicles. Our expert instructors, modern training methods, and emphasis on road safety ensure that learners gain the confidence and competence needed for responsible driving. Whether you are a beginner or seeking advanced training, we are committed to shaping skilled and law-abiding drivers.
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