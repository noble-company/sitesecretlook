import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Melhor salão de Lisboa! O alisamento ficou perfeito e durou meses. Equipa profissional e atenciosa.",
    name: "Maria Santos",
  },
  {
    id: 2,
    text: "Adoro o trabalho da equipa. Sempre saio de lá me sentindo linda!",
    name: "Ana Costa",
  },
  {
    id: 3,
    text: "Enzo é um artista! Meu loiro nunca ficou tão perfeito.",
    name: "Sofia Oliveira",
  },
  {
    id: 4,
    text: "Atendimento impecável e resultado surpreendente. Super recomendo!",
    name: "Carla Ferreira",
  },
  {
    id: 5,
    text: "Ambiente luxuoso e profissionais altamente qualificados.",
    name: "Beatriz Almeida",
  },
  {
    id: 6,
    text: "Faço meus tratamentos aqui há anos. Nunca me decepcionaram!",
    name: "Rita Marques",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-3xl lg:text-display-lg text-foreground mb-4">
            O que dizem nossos clientes
          </h2>
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 text-muted-foreground hover:text-gold transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 text-muted-foreground hover:text-gold transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-card rounded-lg p-8 lg:p-12 shadow-card text-center relative overflow-hidden">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold text-gold"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground/80 text-lg lg:text-xl italic mb-6 leading-relaxed min-h-[4rem]">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Name */}
            <p className="font-semibold text-foreground">
              {testimonials[currentIndex].name}
            </p>

            {/* Google Reviews Badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 text-muted-foreground text-xs">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google Reviews</span>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-gold w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
