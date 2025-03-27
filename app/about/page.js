"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full">
      
      {/* Hero Section */}
      <section className="relative h-[800px] md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div 
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">About Our School</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            Dedicated to excellence in education, fostering growth, and inspiring young minds.
          </p>
        </motion.div>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        
        <motion.div 
          className="bg-yellow-400 text-white p-6 md:p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Mission</h2>
          <p className="text-base md:text-lg">
            To provide high-quality education that nurtures creativity, critical thinking, and lifelong learning.
          </p>
        </motion.div>

        <motion.div 
          className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Vision</h2>
          <p className="text-base md:text-lg text-gray-700">
            To be a leader in innovative education, preparing students for success in a dynamic world.
          </p>
        </motion.div>
      </section>
          </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Our School?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Experienced Faculty", desc: "Highly qualified teachers dedicated to student success." },
              { title: "Modern Facilities", desc: "State-of-the-art classrooms, labs, and sports facilities." },
              { title: "Holistic Learning", desc: "Focusing on academics, arts, and extracurriculars." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={40} className="text-yellow-400 mb-3" />
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
