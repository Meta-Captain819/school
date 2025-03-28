"use client";

import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.jpg')" }}
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
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg md:text-xl mt-2">We’re here to help and answer your queries.</p>
        </motion.div>
      </motion.div>

      {/* Contact Details & WhatsApp Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* School Contact Information */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col space-y-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">📍 School Information</h2>
            <div className="flex items-center space-x-6">
              <MapPin size={28} className="text-yellow-400" />
              <p className="text-gray-700">28D, 6th Road, Satellite Town, Rawalpindi, Pakistan</p>
            </div>
            <div className="flex items-center space-x-6">
              <PhoneCall size={28} className="text-yellow-400" />
              <p className="text-gray-700">0333-5552471 | 0334-5822151</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail size={28} className="text-yellow-400" />
              <p className="text-gray-700">AnsaareMuhammad82@gmail.com</p>
            </div>
          </motion.div>

          {/* WhatsApp Contact Section */}
          <motion.div
            className="shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "white",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaWhatsapp size={50} />
            <h2 className="text-3xl font-bold mt-4">💬 Chat with Us on WhatsApp</h2>
            <p className="text-lg mt-2">Need instant help? Click below to chat with us on WhatsApp.</p>
            <Link href="https://api.whatsapp.com/send?phone=%2B923335552471&context=AfcZaiNzRW2_hrWMxfGL-GjDXjEoLy_vnx_81TaIUn1N4HjC1E3ehkB8A473thZT4z093BCyNDkcfV11jU0yQ55X_V54aOegs_oOgRtxS5pv7Wm8oLUB-BD_VfwERK-QQO2oWRyxIHI6yJc755NP7Xl0mQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJSYNFleHRuA2FlbQIxMAABHfbt6Ir9Q0kXSxjrfvENy2EzfxsGQkWc2HYSBjfg6tL21BeMz003AHeEow_aem_YMZw5WsZIE7ut3PqHGuNlg" target="_blank">
              <motion.button
                className="mt-4 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-200 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaWhatsapp className="inline-block mr-2" size={20} />
                Chat Now
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
