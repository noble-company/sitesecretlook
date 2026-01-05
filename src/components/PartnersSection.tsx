import { PARTNER_IMAGES } from "@/lib/images";

const partners = [
  {
    id: 1,
    name: "Sebastian Professional",
    imageKey: "sebastian" as const,
  },
  {
    id: 2,
    name: "Evancare",
    imageKey: "evancare" as const,
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-2xl lg:text-3xl text-foreground">
            Trabalhamos com as melhores marcas
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          {partners.map((partner) => {
            const image = PARTNER_IMAGES[partner.imageKey];
            return (
              <div
                key={partner.id}
                className="w-[200px] h-[100px] bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300 cursor-pointer group hover:bg-secondary/80"
              >
                {image?.src ? (
                  <img
                    src={image.src}
                    alt={image.alt || partner.name}
                    className="max-w-[160px] max-h-[80px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                ) : null}
                <span 
                  className={`font-display text-lg text-center px-4 group-hover:text-gold transition-colors duration-300 ${image?.src ? 'hidden' : ''}`}
                >
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
