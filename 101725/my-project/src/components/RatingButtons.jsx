import React from 'react';

export default function RatingButtons({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      {[1,2,3,4,5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`px-3 py-1 rounded focus:outline-none ${value === n ? 'bg-yellow-400 text-black' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-pressed={value === n}
        >
          {n} ★
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(null)}
        className="ml-3 px-2 py-1 bg-red-100 rounded hover:bg-red-200"
      >
        Скинути
      </button>
    </div>
  );
}
