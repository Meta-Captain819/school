"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, FlaskConical, Palette, Music, Dumbbell } from "lucide-react";

const services = [
  {
    title: "Quality Education",
    description: "We provide top-notch education with a well-structured curriculum and experienced teachers.",
    icon: <BookOpen size={40} />,
  },
  {
    title: "Sports & Athletics",
    description: "Encouraging students to participate in various sports and physical activities.",
    icon: <Dumbbell size={40} />,
  },
  {
    title: "Science Labs",
    description: "Well-equipped laboratories for hands-on scientific experiments and research.",
    icon: <FlaskConical size={40} />,
  },
  {
    title: "Arts & Creativity",
    description: "Dedicated art classes to nurture creativity and artistic expression.",
    icon: <Palette size={40} />,
  },
  {
    title: "Music & Performing Arts",
    description: "Opportunities for students to explore their musical and performing arts skills.",
    icon: <Music size={40} />,
  },
  {
    title: "Student Counseling",
    description: "Providing emotional and academic guidance for a healthy school environment.",
    icon: <Users size={40} />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522111608460-19e7331e00fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="text-center text-white backdrop-blur-xs bg-opacity-50 px-8 py-6 rounded-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold ">Our Services</h1>
          <p className="text-lg md:text-xl mt-2 ">Providing excellence in education and extracurricular activities.</p>
        </motion.div>
      </motion.div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="bg-yellow-400 text-white p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
