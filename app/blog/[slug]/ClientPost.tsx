// app/blog/[slug]/ClientPost.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { montserrat, manrope } from "@/app/fonts";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/app/data/types";

type Props = {
  post: BlogPost;
};

export default function ClientPost({ post }: Props) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const shareTitle = encodeURIComponent(post.title);

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block bg-[#DCCAB2] text-black px-4 py-1 rounded-full text-sm font-semibold mb-6">
              {post.category}
            </span>
            <h1
              className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#DCCAB2] max-w-5xl leading-tight`}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-[#DCCAB2]/80 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <FaUser /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${manrope.className} prose prose-invert prose-lg max-w-none
            prose-headings:${montserrat.className} prose-headings:font-bold prose-headings:text-[#DCCAB2]
            prose-p:text-[#DCCAB2]/80 prose-p:leading-relaxed
            prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12
            prose-blockquote:border-l-[#DCCAB2] prose-blockquote:text-[#DCCAB2]/90
            prose-a:text-[#DCCAB2] hover:prose-a:underline`}
          dangerouslySetInnerHTML={{ __html: post.content}}
        />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 my-20">
          <Link
            href="/book"
            className="bg-[#DCCAB2] text-black font-bold px-10 py-5 rounded-full text-center text-lg hover:bg-[#a78b66] transition shadow-xl"
          >
            Plan My Escape
          </Link>
          <Link
            href="/destinations"
            className="border-2 border-[#DCCAB2] text-[#DCCAB2] font-bold px-10 py-5 rounded-full text-center text-lg hover:bg-[#DCCAB2] hover:text-black transition"
          >
            Explore All Journeys
          </Link>
        </div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#DCCAB2]/30 flex-shrink-0">
            <Image
              src={post.authorImage}
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className={`${montserrat.className} text-xl font-bold text-[#DCCAB2]`}>
              {post.author}
            </p>
            <p className="text-[#DCCAB2]/70">
              {post.title}
            </p>
          </div>
        </motion.div>

        {/* Social Share */}
        <div className="mt-16 flex flex-wrap items-center gap-4">
          <span className="text-[#DCCAB2]/70">Share this story:</span>
          <div className="flex gap-3">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#DCCAB2] hover:text-black transition flex items-center justify-center">
              <FaFacebookF />
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#DCCAB2] hover:text-black transition flex items-center justify-center">
              <FaTwitter />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#DCCAB2] hover:text-black transition flex items-center justify-center">
              <FaLinkedinIn />
            </a>
            <a href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#DCCAB2] hover:text-black transition flex items-center justify-center">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-20">
          <Link href="/blog" className="inline-flex items-center gap-3 text-[#DCCAB2] hover:text-white transition text-lg font-medium">
            <FaArrowLeft /> Back to all stories
          </Link>
        </div>
      </article>
    </main>
  );
}