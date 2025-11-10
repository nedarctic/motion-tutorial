"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "./HeroSection";

export default function ForegroundCarousel({ images, currentIndex }: {images: Image[]; currentIndex: number}) {
  const visibleImages = images.slice(currentIndex).concat(images.slice(0, currentIndex));

  return (
    <div className="flex gap-4 overflow-hidden w-3/4 justify-center">
      <AnimatePresence mode="popLayout">
        {visibleImages.map((img, i) => (
          <motion.div
            key={img.src}
            className="w-64 h-64 bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: `url(${img.src})` }}
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -150, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
