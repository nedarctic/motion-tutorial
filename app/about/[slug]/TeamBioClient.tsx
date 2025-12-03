"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { montserrat, manrope } from "../../fonts";
import Link from "next/link";
import { team } from "../../data/lib";

export function TeamBioClient({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  console.log(slug);

  const member = team.find((m) => m.slug === slug);

  if (!member) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-[#DCCAB2]">
        <p className={`${manrope.className}`}>Team member not found.</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-[#DCCAB2] px-6 py-20 md:px-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10"
      >
        <Link
          href="/about"
          className={`${manrope.className} text-sm px-4 py-2 rounded-full border border-[#DCCAB2] hover:bg-[#DCCAB2] hover:text-black transition-all`}
        >
          ← Back to About
        </Link>
      </motion.div>

      {/* Header */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src={member.img}
            alt={member.name}
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`${montserrat.className} text-4xl font-bold mb-2 text-[#DCCAB2]`}
          >
            {member.name}
          </h1>
          <p className={`${manrope.className} text-lg opacity-80 mb-8`}>
            {member.role}
          </p>
          <p
            className={`${manrope.className} leading-relaxed whitespace-pre-line opacity-90`}
          >
            {member.bio}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
