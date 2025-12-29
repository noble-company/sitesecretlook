import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_0%/0.4)_100%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
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
              className="text-base md:text-lg tracking-wide"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
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
          className="flex flex-col items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-body-sm tracking-widest uppercase opacity-70">Descobrir</span>
          <ChevronDown size={28} className="animate-pulse-gold" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
