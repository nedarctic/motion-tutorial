"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { satisfy, manrope, montserrat } from "../fonts";
import { Star, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { experiences } from "../data/experiencesData";

export default function ExperiencesClient() {
  const [filter, setFilter] = useState("all");

  const filteredExperiences = useMemo(() => {
    if (filter === "featured") return experiences.filter((e) => e.featured);
    return experiences;
  }, [filter]);

  return (
    <main className={`${manrope.className} min-h-screen bg-[#20190E] text-white overflow-hidden`}>
      {/* Hero Section */}
      <section className="relative h-screen lg:min-h-[600px] flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/hero-experience.jpeg"
          alt="Kenyan travel experience"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6E5B2C]/80 via-[#2E2414]/70 to-[#20190E]/90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className={`${satisfy.className} text-6xl md:text-8xl font-bold text-[#D4C49A] mb-6`}>
            Curated Experiences
          </h1>
          <p className={`${montserrat.className} text-xl md:text-2xl text-[#C3B091] max-w-3xl mx-auto leading-relaxed`}>
            Not just things to do — moments that become stories. Handpicked, intimate, and deeply Kenyan.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-[#D4C091] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 bg-[#1A140B]/90 backdrop-blur-xl border-b border-[#C3B091]/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10">
          {["all", "featured"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`pb-2 transition-all ${
                filter === tab
                  ? "text-[#D4C49A] border-b-2 border-[#D4C49A]"
                  : "text-[#C3B091]/70 hover:text-[#D4C49A]"
              } ${montserrat.className} font-medium`}
            >
              {tab === "all" ? "All Experiences" : "Ray’s Favorites"}
            </button>
          ))}
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filteredExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-[520px] bg-[#1A140B] border border-[#C3B091]/10 hover:border-[#D4C49A]/50 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={exp.src}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Featured badge */}
              {exp.featured && (
                <div className="absolute top-4 left-4 bg-[#D4C49A] text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  RAY’S FAVORITE
                </div>
              )}

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-[#D4C49A] text-[#D4C49A] mr-1" />
                <span className="text-sm font-medium">{exp.rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <h3 className={`${montserrat.className} text-2xl font-bold text-[#D4C49A]`}>
                  {exp.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-[#C3B091]">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {exp.groupSize}
                  </span>
                </div>

                <Link
                  href={`/explore/${exp.id}`}
                  className={`${montserrat.className} bg-[#D4C49A] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#BFA878] transition-transform transform hover:scale-105 shadow-lg inline-block`}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-4xl mx-auto px-6"
        >
          <h2 className={`${satisfy.className} text-5xl md:text-6xl text-[#D4C49A] mb-8`}>
            Every Moment, Intentionally Crafted
          </h2>
          <p className={`${montserrat.className} text-xl text-[#C3B091] leading-relaxed`}>
            These are not just activities. They are the heartbeat of a real Kenyan journey — intimate, authentic, and unforgettable.
          </p>
          <Link
            href="/contact"
            className={`${montserrat.className} inline-block mt-10 bg-[#D4C49A] text-black font-bold px-10 py-4 rounded-full hover:bg-[#BFA878] transition-transform transform hover:scale-105 shadow-xl`}
          >
            Let’s Build Your Journey
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
