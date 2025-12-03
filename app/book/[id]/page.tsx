"use client";

import { usePathname, useRouter } from "next/navigation";
import { safaris } from "../../data/safarisData";
import { motion } from "framer-motion";
import { montserrat, manrope } from "../../fonts";
import { useMemo, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { bookExperience } from "../../helpers/bookExperience";
import FeedbackModal from '../../components/FeedbackModal';

export default function BookTripPage() {
  const pathname = usePathname();
  const router = useRouter();

  const safariId = pathname?.split("/").filter(Boolean).pop() || "";
  const safari = useMemo(() => safaris.find((s) => s.id === safariId), [safariId]);

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/safaris");
  };

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    travel_date: "",
    special_requests: "",
  });

  const [modal, setModal] = useState<{ type: "success" | "error" | "loading" | null; message?: string }>({ type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModal({ type: "loading" });

    const result = await bookExperience(formData);

    if (!result.success) {
      setModal({ type: "error", message: result.error });
      return;
    }

    setModal({ type: "success", message: "Your booking was successful. We’ll get back to you shortly!" });
    setFormData({ full_name: "", email: "", phone: "", travel_date: "", special_requests: "" });
  };

  if (!safari) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#20190E] text-white">
        <h1 className="text-2xl text-red-500">Safari not found</h1>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <FeedbackModal modal={modal} setModal={setModal} pageUsedFor="Booking" />

      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${safari.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#6E5B2C]/70 via-[#2E2414]/70 to-[#20190E]/90 backdrop-blur-sm" />

      <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32">

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="my-6 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition z-20"
        >
          <AiOutlineArrowLeft className="text-white w-6 h-6" />
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#D4C49A] mb-6`}
        >
          Book Your {safari.title} Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg md:text-xl text-[#C3B091] mb-12 max-w-3xl ${manrope.className}`}
        >
          Fill in your details below and our team will get in touch to help you
          plan your unforgettable journey to {safari.location}.
        </motion.p>

        {/* Booking Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#1A140B]/80 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-[#C3B091]/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name", name: "full_name", type: "text", placeholder: "Your name" },
              { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
              { label: "Phone Number", name: "phone", type: "tel", placeholder: "+254 700 000 000" },
              { label: "Preferred Travel Date", name: "travel_date", type: "date", placeholder: "" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm text-[#C3B091] mb-2">{field.label}</label>
                <input
                  type={field.type}
                  required
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#20190E]/50 text-white placeholder-[#C3B091] border border-[#C3B091]/20 focus:outline-none focus:border-[#D4C49A] transition"
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="block text-sm text-[#C3B091] mb-2">Special Requests</label>
              <textarea
                rows={4}
                name="special_requests"
                value={formData.special_requests}
                onChange={handleChange}
                placeholder="Let us know your preferences..."
                className="w-full px-4 py-3 rounded-xl bg-[#20190E]/50 text-white placeholder-[#C3B091] border border-[#C3B091]/20 focus:outline-none focus:border-[#D4C49A] resize-none transition"
              ></textarea>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="bg-[#D4C49A] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#BFA878] transition-transform transform hover:scale-105"
            >
              Submit Booking Request
            </button>
          </div>
        </motion.form>
      </section>
    </main>
  );
}
