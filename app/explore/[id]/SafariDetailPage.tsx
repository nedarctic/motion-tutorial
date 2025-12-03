"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { safaris } from "@/app/data/safarisData";
import { montserrat, manrope } from "../../fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function SafariDetailPage() {
  const router = useRouter();
  const pathname = usePathname();
  const safariId = pathname?.split("/").filter(Boolean).pop() || "";

  const safari = useMemo(() => safaris.find((s) => s.id === safariId), [safariId]);

  if (!safari) {
    return (
      <main className={`${manrope.className} min-h-screen flex items-center justify-center bg-[#20190E]`}>
        <h1 className="text-3xl text-red-500">Safari not found</h1>
      </main>
    );
  }

  return (
    <main className={`${manrope.className} min-h-screen relative text-white`} style={{ backgroundColor: "#20190E" }}>
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75 transition-transform duration-500"
        style={{ backgroundImage: `url(${safari.src})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <section className="relative pb-20 z-10 max-w-6xl mx-auto px-6 md:px-12 pt-40">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-16 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition z-20"
        >
          <AiOutlineArrowLeft className="text-white w-6 h-6" />
        </button>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-5xl sm:text-6xl font-extrabold text-[#D4C49A] mb-4 drop-shadow-md`}
        >
          {safari.title}
        </motion.h1>

        {/* Location & Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <p className={`${montserrat.className} text-lg text-[#C3B091]`}>{safari.location}</p>
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[#D4C49A] font-semibold">
            ⭐ {safari.rating.toFixed(1)}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#C3B091] mb-10 leading-relaxed"
        >
          {safari.detailedDescription}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={`/book/${safari.id}`}
            className="bg-[#D4C49A] text-black font-semibold px-8 py-4 rounded-full text-lg md:text-xl shadow-md hover:shadow-[0_8px_20px_rgba(164,139,86,0.35)] transition"
          >
            Book This Trip
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
