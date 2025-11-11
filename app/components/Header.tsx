"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { manrope, montserrat } from "../fonts";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Safaris", path: "/safaris" }, { name: "Book a Trip", path: "/book-a-trip" }];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <header className={`${montserrat.className} sticky top-0 z-50 bg-black/65 backdrop-blur-md border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <Image src="/light-logo.svg" alt="Curated by Ray white logo" className="text-2xl font-bold text-white" height={20} width={40} />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <motion.a
              key={i}
              href={`${item.path.toLowerCase().replace(" ", "-")}`}
              custom={i}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ color: "#fbbf24", transition: { duration: 0.2 } }}
              className="text-white text-sm font-medium hover:text-amber-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 border border-white/20"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white text-sm placeholder-white/50 outline-none w-32"
          />
          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white"
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/80 border-t border-white/10"
      >
        <nav className="px-4 py-4 flex flex-col gap-4">
          {menuItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.path.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 4 }}
              className="text-white text-sm font-medium hover:text-amber-400"
            >
              {item.name}
            </motion.a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/50 outline-none border border-white/20"
            />
          </div>
        </nav>
      </motion.div>
    </header>
  );
}