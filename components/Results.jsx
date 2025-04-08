"use client";

import React from "react";
import CountUp from "react-countup";

const Results = () => {
  return (
    <div className="bg-white py-5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 ">
          <div>
            <span className="text-4xl md:text-5xl font-extrabold text-gray-800">
              <CountUp end={3} duration={2} />
              <span className="text-[#800000]">+</span>
            </span>
            <p className="text-gray-600">Trained Instructors</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-extrabold text-gray-800">
              <CountUp end={24} duration={2} />
              <span className="text-[#800000]">/7</span>
            </span>
            <p className="text-gray-600">Support for students </p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-extrabold text-gray-800">
              <CountUp end={100} duration={2} />
              <span className="text-[#800000]">%</span>
            </span>
            <p className="text-gray-600">Certified</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-extrabold text-gray-800">
              <CountUp end={200} duration={2} />
              <span className="text-[#800000]">+</span>
            </span>
            <p className="text-gray-600">Daily Learners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;