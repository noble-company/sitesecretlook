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
import { Toaster } from "sonner";

const Index = () => {
  return (
    <TooltipProvider>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Saltar para conteúdo
      </a>
      
      <Header />
      
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialtiesSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <PartnersSection />
        <LocationSection />
      </main>
      
      <Footer />
      <FloatingContact />
      <ScrollToTop />
      <Toaster position="bottom-center" richColors />
    </TooltipProvider>
  );
};

export default Index;
