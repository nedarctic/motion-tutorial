"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { montserrat, manrope } from "../fonts";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-black overflow-hidden">
      {/* Section 1: Hero Banner */}
      <section className="relative h-[85vh] w-full flex flex-col items-center justify-center bg-linear-to-b from-[#63581F] via-black/40 to-black/80">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1
            className={`${montserrat.className} text-4xl py-4 md:text-7xl font-extrabold text-[#DCCAB2] mb-6 leading-tight`}
          >
            Where Every Journey Is Thoughtfully Curated.
          </h1>
          <p
            className={`${manrope.className} text-lg md:text-xl text-[#DCCAB2] mb-10 max-w-3xl mx-auto`}
          >
            Boutique travel experiences designed with intention, style, and heart from Africa’s wild treasures to the world’s hidden gems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/book"
              className={`${manrope.className} bg-[#DCCAB2] text-black font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#a78b66] transition-all`}
            >
              Plan Your Trip
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/safaris"
              className={`${manrope.className} border-2 border-[#DCCAB2] text-[#DCCAB2] font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#DCCAB2] transition-all`}
            >
              Explore Destinations
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Section 2: About Us (Main Intro) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className={`${montserrat.className} text-3xl md:text-5xl font-bold text-[#DCCAB2] mb-8`}
          >
            About Curated By Ray
          </h2>
          <p
            className={`${manrope.className} text-[#DCCAB2] text-lg leading-relaxed max-w-4xl mx-auto`}
          >
            Curated By Ray is a boutique travel company dedicated to crafting seamless, personalized journeys across Africa and beyond. From Kenya’s wild heartlands to the tropical escapes of Zanzibar, Dubai, and Bali, every itinerary is designed to reflect your rhythm, curiosity, and sense of adventure. We believe travel should feel effortless yet extraordinary — guided by detail, intention, and care. Whether it’s a family getaway, romantic escape, or curated group experience, we bring destinations to life through comfort, connection, and local expertise.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section className="relative bg-zinc-950/70 border-t border-white/10 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-[#DCCAB2] mb-4`}
            >
              Our Mission
            </h3>
            <p className={`${manrope.className} text-[#DCCAB2] leading-relaxed`}>
              To create meaningful, memorable, and authentic travel experiences that connect people to the beauty, culture, and spirit of every destination.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-[#DCCAB2] mb-4`}
            >
              Our Vision
            </h3>
            <p className={`${manrope.className} text-[#DCCAB2] leading-relaxed`}>
              To become the most trusted boutique travel brand from Kenya — known for curating inspiring journeys that celebrate culture, nature, and individuality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Meet the Team */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center text-[#DCCAB2] mb-6`}
        >
          Meet the Curators
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`${manrope.className} text-[#DCCAB2] text-center max-w-3xl mx-auto mb-16`}
        >
          Behind every itinerary is a team of passionate travel curators who blend local insight with global perspective. We go beyond standard travel planning — every trip is personalized, guided, and thoughtfully detailed from start to finish.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ray",
              role: "Founder & Lead Travel Curator",
              img: "/team-ray.jpeg",
              bio: "Visionary behind every curated journey, with over a decade of exploring Africa’s hidden paths.",
            },
            {
              name: "Amina",
              role: "Guest Relations Manager",
              img: "/team-guest.jpeg",
              bio: "Ensures every guest feels at home from the first inquiry to the final farewell.",
            },
            {
              name: "Juma",
              role: "Destination Expert, East Africa & Islands",
              img: "/team-expert.jpeg",
              bio: "Master of Zanzibar’s tides and Kenya’s savannas — your guide to authentic local immersion.",
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative bg-linear-to-br from-[#DCCAB2]/10 to-[#DCCAB2]/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#836a4a]/50 transition-all"
            >
              <div className="aspect-w-1 aspect-h-1 relative h-80 overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className={`${montserrat.className} text-xl font-bold`}>{member.name}</h3>
                <p className={`${manrope.className} text-sm opacity-90`}>{member.role}</p>
                <p className={`${manrope.className} text-sm mt-2 opacity-80`}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Why Travel With Us */}
      <section className="relative bg-zinc-950/70 border-t border-white/10 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center text-[#DCCAB2] mb-16`}
          >
            Why Choose Curated By Ray
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎨",
                title: "Personalized",
                text: "Seamless travel planning tailored to your unique style and preferences.",
              },
              {
                icon: "💎",
                title: "Handpicked",
                text: "Destinations and experiences selected for authenticity and exclusivity.",
              },
              {
                icon: "🤝",
                title: "Local Partnerships",
                text: "Trusted guides and community ties that open doors to real culture.",
              },
              {
                icon: "🛎️",
                title: "Concierge-Style",
                text: "24/7 support and thoughtful touches throughout your entire journey.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{item.icon}</div>
                <h3 className={`${montserrat.className} text-xl font-semibold text-[#DCCAB2] mb-2`}>
                  {item.title}
                </h3>
                <p className={`${manrope.className} text-[#DCCAB2]/80 text-sm`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Call-to-Action */}
      <section className="relative bg-linear-to-t from-black to-zinc-950 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2
            className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#DCCAB2] mb-6`}
          >
            Ready to start your curated journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/destinations"
              className={`${manrope.className} bg-[#DCCAB2] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#a78b66] transition-all`}
            >
              Explore Destinations
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className={`${manrope.className} border-2 border-[#DCCAB2] text-[#DCCAB2] font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#DCCAB2] hover:text-black transition-all`}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}