import { useState, useEffect, forwardRef } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = forwardRef<HTMLButtonElement>((_, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={ref}
      onClick={scrollToTop}
      className={`fixed bottom-5 left-5 z-40 w-12 h-12 min-h-[48px] rounded-full bg-foreground/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-gold hover:text-foreground transition-all duration-300 cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Voltar ao topo da página"
    >
      <ArrowUp className="w-5 h-5 text-card" aria-hidden="true" />
    </button>
  );
});

ScrollToTop.displayName = "ScrollToTop";

export default ScrollToTop;
