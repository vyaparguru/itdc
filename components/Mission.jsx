"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import image6 from "/public/banner3.jpg";

const Mission = () => {
    const router = useRouter();

    const handleApplyNowClick = () => {
        router.push("/courses");
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-12 bg-white pt-12 md:pt-0 pb-20 md:pb-0">
                <div className="flex flex-col items-center md:items-start md:flex-row w-full max-w-7xl mx-auto md:px-16">
                    <div className="md:w-2/3 text-left md:pr-10 mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-4">
                            Introducing Refresher Course <span className="text-[#800000]"> in Heavy Motor Vehicle Driving</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            In case of URGENT appointment, you may apply for Tatkal by emailing an application to
                            info@itdcpunjab.com. You can also hand over the applications in-person at Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801 from 9 A.M to 5 P.M. Fees for Tatkal class is Rs 2000/- which is
                            collected in CASH at the time of class. Please mention your phone number and attach a copy of Aadhar card
                            and Driving License in your Tatkal application. <b>Online registration is NOT REQUIRED for Tatkal.</b>
                        </p>
                        <button
                            onClick={handleApplyNowClick}
                            className="bg-[#800000] text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300"
                        >
                            Apply Now
                        </button>
                    </div>
                    <div className="md:w-1/2 relative flex justify-center md:justify-end">
                        <Image
                            src={image6}
                            alt="Mission Image 6"
                            className="w-96 h-68 md:h-[400px] object-cover shadow-xl rounded-lg"
                            style={{ zIndex: 10 }}
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Mission;