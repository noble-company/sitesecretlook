/**
 * Sistema Centralizado de Gestão de Imagens - Secret Look Lisboa
 * 
 * Para adicionar/editar imagens:
 * 1. Coloque a imagem na pasta correspondente em public/images/
 * 2. Atualize o caminho neste arquivo
 * 
 * Estrutura de pastas:
 * public/images/
 * ├── hero/          - Imagens de fundo da seção hero
 * ├── about/         - Imagens do salão
 * ├── gallery/       - Galeria de trabalhos (subpastas por categoria)
 * │   ├── alisamentos/
 * │   ├── loiros/
 * │   ├── morenas/
 * │   ├── cortes-femininos/
 * │   └── cortes-masculinos/
 * ├── specialties/   - Imagens das especialidades (before/after)
 * ├── team/          - Fotos da equipe
 * ├── partners/      - Logos dos parceiros
 * ├── blog/          - Imagens dos artigos do blog
 * └── og/            - Imagens para Open Graph / SEO
 */

// ============================================
// HERO SECTION
// ============================================
export const HERO_IMAGES = {
  background: {
    src: '/images/hero/hero-bg.webp',
    alt: 'Secret Look Lisboa - Salão de Luxo'
  }
} as const;

// ============================================
// ABOUT SECTION
// ============================================
export const ABOUT_IMAGES = {
  salon: {
    src: '/images/about/salao.jpeg',
    alt: 'Interior do Salão Secret Look Lisboa'
  }
} as const;

// ============================================
// SPECIALTIES SECTION
// ============================================
export const SPECIALTIES_IMAGES = {
  alisamentos: {
    before: {
      src: '/images/gallery/antes_depois/antes.jpeg',
      alt: 'Antes do alisamento'
    },
    after: {
      src: '/images/gallery/antes_depois/depois.jpeg',
      alt: 'Depois do alisamento - resultado perfeito'
    }
  },
  loiros: {
    src: '/images/gallery/loiros/loiros_01.jpg',
    alt: 'Loiros perfeitos e iluminados'
  },
  morenas: {
    src: '/images/gallery/morenas/morenas_05.jpg',
    alt: 'Morenas iluminadas com brilho natural'
  },
  cortesFemininos: {
    src: '/images/specialties/cortes-femininos.webp',
    alt: 'Cortes femininos modernos e elegantes'
  },
  cortesMasculinos: {
    src: '/images/gallery/cortes-masculinos/antes_depois_01.jpg',
    alt: 'Cortes masculinos estilosos'
  }
} as const;

// ============================================
// GALLERY SECTION
// Para adicionar novas imagens, basta adicionar um novo objeto ao array
// ============================================
export type GalleryCategory = 'todos' | 'alisamentos' | 'loiros' | 'morenas' | 'cortes-masculinos';
// Nota: 'cortes-femininos' removido temporariamente - sem imagens disponíveis

export interface GalleryImage {
  id: number;
  category: Exclude<GalleryCategory, 'todos'>;
  src: string;
  alt: string;
  label: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Alisamentos (5 imagens disponíveis)
  { id: 1, category: 'alisamentos', src: '/images/gallery/alisamentos/alisamento_01.jpg', alt: 'Alisamento liso perfeito', label: 'Alisamento 1' },
  { id: 2, category: 'alisamentos', src: '/images/gallery/alisamentos/alisamento_02.jpg', alt: 'Alisamento com brilho intenso', label: 'Alisamento 2' },
  { id: 3, category: 'alisamentos', src: '/images/gallery/alisamentos/alisamento_03.jpg', alt: 'Alisamento brasileiro', label: 'Alisamento 3' },
  { id: 4, category: 'alisamentos', src: '/images/gallery/alisamentos/alisamento_04.jpg', alt: 'Alisamento orgânico', label: 'Alisamento 4' },
  { id: 5, category: 'alisamentos', src: '/images/gallery/alisamentos/alisamento_05.jpg', alt: 'Alisamento definitivo', label: 'Alisamento 5' },
  
  // Loiros (5 imagens disponíveis)
  { id: 6, category: 'loiros', src: '/images/gallery/loiros/loiros_01.jpg', alt: 'Loiro mel natural', label: 'Loiro Mel' },
  { id: 7, category: 'loiros', src: '/images/gallery/loiros/loiros_02.jpg', alt: 'Loiro platinado elegante', label: 'Loiro Platinado' },
  { id: 8, category: 'loiros', src: '/images/gallery/loiros/loiros_03.jpg', alt: 'Loiro champagne sofisticado', label: 'Loiro Champagne' },
  { id: 9, category: 'loiros', src: '/images/gallery/loiros/loiros_04.jpg', alt: 'Loiro dourado', label: 'Loiro Dourado' },
  { id: 10, category: 'loiros', src: '/images/gallery/loiros/loiros_05.jpg', alt: 'Loiro natural', label: 'Loiro Natural' },
  
