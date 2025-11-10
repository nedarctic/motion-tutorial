"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { Image } from "../data/types";

export default function ForegroundCarousel({
  images,
  currentIndex,
}: {
  images: Image[];
  currentIndex: number;
}) {
  const controls = useAnimation();
  const total = images.length;
  const width = 256 + 16; // width + gap

  // duplicate for trailing illusion
  const visibleImages = [...images, ...images];

  // ✅ Set correct initial position on mount
  useEffect(() => {
    controls.set({ x: -(currentIndex * width) });
  }, []); // run once

  useEffect(() => {
    const atLoopBoundary = currentIndex === total;

    if (atLoopBoundary) {
      const targetX = -(currentIndex * width);
      controls
        .start({
          x: targetX,
          transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
        })
        .then(() => {
          controls.set({ x: 0 });
        });
    } else {
      const targetX = -(currentIndex * width);
      controls.start({
        x: targetX,
        transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [currentIndex, controls, total, width]);

  return (
    <div className="overflow-hidden w-3/4">
      <motion.div
        className="flex gap-4"
        animate={controls}
        initial={false} // ✅ Prevent Framer from applying its default "from 0" animation
      >
        {visibleImages.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="w-64 h-64 bg-cover bg-center rounded-xl shadow-lg shrink-0"
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
