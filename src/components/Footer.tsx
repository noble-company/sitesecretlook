import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#equipa", label: "Equipa" },
    { href: "#contacto", label: "Contacto" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com/secretlooklisboa",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://facebook.com/SecretLookLisboa",
      icon: Facebook,
      label: "Facebook",
    },
  ];

  return (
    <footer id="contacto" role="contentinfo" className="bg-primary text-secondary">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="font-display text-2xl lg:text-3xl tracking-widest text-gold">
              SECRET LOOK
            </h3>
            <p className="text-secondary/70 text-body leading-relaxed">
              Transformamos cabelos, realçamos beleza. O seu destino de luxo para tratamentos 
              capilares de excelência em Lisboa.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/60 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-secondary/70 text-body">
                  Rua Pinheiro Chagas 76A<br />
                  1050-180 Lisboa
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+351929075519"
                  className="text-secondary/70 text-body hover:text-gold transition-colors duration-300"
                >
                  (+351) 929 075 519
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 - Hours */}
          <div className="space-y-6">
            <h4 className="font-display text-lg tracking-wide text-gold">
              Horário
            </h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-secondary/70 text-body space-y-1">
                <p>3ª a 6ª: 9h - 20h</p>
                <p>Sábado: 9h - 18h</p>
                <p className="text-secondary/50">Encerrado: Dom e 2ª</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/10 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary/50 text-body-sm">
              © {currentYear} Secret Look Lisboa. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={`footer-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/50 hover:text-gold transition-colors duration-300 text-body-sm"
                >
                  @secretlooklisboa
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
