"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { montserrat } from "../fonts";
import { useSearch } from "../context/SearchContext";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery } = useSearch();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pathname !== "/safaris") router.push("/safaris");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Safaris", path: "/safaris" },
    { name: "Book a Trip", path: "/book" },
  ];

  return (
    <header
      className={`${montserrat.className} sticky top-0 z-50 bg-[#DCCAB2] text-black backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <Image
            src="/dark-logo.svg"
            alt="Curated by Ray logo"
            height={20}
            width={40}
          />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="text-black font-semibold text-sm hover:text-[#63581F] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Global Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-2 bg-[#DCCAB2] rounded-lg px-3 py-2 border-2 text-black"
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent text-black text-sm placeholder-black/50 outline-none w-32"
          />
          <button type="submit">
            <svg
              className="w-4 h-4 text-black/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </motion.form>

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
    </header>
  );
}
