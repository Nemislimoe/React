import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (mounted) setUsers(res.data);
      } catch (e) {
        console.error(e);
        if (mounted) setError('Не вдалося завантажити користувачів');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchUsers();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div>Завантаження користувачів...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Користувачі</h1>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.id} className="p-3 bg-white dark:bg-gray-800 rounded flex items-center justify-between">
            <div>
              <div className="font-medium">{u.name}</div>
              <div className="text-sm text-gray-500">{u.email}</div>
            </div>
            <Link
              to={`/users/${u.id}`}
              className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Переглянути
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
