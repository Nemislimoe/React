import React, { useState } from 'react';

export default function TodoList({ todos = [], onToggle, onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Нове завдання"
        />
        <button className="px-3 py-2 bg-green-600 text-white rounded" type="submit">Додати</button>
      </form>

      <ul className="space-y-2">
        {todos.map((t) => (
          <li key={t.id} className="flex items-center justify-between p-2 border rounded bg-gray-50 dark:bg-gray-900">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => onToggle(t.id)}
                className="w-4 h-4"
              />
              <span className={t.done ? 'line-through text-gray-500' : ''}>{t.text}</span>
            </label>
          </li>
        ))}
        {todos.length === 0 && <li className="text-sm text-gray-500">Список пустий</li>}
      </ul>
    </div>
  );
}
