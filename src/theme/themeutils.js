export const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem('customColors');
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.error('Failed to parse saved theme:', e);
    return null;
  }
};

export const applyColors = (colors) => {
  const root = document.documentElement;

  const mappings = {
    '--custom-primary': colors?.primary || null,
    '--custom-text': colors?.text || null,
    '--custom-hero-background': colors?.background || null,
    '--custom-banner-text': colors?.bannerText || null,
    '--custom-banner-subtitle': colors?.bannerSubtitle || null,
    '--custom-cta-bg': colors?.ctaBg || null,
    '--custom-cta-text': colors?.ctaText || null,
    '--custom-footer-bg': colors?.footerBg || null,
    '--custom-footer-text': colors?.footerText || null,
    '--ifm-color-primary': colors?.primary || null,
    '--ifm-font-color-base': colors?.text || null,
  };

  Object.entries(mappings).forEach(([key, value]) => {
    if (value !== null) root.style.setProperty(key, value);
    else root.style.removeProperty(key);
  });

  if (colors) {
    root.classList.add('custom-theme-active');
  } else {
    root.classList.remove('custom-theme-active');
  }
};
