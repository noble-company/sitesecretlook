// Declaração de tipo para o fbq global
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      value: 1,
      currency: 'EUR',
    });
  }
};
