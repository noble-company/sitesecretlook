import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const filteredItems =
    activeCategory === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl lg:text-display-lg text-foreground mb-4">
            Nossos Trabalhos
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gold text-foreground"
                  : "bg-transparent border border-border text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`break-inside-avoid ${heightClasses[item.height as keyof typeof heightClasses]} relative rounded-lg overflow-hidden cursor-pointer group animate-fade-in`}
              onClick={() => openLightbox(index)}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-muted flex items-center justify-center">
                <span className="text-gold/60 font-display text-lg">
                  {item.label}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-card hover:text-gold transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 lg:left-8 text-card hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-8 text-card hover:text-gold transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] w-full aspect-[3/4] bg-gradient-to-br from-charcoal to-muted rounded-lg flex items-center justify-center">
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
