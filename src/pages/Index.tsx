import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import PricingSection from "@/components/PricingSection";
import AgencySection from "@/components/AgencySection";
import SocialLinks from "@/components/SocialLinks";
import FloatingSupport from "@/components/FloatingSupport";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <TwinklingStars />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <PricingSection />
      <AgencySection />
      <SocialLinks />
      <Footer />
      <FloatingSupport />
    </main>
  );
};

export default Index;
