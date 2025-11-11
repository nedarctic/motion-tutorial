"use client";

import { motion } from "framer-motion";
import { manrope, montserrat } from "../fonts";

const testimonials = [
  {
    name: "Alice M.",
    text: "The safari experience was absolutely breathtaking! Everything was perfectly organized, and the wildlife sightings were unforgettable.",
    location: "Nairobi, Kenya",
    image: "/alice.jpeg",
  },
  {
    name: "John K.",
    text: "Curated by Ray made our Kenya trip seamless and magical. Every detail was taken care of, and the guides were incredibly knowledgeable.",
    location: "London, UK",
    image: "/john.jpeg",
  },
  {
    name: "Sophia R.",
    text: "I can’t recommend them enough! The safaris were immersive, the accommodations luxurious, and the overall experience beyond expectations.",
    location: "New York, USA",
    image: "/sophia.jpeg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-50 dark:bg-black overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`text-3xl md:text-4xl font-bold text-center mb-16 ${montserrat.className} text-black dark:text-white`}
      >
        What Our Clients Say
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
              />
              <div>
                <h3 className={`text-yellow-400 font-semibold text-lg ${montserrat.className}`}>
                  {t.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t.location}</p>
              </div>
            </div>

            <p className={`text-lg text-gray-800 dark:text-gray-200 ${manrope.className} leading-relaxed`}>
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
