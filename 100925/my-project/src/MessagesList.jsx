import React, { useEffect, useState } from 'react';

const makeMessages = () => [
  { id: 'm1', text: 'Привіт! Як справи?', date: '2025-10-01' },
  { id: 'm2', text: 'Нагадую про зустріч завтра.', date: '2025-10-02' },
  { id: 'm3', text: 'Дякую за відповідь!', date: '2025-10-03' },
];

export default function MessagesList() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const load = () => {
    setLoading(true);
    setMessages([]);
    const id = setTimeout(() => {
      setMessages(makeMessages());
      setLoading(false);
    }, 3000);
    return () => clearTimeout(id);
  };

  useEffect(() => {
    const cleanup = load();
    return cleanup;
  }, []);

  return (
    <div className="p-4 border rounded space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Повідомлення</h3>
        <button
          type="button"
          onClick={() => load()}
          disabled={loading}
          className={`px-3 py-1 rounded ${loading ? 'bg-gray-300 text-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          Оновити
        </button>
      </div>

      <div className="space-y-3">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-3 border rounded bg-white">
                <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            ))
          : messages.map((m) => (
              <div key={m.id} className="p-3 border rounded bg-white">
                <div className="flex justify-between items-baseline">
                  <div className="font-medium text-black">{m.text}</div>
                  <div className="text-xs text-gray-500">{m.date}</div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
