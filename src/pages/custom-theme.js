import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './custom-theme.module.css';
import '../css/custom.css';
import { applyCustomColors, loadColorsFromStorage } from '../theme/rootcustomcolors';

export default function CustomThemePage() {
  // Initialize state with saved colors or defaults
  const [colors, setColors] = useState(() => {
    const saved = loadColorsFromStorage();
    return saved || {
      primary: '#5A6772',
      text: '#333333',
      siteBackground: '#ffffff',        // Full page background
      bannerBackground: '#5A6772',      // Hero banner background
      bannerText: '#ffffff',
      bannerSubtitle: '#dddddd',
      ctaBg: '#5A6772',
      ctaText: '#ffffff',
      footerBg: '#3B4C5A',
      footerText: '#ffffff',
    };
  });

  // Apply colors on mount and whenever state changes
  useEffect(() => {
    applyCustomColors(colors);

    // Explicitly set body background to prevent white page issue
    document.body.style.backgroundColor = colors.Background;
  }, [colors]);

  // Handle individual color changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColors((prev) => ({ ...prev, [name]: value }));
  };

  // Save colors to localStorage and apply
  const handleSave = () => {
    localStorage.setItem('customColors', JSON.stringify(colors));
    applyCustomColors(colors);
    document.body.style.backgroundColor = colors.Background;
    alert('✅ Custom Theme has been successfully saved!');
  };

  // Cancel changes and revert to last saved theme
  const handleCancel = () => {
    const saved = loadColorsFromStorage() || {
      primary: '#5A6772',
      text: '#333333',
      siteBackground: '#ffffff',
      bannerBackground: '#5A6772',
      bannerText: '#ffffff',
      bannerSubtitle: '#dddddd',
      ctaBg: '#5A6772',
      ctaText: '#ffffff',
      footerBg: '#3B4C5A',
      footerText: '#ffffff',
    };
    setColors(saved);
    applyCustomColors(saved);
    document.body.style.backgroundColor = saved.Background;
  };

  // Revert completely to default theme
  const handleRevertToDefault = () => {
    const defaultColors = {
      primary: '#5A6772',
      text: '#333333',
      siteBackground: '#ffffff',
      bannerBackground: '#5A6772',
      bannerText: '#ffffff',
      bannerSubtitle: '#dddddd',
      ctaBg: '#5A6772',
      ctaText: '#ffffff',
      footerBg: '#3B4C5A',
      footerText: '#ffffff',
    };
    setColors(defaultColors);
    applyCustomColors(defaultColors);
    document.body.style.backgroundColor = defaultColors.Background;
    localStorage.removeItem('customColors');
  };

  return (
    <Layout title="Customize Your Theme">
      <div className={styles.container}>
        <h1 className={styles.title}>Customize Your Theme</h1>

        <div className={styles.form}>
          {[
            { label: 'Primary Color', name: 'primary' },
            { label: 'Text Color', name: 'text' },
            { label: 'Site Background', name: 'Background' },
            { label: 'Banner Background', name: 'bannerBackground' },
            { label: 'Banner Title Color', name: 'bannerText' },
            { label: 'Banner Subtitle Color', name: 'bannerSubtitle' },
            { label: 'CTA Background', name: 'ctaBg' },
            { label: 'CTA Text', name: 'ctaText' },
            { label: 'Footer Background', name: 'footerBg' },
            { label: 'Footer Text', name: 'footerText' },
          ].map(({ label, name }) => (
            <div key={name} className={styles.fieldRow}>
              <label htmlFor={name} className={styles.label}>{label}</label>
              <input
                id={name}
                type="color"
                name={name}
                value={colors[name]}
                onChange={handleChange}
                className={styles.colorPicker}
              />
            </div>
          ))}
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
