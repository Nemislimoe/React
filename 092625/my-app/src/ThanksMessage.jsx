import React, { useState, useEffect } from "react";

export default function ThanksMessage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <button
        onClick={() => setVisible(true)}
        className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 active:scale-95 transform transition duration-150 text-white focus:outline-none"
      >
        Відправити
      </button>

      <div
        aria-live="polite"
        className={`mt-4 overflow-hidden transition-all duration-300 ${visible ? "max-h-20" : "max-h-0"}`}
      >
        <div
          className={`p-3 rounded-md bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Дякуємо!
        </div>
      </div>
    </div>
  );
}
