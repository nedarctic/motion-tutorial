"use client";

import { usePathname } from "next/navigation";
import { safaris } from "../../data/lib";
import { motion } from "framer-motion";
import { montserrat, manrope } from "../../fonts";
import { useMemo } from "react";

export default function BookTripPage() {
  const pathname = usePathname(); // e.g. /book/maasai-mara
  const safariId = pathname?.split("/").filter(Boolean).pop() || "";

  const safari = useMemo(() => safaris.find((s) => s.id === safariId), [safariId]);

  if (!safari) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl text-red-500">Safari not found</h1>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${safari.src})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6`}
        >
          Book Your {safari.title} Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg md:text-xl text-white/80 mb-12 max-w-3xl ${manrope.className}`}
        >
          Fill in your details below and our team will get in touch to help you
          plan your unforgettable journey to {safari.location}.
        </motion.p>

        {/* Booking Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zinc-900/70 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-yellow-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-yellow-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-yellow-400"
                placeholder="+254 700 000 000"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Preferred Travel Date</label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Special Requests</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-yellow-400 resize-none"
                placeholder="Let us know your preferences..."
              ></textarea>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-yellow-300 transition-all"
            >
              Submit Booking Request
            </button>
          </div>
        </motion.form>
      </section>
    </main>
  );
}
