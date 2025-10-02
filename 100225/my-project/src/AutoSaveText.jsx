import React, { useEffect, useState } from 'react';

export default function AutoSaveText({ storageKey = 'autosave_text' }) {
  const [text, setText] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
  const id = setTimeout(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(text));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, 300);
  return () => clearTimeout(id);
}, [text, storageKey]);


  return (
    <div className="space-y-2">
      <label className="block font-medium">Введіть текст</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
        rows={5}
      />
      <p className="text-sm text-gray-600">Автозбереження у localStorage</p>
    </div>
  );
}
