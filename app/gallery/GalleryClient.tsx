"use client";

import { motion } from "framer-motion";
import { satisfy, manrope, montserrat } from "../fonts";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

import { galleryImages, categories } from "../data/galleryImages";

export default function GalleryClient() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <main className={`${manrope.className} min-h-screen bg-[#20190E] text-white overflow-x-hidden`}>
      {/* Hero Section */}
      <section className="relative h-screen lg:min-h-[600px] flex items-center justify-center text-center">
        <Image
          src="/hero-gallery.jpeg"
          alt="Kenya's soul in frames"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6E5B2C]/80 via-[#2E2414]/70 to-[#20190E]/90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="relative z-10 max-w-6xl px-6"
        >
          <h1 className={`${satisfy.className} text-6xl md:text-9xl font-bold text-[#D4C49A] mb-8`}>
            A Visual Journey
          </h1>
          <p className={`${montserrat.className} text-xl md:text-2xl text-[#C3B091] max-w-3xl mx-auto leading-relaxed`}>
            These are not just photographs, they are memories waiting to become yours.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40 bg-[#1A140B]/95 backdrop-blur-2xl border-b border-[#C3B091]/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`pb-3 transition-all ${
                filter === cat.value
                  ? "text-[#D4C49A] border-b-2 border-[#D4C49A]"
                  : "text-[#C3B091]/60 hover:text-[#D4C49A]"
              } ${montserrat.className} font-medium text-lg`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid Gallery */}
      <section className="py-20 px-6 md:px-12 relative">
        {/* Subtle background collage */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center filter blur-3xl brightness-50"
            style={{ backgroundImage: "url('/backdrop-collage.jpeg')" }}
          />
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative group mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1200}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className={`${montserrat.className} text-[#D4C49A] text-lg font-medium`}>
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-6xl max-h-full"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full view"
              width={1600}
              height={1200}
              className="object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
            >
              <X className="w-8 h-8 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Closing CTA */}
      <section className="py-32 text-center bg-gradient-to-t from-black to-[#20190E]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className={`${satisfy.className} text-5xl md:text-7xl text-[#D4C49A] mb-8`}>
            This Is Just the Beginning
          </h2>
          <p className={`${montserrat.className} text-xl text-[#C3B091] leading-relaxed mb-12`}>
            Every frame here was once someone’s real moment. Let’s create yours.
          </p>
          <a
            href="/contact"
            className={`${montserrat.className} inline-block bg-[#D4C49A] text-black font-bold px-12 py-5 rounded-full text-lg hover:bg-[#BFA878] transition shadow-2xl`}
          >
            Start Your Story Today With Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
