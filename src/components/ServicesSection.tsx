import { Sparkles, Search, Zap, Sun, Sunrise, Scissors, Baby } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { BOOKING_URL } from "@/lib/constants";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div
      className="group p-6 lg:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 hover:scale-[1.02] hover:border-gold active:scale-[0.98]"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary text-muted-foreground transition-all duration-300 group-hover:bg-gold/10 group-hover:text-gold group-hover:scale-110">
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
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gold text-body-sm font-medium tracking-wide hover:text-gold-light transition-colors duration-300 pt-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              Agendar Online
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Agendar online</p>
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
      title: "Alisamento",
      description: "Todo o potencial de um alisamento com resultados duradores, sem agressões e sem surpresas indesejadas",
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "Diagnóstico",
      description: "O resultado é um diagnóstico preciso, totalmente personalizado e sem erros de cálculo. Apenas resultados confiáveis",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Madeixas e Coloração a Laser",
      description: "Mais tecnologia, mais cuidado e resultados visivelmente superiores desde a primeira aplicação",
    },
    {
      icon: <Sun className="w-7 h-7" />,
      title: "Loiros Profissionais",
      description: "Um loiro elegante, atemporal e silenciosamente luxuoso",
    },
    {
      icon: <Sunrise className="w-7 h-7" />,
      title: "Morenas Iluminadas",
      description: "O resultado é um cabelo iluminado com classe, presença e assinatura",
    },
    {
      icon: <Scissors className="w-7 h-7" />,
      title: "Corte Feminino",
      description: "Criamos cortes personalizados, para um visual leve, moderno e atemporal",
    },
    {
      icon: <Baby className="w-7 h-7" />,
      title: "Corte Infantil",
      description: "Cortes feitos com cuidado, diversão e carinho, deixando os pequenos confortáveis e os pais tranquilos com o resultado",
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="text-gold text-body-sm tracking-[0.3em] uppercase font-medium">
            O que oferecemos
          </span>
          <h2 className="font-display text-display-lg lg:text-display-xl text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Experiência premium em cada detalhe
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fade-up"
              delay={index * 0.05}
            >
              <ServiceCard {...service} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
