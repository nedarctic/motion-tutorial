import { satisfy, manrope, montserrat } from "../fonts";
import { Star } from "lucide-react";
import { safaris } from "../data/safarisData";
import Link from "next/link";

const destinations = safaris.slice(0, 4);

export const DestinationsCards = () => (
  <section
    id="next-section"
    className={`${manrope.className} relative min-h-screen lg:min-h-[600px] flex flex-col items-center py-20 px-8 md:px-16`}
  >
    {/* Atmospheric backdrop */}
    <div className="absolute inset-0 -z-10">
      <div
        className="w-full h-full bg-cover bg-center filter blur-2xl brightness-50 opacity-60"
        style={{ backgroundImage: `url(${destinations[0].src})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#2E2414]/70 to-black/70" />
    </div>

    {/* Intro line */}
    <p className={`${montserrat.className} text-base md:text-lg mb-4 text-center text-[#D4C49A]`}>
      Don’t know where to start?{" "}
      <span className="font-semibold text-white">
        We curated the best Kenyan travel experiences for you.
      </span>
    </p>

    {/* Section title */}
    <h2 className={`${satisfy.className} text-4xl md:text-5xl font-bold mb-14 text-center text-[#D4C49A]`}>
      Welcome to Your Next Adventure!
    </h2>

    {/* Destinations grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full px-2 md:px-4">
      {destinations.map((destination) => (
        <div
          key={destination.src}
          className="relative rounded-2xl overflow-hidden shadow-lg group h-96 bg-[#1A140B] border border-[#C3B091]/10 transition-all hover:shadow-[#A48B56]/50"
        >
          {/* Card image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${destination.src})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

          {/* Rating */}
          <div className="absolute top-4 right-4 flex items-center bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-white text-sm font-medium">
            <Star className="w-4 h-4 fill-[#D4C49A] text-[#D4C49A] mr-1" />
            <span>{(4.3 + Math.random() * 0.7).toFixed(1)}</span>
          </div>

          {/* Text + button */}
          <div className="absolute bottom-4 left-4 text-white space-y-2">
            <div>
              <h3 className={`${montserrat.className} text-lg font-semibold drop-shadow-md`}>
                {destination.title}
              </h3>
              <p className={`${montserrat.className} text-sm opacity-80`}>
                {destination.location}
              </p>
            </div>
            <Link
              href={`/explore/${destination.id}`}
              className={`${montserrat.className} bg-[#D4C49A] text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md transition hover:bg-[#BFA878]`}
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* Explore More button */}
    <div className="mt-16">
      <a
        href="/safaris"
        className={`${montserrat.className} inline-block bg-[#D4C49A] text-black text-sm md:text-base font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#BFA878] transition`}
      >
        Explore More Safaris
      </a>
    </div>
  </section>
);
