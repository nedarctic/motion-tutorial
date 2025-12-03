"use client";

import { useState, useMemo } from "react";
import { montserrat, manrope } from "../fonts";
import { Star } from "lucide-react";
import { safaris } from "@/app/data/safarisData";
import Link from "next/link";
import { useSearch } from "../context/SearchContext";

const ITEMS_PER_PAGE = 16;

export default function SafarisExplorePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { query, setQuery } = useSearch();

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

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <main
      className={`${manrope.className} min-h-screen px-6 md:px-12 py-20`}
      style={{ backgroundColor: "#20190E" }}
    >
      {/* Page Intro */}
      <section className="text-center pt-16 mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
          Explore{" "}
          <span className="text-[#D4C49A]">Safaris</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#C3B091] mt-4">
          Discover and plan your next unforgettable Kenyan safari adventure.
          Filter and explore experiences across the country.
        </p>

        {/* Search Bar */}
        <div className="mt-8">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search for a safari or location..."
            className="w-full text-center text-lg md:text-xl px-6 py-4 rounded-full border bg-[#1A140B] border-[#C3B091]/30 text-[#D4C49A] placeholder-[#C3B091]/50 shadow-lg focus:ring-2 focus:ring-[#D4C49A] transition"
          />
        </div>
      </section>

      {/* Grid of Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-2 md:px-4">
        {currentItems.map((safari) => (
          <div
            key={safari.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group h-96 hover:shadow-[0_8px_30px_rgba(164,139,86,0.35)] transition"
            style={{ backgroundColor: "#1A140B" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${safari.src})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Rating */}
            <div className="absolute top-4 right-4 flex items-center bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-white text-sm font-medium">
              <Star className="w-4 h-4 fill-[#D4C49A] text-[#D4C49A] mr-1" />
              <span>{safari.rating.toFixed(1)}</span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-4 left-4 text-white space-y-2">
              <div>
                <h3 className={`${montserrat.className} text-lg font-semibold drop-shadow-md`}>
                  {safari.title}
                </h3>
                <p className={`${montserrat.className} text-sm text-[#D4C49A]/70`}>
                  {safari.location}
                </p>
              </div>

              <Link
                href={`/explore/${safari.id}`}
                className={`${montserrat.className} text-sm font-semibold px-4 py-1 rounded-full shadow-md inline-block transition`}
                style={{
                  backgroundColor: "#D4C49A",
                  color: "#000",
                }}
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="flex justify-center items-center gap-6 mt-16 text-[#C3B091]">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full transition disabled:opacity-40"
            style={{
              backgroundColor: "#1A140B",
              border: "1px solid #C3B09133",
            }}
          >
            Previous
          </button>

          <span className="text-sm md:text-base">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full transition disabled:opacity-40"
            style={{
              backgroundColor: "#6E5B2C",
              border: "1px solid #C3B09133",
            }}
          >
            Next
          </button>
        </section>
      )}
    </main>
  );
}
