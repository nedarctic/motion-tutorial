"use client";

import { montserrat, manrope, satisfy } from "../fonts";
import { motion } from "framer-motion";
import { cards } from "../data/lib";

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className={`${manrope.className} lg:min-h-[600px] relative min-h-screen flex flex-col items-center py-28 px-8 md:px-20 bg-[#20190E]`}
    >
      {/* Distant atmospheric backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center filter blur-2xl brightness-50 opacity-50"
          style={{ backgroundImage: `url('/images/kenya-backdrop.jpg')` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-[#2E2414]/70 to-black/70" />
      </div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${satisfy.className} text-4xl md:text-5xl text-center mb-8 text-[#D4C49A]`}
      >
        Why Curated by Ray
      </motion.h2>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${montserrat.className} text-base md:text-lg text-center text-[#C3B091] max-w-3xl mb-20 leading-relaxed`}
      >
        We don’t do mass tourism. We craft deeply personal journeys rooted in Kenya’s rhythm, 
        refined by taste, and guided by people who truly know this land. Every destination we 
        recommend has been walked, tasted, and felt. Every itinerary tells a story.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center space-y-4 bg-[#1A140B] rounded-2xl p-6 shadow-lg hover:shadow-[#A48B56]/40 transition-all"
            >
              <Icon className="w-10 h-10 text-[#D4C49A]" />
              <h3 className={`${montserrat.className} text-lg font-semibold text-[#D4C49A]`}>{c.title}</h3>
              <p className="text-[#C3B091] text-sm leading-relaxed max-w-xs">{c.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Closing line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={`${montserrat.className} text-center text-[#C3B091] mt-20 text-base md:text-lg max-w-2xl`}
      >
        Let us show you Kenya the way it was meant to be experienced. Intimate, alive, and unforgettable.
      </motion.p>
    </section>
  );
}
