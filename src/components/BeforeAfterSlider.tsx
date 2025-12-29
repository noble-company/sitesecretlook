import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeLabel = "ANTES",
  afterLabel = "DEPOIS",
  className = "",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[3/2] overflow-hidden rounded-lg cursor-ew-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-charcoal flex items-center justify-center">
        <span className="text-muted-foreground font-display text-xl">
          Antes
        </span>
      </div>

      {/* After Image (Foreground - clipped) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gold/30 to-charcoal flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <span className="text-gold font-display text-xl">Depois</span>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-foreground/70 text-card px-3 py-1 rounded text-xs font-semibold tracking-wider">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-gold text-foreground px-3 py-1 rounded text-xs font-semibold tracking-wider">
        {afterLabel}
      </span>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full shadow-lg flex items-center justify-center border-4 border-card">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-foreground rounded-full" />
            <div className="w-0.5 h-4 bg-foreground rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
