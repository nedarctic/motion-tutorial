"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { montserrat, manrope, satisfy } from "../fonts";
import { FaCalendarAlt, FaUser, FaClock } from "react-icons/fa";
import { blogPosts } from "../data/lib";

export default function BlogClient() {
  return (
    <main className="relative min-h-screen bg-[#20190E] text-[#C3B091] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen lg:min-h-[600px] lg:max-h-[800px] flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/hero-blog.jpeg"
          alt="Elephants on the savanna at sunset"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6E5B2C]/80 via-[#2E2414]/70 to-[#20190E]/90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl"
        >
          <h1
            className={`${satisfy.className} text-5xl md:text-7xl font-extrabold text-[#D4C49A] mb-6 leading-tight`}
          >
            Stories from the Road
          </h1>
          <p
            className={`${manrope.className} text-lg md:text-xl text-[#C3B091]/90 max-w-2xl mx-auto`}
          >
            Insider tales, travel secrets, and inspiration from Africa’s wild heart to the world’s most soul-stirring corners.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative bg-[#1A140B] rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_12px_30px_rgba(164,139,86,0.4)] transition-all duration-500"
            >
              <Link href={`/blog/${post.slug}/`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#D4C49A] text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2
                    className={`${montserrat.className} text-xl md:text-2xl font-bold text-[#D4C49A] mb-3 group-hover:text-[#BFA878] transition`}
                  >
                    {post.title}
                  </h2>
                  <p className={`${manrope.className} text-[#C3B091]/80 mb-6 line-clamp-3`}>
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-[#C3B091]/70">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-xs" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" /> {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-xs" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
