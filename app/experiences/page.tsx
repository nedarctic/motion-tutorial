"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { satisfy, manrope, montserrat } from "../fonts";
import { Star, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    id: "maasai-mara-2",
    title: "Sunrise Hot Air Balloon Safari",
    location: "Maasai Mara",
    duration: "4–5 hours",
    groupSize: "2–16 guests",
    price: "From $450 pp",
    rating: 4.9,
    src: "/balloon-safari.jpeg",
    featured: true,
  },
  {
    id: "safari-8",
    title: "Guided Walking Safari",
    location: "Tsavo East",
    duration: "3–6 hours",
    groupSize: "Max 6 guests",
    price: "From $180 pp",
    rating: 5.0,
    src: "/walking-safari.jpeg",
  },
  {
    id: "safari-17",
    title: "Private Bush Dinner Under the Stars",
    location: "Laikipia or Mara Conservancies",
    duration: "Evening",
    groupSize: "Private or small groups",
    price: "From $250 pp",
    rating: 4.8,
    src: "/bush-dinner.jpeg",
  },
  {
    id: "mount-kenya",
    title: "Helicopter Journey to Mount Kenya",
    location: "Mount Kenya & Lewa",
    duration: "Full day",
    groupSize: "Private",
    price: "From $1,200 pp",
    rating: 5.0,
    src: "/helicopter-mt-kenya.jpeg",
    featured: true,
  },
  {
    id: "maasai-mara",
    title: "Maasai Village Cultural Immersion",
    location: "Maasai Mara Region",
    duration: "Half day",
    groupSize: "Small groups",
    price: "From $85 pp",
    rating: 4.7,
    src: "/maasai-village.jpeg",
  },
  {
    id: "bali1",
    title: "Classic Sundowner Experience",
    location: "Any Reserve",
    duration: "2 hours",
    groupSize: "Open or private",
    price: "From $75 pp",
    rating: 4.6,
    src: "/sundowner.jpeg",
  },
];

export default function ExperiencesPage() {
  const [filter, setFilter] = useState("all");

  const filteredExperiences = useMemo(() => {
    if (filter === "featured") return experiences.filter((e) => e.featured);
    return experiences;
  }, [filter]);

  return (
    <main className={`${manrope.className} min-h-screen bg-black text-white overflow-hidden`}>
      {/* Hero Section */}
      <section className="relative h-screen lg:min-h-[600px] lg:max-h-[800px] flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/hero-experience.jpeg"
          alt="Kenyan travel experience"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className={`${satisfy.className} text-6xl md:text-8xl font-bold text-[#DCCAB2] mb-6`}>
            Curated Experiences
          </h1>
          <p className={`${montserrat.className} text-xl md:text-2xl text-[#DCCAB2] max-w-3xl mx-auto leading-relaxed`}>
            Not just things to do — moments that become stories. Handpicked, intimate, and deeply Kenyan.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-[#DCCAB2] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10">
          {["all", "featured"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`pb-2 transition-all ${
                filter === tab ? "text-[#DCCAB2] border-b-2 border-[#DCCAB2]" : "text-white/60 hover:text-white"
              } ${montserrat.className} font-medium`}
            >
              {tab === "all" ? "All Experiences" : "Ray’s Favorites"}
            </button>
          ))}
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center filter blur-3xl brightness-50"
            style={{ backgroundImage: "url('backdrop-collage.jpeg')" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filteredExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl h-[520px] bg-black/30 backdrop-blur-md border border-white/10 hover:border-[#DCCAB2]/50 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={exp.src}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Featured badge */}
              {exp.featured && (
                <div className="absolute top-4 left-4 bg-[#DCCAB2] text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  RAY’S FAVORITE
                </div>
              )}

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-[#DCCAB2] text-[#DCCAB2] mr-1" />
                <span className="text-sm font-medium">{exp.rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <h3 className={`${montserrat.className} text-2xl font-bold text-[#DCCAB2]`}>
                  {exp.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-[#DCCAB2]/90">
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

                <div className="flex flex-col items-start justify-center">
                  <Link
                    href={`/explore/${exp.id}`}
                    className={`${montserrat.className} bg-[#DCCAB2] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#c5b09a] transition-transform transform hover:scale-105 shadow-lg`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Call-to-action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-4xl mx-auto px-6"
        >
          <h2 className={`${satisfy.className} text-5xl md:text-6xl text-[#DCCAB2] mb-8`}>
            Every Moment, Intentionally Crafted
          </h2>
          <p className={`${montserrat.className} text-xl text-[#DCCAB2] leading-relaxed`}>
            These are not just activities. They are the heartbeat of a real Kenyan journey — intimate, authentic, and unforgettable.
          </p>
          <a
            href="/contact"
            className={`${montserrat.className} inline-block mt-10 bg-[#DCCAB2] text-black font-bold px-10 py-4 rounded-full hover:bg-[#c5b09a] transition-transform transform hover:scale-105 shadow-xl`}
          >
            Let’s Build Your Journey
          </a>
        </motion.div>
      </section>
    </main>
  );
}
