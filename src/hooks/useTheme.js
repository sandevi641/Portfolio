import { useState, useEffect } from 'react';
import { THEME_KEY, THEMES } from '../utils/constants';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // 1. Check local storage
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === THEMES.DARK || savedTheme === THEMES.LIGHT) {
      return savedTheme;
    }

    // 2. Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEMES.LIGHT;
    }

    // Default to dark
    return THEMES.DARK;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };

  return {
    theme,
    isDark: theme === THEMES.DARK,
    toggleTheme,
    setTheme,
  };
};
