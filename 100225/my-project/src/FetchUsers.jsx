import React, { useEffect, useState } from 'react';

export default function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (mounted) setUsers(data);
      })
      .catch((err) => {
        if (mounted) setError(err.message || 'Fetch error');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p className="text-red-600">Помилка: {error}</p>;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Користувачі</h3>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="p-2 border rounded">
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
