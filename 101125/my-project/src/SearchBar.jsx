import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full sm:w-64">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
        type="text"
        placeholder="Пошук за іменем..."
      />
    </div>
  );
}
