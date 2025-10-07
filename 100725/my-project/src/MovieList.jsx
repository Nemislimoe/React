import React, { useState } from 'react';

export default function MovieList() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);

  const addMovie = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setMovies((prev) => [...prev, { id: Date.now().toString(), title: title.trim() }]);
    setTitle('');
  };

  const removeMovie = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="p-4 border rounded space-y-3">
      <form onSubmit={addMovie} className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Назва фільму"
          className="flex-1 px-3 py-2 border rounded"
          type="text"
        />
        <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">Додати</button>
      </form>

      <ul className="space-y-2">
        {movies.map((m) => (
          <li key={m.id} className="flex items-center justify-between p-2 border rounded">
            <span>{m.title}</span>
            <button
              onClick={() => removeMovie(m.id)}
              className="px-2 py-1 text-sm text-red-600 border rounded"
              type="button"
            >
              Видалити
            </button>
          </li>
        ))}
        {movies.length === 0 && <li className="text-sm text-gray-500">Список порожній</li>}
      </ul>
    </div>
  );
}
