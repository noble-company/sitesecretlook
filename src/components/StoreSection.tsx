import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { STORE_URL } from "@/lib/constants";

// Por enquanto a secção só leva à loja Shopify.
// Quando houver acesso à plataforma, os produtos podem ser listados aqui.
const StoreSection = () => {
  return (
    <section id="loja" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-gold" />
            </div>

            <span className="block text-gold text-body-sm tracking-[0.3em] uppercase font-medium">
              Loja Online
            </span>

            <h2 className="font-display text-display-lg lg:text-display-xl text-secondary">
              Leve o Secret Look para casa
            </h2>

            <p className="text-secondary/70 text-body">
              Os produtos exclusivos do salão, agora disponíveis na nossa loja online.
            </p>

            <div className="pt-2">
              <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                  Visitar a Loja
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default StoreSection;
