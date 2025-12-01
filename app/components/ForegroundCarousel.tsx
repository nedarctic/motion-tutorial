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

  const desktopWidth = 256 + 16;
  const mobileWidth = 160 + 12;

  const width =
    typeof window !== "undefined" && window.innerWidth < 768
      ? mobileWidth
      : desktopWidth;

  const visibleImages = [...images, ...images];

  useEffect(() => {
    controls.set({ x: -(currentIndex * width) });
  }, []);

  useEffect(() => {
    const atLoop = currentIndex === total;
    const targetX = -(currentIndex * width);

    if (atLoop) {
      controls
        .start({ x: targetX, transition: { type: "tween", duration: 0.6 } })
        .then(() => controls.set({ x: 0 }));
    } else {
      controls.start({
        x: targetX,
        transition: { type: "tween", duration: 0.6 },
      });
    }
  }, [currentIndex, controls, total, width]);

  return (
    <div className="overflow-hidden w-full sm:w-3/4">
      <motion.div className="flex gap-3 md:gap-4" animate={controls} initial={false}>
        {visibleImages.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="
              shrink-0 rounded-lg shadow-lg bg-cover bg-center
              w-40 h-40
              md:w-64 md:h-64
            "
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
