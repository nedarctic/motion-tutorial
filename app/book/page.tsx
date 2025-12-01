"use client";

import { motion } from "framer-motion";
import { safaris } from "../data/lib";
import { montserrat, manrope } from "../fonts";
import Link from "next/link";
import { useState } from "react";

export default function BookPage() {
  const [custom, setCustom] = useState(false);
  const [customName, setCustomName] = useState("");

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/book-bg.jpg')] bg-cover bg-center brightness-75" />
      <div className="absolute inset-0 bg-black backdrop-blur-sm" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-28">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-center text-[#DCCAB2] mb-6`}
        >
          Book a Trip
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto ${manrope.className} mb-12`}
        >
          Choose from our handpicked safaris or create your own dream experience — we’ll make it happen.
        </motion.p>

        {/* Safaris Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {safaris.map((safari, idx) => (
            <motion.div
              key={safari.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={safari.src}
                alt={safari.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className={`text-xl font-semibold mb-2 text-[#DCCAB2] ${montserrat.className}`}>
                  {safari.title}
                </h3>
                <p className={`text-sm text-gray-300 mb-4 ${manrope.className}`}>{safari.location}</p>
                <Link
                  href={`/book/${safari.id}`}
                  className="inline-block bg-[#DCCAB2] text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#785f3f] transition"
                >
                  Book This Safari
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center my-16"
        >
          <div className="h-px w-1/4 bg-white/20" />
          <span className="mx-4 text-gray-400">OR</span>
          <div className="h-px w-1/4 bg-white/20" />
        </motion.div>

        {/* Custom Safari Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-zinc-900/70 border border-white/10 rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto"
        >
          <h2 className={`text-2xl md:text-3xl font-bold text-[#DCCAB2] mb-6 text-center ${montserrat.className}`}>
            Plan a Custom Safari
          </h2>

          <p className={`text-gray-300 text-center mb-8 ${manrope.className}`}>
            Have a specific destination or experience in mind? Tell us about it, and we’ll tailor a safari just for you.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCustom(true);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Safari Name or Destination</label>
              <input
                type="text"
                required
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-[#DCCAB2]"
                placeholder="e.g., Serengeti Adventure"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-[#DCCAB2]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-[#DCCAB2]"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Tell Us About Your Dream Safari</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-[#DCCAB2] resize-none"
                placeholder="Describe your ideal adventure..."
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#DCCAB2] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#73552d] transition-all"
              >
                Submit Request
              </button>
            </div>
          </form>

          {custom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 p-6 bg-[#DCCAB2] border border-[#DCCAB2]-400/30 rounded-2xl text-center"
            >
              <p className={`text-[#DCCAB2] font-medium ${manrope.className}`}>
                Your request for “{customName || "Custom Safari"}” has been received!  
                Our team will contact you soon to plan your journey.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  );
}
