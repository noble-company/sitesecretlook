import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const teamMembers = [
  {
    id: 1,
    name: "Enzo Tani",
    role: "Master Hair Stylist",
    bio: "Especialista em alisamentos e coloração. Mais de 15 anos de experiência.",
  },
  {
    id: 2,
    name: "Ivo Tavares",
    role: "Colorista Profissional",
    bio: "Mestre em técnicas de coloração e mechas. Formação internacional.",
  },
  {
    id: 3,
    name: "Lenita Dias",
    role: "Hair Designer",
    bio: "Especialista em cortes femininos e tendências de moda capilar.",
  },
  {
    id: 4,
    name: "Gabriel Felix",
    role: "Barbeiro & Stylist",
    bio: "Expert em cortes masculinos, barbas e tratamentos masculinos.",
  },
];

const TeamSection = () => {
  return (
    <section id="equipa" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-display-lg text-foreground mb-4">
            Nossa Equipa de Especialistas
          </h2>
        </AnimateOnScroll>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll
              key={member.id}
              animation="scale-in"
              delay={index * 0.1}
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-elegant hover:border-gold/50 hover:-translate-y-2 transition-all duration-300 group">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-charcoal to-muted overflow-hidden flex items-center justify-center group-hover:ring-2 group-hover:ring-gold group-hover:scale-105 transition-all duration-300">
                  <span className="text-gold/60 text-xs text-center px-2">
                    200x200
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
