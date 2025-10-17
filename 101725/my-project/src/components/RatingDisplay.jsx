import React from 'react';

export default function RatingDisplay({ value }) {
  return (
    <div className="text-sm text-gray-700">
      {value ? (
        <>Поточна оцінка: <strong>{value} ★</strong></>
      ) : (
        <>Оцінка не задана</>
      )}
    </div>
  );
}
