import type { Image, TravelVideo, Card, Safari, ClientLogo, Testimonial } from "./types";
import { Star, Compass, Heart } from "lucide-react";

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

export const safaris: Safari[] = [
  {
    id: "maasai-mara",
    src: "/kenya1.jpeg",
    title: "Explore Kenya’s vibrant landscapes",
    location: "Kenya",
    rating: 4.8,
    description: "A journey through Kenya's most stunning landscapes and wildlife.",
    detailedDescription: "Embark on an unforgettable journey across Kenya’s iconic landscapes, from rolling savannahs to dense forests. Witness the diverse wildlife and immerse yourself in the country’s vibrant natural beauty."
  },
  {
    id: "maasai-mara-2",
    src: "/kenya2.jpeg",
    title: "Discover the beauty of Maasai Mara",
    location: "Maasai Mara",
    rating: 4.7,
    description: "Witness the Great Migration and experience authentic safari adventures.",
    detailedDescription: "Experience the thrill of the Great Migration and encounter Africa’s Big Five in the Maasai Mara. Enjoy guided safaris, cultural interactions with Maasai communities, and breathtaking sunsets over endless plains."
  },
  {
    id: "mombasa-coast",
    src: "/kenya3.jpeg",
    title: "Experience the coast of Mombasa",
    location: "Mombasa",
    rating: 4.6,
    description: "Relax on pristine beaches and explore the vibrant coastal culture.",
    detailedDescription: "Discover Mombasa’s stunning coastline with white sandy beaches and turquoise waters. Explore rich Swahili culture, historic forts, and lively markets while enjoying luxurious seaside retreats."
  },
  {
    id: "mount-kenya",
    src: "/kenya4.jpeg",
    title: "Adventure through Mount Kenya",
    location: "Mount Kenya",
    rating: 4.9,
    description: "Hike through alpine forests and witness breathtaking mountain vistas.",
    detailedDescription: "Challenge yourself with hikes along Mount Kenya’s rugged trails, traverse alpine forests, and reach breathtaking peaks. Marvel at glaciers, wildlife, and panoramic views that make this UNESCO World Heritage Site truly spectacular."
  },
  { id: "safari-5", src: "/kenya5.jpeg", title: "Wildlife of Amboseli", location: "Amboseli", rating: 4.7, description: "Spot elephants with the iconic Mount Kilimanjaro in the background.", detailedDescription: "Amboseli National Park offers iconic views of Mount Kilimanjaro and its vast herds of elephants. Experience guided game drives, birdwatching, and photography opportunities in this scenic paradise." },
  { id: "safari-6", src: "/kenya6.jpeg", title: "Lake Naivasha Retreat", location: "Lake Naivasha", rating: 4.6, description: "Boat safaris and birdwatching in a serene freshwater lake setting.", detailedDescription: "Relax on the shores of Lake Naivasha, enjoy boat safaris among hippos and birds, and explore the surrounding wildlife conservancies. Ideal for both adventure and serenity." },
  { id: "safari-7", src: "/kenya7.jpeg", title: "Samburu Adventure", location: "Samburu", rating: 4.8, description: "Experience Northern Kenya’s unique wildlife and culture.", detailedDescription: "Venture into Samburu’s arid landscapes and encounter rare species like the Grevy’s zebra and reticulated giraffe. Engage with local Samburu communities and enjoy authentic cultural experiences." },
  { id: "safari-8", src: "/kenya8.jpeg", title: "Tsavo East Safari", location: "Tsavo East", rating: 4.5, description: "Explore Kenya’s vast wilderness and red earth landscapes.", detailedDescription: "Explore one of Kenya’s largest parks, Tsavo East, with dramatic red landscapes and abundant wildlife. Spot elephants, lions, and leopards while enjoying the raw, untamed beauty of the region." },
  { id: "safari-9", src: "/kenya9.jpeg", title: "Lake Turkana Expedition", location: "Lake Turkana", rating: 4.4, description: "Visit the largest desert lake and discover remote wildlife.", detailedDescription: "Lake Turkana, Africa’s largest desert lake, offers unique landscapes and remote wildlife encounters. Explore volcanic islands, fossil sites, and witness a truly untouched environment." },
  { id: "safari-10", src: "/kenya10.jpeg", title: "Nairobi National Park", location: "Nairobi", rating: 4.6, description: "Get a safari experience just outside Kenya’s capital city.", detailedDescription: "Enjoy the convenience of Nairobi National Park where city skyline meets wildlife. Spot rhinos, lions, and giraffes in a unique urban safari experience." },
  { id: "safari-11", src: "/kenya11.jpeg", title: "Hell’s Gate Hike", location: "Naivasha", rating: 4.7, description: "Cycle and hike through dramatic gorges and wildlife trails.", detailedDescription: "Hell’s Gate National Park offers thrilling hikes and cycling paths through dramatic gorges. Witness cliffs, geothermal features, and a variety of wildlife along scenic trails." },
  { id: "safari-12", src: "/kenya12.jpeg", title: "Meru Wildlife Safari", location: "Meru", rating: 4.5, description: "Follow in the footsteps of Elsa, the famous lioness.", detailedDescription: "Explore Meru National Park, famed as the home of Elsa the Lioness from the classic story. Enjoy guided safaris, abundant wildlife, and pristine natural landscapes." },
  { id: "safari-13", src: "/kenya13.jpeg", title: "Shimba Hills Exploration", location: "Shimba Hills", rating: 4.6, description: "Rainforest, waterfalls, and rare wildlife sightings.", detailedDescription: "Discover Shimba Hills National Reserve with its lush rainforest, waterfalls, and rare wildlife like the Sable antelope. Perfect for nature walks and birdwatching." },
  { id: "safari-14", src: "/kenya14.jpeg", title: "Lewa Wildlife Conservancy", location: "Lewa", rating: 4.8, description: "Conservation-focused safaris in a stunning landscape.", detailedDescription: "Lewa Conservancy is a pioneer in wildlife conservation. Enjoy game drives, rhino tracking, and luxury eco-lodges while contributing to preservation efforts." },
  { id: "safari-15", src: "/kenya15.jpeg", title: "Ol Pejeta Conservancy", location: "Ol Pejeta", rating: 4.9, description: "See rhinos, lions, and learn about conservation efforts.", detailedDescription: "Visit Ol Pejeta to see Africa’s last northern white rhinos, lions, and other wildlife. Participate in conservation programs and enjoy immersive safari experiences." },
  { id: "safari-16", src: "/kenya16.jpeg", title: "Aberdare Ranges Trek", location: "Aberdares", rating: 4.7, description: "Dense forests, waterfalls, and rare wildlife await.", detailedDescription: "Trek through the misty Aberdare Ranges, dense forests, and cascading waterfalls. Spot leopards, elephants, and enjoy the serenity of this highland paradise." },
  { id: "safari-17", src: "/kenya17.jpeg", title: "Laikipia Plains Safari", location: "Laikipia", rating: 4.6, description: "Vast open plains with a variety of wildlife species.", detailedDescription: "Laikipia offers vast savannahs and private conservancies with abundant wildlife. Enjoy guided game drives, horse riding safaris, and community cultural experiences." },
  { id: "safari-18", src: "/kenya18.jpeg", title: "Mount Elgon Adventure", location: "Mount Elgon", rating: 4.7, description: "Volcanic landscapes, caves, and wildlife trekking.", detailedDescription: "Explore Mount Elgon’s volcanic terrain, hidden caves, and lush forests. Hike to spectacular cliffs, spot wildlife, and immerse in a unique ecosystem." },
  { id: "safari-19", src: "/kenya19.jpeg", title: "Ruma National Park", location: "Ruma", rating: 4.4, description: "Remote park with giraffes and scenic landscapes.", detailedDescription: "Ruma National Park in western Kenya offers remote wilderness with giraffes, hippos, and spectacular scenery. Ideal for those seeking tranquility and wildlife encounters." },
  { id: "safari-20", src: "/kenya20.jpeg", title: "Kakamega Forest Experience", location: "Kakamega", rating: 4.5, description: "Tropical rainforest filled with rare birds and primates.", detailedDescription: "Kakamega Forest, Kenya’s only tropical rainforest, is home to rare primates and exotic birds. Enjoy guided walks, canopy exploration, and nature photography opportunities." },
  { id: "safari-21", src: "/kenya21.jpeg", title: "Saiwa Swamp Adventure", location: "Saiwa Swamp", rating: 4.4, description: "Kenya’s smallest national park with unique wildlife.", detailedDescription: "Explore Kenya’s smallest national park with unique swamp ecosystems, sitatunga antelopes, and bird species. Perfect for intimate nature encounters." },
  { id: "safari-22", src: "/kenya22.jpeg", title: "Mount Longonot Trek", location: "Mount Longonot", rating: 4.7, description: "Volcanic crater hikes with panoramic views.", detailedDescription: "Trek Mount Longonot’s volcanic crater and enjoy panoramic views of the Great Rift Valley. Ideal for hiking enthusiasts and photographers alike." },
  { id: "safari-23", src: "/kenya23.jpeg", title: "Lake Bogoria Safari", location: "Lake Bogoria", rating: 4.5, description: "Flamingos, hot springs, and scenic lakeside views.", detailedDescription: "Lake Bogoria is a haven for flamingos and wildlife. Relax by hot springs and marvel at geysers while soaking in breathtaking lakeside scenery." },
  { id: "safari-24", src: "/kenya24.jpeg", title: "Marsabit Exploration", location: "Marsabit", rating: 4.4, description: "Remote northern landscapes with wildlife and culture.", detailedDescription: "Explore northern Kenya’s Marsabit landscapes with volcanic mountains, wildlife, and encounters with local indigenous communities." },
  { id: "safari-25", src: "/kenya25.jpeg", title: "Kisite Mpunguti Marine Safari", location: "Kisite Mpunguti", rating: 4.8, description: "Snorkel and dive in pristine marine waters.", detailedDescription: "Discover Kisite Mpunguti’s coral reefs, dolphins, and abundant marine life. Ideal for snorkeling, diving, and unforgettable marine safaris." },
  { id: "safari-26", src: "/kenya26.jpeg", title: "Watamu Beach Safari", location: "Watamu", rating: 4.7, description: "Combine coastal relaxation with wildlife excursions.", detailedDescription: "Watamu Beach combines pristine sandy shores with wildlife excursions. Enjoy coral reefs, marine parks, and guided tours for a full coastal adventure." },
  { id: "safari-27", src: "/kenya27.jpeg", title: "Diani Beach Adventure", location: "Diani", rating: 4.8, description: "White sands, clear waters, and thrilling water sports.", detailedDescription: "Diani Beach offers some of Kenya’s finest white sand beaches, perfect for swimming, snorkeling, kite surfing, and relaxing under swaying palms." },
  { id: "safari-28", src: "/kenya28.jpeg", title: "Kiambere Safari", location: "Kiambere", rating: 4.5, description: "Explore rivers, forests, and abundant birdlife.", detailedDescription: "Kiambere is rich in rivers and forests teeming with birdlife. Enjoy canoeing, walking trails, and guided nature experiences in this tranquil setting." },
  { id: "safari-29", src: "/kenya29.jpeg", title: "Nairobi Arboretum Experience", location: "Nairobi", rating: 4.6, description: "Walk among beautiful trees and spot local wildlife.", detailedDescription: "Stroll through the Nairobi Arboretum and enjoy walking trails among exotic and native trees, spotting birds, and finding peace close to the city." },
  { id: "safari-30", src: "/kenya30.jpeg", title: "Chyulu Hills Trek", location: "Chyulu Hills", rating: 4.7, description: "Vast volcanic hills and stunning vistas.", detailedDescription: "Chyulu Hills offers volcanic landscapes, panoramic vistas, and trekking opportunities in a less-traveled wilderness with amazing photo opportunities." },
  { id: "safari-31", src: "/kenya31.jpeg", title: "Aberdare Night Safari", location: "Aberdares", rating: 4.6, description: "Experience nocturnal wildlife in dense forests.", detailedDescription: "Join a night safari in the Aberdare Ranges to observe elusive nocturnal species, including leopards and bushbucks, in their natural forest habitat." },
  { id: "safari-32", src: "/kenya32.jpeg", title: "Nairobi Giraffe Centre Visit", location: "Nairobi", rating: 4.5, description: "Up-close encounters with endangered giraffes.", detailedDescription: "Visit the Giraffe Centre in Nairobi to feed and learn about endangered Rothschild’s giraffes while supporting conservation programs." },
  { id: "safari-33", src: "/kenya33.jpeg", title: "Lake Naivasha Crescent", location: "Lake Naivasha", rating: 4.7, description: "Boat rides and lakeside relaxation surrounded by wildlife.", detailedDescription: "Enjoy serene boat rides and lakeside experiences at Lake Naivasha, surrounded by wildlife including hippos, birds, and lush vegetation." },
  { id: "safari-34", src: "/kenya34.jpeg", title: "Malindi Marine Safari", location: "Malindi", rating: 4.6, description: "Explore coral reefs, marine life, and pristine beaches.", detailedDescription: "Malindi offers pristine beaches and exceptional marine adventures. Snorkel or dive among coral reefs, encounter tropical fish, and enjoy sun-soaked shores." },
  // --- ZANZIBAR DESTINATIONS ---
  {
    id: "zanzibar1",
    src: "/zanzibar1.jpeg",
    title: "Stone Town Discovery",
    location: "Zanzibar",
    rating: 4.8,
    description: "Walk through history in Zanzibar’s UNESCO World Heritage site.",
    detailedDescription:
      "Explore the winding alleys of Stone Town, with its centuries-old architecture, spice markets, and rich Swahili-Arab culture. Visit historic landmarks, enjoy local cuisine, and experience the island’s vibrant heritage."
  },
  {
    id: "zanzibar2",
    src: "/zanzibar2.jpeg",
    title: "Nungwi Beach Escape",
    location: "Zanzibar",
    rating: 4.7,
    description: "Relax on white sands and enjoy crystal-clear waters.",
    detailedDescription:
      "Nungwi Beach offers turquoise waters and a tranquil vibe perfect for relaxation. Enjoy water sports, sunset dhow cruises, and fresh seafood while surrounded by natural coastal beauty."
  },
  {
    id: "zanzibar3",
    src: "/zanzibar3.jpeg",
    title: "Spice Farm Experience",
    location: "Zanzibar",
    rating: 4.6,
    description: "Tour the island’s famous spice plantations.",
    detailedDescription:
      "Embark on a guided tour through Zanzibar’s spice farms, learning about cloves, vanilla, and nutmeg cultivation. Engage your senses and discover why the island is known as the Spice Island."
  },
  {
    id: "zanzibar4",
    src: "/zanzibar4.jpeg",
    title: "Mnemba Atoll Snorkeling",
    location: "Zanzibar",
    rating: 4.9,
    description: "Dive into vibrant coral reefs and marine life.",
    detailedDescription:
      "Snorkel or dive at Mnemba Atoll, a marine paradise with crystal-clear waters, coral gardens, and colorful fish. Perfect for marine life enthusiasts seeking a world-class underwater experience."
  },

  // --- DUBAI DESTINATIONS ---
  {
    id: "dubai1",
    src: "/dubai1.jpeg",
    title: "Desert Safari Adventure",
    location: "Dubai",
    rating: 4.8,
    description: "Thrilling dunes, camel rides, and sunset dinners.",
    detailedDescription:
      "Experience Dubai’s golden desert with a thrilling 4x4 dune bashing ride, camel trekking, and sandboarding. End your day with a traditional Bedouin camp dinner under the stars."
  },
  {
    id: "dubai2",
    src: "/dubai2.jpeg",
    title: "Burj Khalifa Experience",
    location: "Dubai",
    rating: 4.7,
    description: "Reach the world’s tallest building and stunning views.",
    detailedDescription:
      "Visit the Burj Khalifa’s observation decks for panoramic city views. Explore nearby attractions like the Dubai Mall and Fountain Show for an unforgettable urban adventure."
  },
  {
    id: "dubai3",
    src: "/dubai3.jpeg",
    title: "Palm Jumeirah Retreat",
    location: "Dubai",
    rating: 4.6,
    description: "Stay at luxury resorts on the iconic palm-shaped island.",
    detailedDescription:
      "Relax in world-class resorts on Palm Jumeirah, enjoy pristine beaches, fine dining, and breathtaking views of Dubai’s skyline. Ideal for luxurious seaside getaways."
  },

  // --- BALI DESTINATIONS ---
  {
    id: "bali1",
    src: "/bali1.jpeg",
    title: "Ubud Cultural Escape",
    location: "Bali",
    rating: 4.8,
    description: "Immerse yourself in Bali’s art, temples, and rice terraces.",
    detailedDescription:
      "Discover Ubud’s cultural heart through art galleries, sacred temples, and scenic rice terraces. Participate in yoga retreats and traditional Balinese ceremonies for a soulful experience."
  },
  {
    id: "bali2",
    src: "/bali2.jpeg",
    title: "Nusa Penida Adventure",
    location: "Bali",
    rating: 4.9,
    description: "Explore stunning cliffs, beaches, and crystal waters.",
    detailedDescription:
      "Take a boat to Nusa Penida and witness dramatic cliffs, hidden beaches, and vibrant marine life. Ideal for day trips, snorkeling, and capturing unforgettable island views."
  },
  {
    id: "bali3",
    src: "/bali3.jpeg",
    title: "Seminyak Beach Experience",
    location: "Bali",
    rating: 4.7,
    description: "Luxury beach clubs and sunset views.",
    detailedDescription:
      "Enjoy Bali’s cosmopolitan side in Seminyak with trendy beach clubs, fine dining, and luxury spas. Watch the sunset over the Indian Ocean with a tropical cocktail in hand."
  }
];

