"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { Image } from "../data/types";
import { manrope, pacifico, playfair } from "../fonts";

export default function BackgroundImage({ image }: { image: Image }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yOverlay = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const grainOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background with zoom + parallax */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />
      </motion.div>

      {/* Cinematic multi-gradient overlay */}
      <motion.div style={{ y: yOverlay }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/10 to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-end pb-32 md:pb-40 lg:pb-48 pl-8 md:pl-16 lg:pl-28">
        <div className="max-w-screen-2xl">
          {/* Monumental backdrop */}
          <div className="absolute top-32 md:top-48 left-10 pointer-events-none select-none overflow-hidden">
            <h2
              className={`${manrope.className} font-black tracking-tighter text-white/5 leading-[0.78]`}
              style={{
                fontSize: "clamp(18rem, 42vw, 60rem)",
                letterSpacing: "-0.07em",
              }}
            >
              CURATED
            </h2>
            <h2
              className={`${manrope.className} font-black tracking-tighter text-white/5 leading-[0.78] -mt-12 md:-mt-24`}
              style={{
                fontSize: "clamp(11rem, 26vw, 38rem)",
                marginLeft: "clamp(6rem, 15vw, 28rem)",
              }}
            >
              BY RAY
            </h2>
          </div>

          {/* Main headline */}
          <AnimatePresence mode="wait">
            {isLoaded && (
              <>
                <motion.h1
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  exit={{ clipPath: "inset(0 0 100% 0)" }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${playfair.className} absolute sm:bottom-80 bottom-100 text-6xl sm:text-7xl text-[#E8D9C2]`}
                  
                >
                  {image.text}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1.4, ease: "easeOut" }}
                  className="mt-8 absolute sm:bottom-45 bottom-80 md:mt-12 space-y-5"
                >
                  <p className={`${pacifico.className} text-3xl md:text-5xl lg:text-6xl text-[#E8D9C2]/85 italic`}>
                    by Ray
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}