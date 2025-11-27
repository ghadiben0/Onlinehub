export function applyCustomColors(colors = {}) {
  if (!colors) return;

  const root = document.documentElement;

  root.style.setProperty('--color-primary', colors.primary || '#5A6772');
  root.style.setProperty('--color-text', colors.text || '#333333');
  root.style.setProperty('--color-background', colors.Background || '#f5f5f5');

  root.style.setProperty('--color-banner-background', colors.bannerBackground || '#5A6772');
  root.style.setProperty('--color-banner-title', colors.bannerText || '#ffffff');
  root.style.setProperty('--color-banner-subtitle', colors.bannerSubtitle || '#dddddd');

  root.style.setProperty('--color-cta-bg', colors.ctaBg || '#5A6772');
  root.style.setProperty('--color-cta-text', colors.ctaText || '#ffffff');

  root.style.setProperty('--color-footer-bg', colors.footerBg || '#3B4C5A');
  root.style.setProperty('--color-footer-text', colors.footerText || '#ffffff');
}

export function loadColorsFromStorage() {
  const saved = localStorage.getItem('customColors');
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error('Failed to parse saved colors', error);
    return null;
  }
}
