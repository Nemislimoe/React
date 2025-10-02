import React, { useEffect, useState } from 'react';

export default function PersistentCounter({ storageKey = 'counter_value' }) {
  const [count, setCount] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw !== null ? Number(raw) : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, String(count));
    } catch (e) {
      console.warn('PersistentCounter: cannot write to localStorage', e);
    }
  }, [count, storageKey]);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Збільшити
      </button>
      <div>Лічильник: <strong>{count}</strong></div>
      <button
        onClick={() => { setCount(0); }}
        className="px-2 py-1 bg-gray-200 rounded"
        type="button"
      >
        Скинути
      </button>
    </div>
  );
}