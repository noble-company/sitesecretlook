import { Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="text-gold text-body-sm tracking-[0.3em] uppercase font-medium">
                Sobre o Salão
              </span>
              <h2 className="font-display text-display-lg lg:text-display-xl text-foreground">
                Excelência desde 2018
              </h2>
            </div>

            <p className="text-muted-foreground text-body lg:text-lg leading-relaxed">
              O Secret Look é um salão de referência em Lisboa, especializado em alisamentos de luxo, 
              loiros perfeitos e morenas iluminadas. Combinamos técnica europeia de ponta com 
              atendimento personalizado, proporcionando uma experiência única de beleza e sofisticação.
            </p>

            <p className="text-muted-foreground text-body lg:text-lg leading-relaxed">
              Nossa equipa de profissionais altamente qualificados está comprometida em realçar 
              a beleza natural de cada cliente, utilizando os melhores produtos e as técnicas 
              mais avançadas do mercado.
            </p>

            {/* Award Card */}
            <div className="mt-10 p-6 bg-card rounded-lg border-2 border-gold shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg lg:text-xl text-foreground">
                    Troféu Destaque na Europa
                  </h3>
                  <p className="text-muted-foreground text-body-sm">
                    Premiados consecutivamente de 2018 a 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative animate-fade-in-delay-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant bg-secondary">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="font-display text-3xl text-gold">SL</span>
                  </div>
                  <p className="text-muted-foreground text-body-sm tracking-wide">
                    Imagem do Salão
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
