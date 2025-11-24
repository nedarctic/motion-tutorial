"use client";
import { montserrat, manrope } from "../fonts";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FeedbackModal from "./FeedbackModal";
import { subscribe } from '../helpers/subscribe'

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

  const quickLinks = ["Home", "About", "Safaris", "Book a Trip"];

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ type: "success" | "error" | null; message?: string }>({ type: null });

  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();

    setModal({ type: null });

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


      // Success
      setModal({
        type: "success",
        message: "Email subscribed successfully!",
      });

      setEmail("");
    } catch (error) {
      setModal({
        type: "error",
        message: "Unable to subscribe. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative min-h-[80vh] flex flex-col justify-center items-center text-white py-24 px-6 md:px-20 overflow-hidden bg-linear-to-t from-[#63581F] via-black/30 to-black/70">
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

      <FeedbackModal modal={modal} setModal={setModal} pageUsedFor="Subscription" />

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mb-8 text-center relative`}
      >
        Join the Journey
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-1 bg-[#DCCAB2] absolute left-1/2 transform -translate-x-1/2 -bottom-2 rounded-full"
        />
      </motion.h2>

      {/* Newsletter form */}
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
          className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none text-sm md:text-base focus:ring-2 focus:ring-[#DCCAB2]/50 transition"
        />
        <motion.button
          variants={fadeUp}
          type="submit"
          className="bg-[#DCCAB2] text-black font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#a78b66] transition shadow-md"
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
            href={`/${link.toLowerCase().replace(" ", "-")}`}
            className="text-[#DCCAB2] hover:underline transition"
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
            className="hover:text-[#DCCAB2] transition"
          >
            <Icon className="text-[#DCCAB2]" />
          </motion.a>
        ))}
      </motion.div>

      {/* Company Location & Contact Info */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4 }}
        className="mt-16 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#DCCAB2]/90 justify-items-center md:justify-items-start text-center md:text-left"
      >

        {/* P.O. Box */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <FaEnvelope className="text-[#DCCAB2] mt-1 shrink-0" />
          <div>
            <p className="font-medium text-white">Mail Us</p>
            <p className={`${manrope.className}`}>
              P.O. Box 20320 00200<br />
              CITY SQUARE, Nairobi
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <FaMapMarkerAlt className="text-[#DCCAB2] mt-1 shrink-0" />
          <div>
            <p className="font-medium text-white">Visit Us</p>
            <p className={`${manrope.className}`}>
              WESTLANDS, Waiyaki Way<br />
              CBD, Starehe District<br />
              Nairobi County, Kenya
            </p>
          </div>
        </div>

        {/* Contact Placeholder */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <FaPhone className="text-[#DCCAB2] mt-1 shrink-0" />
          <div>
            <p className="font-medium text-white">Call Us</p>
            <p className={`${manrope.className}`}>
              +254 700 000 000<br />
              Mon–Fri: 8AM–6PM EAT
            </p>
          </div>
        </div>
      </motion.div>

      {/* Logo and Footer Note */}
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
          className={`${manrope.className} text-[#DCCAB2] text-sm md:text-base text-center max-w-xl`}
        >
          © {new Date().getFullYear()} Curated by Ray. All rights reserved.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={`${manrope.className} text-center text-[#DCCAB2]/60 text-xs`}
        >
          Nairobi, Kenya • Crafted with intention, from Africa to the world.
        </motion.p>
      </div>
    </footer>
  );
}