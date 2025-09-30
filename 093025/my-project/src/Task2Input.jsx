import React, { useState } from 'react';

export default function Task2Input() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-3 py-2 border rounded w-full"
        placeholder="Введіть текст..."
        type="text"
      />
      <p className="text-sm text-gray-700">Поточне значення: {value}</p>
    </div>
  );
}
