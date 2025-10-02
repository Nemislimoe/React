import React, { useEffect, useState } from 'react';

export default function FetchComments({ limit = 20 }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (mounted) setComments(data.slice(0, limit));
      })
      .catch((err) => {
        if (mounted) setError(err.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, [limit]);

  if (loading) return <p>Завантаження коментарів...</p>;
  if (error) return <p className="text-red-600">Помилка: {error}</p>;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Коментарі</h3>
      {comments.map((c) => (
        <div key={c.id} className="p-3 border rounded">
          <p className="font-semibold">{c.name}</p>
          <p className="text-sm text-gray-700">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
