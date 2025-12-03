import type { Image, TravelVideo, Card, Safari, ClientLogo, Testimonial, TeamMember, BlogPost } from "./types";
import { Star, Compass, Heart } from "lucide-react";
import { montserrat } from "../fonts";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Magic of the Great Migration: When to Go and Why",
    excerpt: "Witness millions of wildebeest thunder across the Serengeti in one of nature’s greatest spectacles. Here’s everything you need to know to plan your front-row seat.",
    author: "Rachel K.",
    authorTitle: "Founder & Safari Architect",
    authorImage: "/Rachel Kienjeku.jpeg",
    date: "November 10, 2025",
    readTime: "8 min read",
    category: "Wildlife",
    image: "/migration.jpeg",
    slug: "great-migration-guide",
    content: `
      <p class="text-xl md:text-2xl text-[#DCCAB2]/90 leading-relaxed mb-12 font-light">
        Every year, over two million animals — mostly wildebeest, but also zebra and gazelle — embark on a 1,800-mile circular journey across Tanzania and Kenya. It is raw, chaotic, breathtaking, and utterly humbling.
      </p>
      <p class="text-[#DCCAB2]/80 leading-relaxed mb-8">
        This is the Great Migration — the largest overland migration on the planet, and without question one of the last true wilderness spectacles left on Earth.
      </p>
      <div class="my-16 relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <img src="/migration.jpeg" alt="Wildebeest leaping into the Mara River" class="w-full h-full object-cover" />
      </div>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">The Never-Ending Circle</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">The Migration follows the rains in a perpetual wheel:</p>
      <ul class="space-y-6 text-[#DCCAB2]/80 text-lg leading-relaxed mb-12 ml-6">
        <li>• <strong>Dec–Mar:</strong> Calving season in the southern Serengeti — 400,000 babies in 2–3 weeks</li>
        <li>• <strong>Apr–May:</strong> Movement north through the central and western Serengeti</li>
        <li>• <strong>Jun–Jul:</strong> First dramatic Grumeti River crossings</li>
        <li>• <strong>Jul–Oct:</strong> Iconic Mara River crossings (the ones you see on TV)</li>
        <li>• <strong>Nov:</strong> Short rains bring them south again</li>
      </ul>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">Where We Take Our Guests (And Why It Matters)</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">We don’t do lodges two hours from the action. We do:</p>
      <ul class="space-y-6 text-[#DCCAB2]/80 text-lg leading-relaxed mb-12 ml-6">
        <li>• Mobile private camps that move with the herds</li>
        <li>• Off-grid concessions — no crowds, no minibuses</li>
        <li>• Guides who predict crossings before they happen</li>
        <li>• Dawn hot-air balloon flights over the plains</li>
      </ul>
      <p class="text-xl text-[#DCCAB2]/90 leading-relaxed mb-12">
        The crossing is the climax — but the entire journey is the story. Come with us, and we’ll show you the whole film.
      </p>
    `
  },

  {
    id: 2,
    title: "Hidden Gems of Zanzibar Beyond the Beaches",
    excerpt: "Stone Town’s winding alleys, spice farms at dawn, and secret swimming spots the guidebooks miss.",
    author: "Esther N.",
    authorTitle: "Guest Relations & Island Specialist",
    authorImage: "/Esther.jpg",
    date: "October 28, 2025",
    readTime: "10 min read",
    category: "Islands",
    image: "/zanzibar-hidden.jpeg",
    slug: "zanzibar-hidden-gems",
    content: `
      <p class="text-xl md:text-2xl text-[#DCCAB2]/90 leading-relaxed mb-12 font-light">
        Everyone knows Zanzibar for its powder-white beaches and turquoise water — but the real magic happens when you step away from the sun loungers and dive into the island’s soul.
      </p>
      <div class="my-16 relative h-96 md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
        <img src="/zanzibar-hidden.jpeg" alt="Forodhani Night Market glowing at dusk" class="w-full h-full object-cover" />
      </div>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">1. Stone Town After Dark</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">UNESCO-listed by day, alive by night. The Forodhani Gardens transform into a street-food paradise while hidden rooftop bars in 150-year-old merchant houses serve spiced rum cocktails under the stars.</p>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">2. Private Spice Farm at Sunrise</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">Skip the midday tours. We collect you before dawn, drive into the misty interior, and walk between clove trees while farmers sing in Swahili and teach you to crack fresh nutmeg. Breakfast is fruit you’ve just picked.</p>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">3. Muyuni Forest Secret Swimming Holes</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">Turquoise freshwater pools fringed by jungle, natural vine swings, ancient baobabs, and zero tourists. Just monkeys and the distant sound of the Indian Ocean.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <div class="relative h-80 rounded-3xl overflow-hidden shadow-xl"><img src="/zanzibar2.jpeg" alt="Crystal-clear pool in Muyuni Forest" class="w-full h-full object-cover" /></div>
        <div class="relative h-80 rounded-3xl overflow-hidden shadow-xl"><img src="/zanzibar3.jpeg" alt="Spice farmer at sunrise" class="w-full h-full object-cover" /></div>
      </div>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">4. Private Sandbank Dinners & Dhow Sunsets</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">Restored traditional dhows, a sandbank that appears only at low tide, lanterns, grilled lobster over coconut husks, and a sky full of stars.</p>
      <p class="text-xl text-[#DCCAB2]/90 leading-relaxed mb-12">
        These are the moments most visitors never experience — because they stay on the beach. Let us peel back the layers and show you the Zanzibar that locals love.
      </p>
    `
  },

  {
    id: 3,
    title: "Why Bali Should Be Your Next Soul-Reset Destination",
    excerpt: "From rice terrace sunrises to private villa sanctuaries — how Bali blends adventure, wellness, and pure indulgence.",
    author: "Rachel K.",
    authorTitle: "Founder & Safari Architect",
    authorImage: "/Rachel Kienjeku.jpeg",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "International",
    image: "/bali-soul.jpeg",
    slug: "bali-soul-reset",
    content: `
      <p class="text-xl md:text-2xl text-[#DCCAB2]/90 leading-relaxed mb-12 font-light">
        Bali isn’t just a destination — it’s medicine for the soul. In a world that never stops, this island still knows how to make you pause, breathe, and remember who you are.
      </p>
      <div class="my-16 relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <img src="/bali-soul.jpeg" alt="Golden sunrise over Tegalalang rice terraces" class="w-full h-full object-cover" />
      </div>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">The Morning Ritual That Changes Everything</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">We start before dawn. A private driver winds up through mist-shrouded villages to a hidden ridge above Tegalalang. You’re handed a sarong, a cup of Balinese coffee, and silence. As the sun rises, the terraces turn liquid gold and the only sound is distant gamelan practice and birdsong.</p>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">Villas Designed for Recharging</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">We choose properties that feel like sanctuaries: infinity pools that merge with jungle canopy, open-air bathrooms under the stars, in-house therapists who blend traditional Balinese healing with modern techniques.</p>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">Experiences You Won’t Find on Instagram</h2>
      <ul class="space-y-6 text-[#DCCAB2]/80 text-lg leading-relaxed mb-12 ml-6">
        <li>• Sunrise purification ceremony with a 7th-generation priestess at Tirta Empul</li>
        <li>• Private breakfast floating above the Ayung River rapids</li>
        <li>• Full-moon meditation in an ancient sea temple</li>
        <li>• Farm-to-table dinner cooked by a Michelin-trained chef in a working rice field</li>
      </ul>
      <p class="text-xl text-[#DCCAB2]/90 leading-relaxed mb-12">
        Bali doesn’t ask you to escape your life — it invites you to remember the parts you’ve forgotten.
      </p>
    `
  },

  {
    id: 4,
    title: "Sustainable Safari: Traveling Africa Without Leaving a Trace",
    excerpt: "How we partner with conservancies and local communities so your journey protects the places you love.",
    author: "Dancun M.",
    authorTitle: "Conservation Director East Africa",
    authorImage: "/Dancun Mengich.jpeg",
    date: "September 30, 2025",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/sustainable-safari.jpeg",
    slug: "sustainable-safari",
    content: `
      <p class="text-xl md:text-2xl text-[#DCCAB2]/90 leading-relaxed mb-12 font-light">
        True luxury today isn’t about gold taps and marble floors. It’s about knowing that the place you fell in love with will still be there for your children — and theirs.
      </p>
      <div class="my-16 relative h-96 md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
        <img src="/sustainable-safari.jpeg" alt="Maasai warrior guiding guests through the conservancy" class="w-full h-full object-cover" />
      </div>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">Our Non-Negotiables</h2>
      <ul class="space-y-6 text-[#DCCAB2]/80 text-lg leading-relaxed mb-12 ml-6">
        <li>• 100% of our camps are in community or privately owned conservancies (not national parks)</li>
        <li>• Every guest dollar directly funds anti-poaching units, schools, clinics, and clean water projects</li>
        <li>• Carbon-neutral flights and solar-powered camps</li>
        <li>• Zero single-use plastic — ever</li>
        <li>• Local employment: 92% of our staff are from the communities surrounding the conservancies</li>
      </ul>
      <h2 class="${montserrat.className} text-3xl md:text-4xl font-bold text-[#DCCAB2] mt-20 mb-8">The Impact You Can See (and Feel)</h2>
      <p class="leading-relaxed text-[#DCCAB2]/80 mb-8">Last year alone, our guests helped:</p>
      <ul class="space-y-4 text-[#DCCAB2]/80 text-lg mb-12 ml-6">
        <li>• Plant 12,000 trees in degraded corridors</li>
        <li>• Fund 47 ranger patrols that removed 312 snares</li>
        <li>• Send 89 Maasai girls to secondary school</li>
        <li>• Install solar boreholes serving 4 villages</li>
      </ul>
      <p class="text-xl text-[#DCCAB2]/90 leading-relaxed mb-12">
        When you travel with us, you don’t just witness conservation — you become part of it.
      </p>
    `
  },
];

