"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { montserrat, manrope } from "../fonts";
import { FaCalendarAlt, FaUser, FaClock, FaTag } from "react-icons/fa";
import { blogPosts } from "../data/lib";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-linear-to-b from-[#63581F]/40 via-black/70 to-black">
        <div className="absolute inset-0 -z-10">
          <div
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/hero-blog.jpeg')" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-6 max-w-4xl mx-auto z-10"
        >
          <h1
            className={`${montserrat.className} text-5xl md:text-7xl font-extrabold text-[#DCCAB2] mb-6 leading-tight`}
          >
            Stories from the Road
          </h1>
          <p
            className={`${manrope.className} text-lg md:text-xl text-[#DCCAB2]/90 max-w-2xl mx-auto`}
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
              className="group relative bg-zinc-950/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#DCCAB2]/20 transition-all duration-500"
            >
              <Link href={`/blog/${post.slug}/`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#DCCAB2] text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2
                    className={`${montserrat.className} text-xl md:text-2xl font-bold text-[#DCCAB2] mb-3 group-hover:text-white transition`}
                  >
                    {post.title}
                  </h2>
                  <p className={`${manrope.className} text-[#DCCAB2]/80 mb-6 line-clamp-3`}>
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-[#DCCAB2]/60">
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

        {/* Load More / Pagination Placeholder */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#DCCAB2] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#a78b66] transition-all"
          >
            Load More Stories
          </motion.button>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative bg-linear-to-t from-black to-zinc-950 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#DCCAB2] mb-6`}>
            Never Miss a Story
          </h2>
          <p className={`${manrope.className} text-[#DCCAB2]/80 text-lg mb-8`}>
            Get travel inspiration, insider tips, and exclusive offers delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-[#DCCAB2]"
            />
            <button
              type="submit"
              className="bg-[#DCCAB2] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#a78b66] transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}