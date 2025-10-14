import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import UsersList from './pages/UsersList';
import PostsList from './pages/PostsList';

// Lazy-завантаження динамічних сторінок
const UserProfile = lazy(() => import('./pages/UserProfile'));
const PostDetail = lazy(() => import('./pages/PostDetail'));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="font-semibold hover:underline">Головна</Link>
            <Link to="/about" className="hover:underline">Про нас</Link>
            <Link to="/contacts" className="hover:underline">Контакти</Link>
            <Link to="/users" className="hover:underline">Користувачі</Link>
            <Link to="/posts" className="hover:underline">Пости</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <Suspense fallback={<div className="p-6 text-center">Завантаження сторінки...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id" element={<UserProfile />} />

            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:postId" element={<PostDetail />} />

            <Route path="*" element={<div>404 — Сторінку не знайдено</div>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