export const images: Image[] = [
  { src: "/kenya1.jpeg", text: "Explore Kenya’s vibrant landscapes", alt: "Kenya landscape" },
  { src: "/kenya2.jpeg", text: "Discover the beauty of Maasai Mara", alt: "Maasai Mara" },
  { src: "/kenya3.jpeg", text: "Experience the coast of Mombasa", alt: "Mombasa coast" },
  { src: "/kenya4.jpeg", text: "Adventure through Mount Kenya", alt: "Mount Kenya" },
];

export const travelVideos: TravelVideo[] = [
  { id: 1, thumbnail: "/travel1.jpeg", url: "https://youtu.be/gTEXJsw62iU?si=fConLv1MCdSnRnfD", title: "KENYA | Trip of a lifetime" },
  { id: 2, thumbnail: "/travel2.jpg", url: "https://youtu.be/mbqCXpmo15A?si=6ctcOhhr7FFipY5z", title: "Masai Mara | The Safari of a LIFETIME!" },
  { id: 3, thumbnail: "/travel3.jpeg", url: "https://youtu.be/tIwlsS71NKA?si=nHdBdsnVM22DH4y8", title: "Amboseli’s Giants: Tracking Elephants Beneath Kilimanjaro" },
  { id: 4, thumbnail: "/travel4.jpeg", url: "https://youtu.be/W7qvtRWeltw?si=HlJhvhrQSrLUNesV", title: "Wonders of Kenya | Most Beautiful Places to Visit in Kenya | Travel Video 4K" },
];

