"use client";
import { montserrat, manrope } from "../fonts";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FeedbackModal from "./FeedbackModal";
import { subscribe } from '../helpers/subscribe';

export default function Footer() {
  const [email, setEmail] = useState("");
  const backdropRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const quickLinks = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Safaris", src: "/safaris" },
    { name: "Book a Trip", src: "/book" }
  ];

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ type: "success" | "error" | "loading" | null; message?: string }>({ type: null });

  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();

    setModal({ type: "loading" });

    if (!email.trim()) {
      return setModal({ type: "error", message: "Please enter your email." });
    }

    setLoading(true);

    try {
      const res = await subscribe(email);

      if (!res.success) {
        const err = res.error;
        const message =
          err?.email?.[0] ||
          err?.detail ||
          "Unable to subscribe. Please try again.";

        setModal({ type: "error", message });
        return;
      }

      setModal({ type: "success", message: "Email subscribed successfully!" });
      setEmail("");
    } catch (error) {
      setModal({ type: "error", message: "Unable to subscribe. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative min-h-[600px] flex flex-col justify-center items-center text-white py-24 px-6 md:px-20 overflow-hidden bg-[#20190E]">

      {/* Backdrop with parallax */}
      <div
        ref={backdropRef}
        className="absolute inset-0 -z-20 opacity-40"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center filter blur-3xl brightness-50"
          style={{
            backgroundImage: "url('/images/kenya-backdrop.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000088]" />
      </div>

      <FeedbackModal modal={modal} setModal={setModal} pageUsedFor="Subscription" />

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#D4C49A] mb-8 text-center relative`}
      >
        Join the Journey
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-1 bg-[#D4C49A] absolute left-1/2 transform -translate-x-1/2 -bottom-2 rounded-full"
        />
      </motion.h2>

      {/* Newsletter Form */}
      <motion.form
        onSubmit={handleSubscription}
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
          className="flex-1 px-5 py-3 rounded-full bg-[#1A140B] border border-[#C3B091]/20 text-[#C3B091] placeholder-[#C3B091]/50 outline-none text-sm md:text-base focus:ring-2 focus:ring-[#D4C49A]/40 transition"
        />

        <motion.button
          variants={fadeUp}
          type="submit"
          className="bg-[#D4C49A] text-black font-semibold px-6 py-3 rounded-full text-sm md:text-base transition shadow-md hover:bg-[#BFA878]"
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
        className="flex flex-wrap justify-center gap-6 mt-12"
      >
        {quickLinks.map(({ name, src }, index) => (
          <motion.a
            key={index}
            variants={fadeUp}
            href={src}
            className="text-[#D4C49A] hover:text-[#BFA878] transition"
          >
            {name}
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
        {[
          { Icon: FaFacebookF, href: "https://facebook.com/curatedbyray" },
          { Icon: FaInstagram, href: "https://instagram.com/curatedbyray" },
          { Icon: FaTwitter, href: "https://twitter.com/curatedbyray" },
          { Icon: FaYoutube, href: "https://youtube.com/curatedbyray" },
        ].map(({ Icon, href }, idx) => (
          <motion.a
            key={idx}
            variants={fadeUp}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#BFA878]"
          >
            <Icon className="text-[#D4C49A]" />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4 }}
        className="mt-16 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#C3B091] justify-items-center md:justify-items-start text-center md:text-left"
      >
        {/* Mail */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <FaEnvelope className="text-[#D4C49A] mt-1" />
          <div>
            <p className="font-medium text-white">Mail Us</p>
            <p className={`${manrope.className}`}>
              info@curatedbyray.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <FaMapMarkerAlt className="text-[#D4C49A] mt-1" />
          <div>
            <p className="font-medium text-white">Visit Us</p>
            <p className={`${manrope.className}`}>
              Westlands, Waiyaki Way<br />
              CBD, Starehe District<br />
              Nairobi County, Kenya
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <FaPhone className="text-[#D4C49A] mt-1" />
          <div>
            <p className="font-medium text-white">Call Us</p>
            <p className={`${manrope.className}`}>
              +254 714 270 768<br />
              Mon–Fri: 8AM–6PM EAT
            </p>
          </div>
        </div>
      </motion.div>

      {/* Logo & Footer Note */}
      <div className="flex flex-col items-center mt-16 space-y-4">
        <Image
          src="/Pale Beige Logo.svg"
          alt="Curated by Ray"
          height={48}
          width={180}
          className="h-12 w-auto"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className={`${manrope.className} text-[#C3B091] text-sm md:text-base text-center`}
        >
          © {new Date().getFullYear()} Curated by Ray. All rights reserved.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={`${manrope.className} text-center text-[#C3B091]/60 text-xs`}
        >
          Nairobi, Kenya • Crafted with intention, from Africa to the world.
        </motion.p>
      </div>
    </footer>
  );
}
