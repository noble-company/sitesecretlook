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

const Index = () => {
  return (
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
    </main>
  );
};

export default Index;
