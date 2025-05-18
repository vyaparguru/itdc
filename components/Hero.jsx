"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// import image1 from "/banner1.jpg";
// import image2 from "/banner2.jpg";
// import image3 from "/banner3.jpg";

const slides = [
  { id: 1, image: "/banner4.jpg" },
  { id: 2, image: "/banner1.jpg" },
  { id: 3, image: "/banner3.jpg" },
  // { id: 3, image: "/banner3.jpg" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDonateNowClick = () => {
    router.push("/donate"); 
  };

  return (
    <>
      <div className="relative flex items-center justify-center h-[calc(70vh)] sm:h-[70vh] md:h-[65vh] lg:h-[70vh] xl:h-[85vh]">
        <AnimatePresence>
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              exit={{ opacity: 0 }}
            >

            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-0 ml-4 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-0 mr-4 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        >
          &gt;
        </button>

        <div className="absolute bottom-4 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>


    </>
  );
};

export default HeroSection;