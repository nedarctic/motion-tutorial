"use client";

import { motion } from "framer-motion";
import { satisfy, manrope, montserrat } from "../fonts";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import FeedbackModal from "../components/FeedbackModal";
import { sendMessage } from "../helpers/sendMessage";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travel_dates: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ type: "success" | "error"| "loading" | null; message?: string }>({ type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModal({ type: "loading" });
    setLoading(true);

    const result = await sendMessage(formData);

    if (!result.success) {
      setModal({ type: "error", message: result.error });
      setLoading(false);
      return;
    }

    setModal({ type: "success", message: "Your message has been sent. We’ll get back to you within 24 hours!" });

    setFormData({ name: "", email: "", phone: "", travel_dates: "", message: "" });
    setLoading(false);
  };

  return (
    <main className={`${manrope.className} min-h-screen bg-[#20190E] text-white overflow-hidden`}>
      <FeedbackModal modal={modal} setModal={setModal} pageUsedFor="Send Message"/>

      {/* Hero */}
      <section className="relative h-screen lg:min-h-[600px] flex items-center justify-center text-center px-6">
        <Image
          src="/contact-hero.jpeg"
          alt="Kenya landscape"
          fill
          className="object-cover brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#6E5B2C]/80 via-[#2E2414]/70 to-[#20190E]/90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className={`${satisfy.className} text-6xl md:text-8xl font-bold text-[#D4C49A] mb-8`}>
            Let’s Write Your Story
          </h1>
          <p className={`${montserrat.className} text-xl md:text-2xl text-[#C3B091] max-w-3xl mx-auto leading-relaxed`}>
            Every great journey begins with a conversation. Tell us your dreams, we will turn them into reality.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="relative py-32 px-6 md:px-12">
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
              className="px-4 mx-auto"
            >
              <h2 className={`${satisfy.className} text-center text-5xl md:text-6xl text-[#D4C49A] mb-8`}>
                Get in Touch
              </h2>
              <p className={`${montserrat.className} text-[#C3B091] text-lg leading-relaxed max-w-lg`}>
                Whether you know exactly what you want or you’re just starting to dream,
                we’re here to listen and guide you every step of the way.
              </p>
            </motion.div>

            <div className="space-y-8 flex flex-col items-start shrink justify-center w-11/12 sm:full">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+254 714 270 768" },
                { icon: Mail, label: "Email", value: "bookings@curatedbyray.com" },
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
                  <div className="p-4 bg-[#D4C49A]/10 border border-[#D4C49A]/30 rounded-2xl">
                    <item.icon className="w-7 h-7 text-[#D4C49A]" />
                  </div>
                  <div>
                    <p className="text-[#C3B091]/70 text-sm">{item.label}</p>
                    <p className={`${montserrat.className} text-sm font-medium text-white shrink`}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`${montserrat.className} text-center italic text-[#C3B091] text-lg pt-10 border-t border-white/10`}
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
            className="bg-[#1A140B]/50 mx-auto backdrop-blur-2xl border border-[#C3B091]/10 rounded-3xl p-6 md:p-12 shadow-2xl w-11/12 sm:full"
          >
            <h3 className={`${montserrat.className} mx-auto text-2xl font-semibold text-[#D4C49A] mb-8`}>
              Start Your Journey Today
            </h3>
            
            <form onSubmit={handleSubmit} className="mx-auto space-y-7 w-11/12">
              {["name","email","phone","travel_dates"].map((field,i)=>(
                <input
                  key={i}
                  type={field==="email"?"email":field==="phone"?"tel":"text"}
                  name={field}
                  placeholder={field.replace("_"," ").replace(/\b\w/g, c => c.toUpperCase())}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#D4C49A] transition"
                />
              ))}

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your dream trip… (group size, interests, budget, anything!)"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#D4C49A] transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#D4C49A] text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#BFA878] transition text-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-linear-to-t from-black to-[#20190E]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`${satisfy.className} text-4xl md:text-5xl text-[#D4C49A] shrink px-4`}
        >
          Your Curated chapter starts here.
        </motion.p>
      </section>
    </main>
  );
}
