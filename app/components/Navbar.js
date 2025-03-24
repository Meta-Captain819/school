"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center gap-6 text-gray-900">
           <Image src="https://plus.unsplash.com/premium_photo-1710672205278-9a24775844be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="School Logo" width={60} height={60} className="rounded-4xl overflow-hidden" />
                    <p className="text-lg text-yellow-400">School of Excellence</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/servic">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full"
          >
            <div className="flex flex-col space-y-4">
              <NavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </NavLink>
              <NavLink href="/servic" onClick={() => setIsOpen(false)}>
                Services
              </NavLink>
              <NavLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ href, children, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-900 font-medium cursor-pointer"
    onClick={onClick}
  >
    <Link href={href}>{children}</Link>
  </motion.div>
);

export default Navbar;
