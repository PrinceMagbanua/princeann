import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import RSVPSection from "@/components/RSVPSection";
import AttireSection from "@/components/AttireSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <ParallaxBackground />
      <div className="relative z-10">
        <HeroSection />
        <EventDetails />
        <PhotoGallery />
        <RSVPSection />
        <AttireSection />
        <VenueSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
