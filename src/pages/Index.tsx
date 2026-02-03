import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import AppSection from "@/components/AppSection";
import AgencySection from "@/components/AgencySection";
import Footer from "@/components/Footer";
import FloatingSupport from "@/components/FloatingSupport";
import TwinklingStars from "@/components/TwinklingStars";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <TwinklingStars />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <AppSection />
      <AgencySection />
      <Footer />
      <FloatingSupport />
    </main>
  );
};

export default Index;
