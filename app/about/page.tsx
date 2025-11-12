"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { montserrat, manrope } from "../fonts";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center  bg-linear-to-b from-[#63581F] via-black/30 to-black/70">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1
            className={`${montserrat.className} text-5xl md:text-6xl font-extrabold text-[#DCCAB2] mb-4`}
          >
            About Us
          </h1>
          <p
            className={`${manrope.className} text-lg md:text-xl text-[#DCCAB2] max-w-3xl mx-auto`}
          >
            Where wanderlust meets curation. We craft experiences that stir the soul and
            awaken the spirit of discovery.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mb-6`}
            >
              Our Story
            </h2>
            <p
              className={`${manrope.className} text-[#DCCAB2] leading-relaxed mb-6`}
            >
              Founded with a vision to redefine adventure, <span className="text-[#DCCAB2] font-medium">Curated by Ray</span> was born out of
              a simple belief, that travel is not about checking places off a list, but
              about immersing yourself in moments that linger forever.
            </p>
            <p
              className={`${manrope.className} text-[#DCCAB2] leading-relaxed mb-6`}
            >
              From the savannas of the Maasai Mara to the turquoise waters of Zanzibar,
              every journey we design is a handcrafted experience, curated with
              precision, passion, and a deep understanding of what it means to truly
              explore.
            </p>
            <p
              className={`${manrope.className} text-[#DCCAB2] leading-relaxed`}
            >
              We don’t just take you places, we help you connect with them. Because in
              every horizon, there’s a story waiting to be lived.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about-story.jpeg"
              alt="Travel Story"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-zinc-950/70 border-t border-white/10 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about-mission.jpeg"
              alt="Mission"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mb-6`}
            >
              Our Mission
            </h2>
            <p
              className={`${manrope.className} text-[#DCCAB2] leading-relaxed mb-6`}
            >
              To craft authentic, sustainable journeys that celebrate local culture,
              protect nature, and transform travelers. Every itinerary is carefully
              designed to ensure you experience Africa not as a spectator, but as a
              participant, one who leaves a positive footprint behind.
            </p>
            <p
              className={`${manrope.className} text-[#DCCAB2] leading-relaxed`}
            >
              We partner with local communities, conservation initiatives, and
              eco-lodges to ensure that your adventure also supports the ecosystems and
              people that make it possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center text-[#DCCAB2] mb-16`}
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Authenticity",
              text: "We curate experiences that feel real — not rehearsed. Every safari, every encounter, is deeply rooted in the land and its people.",
              icon: "🌍",
            },
            {
              title: "Sustainability",
              text: "We believe travel should give back. From eco-lodges to local guides, we champion responsible tourism that preserves our planet.",
              icon: "🌱",
            },
            {
              title: "Excellence",
              text: "From first contact to farewell, we uphold the highest standards of hospitality and craftsmanship in every journey we design.",
              icon: "✨",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-[#DCCAB2] p-8 rounded-3xl shadow-lg hover:shadow-[#836a4a] transition"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3
                className={`${montserrat.className} text-xl font-semibold text-black mb-3`}
              >
                {value.title}
              </h3>
              <p className={`${manrope.className} text-black leading-relaxed`}>
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative bg-linear-to-t from-black to-zinc-950 py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#DCCAB2] mb-6`}
        >
          Join the Journey
        </motion.h2>
        <p
          className={`${manrope.className} text-[#DCCAB2] text-lg max-w-2xl mx-auto mb-10`}
        >
          Every story begins with a single step. Take yours today, and let us curate a
          journey that will stay with you forever.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/book"
          className="bg-[#DCCAB2] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#a78b66] transition-all"
        >
          Book Your Adventure
        </motion.a>
      </section>
    </main>
  );
}
