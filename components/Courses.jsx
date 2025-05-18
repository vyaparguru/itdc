"use client"

import Link from "next/link";

const RefresherCourse = () => {
    return (
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-48 py-16 md:py-20 mt-16 md:mt-20 bg-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-5">
              Refresher Course <span className="text-[#800000]">For HMV Drivers</span>
            </h2>
  
        {/* Course Image */}
        <img
          src="/courses.jpg"
          alt="Course Image"
          className="w-full h-80 object-cover mt-4 rounded-lg"
        />
  
        {/* Course Description */}
        <p className="text-gray-700 mt-4">
          The objective of the course is to develop a fresh cadre of high-quality
          drivers to meet the demand of the transport industry and make local
          youths employable by adopting skill development in HMV driving private
          and government jobs where driving is a pre-requisite.
        </p>
  
        {/* Course Includes */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          This course includes:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>General Introduction to Vehicle, Motor Vehicle Act</li>
          <li>Legal awareness</li>
          <li>Environmental Educational (Pollution etc.)</li>
          <li>Attitude & body language</li>
          <li>Traffic rules & signs</li>
          <li>First aid</li>
          <li>Different paper related to vehicles</li>
          <li>Fire precautions & seat belt</li>
          <li>Necessities of different assemblies of all (types) motor vehicles</li>
        </ul>
  
        {/* Eligibility Criteria */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          Eligibility Criteria:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Passed 8th standard</li>
          <li>Age above 18 years</li>
          <li>
            Proof of age, address, and driving license should be submitted along
            with the application
          </li>
        </ul>
  
        {/* Duration */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Duration:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>2 Days</li>
          <li>10 am to 4 pm Monday to Saturday</li>
          <li>Food and tea etc. will be available on payment basis</li>
        </ul>
  
        {/* Course Fee */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          Course Fee (NON-REFUNDABLE):
        </h2>
        <p className="text-gray-700">₹ 430 (GST inclusive)</p>
  
        {/* Important Note */}
        <div className="bg-gray-100 p-4 mt-6 rounded-lg">
          <p className="text-gray-700">
            In case of URGENT appointment, you may apply for Tatkal by emailing an
            application to{" "}
            <a
              href="mailto:jaldrivingcenter@gmail.com"
              className="text-[#800000] underline"
            >
              jaldrivingcenter@gmail.com
            </a>
            . You can also hand over the applications in-person at Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801 from 9 A.M to 5  P.M
            Fees for Tatkal cases is Rs 2000/- which is collected in CASH at the
            time of class. Please mention your phone number and attach a copy of
            Aadhaar card and Driving License in your Tatkal application.
          </p>
        </div>
  
        {/* Apply Button */}
        <Link href="/register" className="flex justify-center text-center mt-6">
          <button className="bg-[#800000] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    );
  };
  
  export default RefresherCourse;
  