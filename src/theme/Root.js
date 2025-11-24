import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { applyColors, getSavedTheme } from './themeutils';

export default function Root({ children }) {
  const location = useLocation();
  useEffect(() => {
    const savedTheme = getSavedTheme();
    if (savedTheme) {
      applyColors(savedTheme);
      document.body.classList.add('custom-theme-active');
    } else {
      document.body.classList.remove('custom-theme-active');
    }
  }, [location]);

  return <>{children}</>;
}
