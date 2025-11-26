import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { getSavedTheme } from '../theme/themeutils';
import '../css/custom.css';

export default function CustomThemePage() {
  // ----- Get real defaults from CSS -----
  const getDefaultColors = () => ({
    primary: getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim(),
    text: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
    background: getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim(),
    bannerBg: getComputedStyle(document.documentElement).getPropertyValue('--banner-bg').trim(),
    bannerText: getComputedStyle(document.documentElement).getPropertyValue('--banner-text').trim(),
    bannerSubtitle: getComputedStyle(document.documentElement).getPropertyValue('--banner-subtitle').trim(),
    ctaBg: getComputedStyle(document.documentElement).getPropertyValue('--cta-bg').trim(),
    ctaText: getComputedStyle(document.documentElement).getPropertyValue('--cta-text').trim(),
    footerBg: getComputedStyle(document.documentElement).getPropertyValue('--footer-bg').trim(),
    footerText: getComputedStyle(document.documentElement).getPropertyValue('--footer-text').trim(),
    tocText: getComputedStyle(document.documentElement).getPropertyValue('--toc-text').trim(),
    tocActive: getComputedStyle(document.documentElement).getPropertyValue('--toc-active').trim(),
    linkText: getComputedStyle(document.documentElement).getPropertyValue('--link-text').trim(),
  });

  const defaultColors = getDefaultColors();

  // ----- State -----
  const [colors, setColors] = useState(() => {
    const saved = localStorage.getItem('customColors');
    return saved ? JSON.parse(saved) : defaultColors;
  });

  // ----- Apply colors function -----
  const applyColors = (c) => {
    const root = document.documentElement;

    root.style.setProperty('--color-primary', c.primary || defaultColors.primary);
    root.style.setProperty('--color-text', c.text || defaultColors.text);
    root.style.setProperty('--color-background', c.background || defaultColors.background);

    root.style.setProperty('--banner-bg', c.bannerBg || defaultColors.bannerBg);
    root.style.setProperty('--banner-text', c.bannerText || defaultColors.bannerText);
    root.style.setProperty('--banner-subtitle', c.bannerSubtitle || defaultColors.bannerSubtitle);

    root.style.setProperty('--cta-bg', c.ctaBg || defaultColors.ctaBg);
    root.style.setProperty('--cta-text', c.ctaText || defaultColors.ctaText);

    root.style.setProperty('--footer-bg', c.footerBg || defaultColors.footerBg);
    root.style.setProperty('--footer-text', c.footerText || defaultColors.footerText);

    root.style.setProperty('--toc-text', c.tocText || defaultColors.tocText);
    root.style.setProperty('--toc-active', c.tocActive || defaultColors.tocActive);
    root.style.setProperty('--link-text', c.linkText || defaultColors.linkText);

    if (localStorage.getItem('customThemeActive') === 'true') {
      root.classList.add('custom-theme-active');
    } else {
      root.classList.remove('custom-theme-active');
    }
  };

  // ----- Apply on load -----
  useEffect(() => {
    const savedTheme = localStorage.getItem('customThemeActive');
    if (savedTheme === 'true') document.documentElement.classList.add('custom-theme-active');
    else document.documentElement.classList.remove('custom-theme-active');

    applyColors(colors);
  }, [colors]);

  // ----- Handlers -----
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColors((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('customColors', JSON.stringify(colors));
    localStorage.setItem('customThemeActive', 'true');
    applyColors(colors);
    alert('✅ Custom Theme has been successfully saved!');
  };

  const handleCancel = () => {
    const savedTheme = getSavedTheme() || defaultColors;
    setColors(savedTheme);
    applyColors(savedTheme);
    window.history.back();
  };

const handleRevertToDefault = () => {
  localStorage.removeItem('customColors');
  localStorage.setItem('customThemeActive', 'false');

  setColors(defaultColors);  // <-- update React state
  applyColors(defaultColors); // <-- update CSS variables

  alert('Theme has been successfully reverted to default.');
};


  return (
    <Layout title="Customize Your Theme">
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: 'var(--color-primary)' }}>Customize Your Theme</h1>

        <div style={{ display: 'inline-block', textAlign: 'left', marginTop: '1rem' }}>
          <label>Primary Color:</label>
          <input type="color" name="primary" value={colors.primary} onChange={handleChange} />

          <br />
          <label>Text Color:</label>
          <input type="color" name="text" value={colors.text} onChange={handleChange} />

          <br />
          <label>Background Color:</label>
          <input type="color" name="background" value={colors.background} onChange={handleChange} />

          <br />
          <label>Banner Background:</label>
          <input type="color" name="bannerBg" value={colors.bannerBg} onChange={handleChange} />

          <br />
          <label>Banner Title Color:</label>
          <input type="color" name="bannerText" value={colors.bannerText} onChange={handleChange} />

          <br />
          <label>Banner Subtitle Color:</label>
          <input type="color" name="bannerSubtitle" value={colors.bannerSubtitle} onChange={handleChange} />

          <br />
          <label>CTA Background:</label>
          <input type="color" name="ctaBg" value={colors.ctaBg} onChange={handleChange} />

          <br />
          <label>CTA Text:</label>
          <input type="color" name="ctaText" value={colors.ctaText} onChange={handleChange} />

          <br />
          <label>Footer Background:</label>
          <input type="color" name="footerBg" value={colors.footerBg} onChange={handleChange} />

          <br />
          <label>Footer Text:</label>
          <input type="color" name="footerText" value={colors.footerText} onChange={handleChange} />

          <br />
          <label>TOC Text:</label>
          <input type="color" name="tocText" value={colors.tocText} onChange={handleChange} />

          <br />
          <label>Active TOC Item:</label>
          <input type="color" name="tocActive" value={colors.tocActive} onChange={handleChange} />

          <br />
          <label>Content Links:</label>
          <input type="color" name="linkText" value={colors.linkText} onChange={handleChange} />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleCancel}>Cancel</button>{' '}
          <button onClick={handleSave}>Save</button>{' '}
          <button onClick={() => window.history.back()}>Go Back to Documentation</button>{' '}
          <button onClick={handleRevertToDefault}>Revert to Default</button>
        </div>
      </div>
    </Layout>
  );
}
