import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { getSavedTheme } from '../theme/themeutils';
import '../css/custom.css';

export default function CustomThemePage() {
  const defaultColors = {
    primary: '#5A6772',
    text: '#333333',
    background: '', // empty = use CSS gradient stripes
    bannerText: '#ffffff',
    bannerSubtitle: '#dddddd',
    ctaBg: '', // use striped CSS
    ctaText: '#ffffff',
    footerBg: '', // use striped CSS
    footerText: '#ffffff',
  };

  const [colors, setColors] = useState(() => {
    const saved = localStorage.getItem('customColors');
    return saved ? JSON.parse(saved) : defaultColors;
  });

  const applyColors = (c) => {
    const root = document.documentElement;

    // Basic colors
    root.style.setProperty('--ifm-color-primary', c.primary || '#5A6772');
    root.style.setProperty('--ifm-font-color-base', c.text || '#333');

    // HERO banner background
    const banner = document.querySelector('.hero.hero--primary');
    if (banner && c.background) banner.style.background = c.background;
    else if (banner) banner.style.removeProperty('background'); // restore stripes

    // Title & subtitle
    const title = document.querySelector('.hero__title');
    if (title) title.style.color = c.bannerText || '';
    const subtitle = document.querySelector('.hero__subtitle');
    if (subtitle) subtitle.style.color = c.bannerSubtitle || '';

    // CTA buttons
    document.querySelectorAll('.ctaButton, .button.button--primary').forEach((btn) => {
      if (c.ctaBg) btn.style.background = c.ctaBg;
      else btn.style.removeProperty('background'); // restore striped CSS
      btn.style.color = c.ctaText || '#fff';
    });

    // Footer
    const footer = document.querySelector('footer.footer');
    if (footer) {
      if (c.footerBg) footer.style.background = c.footerBg;
      else footer.style.removeProperty('background'); // restore stripes
      footer.style.color = c.footerText || '#fff';
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('customThemeActive');
    const root = document.documentElement;

    if (savedTheme === 'true') root.classList.add('custom-theme-active');
    else root.classList.remove('custom-theme-active');

    applyColors(colors);
  }, [colors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColors((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('customColors', JSON.stringify(colors));
    sessionStorage.setItem('themeShouldApply', 'true');
    applyColors(colors);
    alert('✅ Custom Theme has been successfully saved!');
  };

  const handleCancel = () => {
    const savedTheme = getSavedTheme() || defaultColors;
    applyColors(savedTheme);
    setColors(savedTheme);
    sessionStorage.removeItem('themeShouldApply');
    window.history.back();
  };

  const handleRevertToDefault = () => {
  // Remove saved theme
  localStorage.removeItem('customColors');
  sessionStorage.removeItem('themeShouldApply');

  // Reset state to defaults
  setColors(defaultColors);

  // Apply default colors safely
  applyColors(defaultColors);

  // Notify Root.js of the change
  window.dispatchEvent(new Event('themeChanged'));

  alert('Theme has been successfully reverted to default.');
};

  return (
    <Layout title="Customize Your Theme">
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: 'var(--ifm-color-primary)' }}>Customize Your Theme</h1>

        <div style={{ display: 'inline-block', textAlign: 'left', marginTop: '1rem' }}>
          <label>Primary Color:</label>
          <input type="color" name="primary" value={colors.primary} onChange={handleChange} />

          <br />
          <label>Text Color:</label>
          <input type="color" name="text" value={colors.text} onChange={handleChange} />

          <br />
          <label>Banner Background (solid):</label>
          <input type="color" name="background" value={colors.background} onChange={handleChange} />

          <br />
          <label>Banner Title Color:</label>
          <input type="color" name="bannerText" value={colors.bannerText} onChange={handleChange} />

          <br />
          <label>Banner Subtitle Color:</label>
          <input type="color" name="bannerSubtitle" value={colors.bannerSubtitle} onChange={handleChange} />

          <br />
          <label>CTA Background (solid):</label>
          <input type="color" name="ctaBg" value={colors.ctaBg} onChange={handleChange} />

          <br />
          <label>CTA Text:</label>
          <input type="color" name="ctaText" value={colors.ctaText} onChange={handleChange} />

          <br />
          <label>Footer Background (solid):</label>
          <input type="color" name="footerBg" value={colors.footerBg} onChange={handleChange} />

          <br />
          <label>Footer Text:</label>
          <input type="color" name="footerText" value={colors.footerText} onChange={handleChange} />
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
