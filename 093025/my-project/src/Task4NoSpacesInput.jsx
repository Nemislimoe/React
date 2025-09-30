import React, { useState } from 'react';

export default function Task4NoSpacesInput() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // Видаляємо всі пробіли з введення та не довзволяємо їх вводити
    const noSpaces = e.target.value.replace(/\s+/g, '');
    setValue(noSpaces);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Без пробілів"
        className="px-3 py-2 border rounded w-full"
        type="text"
      />
      <p className="text-sm text-gray-600">Значення: {value}</p>
    </div>
  );
}
