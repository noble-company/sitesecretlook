import { forwardRef } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = forwardRef<HTMLElement>((_, ref) => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Pinheiro+Chagas+76A+Lisboa";
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.8!2d-9.1456!3d38.7323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f1fd%3A0x0!2sRua%20Pinheiro%20Chagas%2076A%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1640000000000!5m2!1spt-PT!2spt";

  return (
    <section ref={ref} id="localizacao" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="text-gold text-body-sm tracking-[0.3em] uppercase font-medium">
            Localização
          </span>
          <h2 className="font-display text-display-lg lg:text-display-xl text-foreground">
            Visite-nos
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Morada</h3>
                  <p className="text-muted-foreground text-body">
                    Rua Pinheiro Chagas 76A<br />
                    1050-180 Lisboa
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">Telefone</h3>
                  <a
                    href="tel:+351929075519"
                    className="text-muted-foreground text-body hover:text-gold transition-colors duration-300"
                  >
                    (+351) 929 075 519
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">Horário</h3>
                  <div className="text-muted-foreground text-body space-y-1">
                    <div className="flex justify-between gap-8">
                      <span>3ª a 6ª feira</span>
                      <span className="font-medium text-foreground">9h - 20h</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sábado</span>
                      <span className="font-medium text-foreground">9h - 18h</span>
                    </div>
                    <div className="flex justify-between gap-8 text-muted-foreground/70">
                      <span>Domingo e 2ª feira</span>
                      <span>Encerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open(googleMapsUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Como Chegar
            </Button>
          </div>

          {/* Map Column */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[400px] rounded-lg overflow-hidden shadow-elegant">
              <iframe
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Secret Look Lisboa"
                className="w-full h-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
});

LocationSection.displayName = "LocationSection";

export default LocationSection;