export const team: TeamMember[] = [
  {
    name: "Rachel Kienjeku",
    role: "Founder & Lead Curator",
    img: "/Rachel Kienjeku.jpeg",
    slug: "rachel-kienjeku",
    bio: `Rachel Kienjeku is a seasoned hotelier whose career has been built on the front lines of hospitality. With years of experience in front office operations, reservations, guest relations, and general hotel management, she developed a rare understanding of what truly defines an exceptional travel experience: care, intention, comfort, and seamless coordination. From welcoming first-time travelers to resolving complex guest needs with calm precision, Rachel mastered the art of making people feel seen, supported, and at ease. Her talent wasn’t just operational — it was deeply human. Inspired by countless guests who told her she made their journey feel effortless, Rachel founded Curated by Ray. Today, she uses her hospitality expertise to design travel experiences that carry the same warmth and professionalism she perfected in the hotel world. With a hotelier’s eye for detail and a curator’s love for exploration, Rachel creates journeys that feel personal, smooth, and unforgettable.`,
  },
  {
    name: "Caroline Wainaina",
    role: "Travel Experience Curator",
    img: "/Caroline Wainaina.jpg",
    slug: "caroline-wainaina",
    bio: "Caroline ensures every guest feels at home from first inquiry to the final farewell — balancing expertise, empathy, and seamless communication.",
  },
  {
    name: "Esther Ndung'u",
    role: "Reservations & Guest Relations",
    img: "/Esther.jpg",
    slug: "esther-ndungu",
    bio: "Esther is your bridge to authentic local immersion, bringing deep knowledge of Zanzibar’s rhythms, Kenya’s savannas, and the human side of travel hospitality.",
  },
  {
    name: "Dancun Mengich",
    role: "Operations Coordinator",
    img: "/Dancun Mengich.jpeg",
    slug: "dancun-mengich",
    bio: "Dancun is the operations brain ensuring smooth safaris, organized logistics, and highly coordinated travel experiences from end to end.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alice M.",
    text: "The safari experience was absolutely breathtaking! Everything was perfectly organized, and the wildlife sightings were unforgettable.",
    location: "Nairobi, Kenya",
    image: "/alice.jpeg",
  },
  {
    name: "John K.",
    text: "Curated by Ray made our Kenya trip seamless and magical. Every detail was taken care of, and the guides were incredibly knowledgeable.",
    location: "London, UK",
    image: "/john.jpeg",
  },
  {
    name: "Sophia R.",
    text: "I can’t recommend them enough! The safaris were immersive, the accommodations luxurious, and the overall experience beyond expectations.",
    location: "New York, USA",
    image: "/sophia.jpeg",
  },
];

export const clientLogos: ClientLogo[] = [
  { name: "Kenya Wildlife Service", src: "/logo1.jpeg" },
  { name: "National Geographic", src: "/logo2.jpeg" },
  { name: "Safari Bookings", src: "/logo3.jpeg" },
  { name: "Trip Advisor", src: "/logo4.jpeg" },
];

export const cards: Card[] = [
  {
    icon: Compass,
    title: "We Know the Way",
    text: "From untouched conservancies to coastal hideaways, our knowledge runs deeper than any search result. We take you where Kenya still feels pure.",
  },
  {
    icon: Heart,
    title: "We Travel with Heart",
    text: "Our journeys sustain local communities and celebrate real connection with nature, with people, with yourself.",
  },
  {
    icon: Star,
    title: "We Set the Standard",
    text: "“Curated” isn’t just a name, it’s our principle. Every lodge, every guide, every experience meets a level of care few can match.",
  },
];



