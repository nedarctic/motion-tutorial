"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { montserrat, manrope } from "../fonts";
import { team } from "../data/lib";

export default function AboutClient() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-[#20190E]">

      {/* Hero Banner */}
      <section className="relative h-screen lg:min-h-[600px] lg:max-h-[800px] w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#6E5B2C] via-[#2E2414]/70 to-[#20190E]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className={`${montserrat.className} text-4xl md:text-7xl font-extrabold text-[#D4C49A] mb-6 leading-tight`}>
            Where Every Journey Is Thoughtfully Curated.
          </h1>
          <p className={`${manrope.className} text-lg md:text-xl text-[#C3B091] mb-10 max-w-3xl mx-auto`}>
            Boutique travel experiences designed with intention, style, and heart — from Africa’s wild treasures to the world’s hidden gems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/book"
              className={`${manrope.className} bg-[#D4C49A] text-[#20190E] font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#BFA878] transition-all`}
            >
              Plan Your Trip
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/safaris"
              className={`${manrope.className} border-2 border-[#D4C49A] text-[#D4C49A] font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#D4C49A] hover:text-[#20190E] transition-all`}
            >
              Explore Destinations
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className={`${montserrat.className} text-3xl md:text-5xl font-bold text-[#D4C49A] mb-8`}>
            About Curated By Ray
          </h2>
          <p className={`${manrope.className} text-[#C3B091] text-lg leading-relaxed max-w-4xl mx-auto`}>
            Curated By Ray is a boutique travel company dedicated to crafting seamless, personalized journeys across Africa and beyond. Every itinerary reflects your rhythm, curiosity, and sense of adventure.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-[#1A140B] border-t border-[#C3B091]/20 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-[#D4C49A] mb-4`}>Our Mission</h3>
            <p className={`${manrope.className} text-[#C3B091] leading-relaxed`}>
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
            <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-[#D4C49A] mb-4`}>Our Vision</h3>
            <p className={`${manrope.className} text-[#C3B091] leading-relaxed`}>
              To become the most trusted boutique travel brand from Kenya — known for curating inspiring journeys that celebrate culture, nature, and individuality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center text-[#D4C49A] mb-6`}
        >
          Meet the Curators
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`${manrope.className} text-[#C3B091] text-center max-w-3xl mx-auto mb-16`}
        >
          Behind every itinerary is a team of passionate travel curators who blend local insight with global perspective.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative bg-gradient-to-br from-[#C3B091]/10 to-[#C3B091]/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#A48B56]/50 transition-all"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000088] to-transparent" />
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className={`${montserrat.className} text-xl font-bold`}>
                  {member.name}
                </h3>
                <p className={`${manrope.className} text-sm opacity-90`}>
                  {member.role}
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={`/about/${member.slug}`}
                  className={`${manrope.className} inline-block mt-4 px-5 py-2 rounded-full text-sm font-semibold bg-[#D4C49A] text-[#20190E] shadow-md hover:bg-[#BFA878] transition-all`}
                >
                  Read Bio
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="relative bg-[#1A140B] border-t border-[#C3B091]/20 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${montserrat.className} text-3xl md:text-4xl font-bold text-center text-[#D4C49A] mb-16`}
          >
            Why Choose Curated By Ray
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎨",
                title: "Personalized",
                text: "Seamless travel planning tailored to your style and preferences.",
              },
              {
                icon: "💎",
                title: "Handpicked",
                text: "Destinations chosen for authenticity, comfort, and exclusivity.",
              },
              {
                icon: "🤝",
                title: "Local Partnerships",
                text: "Meaningful connections with trusted guides and communities.",
              },
              {
                icon: "🛎️",
                title: "Concierge-Style",
                text: "24/7 support and thoughtful touches throughout your journey.",
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
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className={`${montserrat.className} text-xl font-semibold text-[#D4C49A] mb-2`}>
                  {item.title}
                </h3>
                <p className={`${manrope.className} text-[#C3B091]/80 text-sm`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-t from-[#20190E] to-[#1A140B] py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold text-[#D4C49A] mb-6`}>
            Ready to start your curated journey?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/destinations"
              className={`${manrope.className} bg-[#D4C49A] text-[#20190E] font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#BFA878] transition-all`}
            >
              Explore Destinations
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className={`${manrope.className} border-2 border-[#D4C49A] text-[#D4C49A] font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#D4C49A] hover:text-[#20190E] transition-all`}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
