import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { SPECIALTIES_IMAGES } from "@/lib/images";

const specialties = [
  {
    id: 1,
    title: "Alisamentos de Luxo",
    description: "Técnica exclusiva reconhecida em toda a Europa. Resultados duradouros com máximo cuidado e proteção dos fios. Especialistas certificados com anos de experiência.",
    benefits: ["Liso perfeito", "Brilho intenso", "Longa duração", "Sem danos"],
    imageKey: "alisamentos" as const,
    reverse: false,
    hasSlider: true,
  },
  {
    id: 2,
    title: "Loiros Perfeitos",
    description: "Coloração profissional com técnicas avançadas para loiros luminosos e saudáveis. Produtos premium que protegem e fortalecem os fios durante todo o processo.",
    benefits: ["Tom personalizado", "Brilho natural", "Manutenção fácil", "Proteção total"],
    imageKey: "loiros" as const,
    reverse: true,
    hasSlider: false,
  },
  {
    id: 3,
    title: "Morenas Iluminadas",
    description: "Iluminação sofisticada que realça a beleza natural dos cabelos escuros. Reflexos estratégicos que criam profundidade e movimento com resultado natural.",
    benefits: ["Reflexos naturais", "Profundidade", "Versatilidade", "Elegância"],
    imageKey: "morenas" as const,
    reverse: false,
    hasSlider: false,
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-display-lg text-foreground mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-muted-foreground text-lg">
            Reconhecidos em toda Europa
          </p>
        </AnimateOnScroll>

        {/* Specialty Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.id}
              className={`flex flex-col ${
                specialty.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image / Before-After Slider */}
              <AnimateOnScroll
                animation={specialty.reverse ? "fade-right" : "fade-left"}
                delay={index * 0.1}
                className="w-full lg:w-1/2"
              >
                {specialty.hasSlider ? (
                  <BeforeAfterSlider />
                ) : (
                  <div className="relative aspect-[3/2] bg-secondary rounded-lg overflow-hidden group">
                    <img
                      src={
                        specialty.imageKey === 'loiros' 
                          ? SPECIALTIES_IMAGES.loiros.src 
                          : specialty.imageKey === 'morenas' 
                            ? SPECIALTIES_IMAGES.morenas.src 
                            : '/placeholder.svg'
                      }
                      alt={
                        specialty.imageKey === 'loiros' 
                          ? SPECIALTIES_IMAGES.loiros.alt 
                          : specialty.imageKey === 'morenas' 
                            ? SPECIALTIES_IMAGES.morenas.alt 
                            : specialty.title
                      }
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-charcoal to-foreground">
                      <span className="text-gold font-display text-xl lg:text-2xl text-center px-4">
                        {specialty.title}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                )}
              </AnimateOnScroll>

              {/* Content */}
              <AnimateOnScroll
                animation={specialty.reverse ? "fade-left" : "fade-right"}
                delay={index * 0.1 + 0.1}
                className="w-full lg:w-1/2 space-y-6"
              >
                <Badge className="bg-gold text-foreground hover:bg-gold-light font-semibold tracking-wide transition-all duration-300 hover:scale-105">
                  ESPECIALIDADE
                </Badge>
                
                <h3 className="font-display text-2xl lg:text-3xl text-foreground">
                  {specialty.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-3">
                  {specialty.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground/80 hover:border-gold hover:shadow-card transition-all duration-300 cursor-default"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
