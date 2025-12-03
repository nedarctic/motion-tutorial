"use client";

import { motion } from "framer-motion";
import { safaris } from "../data/safarisData";
import { montserrat, manrope } from "../fonts";
import Link from "next/link";
import { useState } from "react";
import { bookExperience } from "../helpers/bookExperience";
import FeedbackModal from '../components/FeedbackModal';

export default function BookPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    special_requests: "",
    custom_destination_name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ type: "success" | "error" | "loading" | null; message?: string }>({ type: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setModal({ type: "loading" });
    setLoading(true);

    const result = await bookExperience(formData);

    if (!result.success) {
      setModal({ type: "error", message: result.error });
      setLoading(false);
      return;
    }

    setModal({ type: "success", message: "Your booking was successful. We’ll get back to you shortly!" });

    setFormData({
      full_name: "",
      email: "",
      special_requests: "",
      custom_destination_name: "",
    });

    setLoading(false);
  };

  return (
    <main className={`${manrope.className} relative min-h-screen text-white overflow-hidden bg-[#20190E]`}>
      <FeedbackModal modal={modal} setModal={setModal} pageUsedFor="Booking"/>

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/book-bg.jpg')] bg-cover bg-center brightness-75" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-28">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-center text-[#D4C49A] mb-6`}
        >
          Book a Trip
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-center text-lg md:text-xl text-[#C3B091] max-w-3xl mx-auto ${manrope.className} mb-12`}
        >
          Choose from our handpicked safaris or create your own dream experience — we’ll make it happen.
        </motion.p>

        {/* Safaris Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {safaris.map((safari, idx) => (
            <motion.div
              key={safari.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 bg-[#1A140B]"
            >
              <img
                src={safari.src}
                alt={safari.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className={`text-xl font-semibold mb-2 text-[#D4C49A] ${montserrat.className}`}>
                  {safari.title}
                </h3>
                <p className={`text-sm text-[#C3B091] mb-4 ${manrope.className}`}>{safari.location}</p>
                <Link
                  href={`/book/${safari.id}`}
                  className="inline-block bg-[#D4C49A] text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#BFA878] transition"
                >
                  Book This Safari
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center my-16"
        >
          <div className="h-px w-1/4 bg-[#C3B091]/20" />
          <span className="mx-4 text-[#C3B091]/50">OR</span>
          <div className="h-px w-1/4 bg-[#C3B091]/20" />
        </motion.div>

        {/* Custom Safari Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#1A140B]/80 border border-[#C3B091]/10 rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto"
        >
          <h2 className={`text-2xl md:text-3xl font-bold text-[#D4C49A] mb-6 text-center ${montserrat.className}`}>
            Plan a Custom Safari
          </h2>

          <p className={`text-[#C3B091] text-center mb-8 ${manrope.className}`}>
            Have a specific destination or experience in mind? Tell us about it, and we’ll tailor a safari just for you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="md:col-span-2">
              <label className="block text-sm text-[#C3B091] mb-2">Safari Name or Destination</label>
              <input
                type="text"
                required
                name="custom_destination_name"
                value={formData.custom_destination_name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#2E2414]/30 text-white placeholder-[#C3B091]/50 border border-[#C3B091]/20 focus:outline-none focus:border-[#D4C49A]"
                placeholder="e.g., Serengeti Adventure"
              />
            </div>

            <div>
              <label className="block text-sm text-[#C3B091] mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#2E2414]/30 text-white placeholder-[#C3B091]/50 border border-[#C3B091]/20 focus:outline-none focus:border-[#D4C49A]"
                placeholder="Your name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm text-[#C3B091] mb-2">Email Address</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#2E2414]/30 text-white placeholder-[#C3B091]/50 border border-[#C3B091]/20 focus:outline-none focus:border-[#D4C49A]"
                placeholder="you@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-[#C3B091] mb-2">Tell Us About Your Dream Safari</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#2E2414]/30 text-white placeholder-[#C3B091]/50 border border-[#C3B091]/20 focus:outline-none focus:border-[#D4C49A] resize-none"
                placeholder="Describe your ideal adventure..."
                name="special_requests"
                value={formData.special_requests}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#D4C49A] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#BFA878] transition-all"
              >
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
