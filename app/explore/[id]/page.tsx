"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { safaris } from "../../data/lib";
import { montserrat, manrope } from "../../fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function SafariDetailPage() {
  const router = useRouter();
  const pathname = usePathname(); // e.g., "/explore/mombasa-coast"
  const safariId = pathname?.split("/").filter(Boolean).pop() || ""; // remove empty strings

  const safari = useMemo(() => safaris.find((s) => s.id === safariId), [safariId]);

  if (!safari) {
    return (
      <main className={`${manrope.className} min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black`}>
        <h1 className="text-3xl text-red-500">Safari not found</h1>
      </main>
    );
  }

  return (
    <main className={`${manrope.className} h-screen relative text-white`}>
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{ backgroundImage: `url(${safari.src})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-40">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-16 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition z-20"
        >
          <AiOutlineArrowLeft className="text-white w-6 h-6" />
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-5xl sm:text-6xl font-extrabold text-[#DCCAB2] mb-4`}
        >
          {safari.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-6 mb-8"
        >
          <p className={`${montserrat.className} text-lg opacity-80`}>{safari.location}</p>
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full fill-[#D8BD98] text-[#D8BD98] font-semibold">
            ⭐ {safari.rating.toFixed(1)}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed"
        >
          {safari.detailedDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={`/book/${safari.id}`}
            className="bg-[#DCCAB2] text-black font-semibold px-8 py-4 rounded-full text-lg md:text-xl shadow-lg hover:bg-[#DCCAB2] transition"
          >
            Book This Trip
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
