"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, ClipboardCheck } from "lucide-react";
import PixelCard from "../elements/PixelCard";


export default function SchoolInfo() {
  return (
    <div className="w-full grid-cols-2 md:grid overflow-hidden">
      {/* First Section: School Classes */}

      <motion.section
        className="w-full py-20  flex flex-col justify-center items-center  bg-gray-100 text-center"
        initial={{ opacity: 0.3,x:-100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileDrag={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0,}}
      >
      <PixelCard variant="yellow">
        <div className="max-w-6xl mx-auto absolute z-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
            <GraduationCap size={40} className="text-blue-600" />
            School Classes
          </h2>
          <p className="text-gray-600 mt-3">
            We offer a structured curriculum for students of all ages.
          </p>
          <ul className="mt-6 text-lg text-gray-700 space-y-3">
            <li>📘 Kindergarten - Grade 2</li>
            <li>📗 Grade 3 - Grade 5</li>
            <li>📙 Middle School - Grade 6 - Grade 8</li>
            <li>📕 High School - Grade 9 - Grade 10</li>
            <li>🎭 Special Programs & Extracurricular Activities</li>
          </ul>
        </div>
      </PixelCard>
      </motion.section>

      {/* Second Section: Admissions Open */}
      <motion.section
        className="w-full relative py-20 px-6 bg-blue-600 text-white text-center flex items-center justify-center overflow-hidden cursor-pointer"
        initial={{ opacity: 0.3,x:100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileDrag={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0,}}
      >
        <Image
          src="https://images.unsplash.com/photo-1554042317-efd62f19bc95?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Admissions Open"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 hover:scale-105 transition-all duration-300"
          />
        <div className=" relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold flex items-center justify-center gap-3">
            <ClipboardCheck size={40} />
            Admissions Open!
          </h2>
          <p className="mt-3 text-xl  font-bold">
            Secure your child’s future by enrolling now in our premier school.
          </p>
          <motion.button
            className="mt-6 cursor-pointer bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply Now
          </motion.button>
        </div>
        
      </motion.section>
    </div>
  );
}
