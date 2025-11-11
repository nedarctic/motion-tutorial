"use client";

import { montserrat, manrope } from "../fonts";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const backdropRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };
  const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  const quickLinks = ["Home", "About", "Safaris", "Book a Trip"];

  return (
    <footer className="relative min-h-[80vh] flex flex-col justify-center items-center text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Distant backdrop with parallax */}
      <div
        ref={backdropRef}
        className="absolute inset-0 -z-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center filter blur-3xl brightness-50 opacity-50"
          style={{ backgroundImage: "url('/images/kenya-backdrop.jpg')" }}
        />
      </div>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`${montserrat.className} text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center relative`}
      >
        Join the Journey
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-1 bg-yellow-400 absolute left-1/2 transform -translate-x-1/2 -bottom-2 rounded-full"
        />
      </motion.h2>

      {/* Newsletter form */}
      <motion.form
        onSubmit={handleSubscribe}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row gap-4 w-full max-w-2xl items-center"
      >
        <motion.input
          variants={fadeUp}
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none text-sm md:text-base"
        />
        <motion.button
          variants={fadeUp}
          type="submit"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-yellow-300 transition"
        >
          Subscribe
        </motion.button>
      </motion.form>

      {/* Quick Links */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-6 mt-12 text-white/80"
      >
        {quickLinks.map((link, idx) => (
          <motion.a
            key={idx}
            variants={fadeUp}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="hover:text-yellow-400 transition"
          >
            {link}
          </motion.a>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex gap-6 mt-6 text-lg md:text-xl"
      >
        {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
          <motion.a
            key={idx}
            variants={fadeUp}
            href="#"
            className="hover:text-yellow-400 transition"
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>

      {/* Logo and Footer Note */}
      <div className="flex flex-col items-center mt-12 space-y-2">
        <Image
          src="/light-logo.svg"
          alt="Curated by Ray"
          className="h-10 w-auto"
          height={300}
          width={300}
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className={`${manrope.className} text-gray-400 text-sm md:text-base text-center max-w-xl`}
        >
          &copy; {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
