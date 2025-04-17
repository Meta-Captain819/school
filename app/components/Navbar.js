"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setlogin] = useState(false)

  useEffect(() => {
  const token1= document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
  
  if (token1) {
    setlogin(true)
    console.log("Token:", token1); 

  } else {
    setlogin(false)
  }
}, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className=" font-bold flex items-center gap-6 text-gray-900">
           <Image src="/ansarlogo.png" alt="School Logo" width={60} height={60} className="rounded-4xl overflow-hidden" />
                    <p className="text-lg text-yellow-400">School Education System</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/feestructure">Fee Structure</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/servic">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href={login ? "/admin":"login"}>{login ? "Admin Panel" :"Admin Login"}</NavLink>
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
              <NavLink href="/feestructure" onClick={() => setIsOpen(false)}>
                Fee Structure
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
              <NavLink  href={login ? "/admin":"login"} onClick={() => setIsOpen(false) }>{login ? "Admin Panel" :"Admin Login"}</NavLink>

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
