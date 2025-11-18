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
    { name: "Destinations", path: "/safaris" },
    { name: "Experiences", path: "/experiences" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header
        className={`${montserrat.className} sticky top-0 z-50 bg-[#DCCAB2] text-black backdrop-blur-md shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link href="/">
              <Image
                src="/dark-logo.svg"
                alt="Curated by Ray logo"
                height={40}
                width={80}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-semibold text-sm transition-colors hover:text-[#63581F] ${
                  pathname === item.path ? "text-[#63581F]" : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Global Search Bar - Desktop */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#63581F]/20"
          >
            <input
              type="text"
              placeholder="Search safaris..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-black text-sm placeholder-black/60 outline-none w-40 lg:w-48"
            />
            <button type="submit" className="text-black/70 hover:text-black transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#DCCAB2]/80 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-black"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-black"
            />
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#DCCAB2] border-t border-[#63581F]/20"
          >
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg font-medium text-sm transition-colors ${
                    pathname === item.path
                      ? "bg-[#63581F] text-white"
                      : "text-black hover:bg-[#c5b5a0]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mt-4">
                <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#63581F]/20">
                  <input
                    type="text"
                    placeholder="Search safaris..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent text-black text-sm placeholder-black/60 outline-none"
                  />
                  <button type="submit" className="text-black/70 hover:text-black">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </motion.nav>
        )}
      </header>
    </>
  );
}