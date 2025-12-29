import { useState, forwardRef } from "react";
import { Phone, MessageCircle, X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FloatingContact = forwardRef<HTMLDivElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+351929075519";
  const displayNumber = "(+351) 929 075 519";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      toast.success("Número copiado!", {
        description: displayNumber,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Erro ao copiar número");
    }
  };

  return (
    <div ref={ref}>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 w-[70px] h-[70px] min-h-[48px] rounded-full bg-gold flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-100 transition-all duration-300 group cursor-pointer"
        aria-label="Abrir opções de contacto"
      >
        <Phone className="w-7 h-7 text-foreground group-hover:animate-pulse" aria-hidden="true" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-card rounded-2xl p-8 w-full max-w-md relative animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <h3 className="font-display text-2xl text-foreground text-center mb-8">
              Entre em Contacto
            </h3>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* Call Option */}
              <div className="bg-secondary/50 rounded-xl p-6 text-center hover:bg-secondary transition-colors">
                <div className="w-14 h-14 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Ligar Agora</h4>
                <p className="text-muted-foreground text-sm mb-4">{displayNumber}</p>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>Ligar</a>
                </Button>
              </div>

              {/* Message Option */}
              <div className="bg-secondary/50 rounded-xl p-6 text-center hover:bg-secondary transition-colors">
                <div className="w-14 h-14 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Enviar Mensagem</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Entre em contacto conosco
                </p>
                <Button
                  variant="goldOutline"
                  size="lg"
                  className="w-full"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 mr-2" />
                      Copiar Número
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

FloatingContact.displayName = "FloatingContact";

export default FloatingContact;
