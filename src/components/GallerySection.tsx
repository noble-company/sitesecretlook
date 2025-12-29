import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2 } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "alisamentos", label: "Alisamentos" },
  { id: "loiros", label: "Loiros" },
  { id: "morenas", label: "Morenas" },
  { id: "cortes-femininos", label: "Cortes Femininos" },
  { id: "cortes-masculinos", label: "Cortes Masculinos" },
];

const galleryItems = [
  { id: 1, category: "alisamentos", height: "tall", label: "Alisamento 1" },
  { id: 2, category: "loiros", height: "short", label: "Loiro 1" },
  { id: 3, category: "morenas", height: "medium", label: "Morena 1" },
  { id: 4, category: "cortes-femininos", height: "tall", label: "Corte Feminino 1" },
  { id: 5, category: "alisamentos", height: "medium", label: "Alisamento 2" },
  { id: 6, category: "loiros", height: "short", label: "Loiro 2" },
  { id: 7, category: "cortes-masculinos", height: "medium", label: "Corte Masculino 1" },
  { id: 8, category: "morenas", height: "tall", label: "Morena 2" },
  { id: 9, category: "loiros", height: "medium", label: "Loiro 3" },
  { id: 10, category: "alisamentos", height: "short", label: "Alisamento 3" },
  { id: 11, category: "cortes-femininos", height: "medium", label: "Corte Feminino 2" },
  { id: 12, category: "cortes-masculinos", height: "tall", label: "Corte Masculino 2" },
];

const heightClasses = {
  short: "h-48",
  medium: "h-64",
  tall: "h-80",
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goToPrevious = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
    setTimeout(() => setIsLoading(false), 200);
  }, [filteredItems.length]);

  const goToNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsLoading(false), 200);
  }, [filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    setTouchStart(null);
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-display-lg text-foreground mb-4">
            Nossos Trabalhos
          </h2>
        </AnimateOnScroll>

        {/* Filter Buttons */}
        <AnimateOnScroll animation="fade-up" delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeCategory === cat.id
                  ? "bg-gold text-foreground shadow-gold"
                  : "bg-transparent border border-border text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </AnimateOnScroll>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              animation="fade-up"
              delay={index * 0.05}
            >
              <div
                className={`break-inside-avoid ${heightClasses[item.height as keyof typeof heightClasses]} relative rounded-lg overflow-hidden cursor-pointer group`}
                onClick={() => openLightbox(index)}
              >
                {/* Placeholder with hover zoom */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-muted flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <span className="text-gold/60 font-display text-lg">
                    {item.label}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-gold transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-card hover:text-gold transition-colors z-10 hover:scale-110"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-card text-sm font-medium">
            {currentIndex + 1} / {filteredItems.length}
          </div>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 lg:left-8 text-gold hover:scale-110 transition-transform z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 lg:right-8 text-gold hover:scale-110 transition-transform z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-5xl max-h-[85vh] w-full aspect-[3/4] lg:aspect-[4/3] bg-gradient-to-br from-charcoal to-muted rounded-lg flex items-center justify-center relative transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{ opacity: isLoading ? 0.5 : 1 }}
          >
            {isLoading && (
              <Loader2 className="absolute w-10 h-10 text-gold animate-spin" />
            )}
            <span className="text-gold font-display text-2xl">
              {filteredItems[currentIndex]?.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
