import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_0%/0.4)_100%)]"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform'
        }}
      />

      <div 
        className="container mx-auto px-6 lg:px-12 relative z-10 text-center"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          willChange: 'transform'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Logo */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] text-gold animate-fade-in">
            SECRET LOOK
          </h1>

          {/* Tagline */}
          <p className="text-secondary/90 text-lg md:text-xl lg:text-2xl tracking-[0.2em] font-light uppercase animate-fade-in-delay-1">
            Mestres em Alisamentos, Loiros e Morenas Iluminadas
          </p>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in-delay-2">
            <Button
              variant="gold"
              size="lg"
              className="text-base md:text-lg tracking-wide hover:scale-105 active:scale-95"
              onClick={handleScrollToContact}
            >
              Agende seu Horário
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a
          href="#sobre"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("sobre");
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          className="flex flex-col items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="text-body-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">Descobrir</span>
          <ChevronDown size={28} className="animate-pulse-gold" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
