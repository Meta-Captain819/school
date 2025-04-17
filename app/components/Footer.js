"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-400">Our School</h2>
          <p className="text-gray-400">
           School Education System offers a perfect blend of academic excellence and Islamic values, shaping confident and successful individuals.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-400">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "about", "servic", "contact"].map((link, index) => (
              <li key={index}>
                <Link href={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 transition duration-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Details */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-400">Contact Us</h2>
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center gap-2"><MapPin className="text-yellow-400" />28D, 6th Road, Lahore, Pakistan</p>
            <p className="flex items-center gap-2"><Phone className="text-yellow-400" /> 0334-0000000 | 0333-0000000</p>
            <p className="flex items-center gap-2"><Mail className="text-yellow-400" /> School@gmail.com</p>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-400">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><Instagram size={24} /></a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
        <p>© {new Date().getFullYear()} School Education System. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
