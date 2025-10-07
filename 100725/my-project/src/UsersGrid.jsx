import React, { useEffect, useState } from 'react';

export default function UsersGrid({ limit = 12 }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (mounted) setUsers(data.slice(0, limit));
      })
      .catch(() => {
        if (mounted) setUsers([]);
      })
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false; };
  }, [limit]);

  if (loading) return <p>Завантаження користувачів...</p>;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Користувачі</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((u) => (
          <div key={u.id} className="p-4 border rounded shadow-sm bg-white">
            <h4 className="font-semibold">{u.name}</h4>
            <p className="text-sm text-gray-600">{u.email}</p>

            {expandedId === u.id && (
              <div className="mt-2 text-sm text-gray-700">
                <p><strong>Телефон:</strong> {u.phone}</p>
                <p><strong>Компанія:</strong> {u.company?.name}</p>
                <p><strong>Адреса:</strong> {u.address?.city}, {u.address?.street}</p>
              </div>
            )}

            <div className="mt-3">
              <button
                onClick={() => setExpandedId((id) => (id === u.id ? null : u.id))}
                className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
                type="button"
              >
                {expandedId === u.id ? 'Приховати' : 'Показати більше'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
