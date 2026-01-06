import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { TEAM_IMAGES } from "@/lib/images";

const teamMembers = [
  {
    id: 1,
    name: "Enzo Tani",
    role: "Master Hair Stylist",
    bio: "Especialista em alisamentos e coloração. Mais de 15 anos de experiência.",
    imageKey: "enzoTani" as const,
  },
  {
    id: 2,
    name: "Ivo Tavares",
    role: "Colorista Profissional",
    bio: "Mestre em técnicas de coloração e mechas. Formação internacional.",
    imageKey: "ivoTavares" as const,
  },
  {
    id: 3,
    name: "Lenita Dias",
    role: "Hair Designer",
    bio: "Especialista em Alisamentos, Corte Feminino e Extensões.",
    imageKey: "lenitaDias" as const,
  },
  {
    id: 4,
    name: "Gabriel Felix",
    role: "Especialista em Alisamentos.",
    bio: "",
    imageKey: "gabrielFelix" as const,
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
            <AnimateOnScroll key={member.id} animation="scale-in" delay={index * 0.1}>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-elegant hover:border-gold/50 hover:-translate-y-2 transition-all duration-300 group">
                {/* Team Member Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-charcoal to-muted overflow-hidden group-hover:ring-2 group-hover:ring-gold group-hover:scale-105 transition-all duration-300">
                  <img
                    src={TEAM_IMAGES[member.imageKey]?.src || "/placeholder.svg"}
                    alt={TEAM_IMAGES[member.imageKey]?.alt || member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
