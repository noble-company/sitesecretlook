import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#equipa", label: "Equipa" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer id="contacto" className="bg-primary text-secondary">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl lg:text-3xl tracking-widest text-gold">
              SECRET LOOK
            </h3>
            <p className="text-secondary/70 text-body leading-relaxed">
              Transformamos cabelos, realçamos beleza. O seu destino de luxo para tratamentos 
              capilares de excelência em Lisboa.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg tracking-wide text-gold">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-secondary/70 text-body hover:text-gold transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-lg tracking-wide text-gold">
              Contacto
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-secondary/70 text-body">
                  Rua Pinheiro Chagas 76A<br />
                  1050-180 Lisboa
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+351929075519"
                  className="text-secondary/70 text-body hover:text-gold transition-colors duration-300"
                >
                  (+351) 929 075 519
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div className="text-secondary/70 text-body space-y-1">
                  <p>3ª a 6ª: 9h - 20h</p>
                  <p>Sábado: 9h - 18h</p>
                  <p className="text-secondary/50">Encerrado: Dom e 2ª</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/10 mt-16 pt-8">
          <p className="text-center text-secondary/50 text-body-sm">
            © {currentYear} Secret Look Lisboa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
