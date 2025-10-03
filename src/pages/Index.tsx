import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import RSVPSection from "@/components/RSVPSection";
import AttireSection from "@/components/AttireSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <EventDetails />
      <RSVPSection />
      <AttireSection />
    </div>
  );
};

export default Index;
