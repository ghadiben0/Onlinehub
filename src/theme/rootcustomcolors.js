// Handles applying custom colors globally
export function applyCustomColors(colors) {
  if (!colors) return;

  const root = document.documentElement;

  if (colors.primary) root.style.setProperty('--ifm-color-primary', colors.primary);
  if (colors.secondary) root.style.setProperty('--ifm-color-secondary', colors.secondary);
  if (colors.background) root.style.setProperty('--ifm-color-background', colors.background);
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
