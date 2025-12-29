import { Sparkles, Palette, Sun, Sunrise, Scissors, User, Baby, Droplet, Zap, Hand } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const ServiceCard = ({ icon, title, description, isHighlighted }: ServiceCardProps) => {
  return (
    <div
      className={`group p-6 lg:p-8 bg-card rounded-lg border transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
        isHighlighted 
          ? "border-gold border-2" 
          : "border-border hover:border-gold"
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
          isHighlighted 
            ? "bg-gold/20 text-gold" 
            : "bg-secondary text-muted-foreground group-hover:bg-gold/10 group-hover:text-gold"
        }`}>
          {icon}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-display text-lg lg:text-xl text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-body-sm">
            {description}
          </p>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="tel:+351929075519"
              className="text-gold text-body-sm font-medium tracking-wide hover:text-gold-light transition-colors duration-300 pt-2"
            >
              Consultar Preço
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ligue para consultar</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Alisamentos Premium",
      description: "Especialidade da casa reconhecida em toda Europa",
      isHighlighted: true,
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Madeixas & Coloração",
      description: "Técnicas avançadas para resultados naturais",
      isHighlighted: false,
    },
    {
      icon: <Sun className="w-7 h-7" />,
      title: "Loiros Profissionais",
      description: "Loiros impecáveis e luminosos",
      isHighlighted: true,
    },
    {
      icon: <Sunrise className="w-7 h-7" />,
      title: "Morenas Iluminadas",
      description: "Iluminação sofisticada e natural",
      isHighlighted: true,
    },
    {
      icon: <Scissors className="w-7 h-7" />,
      title: "Corte Feminino",
      description: "Cortes personalizados para realçar sua beleza",
      isHighlighted: false,
    },
    {
      icon: <User className="w-7 h-7" />,
      title: "Corte Masculino",
      description: "Estilo e modernidade para homens exigentes",
      isHighlighted: false,
    },
    {
      icon: <Baby className="w-7 h-7" />,
      title: "Corte Infantil",
      description: "Ambiente acolhedor para os pequenos",
      isHighlighted: false,
    },
    {
      icon: <Droplet className="w-7 h-7" />,
      title: "Tratamentos Capilares",
      description: "Reconstrução e hidratação profunda",
      isHighlighted: false,
    },
    {
      icon: <Scissors className="w-7 h-7" />,
      title: "Barbeiro",
      description: "Barba e acabamentos impecáveis",
      isHighlighted: false,
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Depilação",
      description: "Cuidado e conforto",
      isHighlighted: false,
    },
    {
      icon: <Hand className="w-7 h-7" />,
      title: "Massagem Masculina",
      description: "Relaxamento e bem-estar",
      isHighlighted: false,
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="text-gold text-body-sm tracking-[0.3em] uppercase font-medium">
            O que oferecemos
          </span>
          <h2 className="font-display text-display-lg lg:text-display-xl text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Experiência premium em cada detalhe
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
