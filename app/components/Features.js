"use client"
import { motion } from "framer-motion";

const features = [
  { title: "Smart Classrooms", description: "Equipped with modern technology for better learning." },
  { title: "Experienced Faculty", description: "Highly qualified teachers with years of experience." },
  { title: "Sports & Activities", description: "A variety of extracurricular activities for students." },
  { title: "Library & Labs", description: "Advanced library and science labs for research." },
];

export default function Features() {
  return (
    <section className="h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
