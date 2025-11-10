import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { manrope } from "./fonts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <section
        id="next-section"
        className={`${manrope.className} h-screen flex items-center justify-center bg-white text-black`}
      >
        <h2 className="text-3xl font-semibold">Welcome to Your Next Adventure</h2>
      </section>
    </main>
  );
}
