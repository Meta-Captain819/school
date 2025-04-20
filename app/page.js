"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SchoolInfo from "./components/SchoolInfo";
import Testimonials from "./components/Testimonials";
import { BookOpen, UserCheck, Users, Star, Shield, Globe } from "lucide-react";

const services = [
  {
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to foster intellectual growth and critical thinking.",
    icon: <BookOpen size={40} className="text-blue-600" />,
  },
  {
    title: "Islamic Values Integration",
    description: "Education infused with Islamic teachings to develop moral and ethical individuals.",
    icon: <UserCheck size={40} className="text-green-600" />,
  },
  {
    title: "Experienced Educators",
    description: "Dedicated and qualified teachers committed to student success.",
    icon: <Users size={40} className="text-purple-600" />,
  },
  {
    title: "Holistic Development",
    description: "Focus on both academic and personal growth to shape well-rounded individuals.",
    icon: <Star size={40} className="text-red-600" />,
  },
  {
    title: "Safe Learning Environment",
    description: "Ensuring a secure and supportive atmosphere conducive to learning.",
    icon: <Shield size={40} className="text-pink-600" />,
  },
  {
    title: "Community Engagement",
    description: "Encouraging active participation in community service and social responsibility.",
    icon: <Globe size={40} className="text-yellow-600" />,
  },
];

export default function Home() {
  return (
    <>
    <div className="relative w-full h-screen grid md:grid-cols-2 grid-cols-1  items-center px-20 md:gap-72">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // Make sure you have this image in the public folder
          alt="School Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Content Section */}
      <div className="relative  text-white ">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale:0.95 }}
          animate={{ opacity: 1, y: 0, scale:1 }}
          transition={{ duration: 0.9 }}
          className="flex gap-6 items-center rounded-2xl"
        >
          {/* <Image src="https://plus.unsplash.com/premium_photo-1710672205278-9a24775844be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="School Logo" width={120} height={120} className="rounded-4xl overflow-hidden" /> */}
          <p className="text-5xl mt-24 md:mt-3 text-yellow-400 text-wrap "> School Education System</p>
        </motion.div>

        {/* Heading & Paragraph Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:mt-12 mt-2"
        >
          <h1 className="text-4xl md:text-6xl font-bold hidden md:block">
            Welcome to Our School
          </h1>
          <p className="text-lg md:text-xl md:mt-3 max-w-2xl">
           School Education System offers a perfect blend of academic excellence and Islamic values, shaping confident and successful individuals.          </p>
        </motion.div>
     
      </div>
      <motion.div 
      className="relative w-full max-w-md md:max-w-lg bg-white/30 backdrop-blur-xs shadow-lg rounded-2xl p-6 md:p-8 text-center border border-white/40"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
        Admissions Open for 2025!
      </h2>
      
      
      {/* Apply Now Button */}
      <motion.a 
        href="/admission" 
        className="mt-4 inline-block px-6 py-3 text-sm md:text-base font-semibold bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Now
      </motion.a>
    </motion.div>
      
    </div>

{/* Services Section */}
<section className="relative w-full py-16 px-6 text-center">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/photo-1516053256215-94022213b13c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add your background image to public folder
      alt="Services Background"
      layout="fill"
      objectFit="cover"
    />
  </div>

  {/* Content with relative positioning */}
  <div className="relative z-10">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-black" // Changed text color to white
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileDrag={{opacity:0, y:100}}
      whileInView={{opacity:1, y:5}}
    >
      Our Services
    </motion.h2>
    <p className="text-gray-800 mt-2 max-w-xl mx-auto"> {/* Lighter text color */}
      We provide a wide range of services to ensure quality education and student growth.
    </p>

    {/* Services Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md flex flex-col items-center text-center" // Added backdrop blur
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileDrag={{opacity:0, y:100}}
          whileInView={{opacity:1, y:5, scale:1}}
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<SchoolInfo />
<p className="w-full py-0.5 bg-gray-400"></p>

<Testimonials />
     </>
  );
}
