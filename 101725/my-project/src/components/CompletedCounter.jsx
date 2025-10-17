import React from 'react';

export default function CompletedCounter({ count = 0, total = 0 }) {
  return (
    <div className="text-sm text-gray-700">
      Виконано: <strong>{count}</strong> з <strong>{total}</strong>
    </div>
  );
}
