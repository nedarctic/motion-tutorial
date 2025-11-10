import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { DestionationsCards } from "./components/DestinationsCards";

export default function Home() {
  return (
    <main className="relative top-0 flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <DestionationsCards />      
    </main>
  );
}
