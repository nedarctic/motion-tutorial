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

  // duplicate images for trailing illusion
  const visibleImages = [...images, ...images];

  useEffect(() => {
    // if currentIndex goes beyond visible first batch, we'll reset after anim finishes
    const atLoopBoundary = currentIndex === total;

    // if we just reached the duplicate boundary, animate last slide first
    if (atLoopBoundary) {
      // animate last slide normally (i.e., to the duplicated image)
      const targetX = -(currentIndex * width);
      controls
        .start({
          x: targetX,
          transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
        })
        .then(() => {
          // after it finishes, snap back silently to x=0
          controls.set({ x: 0 });
        });
    } else {
      // normal step slide
      const targetX = -(currentIndex * width);
      controls.start({
        x: targetX,
        transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [currentIndex, controls, total, width]);

  return (
    <div className="overflow-hidden w-3/4">
      <motion.div className="flex gap-4" animate={controls}>
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
