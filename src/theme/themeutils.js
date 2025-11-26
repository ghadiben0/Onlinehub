export const getSavedTheme = () => {
  const saved = localStorage.getItem('customColors');
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to parse saved theme:', e);
    return null;
  }
};

export const applyColors = (colors) => {
  if (!colors) return;
  const root = document.documentElement;

  const mapping = {
    '--color-primary': colors.primary,
    '--color-text': colors.text,
    '--color-background': colors.background,
    '--banner-bg': colors.bannerBg || colors.background,
    '--banner-text': colors.bannerText,
    '--banner-subtitle': colors.bannerSubtitle,
    '--cta-bg': colors.ctaBg,
    '--cta-text': colors.ctaText,
    '--footer-bg': colors.footerBg,
    '--footer-text': colors.footerText,
    '--toc-text': colors.tocText,
    '--toc-active': colors.tocActive,
    '--link-text': colors.linkText,
  };

  Object.entries(mapping).forEach(([k, v]) => {
    if (v) root.style.setProperty(k, v);
  });

  root.classList.add('custom-theme-active');
};
