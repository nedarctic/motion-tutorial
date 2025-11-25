"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { montserrat } from "../fonts";

import { clientLogos } from "../data/lib";

export default function ClientsSlider() {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-black">
      <h2 className={`relative z-10 text-3xl md:text-4xl font-bold text-center mb-32 ${montserrat.className} text-[#DCCAB2]`}>
        Our Trusted Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Duplicate logos to make the loop seamless */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[140px] min-h-[70px] bg-white dark:bg-white rounded-2xl shadow-md p-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
