import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import PricingSection from "@/components/PricingSection";
import SocialLinks from "@/components/SocialLinks";
import FloatingSupport from "@/components/FloatingSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <PricingSection />
      <SocialLinks />
      <Footer />
      <FloatingSupport />
    </main>
  );
};

export default Index;
