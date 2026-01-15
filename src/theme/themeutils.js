// src/theme/themeutils.js

export const applyColors = (colors = {}) => {
  if (!colors) return;

  const root = document.documentElement;

  const mappings = {
    '--color-primary': colors.primary || '',               // Main UI/links/buttons
    '--color-text': colors.text || '',                     // Body text
    '--color-background': colors.Background || '',         // Full website background
    '--color-banner-background': colors.bannerBackground || '',    // Hero banner background
    '--color-banner-title': colors.bannerText || '',       // Banner title
    '--color-banner-subtitle': colors.bannerSubtitle || '',// Banner subtitle
    '--color-cta-bg': colors.ctaBg || '',                 // CTA button background
    '--color-cta-text': colors.ctaText || '',             // CTA button text
    '--color-footer-bg': colors.footerBg || '',           // Footer background
    '--color-footer-text': colors.footerText || '',       // Footer text

    // Legacy Docusaurus mapping
    '--ifm-color-primary': colors.primary || '',
    '--ifm-font-color-base': colors.text || '',
  };

  // Apply each mapping
  Object.entries(mappings).forEach(([key, value]) => {
    if (value) root.style.setProperty(key, value);
    else root.style.removeProperty(key);
  });
};