  // Morenas (5 imagens disponíveis)
  { id: 11, category: 'morenas', src: '/images/gallery/morenas/morenas_01.jpg', alt: 'Morena iluminada com reflexos', label: 'Morena Iluminada' },
  { id: 12, category: 'morenas', src: '/images/gallery/morenas/morenas_02.jpg', alt: 'Chocolate quente intenso', label: 'Chocolate Quente' },
  { id: 13, category: 'morenas', src: '/images/gallery/morenas/morenas_03.jpg', alt: 'Morena chocolate', label: 'Chocolate' },
  { id: 14, category: 'morenas', src: '/images/gallery/morenas/morenas_04.jpg', alt: 'Castanho iluminado', label: 'Castanho' },
  { id: 15, category: 'morenas', src: '/images/gallery/morenas/morenas_05.jpg', alt: 'Castanho com mechas sutis', label: 'Castanho Mechas' },
  
  // Cortes Masculinos (2 imagens disponíveis)
  { id: 16, category: 'cortes-masculinos', src: '/images/gallery/cortes-masculinos/antes_depois_01.jpg', alt: 'Antes e depois corte masculino', label: 'Antes/Depois 1' },
  { id: 17, category: 'cortes-masculinos', src: '/images/gallery/cortes-masculinos/antes_depois_02.jpg', alt: 'Transformação corte masculino', label: 'Antes/Depois 2' },
  
  // Nota: Cortes Femininos removidos temporariamente - pasta vazia
];

// ============================================
// TEAM SECTION
// ============================================
export interface TeamMemberImage {
  src: string;
  alt: string;
}

export const TEAM_IMAGES: Record<string, TeamMemberImage> = {
  enzoTani: {
    src: '/images/team/enzotani.jpg',
    alt: 'Enzo Tani - Master Hair Stylist & Founder'
  },
  ivoTavares: {
    src: '/images/team/ivotavares.jpg',
    alt: 'Ivo Tavares - Senior Colorist'
  },
  lenitaDias: {
    src: '/images/team/lenitadias.jpg',
    alt: 'Lenita Dias - Especialista em Loiros'
  },
  gabrielFelix: {
    src: '/images/team/gabrielfelix.jpg',
    alt: 'Gabriel Félix - Hairstylist'
  }
} as const;

// ============================================
// PARTNERS SECTION
// ============================================
export const PARTNER_IMAGES = {
  sebastian: {
    src: '/images/partners/sebastian.webp',
    alt: 'Sebastian Professional - Parceiro Oficial'
  },
  evancare: {
    src: '/images/partners/evancare.webp',
    alt: 'Evan Care - Parceiro de Produtos Capilares'
  }
} as const;

// ============================================
// BLOG SECTION
// ============================================
export interface BlogImage {
  src: string;
  alt: string;
}

export const BLOG_IMAGES: Record<string, BlogImage> = {
  alisamentoPerfeito: {
    src: '/images/blog/alisamento-perfeito.webp',
    alt: 'Dicas para manter o alisamento perfeito'
  },
  cabelosLoiros: {
    src: '/images/blog/cabelos-loiros.webp',
    alt: 'Cuidados com cabelos loiros'
  },
  tratamentosCapilares: {
    src: '/images/blog/tratamentos-capilares.webp',
    alt: 'Tratamentos capilares profissionais'
  }
} as const;

// ============================================
// INSTAGRAM SECTION (Placeholders)
// ============================================
export const INSTAGRAM_IMAGES = {
  // Estas imagens podem ser substituídas por dados da API do Instagram
  feed: [
    { id: 1, src: '/images/instagram/post-1.webp', alt: 'Post Instagram 1', likes: 234 },
    { id: 2, src: '/images/instagram/post-2.webp', alt: 'Post Instagram 2', likes: 189 },
    { id: 3, src: '/images/instagram/post-3.webp', alt: 'Post Instagram 3', likes: 312 },
    { id: 4, src: '/images/instagram/post-4.webp', alt: 'Post Instagram 4', likes: 278 },
    { id: 5, src: '/images/instagram/post-5.webp', alt: 'Post Instagram 5', likes: 156 },
    { id: 6, src: '/images/instagram/post-6.webp', alt: 'Post Instagram 6', likes: 423 },
    { id: 7, src: '/images/instagram/post-7.webp', alt: 'Post Instagram 7', likes: 198 },
    { id: 8, src: '/images/instagram/post-8.webp', alt: 'Post Instagram 8', likes: 267 },
    { id: 9, src: '/images/instagram/post-9.webp', alt: 'Post Instagram 9', likes: 345 },
  ]
} as const;

// ============================================
// OG / SEO IMAGES
// ============================================
export const OG_IMAGES = {
  default: {
    src: '/images/og/og-image.webp',
    alt: 'Secret Look Lisboa - Salão de Cabeleireiro Premium'
  }
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Retorna o caminho da imagem ou um fallback
 */
export const getImageSrc = (src: string | undefined, fallback: string = '/placeholder.svg'): string => {
  return src || fallback;
};

/**
 * Verifica se uma imagem existe (útil para debugging)
 */
export const checkImageExists = async (src: string): Promise<boolean> => {
  try {
    const response = await fetch(src, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// ============================================
// OBJETO CONSOLIDADO (para acesso unificado)
// ============================================
export const IMAGES = {
  hero: HERO_IMAGES,
  about: ABOUT_IMAGES,
  specialties: SPECIALTIES_IMAGES,
  gallery: GALLERY_IMAGES,
  team: TEAM_IMAGES,
  partners: PARTNER_IMAGES,
  blog: BLOG_IMAGES,
  instagram: INSTAGRAM_IMAGES,
  og: OG_IMAGES,
} as const;

export default IMAGES;
