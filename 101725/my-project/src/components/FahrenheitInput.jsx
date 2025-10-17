import React from 'react';

export default function FahrenheitInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Фаренгейт</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
        placeholder="°F"
      />
    </div>
  );
}
