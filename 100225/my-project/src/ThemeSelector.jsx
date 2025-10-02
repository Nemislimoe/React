import React, { useEffect, useState } from 'react';

const THEMES = {
  light: '',
  dark: 'theme-dark',
  blue: 'theme-blue',
  green: 'theme-green',
};

export default function ThemeSelector() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('app_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    try {
      Object.values(THEMES).forEach((cls) => {
        if (cls) root.classList.remove(cls);
      });
      const cls = THEMES[theme];
      if (cls) root.classList.add(cls);
      localStorage.setItem('app_theme', theme);
    } catch (e) {
      console.warn('ThemeSelector: cannot apply theme or write to localStorage', e);
    }
  }, [theme]);

  return (
    <div className="space-x-2">
      <label className="font-medium mr-2">Тема</label>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-2 py-1 border rounded"
      >
        <option value="light">Світла</option>
        <option value="dark">Темна</option>
        <option value="blue">Синя</option>
        <option value="green">Зелена</option>
      </select>
    </div>
  );
}
