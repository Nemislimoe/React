import React, { useMemo, useState } from 'react';

const PRODUCTS = [
  { id: 'p1', name: 'Чайник електричний', price: 899 },
  { id: 'p2', name: 'Кавоварка', price: 2499 },
  { id: 'p3', name: 'Молоковідокремлювач', price: 399 },
  { id: 'p4', name: 'Пилосос', price: 3299 },
  { id: 'p5', name: 'Смарт-лампа', price: 249 },
];

export default function ProductFilter() {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return PRODUCTS;
    return PRODUCTS.filter((p) => p.name.toLowerCase().includes(term));
  }, [q]);

  return (
    <div className="p-4 border rounded space-y-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Пошук за назвою..."
        className="w-full px-3 py-2 border rounded"
        type="text"
      />

      <ul className="space-y-2">
        {filtered.map((p) => (
          <li key={p.id} className="flex justify-between p-2 border rounded bg-white">
            <span>{p.name}</span>
            <span className="font-semibold">{p.price} грн</span>
          </li>
        ))}
        {filtered.length === 0 && <li className="text-sm text-gray-500">Нічого не знайдено</li>}
      </ul>
    </div>
  );
}
