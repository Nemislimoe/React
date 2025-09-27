import React, { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition transform"
      type="button"
    >
      Натиснуто {count} разів
    </button>
  );
}
