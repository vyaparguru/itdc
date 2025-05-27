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
        Our Refresher course in Heavy Motor Vehicle (HMV) driving is a short-term training program designed to update and
        enhance the driving skills, road safety awareness, and regulatory knowledge of experienced HMV drivers. These courses
        are especially important for ensuring that professional drivers remain competent, safe, and compliant with current
        traffic laws and vehicle technologies.

        <h2 className="text-xl font-semibold text-gray-800 mt-6"></h2>
        Key Objectives:
        <li>Improve driving skills and techniques for heavy vehicles (trucks, buses, tankers, etc.).</li>
        <li>Update knowledge of the latest traffic rules, road safety norms, and transport regulations.</li>
        <li>Promote defensive driving and accident prevention strategies.</li>
        <li>Enhance awareness of vehicle maintenance, fuel efficiency, and environmental concerns.</li>
        <li>Reinforce responsible behavior, including fitness to drive, stress management, and discipline on the road.</li>
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
        {/* <li>Passed 8th standard</li> */}
        <li>Age above 18 years</li>
        <li>
          Proof of age, address, and driving license should be submitted along
          with the application
        </li>
      </ul>

      {/* Duration */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6">Duration:</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {/* <li>2 Days</li> */}
        <li>10 am to 4 pm Monday to Saturday</li>
        <li>Food and tea etc. will be available on payment basis</li>
      </ul>

      {/* Course Fee */}
      {/* <h2 className="text-xl font-semibold text-gray-800 mt-6">
        Course Fee (NON-REFUNDABLE):
      </h2>
      <p className="text-gray-700">₹ 430 (GST inclusive)</p> */}

      {/* Important Note */}
      <div className="bg-gray-100 p-4 mt-6 rounded-lg">
        <p className="text-gray-700">
          In case of URGENT appointment, you can call us on +91 90560-66473,+91 90560-66373 for Tatkal admissions. You can also hand over the applications in-person at Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801 from 9 A.M to 5 P.M. Please carry copy of Aadhar card, Driving License and two passport size Photos with your Tatkal application.Online registration is NOT REQUIRED for Tatkal.
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
