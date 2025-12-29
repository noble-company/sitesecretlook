import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollToTop from "@/components/ScrollToTop";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialtiesSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <PartnersSection />
        <LocationSection />
        <Footer />
        <FloatingContact />
        <ScrollToTop />
      </main>
    </TooltipProvider>
  );
};

export default Index;
