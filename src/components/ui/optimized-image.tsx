import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallback?: string;
  fallbackElement?: React.ReactNode;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  showLoadingState?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Componente de imagem otimizada com:
 * - Lazy loading nativo
 * - Estado de loading com placeholder
 * - Fallback para erros de carregamento
 * - Suporte a diferentes aspect ratios
 * - Transição suave ao carregar
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  fallback = '/placeholder.svg',
  fallbackElement,
  aspectRatio = 'auto',
  objectFit = 'cover',
  showLoadingState = true,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
  };

  // Renderiza elemento de fallback customizado
  if (hasError && fallbackElement) {
    return <>{fallbackElement}</>;
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Loading placeholder */}
      {showLoadingState && isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-charcoal animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
        </div>
      )}

      {/* Imagem principal */}
      <img
        src={hasError ? fallback : src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'w-full h-full transition-opacity duration-500',
          objectFitClasses[objectFit],
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
      />
    </div>
  );
};

/**
 * Componente para imagem de fundo com overlay
 */
interface BackgroundImageProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  fallbackGradient?: string;
}

export const BackgroundImage = ({
  src,
  alt,
  children,
  className,
  overlayClassName,
  fallbackGradient = 'bg-gradient-to-br from-charcoal to-muted',
}: BackgroundImageProps) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Fallback gradient */}
      <div className={cn('absolute inset-0', fallbackGradient)} />
      
      {/* Background image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {overlayClassName && (
        <div className={cn('absolute inset-0', overlayClassName)} />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/**
 * Componente placeholder para imagens ainda não adicionadas
 */
interface ImagePlaceholderProps {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
}

export const ImagePlaceholder = ({
  label,
  icon,
  className,
  aspectRatio = 'square',
}: ImagePlaceholderProps) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-charcoal to-muted flex flex-col items-center justify-center gap-2',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {icon && <div className="text-gold/50">{icon}</div>}
      {label && (
        <span className="text-xs text-cream/40 font-medium text-center px-2">
          {label}
        </span>
      )}
    </div>
  );
};

export default OptimizedImage;
