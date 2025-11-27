import React, { useEffect } from 'react';
import { loadColorsFromStorage, applyCustomColors } from '../theme/rootcustomcolors';
import '../css/custom.css';

export default function Root({ children }) {
  useEffect(() => {
    const savedColors = loadColorsFromStorage();

    if (savedColors) {
      applyCustomColors(savedColors);  // <-- must set --color-banner-bg and --color-background
      document.documentElement.classList.add('custom-theme-active');
    } else {
      document.documentElement.classList.remove('custom-theme-active');
    }
  }, []);

  return <>{children}</>;
}
