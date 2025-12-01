"use client";

import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { manrope } from "../fonts";
import { Menu, X } from "lucide-react";

export default function FloatingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const {query, setQuery} = useSearch();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/safaris" },
    { name: "Experiences", path: "/experiences" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname !== "/safaris") router.push("/safaris");
  };

  return (
    <header
      className={`${manrope.className} fixed top-0 left-0 right-0 z-50 bg-[#DCCAB2] backdrop-blur-md shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-32 h-10">
            <Image src="/dark-logo.svg" alt="Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-semibold text-sm transition-colors ${pathname === item.path ? "text-[#63581F]" : "text-black"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
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
        </form>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-black/80 hover:text-black transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU - FLOATING */}
      {isMenuOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen w-screen"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "modal-overlay") setIsMenuOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl shadow-xl w-4/5 max-w-sm p-6 flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center py-3 px-4 rounded-lg font-semibold text-lg transition-colors
                  ${pathname === item.path
                    ? "bg-[#63581F] text-white"
                    : "bg-[#DCCAB2] hover:bg-[#F0E2C2]/50 text-black"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-4 w-full">
              <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#63581F]/20">
                <input
                  type="text"
                  placeholder="Search safaris..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-black text-sm outline-none"
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
          </motion.div>
        </div>
      )}
    </header>
  );
}
