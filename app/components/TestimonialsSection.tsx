"use client";

import { motion } from "framer-motion";
import { manrope, montserrat } from "../fonts";
import { testimonials } from "../data/lib";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-linear-to-b from-black via-zinc-900 to-black">
      {/* Soft ambient backdrop
      <div
        className="absolute inset-0 opacity-40 bg-[url('/kenya9.jpeg')] bg-cover bg-center blur-2xl"
        style={{ maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" }}
      /> */}

      {/* Golden glow accent */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 text-3xl md:text-4xl font-bold text-center mb-16 ${montserrat.className} text-[#DCCAB2]`}
      >
        What Our Clients Say
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-linear-to-b from-zinc-800/60 to-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:border-[#d4ba98] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={t.image}
                alt={t.name}
                height={64}
                width={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#DCCAB2] shadow-md"
              />
              <div>
                <h3
                  className={`text-[#DCCAB2] font-semibold text-lg ${montserrat.className}`}
                >
                  {t.name}
                </h3>
                <p className="text-[#DCCAB2] text-sm">{t.location}</p>
              </div>
            </div>

            <p
              className={`text-lg text-[#DCCAB2] ${manrope.className} leading-relaxed italic`}
            >
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
