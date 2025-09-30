import React from 'react';

export default function Task1Button() {
  return (
    <button
      type="button"
      onClick={() => alert('Кнопку натиснуто')}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Натисни мене
    </button>
  );
}
