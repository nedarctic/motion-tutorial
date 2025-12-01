"use client";

import { motion } from "framer-motion";
import { montserrat, satisfy, manrope } from "../fonts";
import Image from "next/image";
import { travelVideos } from "../data/lib";


export default function TravelInspirationSection() {
  return (
    <section
      className="relative w-full min-h-screen lg:min-h-[600px] flex flex-col justify-center items-center text-white overflow-hidden"
      id="travel-inspiration"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/kenya1.jpeg"
          alt="Nature backdrop"
          fill
          className="object-cover brightness-[0.45]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/70" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side – Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1
            className={`${manrope.className} text-4xl md:text-6xl font-extrabold text-[#DCCAB2] leading-tight`}
          >
            DISCOVER THE WORLD IN A NEW WAY
          </h1>

          <p className={`${manrope.className} text-[#DCCAB2] max-w-md leading-relaxed`}>
            Watch stories from across Kenya, from misty mountains to golden savannas.
            Every journey awakens a sense of wonder, connection, and belonging.
          </p>

          <motion.a
            href={travelVideos[0].url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-[#DCCAB2] border border-white/40 px-5 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            <svg
              className="w-5 h-5 fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch the Video
          </motion.a>
        </motion.div>

        {/* Right side – Video thumbnails */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {travelVideos.map((video) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={250}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-90 group-hover:text-cyan-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
