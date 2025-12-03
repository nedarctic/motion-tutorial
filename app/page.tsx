import HeroSection from "./components/HeroSection";
import { DestinationsCards } from "./components/DestinationsCards";
import TravelInspirationSection from "./components/TravelInspirationSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ClientsSlider from "./components/ClientSlider";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative top-0 flex flex-col min-h-screen">  
      <HeroSection />
      <DestinationsCards />  
      <TravelInspirationSection />  
      <WhyChooseUsSection />  
      <ClientsSlider />  
      <TestimonialsSection /> 
    </main>
  );
}
