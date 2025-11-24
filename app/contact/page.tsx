"use client";

import { motion } from "framer-motion";
import { satisfy, manrope, montserrat } from "../fonts";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import FeedbackModal from "../components/FeedbackModal";
import { sendMessage } from "../helpers/sendMessage";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travel_dates: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{
    type: "success" | "error" | null;
    message?: string;
  }>({ type: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setModal({ type: null });
    setLoading(true);

    const result = await sendMessage(formData);

    if (!result.success) {
      setModal({ type: "error", message: result.error });
      setLoading(false);
      return;
    }

    // Success
    setModal({
      type: "success",
      message: "Your message has been sent. We’ll get back to you within 24 hours!",
    });

    // Clear inputs
    setFormData({
      name: "",
      email: "",
      phone: "",
      travel_dates: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <main className={`${manrope.className} min-h-screen bg-black text-white overflow-hidden`}>


      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <Image
          src="/contact-hero.jpeg"
          alt="Kenya landscape"
          fill
          className="object-cover brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className={`${satisfy.className} text-6xl md:text-8xl font-bold text-[#DCCAB2] mb-8`}>
            Let’s Write Your Story
          </h1>
          <p className={`${montserrat.className} text-xl md:text-2xl text-[#DCCAB2] max-w-3xl mx-auto leading-relaxed`}>
            Every great journey begins with a conversation. Tell us your dreams, we will turn them into reality.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="relative py-32 px-6 md:px-12">
        {/* Atmospheric blurred backdrop */}
        <div className="absolute inset-0 -z-10 opacity-50">
          <div
            className="w-full h-full bg-cover bg-center filter blur-3xl brightness-40"
            style={{ backgroundImage: "url('/kenya-golden-hour.jpeg')" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Left: Contact Details */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`${satisfy.className} text-5xl md:text-6xl text-[#DCCAB2] mb-8`}>
                Get in Touch
              </h2>
              <p className={`${montserrat.className} text-[#DCCAB2] text-lg leading-relaxed max-w-lg`}>
                Whether you know exactly what you want or you’re just starting to dream,
                we’re here to listen and guide you every step of the way.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+254 712 345 678" },
                { icon: Mail, label: "Email", value: "ray@curatedbyray.com" },
                { icon: MapPin, label: "Based in", value: "Nairobi, Kenya" },
                { icon: Clock, label: "Response Time", value: "Within 24 hours" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-center gap-6"
                >
                  <div className="p-4 bg-[#DCCAB2]/10 border border-[#DCCAB2]/30 rounded-2xl">
                    <item.icon className="w-7 h-7 text-[#DCCAB2]" />
                  </div>
                  <div>
                    <p className="text-[#DCCAB2]/70 text-sm">{item.label}</p>
                    <p className={`${montserrat.className} text-lg font-medium text-white`}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof Accent */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`${montserrat.className} italic text-[#DCCAB2] text-lg pt-10 border-t border-white/10`}
            >
              “We don't just plan trips, we create memories that last a lifetime.”
            </motion.p>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-12 shadow-2xl"
          >
            <h3 className={`${montserrat.className} text-2xl font-semibold text-[#DCCAB2] mb-8`}>
              Start Your Journey Today
            </h3>
            <FeedbackModal modal={modal} setModal={setModal} pageUsedFor="Send Message"/>
            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#DCCAB2] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#DCCAB2] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#DCCAB2] transition"
              />

              <input
                type="text"
                name="travel_dates"
                placeholder="Preferred Travel Dates (optional)"
                value={formData.travel_dates}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#DCCAB2] transition"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your dream trip… (group size, interests, budget, anything!)"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#DCCAB2] transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#DCCAB2] text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#c5b09a] transition text-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-linear-to-t from-black to-zinc-950">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`${satisfy.className} text-4xl md:text-5xl text-[#DCCAB2]`}
        >
          Your Curated chapter starts here.
        </motion.p>
      </section>
    </main>
  );
}