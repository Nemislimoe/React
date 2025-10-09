import React, { useState } from 'react';
import AuthGreeting from './AuthGreeting';
import FakeLoader from './FakeLoader';
import DataRenderer from './DataRenderer';
import UserStatus from './UserStatus';
import MessagesList from './MessagesList';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const sampleData = { title: 'Приклад', text: 'Ось деякі реальні дані для відображення.' };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Практичне завдання 7</h1>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Завдання 1 — AuthGreeting</h2>
          <AuthGreeting
            isLoggedIn={isLoggedIn}
            name="Інга"
            onLogin={() => setIsLoggedIn(true)}
            onLogout={() => setIsLoggedIn(false)}
          />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Завдання 2 — FakeLoader (2s skeleton → data)</h2>
          <FakeLoader>
            <div className="p-4 border rounded bg-white dark:bg-gray-800">Контент після завантаження</div>
          </FakeLoader>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Завдання 3 — DataRenderer (null / valid / empty)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 border rounded">
              <h3 className="font-medium mb-2">data = null (skeleton)</h3>
              <DataRenderer data={null} />
            </div>

            <div className="p-3 border rounded">
              <h3 className="font-medium mb-2">valid data</h3>
              <DataRenderer data={sampleData} />
            </div>

            <div className="p-3 border rounded">
              <h3 className="font-medium mb-2">empty / invalid</h3>
              <DataRenderer data={{}} />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Завдання 4 — UserStatus (loading / active / inactive)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 border rounded">
              <h3 className="font-medium mb-2">loading</h3>
              <UserStatus userStatus="loading" />
            </div>
            <div className="p-3 border rounded">
              <h3 className="font-medium mb-2">active</h3>
              <UserStatus userStatus="active" user={{ name: 'Іван', email: 'ivan@example.com' }} />
            </div>
            <div className="p-3 border rounded">
              <h3 className="font-medium mb-2">inactive</h3>
              <UserStatus userStatus="inactive" />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Завдання 5 — MessagesList (skeleton 3s → messages)</h2>
          <MessagesList />
        </section>
      </main>
    </div>
  );
}
