const partners = [
  {
    id: 1,
    name: "Sebastian Professional",
    width: "200px",
  },
  {
    id: 2,
    name: "Evancare",
    width: "200px",
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
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-[200px] h-[100px] bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer group"
            >
              <span className="font-display text-lg text-center px-4 group-hover:text-gold transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
