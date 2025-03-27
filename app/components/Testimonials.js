"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Student",
    feedback:
      "This school has transformed my learning experience. The teachers are outstanding!",
    image: "https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ali Rehman",
    role: "Student",
    feedback:
      "I love my school! The extracurricular activities and teaching methods are best.",
    image: "https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Ahmed",
    role: "Parent",
    feedback:
      "The staff is very cooperative, and my child feels safe and happy at school.",
    image: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-22 px-6 bg-gray-100 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Students & Parents Say
      </motion.h2>
<div className="max-w-6xl mx-auto"> 

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          
        }}
        className="h-72"
      >
        {testimonials.map((testimony, index) => (
            <SwiperSlide key={index}>
            <motion.div
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimony.image}
                      alt={testimony.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-gray-700 italic">{testimony.feedback}</p>
                  <h3 className="text-xl font-semibold mt-4 text-black">{testimony.name}</h3>
                  <p className="text-yellow-400 font-medium">{testimony.role}</p>
                </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </section>
  );
}


