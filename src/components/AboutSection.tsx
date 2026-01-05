import { Trophy } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { ABOUT_IMAGES } from "@/lib/images";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <AnimateOnScroll animation="fade-right" className="space-y-8">
            <div className="space-y-4">
              <span className="text-gold text-body-sm tracking-[0.3em] uppercase font-medium">Sobre o Salão</span>
              <h2 className="font-display text-display-lg lg:text-display-xl text-foreground">Excelência desde 2012</h2>
            </div>

            <p className="text-muted-foreground text-body lg:text-lg leading-relaxed">
              O Secret Look é um salão de referência em Lisboa, especializado em alisamentos de luxo, loiros perfeitos e
              morenas iluminadas. Combinamos técnica europeia de ponta com atendimento personalizado, proporcionando uma
              experiência única de beleza e sofisticação.
            </p>

            <p className="text-muted-foreground text-body lg:text-lg leading-relaxed">
              Nossa equipa de profissionais altamente qualificados está comprometida em realçar a beleza natural de cada
              cliente, utilizando os melhores produtos e as técnicas mais avançadas do mercado.
            </p>

            {/* Award Card */}
            <div className="mt-10 p-6 bg-card rounded-lg border-2 border-gold shadow-card hover:shadow-elegant transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg lg:text-xl text-foreground">Troféu Destaque na Europa</h3>
                  <p className="text-muted-foreground text-body-sm">Premiados consecutivamente de 2018 a 2025</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Image Column */}
          <AnimateOnScroll animation="fade-left" delay={0.2}>
            <div className="relative group">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant bg-secondary">
                <img
                  src={ABOUT_IMAGES.salon.src}
                  alt={ABOUT_IMAGES.salon.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="text-center p-8">
                            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                              <span class="font-display text-3xl text-gold">SL</span>
                            </div>
                            <p class="text-muted-foreground text-body-sm tracking-wide">Imagem do Salão</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-lg -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
