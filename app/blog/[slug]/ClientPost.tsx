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
    <main className="relative min-h-screen bg-[#20190E] text-white">
      {/* Hero */}
      <section className="relative h-screen lg:min-h-[600px] lg:max-h-[800px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6E5B2C]/70 via-[#2E2414]/70 to-[#20190E]/90" />

        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block bg-[#D4C49A] text-black px-4 py-1 rounded-full text-sm font-semibold mb-6">
              {post.category}
            </span>
            <h1
              className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#D4C49A] max-w-5xl leading-tight`}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-[#C3B091]/80 text-sm md:text-base">
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
            prose-headings:${montserrat.className} prose-headings:font-bold prose-headings:text-[#D4C49A]
            prose-p:text-[#C3B091]/80 prose-p:leading-relaxed
            prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12
            prose-blockquote:border-l-[#D4C49A] prose-blockquote:text-[#C3B091]/90
            prose-a:text-[#D4C49A] hover:prose-a:underline`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 my-20">
          <Link
            href="/book"
            className="bg-[#D4C49A] text-black font-bold px-10 py-5 rounded-full text-center text-lg hover:bg-[#BFA878] transition shadow-xl"
          >
            Plan My Escape
          </Link>
          <Link
            href="/safaris"
            className="border-2 border-[#D4C49A] text-[#D4C49A] font-bold px-10 py-5 rounded-full text-center text-lg hover:bg-[#D4C49A] hover:text-black transition"
          >
            Explore All Journeys
          </Link>
        </div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-[#C3B091]/10 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#D4C49A]/30 flex-shrink-0">
            <Image
              src={post.authorImage}
              alt={post.author}
              width={500}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          <div>
            <p className={`${montserrat.className} text-xl font-bold text-[#D4C49A]`}>
              {post.author}
            </p>
            <p className="text-[#C3B091]/70">
              {post.title}
            </p>
          </div>
        </motion.div>

        {/* Social Share */}
        <div className="mt-16 flex flex-wrap items-center gap-4">
          <span className="text-[#C3B091]/70">Share this story:</span>
          <div className="flex gap-3">
            {[{
              icon: <FaFacebookF />,
              url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
            }, {
              icon: <FaTwitter />,
              url: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`
            }, {
              icon: <FaLinkedinIn />,
              url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`
            }, {
              icon: <FaWhatsapp />,
              url: `https://wa.me/?text=${shareTitle}%20${shareUrl}`
            }].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4C49A] hover:text-black transition flex items-center justify-center"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-20">
          <Link href="/blog" className="inline-flex items-center gap-3 text-[#D4C49A] hover:text-white transition text-lg font-medium">
            <FaArrowLeft /> Back to all stories
          </Link>
        </div>
      </article>
    </main>
  );
}
