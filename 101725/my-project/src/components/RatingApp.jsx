import React, { useState } from 'react';
import RatingButtons from './RatingButtons';
import RatingDisplay from './RatingDisplay';

export default function RatingApp() {
  const [rating, setRating] = useState(null); // null | 1..5

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-4">
      <h3 className="text-lg font-semibold">Оцінка товару</h3>
      <RatingButtons value={rating} onChange={setRating} />
      <RatingDisplay value={rating} />
    </div>
  );
}
