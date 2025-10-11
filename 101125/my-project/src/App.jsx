import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import SearchBar from './SearchBar';

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Завантаження користувачів при першому рендері
  useEffect(() => {
    let mounted = true;
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (mounted) setUsers(res.data);
      } catch (e) {
        if (mounted) setError('Не вдалося завантажити користувачів. Спробуйте пізніше.');
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchUsers();
    return () => {
      mounted = false;
    };
  }, []);

  // Додавання користувача локально (імітуємо запит axios + затримку)
  const addUser = async ({ name, email }) => {
    if (!name.trim()) return { success: false, message: 'Ім’я не має бути порожнім' };
    const newUser = {
      id: `local-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
    };

    // Імітація async-операції з axios та setTimeout
    try {
      // приклад виклику axios.post 
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s delay
      // консольна індикація що користувач "добавлено"
      console.log('User added (simulated):', newUser);
      // оновлюємо локальний стан
      setUsers((prev) => [newUser, ...prev]);
      return { success: true };
    } catch (e) {
      console.error('Add user error', e);
      return { success: false, message: 'Не вдалося додати користувача' };
    }
  };

  // Фільтрація за ім'ям (case-insensitive)
  const filteredUsers = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return users;
    return users.filter((u) => (u.name || '').toLowerCase().includes(term));
  }, [users, query]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">Список користувачів</h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h2 className="text-lg font-semibold mb-3">Додати користувача</h2>
            <UserForm onAdd={addUser} />
          </div>

          <div className="lg:col-span-2 p-4 bg-white dark:bg-gray-800 rounded shadow">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-lg font-semibold">Користувачі</h2>
              <SearchBar value={query} onChange={(v) => setQuery(v)} />
            </div>

            {loading ? (
              <div className="p-4">
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                </div>
              </div>
            ) : error ? (
              <div className="p-4 text-red-600">{error}</div>
            ) : (
              <UserList users={filteredUsers} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
