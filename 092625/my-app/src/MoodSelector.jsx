import React, { useState } from "react";

const MOODS = [
  { id: "happy", emoji: "😄", label: "Відмінно! Радий це чути.", color: "bg-yellow-400 text-yellow-900 hover:bg-yellow-500" },
  { id: "neutral", emoji: "😐", label: "Все нормально — спробуй розслабитися.", color: "bg-gray-300 text-gray-900 hover:bg-gray-400" },
  { id: "sad", emoji: "😢", label: "Шкода. Якщо хочеш, поговоримо.", color: "bg-blue-500 text-white hover:bg-blue-600" },
];

export default function MoodSelector() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <p className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-100">Як ви почуваєтесь?</p>

      <div className="flex items-center gap-3">
        {MOODS.map(m => {
          const active = selected === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={
                `w-12 h-12 flex items-center justify-center text-xl rounded-full transform transition 
                 ${m.color} ${active ? "ring-4 ring-offset-2 ring-yellow-300" : ""} hover:scale-110`
              }
              aria-pressed={active}
            >
              <span aria-hidden>{m.emoji}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 min-h-[2rem]">
        {selected ? (
          <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-opacity duration-200">
            {MOODS.find(m => m.id === selected).label}
          </div>
        ) : (
          <div className="text-sm text-gray-500 dark:text-gray-400">Оберіть одну реакцію вище.</div>
        )}
      </div>
    </div>
  );
}
