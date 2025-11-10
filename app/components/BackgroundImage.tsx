"use client";
import { motion } from "framer-motion";
import { Image } from "./HeroSection";
import { manrope, pacifico, satisfy } from "../fonts";

export default function BackgroundImage({ image }: { image: Image }) {
  return (
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
        {/* Backdrop Text */}
        <div
          className={`${manrope.className} absolute font-extrabold text-transparent stroke-white pl-8 pointer-events-none`}
          style={{
            fontSize: "clamp(8rem, 20vw, 18rem)", // larger + responsive
            WebkitTextStroke: "3px rgba(255, 255, 255, 0.15)", // slightly thicker stroke
            lineHeight: "1",
            letterSpacing: "-0.03em",
          }}
        >
          VOYAGE
        </div>

        {/* Foreground Text */}
        <motion.h1
          className={`${satisfy.className} relative pl-12 text-5xl md:text-6xl font-semibold text-start max-w-xl z-10`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
        >
          {image.text}
        </motion.h1>
      </div>
    </motion.div>
  );
}
