import { satisfy, manrope, montserrat } from "../fonts";
import { Star } from "lucide-react";
import { images } from "../data/lib";

{/* Destination Cards Section */}

export const DestionationsCards = () => (
      <section
        id="next-section"
        className={`${manrope.className} min-h-screen bg-white text-black py-20 px-6 flex flex-col items-center`}
      >
        <h2
          className={`${satisfy.className} text-4xl font-bold mb-12 text-gray-900`}
        >
          Welcome to Your Next Adventure
        </h2>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-96"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
              />

              {/* Vignette (dark gradient at bottom) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* Rating (top-right) */}
              <div className="absolute top-4 right-4 flex items-center bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-white text-sm font-medium">
                <Star
                  className={`${montserrat.className} w-4 h-4 fill-yellow-400 text-yellow-400 mr-1`}
                />
                <span>{(4.3 + Math.random() * 0.7).toFixed(1)}</span>
              </div>

              {/* Bottom-left text + button */}
              <div className="absolute bottom-4 left-4 text-white space-y-2">
                <div>
                  <h3
                    className={`${montserrat.className} text-lg font-semibold drop-shadow-md`}
                  >
                    {img.text}
                  </h3>
                  <p
                    className={`${montserrat.className} text-sm opacity-80`}
                  >
                    {img.alt}
                  </p>
                </div>

                {/* Explore Button */}
                <button
                  className={`${montserrat.className} bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md hover:bg-yellow-300 transition`}
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
)