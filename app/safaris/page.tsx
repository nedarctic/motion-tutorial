"use client";

import { useState, useMemo } from "react";
import { montserrat, manrope, satisfy } from "../fonts";
import { Star } from "lucide-react";
import { safaris } from "../data/lib";
import Link from "next/link";
import { useSearch } from "../context/SearchContext";

const ITEMS_PER_PAGE = 8;

export default function SafarisExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { query, setQuery } = useSearch();

  // Filter safaris based on search query
  const filteredSafaris = useMemo(() => {
    return safaris.filter(
      (safari) =>
        safari.title.toLowerCase().includes(query.toLowerCase()) ||
        safari.location.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const totalPages = Math.ceil(filteredSafaris.length / ITEMS_PER_PAGE);
  const currentItems = filteredSafaris.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <main className={`${manrope.className} min-h-screen bg-black px-6 md:px-12 py-20`}>
      {/* Page Intro & Search */}
      <section className="text-center mb-16 relative z-0 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-zinc-50 dark:text-white">
          Explore <span className="text-[#DCCAB2] dark:text-[#DCCAB2]">Safaris</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-50 mt-4">
          Discover and plan your next unforgettable Kenyan safari adventure. Filter and explore experiences across the country.
        </p>

        {/* Search Bar */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search for a safari or location..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full text-center text-lg md:text-xl px-6 py-4 rounded-full border border-[#DCCAB2] bg-black/10 dark:bg-white/10 text-zinc-50 placeholder-zinc-50 shadow-lg focus:ring-2 focus:ring-[#DCCAB2] transition"
          />
        </div>
      </section>

      {/* Grid of Safari Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-2 md:px-4">
        {currentItems.map((safari) => (
          <div key={safari.id} className="relative rounded-2xl overflow-hidden shadow-lg group h-96 hover:shadow-2xl transition">
            {/* Card Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${safari.src})` }}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Rating */}
            <div className="absolute top-4 right-4 flex items-center bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-white text-sm font-medium">
              <Star className="w-4 h-4 fill-[#DCCAB2] text-[#DCCAB2] mr-1" />
              <span>{safari.rating.toFixed(1)}</span>
            </div>

            {/* Bottom-left Info & Explore Button */}
            <div className="absolute bottom-4 left-4 text-white space-y-2">
              <div>
                <h3 className={`${montserrat.className} text-lg font-semibold drop-shadow-md`}>
                  {safari.title}
                </h3>
                <p className={`${montserrat.className} text-sm opacity-80`}>
                  {safari.location}
                </p>
              </div>
              <Link
                href={`/explore/${safari.id}`}
                className={`${montserrat.className} bg-[#DCCAB2] text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md hover:bg-[#DCCAB2] transition inline-block`}
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="flex justify-center items-center gap-6 mt-16 text-black dark:text-white">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full bg-[#433c32] hover:bg-[#DCCAB2] transition disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm md:text-base">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full bg-[#705b3f] hover:bg-[#DCCAB2] transition disabled:opacity-50"
          >
            Next
          </button>
        </section>
      )}
    </main>
  );
}
