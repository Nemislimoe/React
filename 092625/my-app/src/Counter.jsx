import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <p className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-100">
        Кількість натискань: <span className="font-bold">{count}</span>
      </p>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 active:scale-95 transform transition duration-150 focus:outline-none"
      >
        Натисни мене
      </button>
    </div>
  );
}
