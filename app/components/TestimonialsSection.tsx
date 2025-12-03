"use client";

import { motion } from "framer-motion";
import { manrope, montserrat } from "../fonts";
import { testimonials } from "../data/lib";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="relative lg:min-h-[600px] w-full overflow-hidden bg-[#20190E]">
      {/* Golden glow accent */}
      <div className="absolute inset-0 bg-gradient-radial from-[#D4C49A]/10 via-transparent to-transparent blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 text-3xl md:text-4xl font-bold text-center mb-16 ${montserrat.className} text-[#D4C49A]`}
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
            className="bg-[#1A140B]/70 backdrop-blur-xl border border-[#C3B091]/10 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:border-[#BFA878] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={t.image}
                alt={t.name}
                height={64}
                width={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D4C49A] shadow-md"
              />
              <div>
                <h3 className={`text-[#D4C49A] font-semibold text-lg ${montserrat.className}`}>
                  {t.name}
                </h3>
                <p className="text-[#C3B091] text-sm">{t.location}</p>
              </div>
            </div>

            <p className={`text-lg text-[#C3B091] ${manrope.className} leading-relaxed italic`}>
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
