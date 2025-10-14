import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      setLoadingUser(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (mounted) setUser(res.data);
      } catch (e) {
        console.error(e);
        if (mounted) setError('Не вдалося завантажити профіль');
      } finally {
        if (mounted) setLoadingUser(false);
      }
    };

    const fetchPosts = async () => {
      setLoadingPosts(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`, { params: { userId: id }});
        if (mounted) setPosts(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoadingPosts(false);
      }
    };

    fetchUser();
    fetchPosts();
    return () => { mounted = false; };
  }, [id]);

  if (loadingUser) return <div>Завантаження профілю...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!user) return <div>Користувача не знайдено</div>;

  return (
    <div>
      <Link to="/users" className="text-sm text-indigo-600 hover:underline">← Повернутися до списку</Link>
      <h1 className="text-2xl font-bold mt-3">{user.name}</h1>
      <div className="mt-2 text-sm text-gray-700">
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Компанія:</strong> {user.company?.name}</div>
        <div><strong>Адреса:</strong> {user.address ? `${user.address.city}, ${user.address.street}` : '—'}</div>
      </div>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Пости користувача</h2>
        {loadingPosts ? (
          <div>Завантаження постів...</div>
        ) : (
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.id} className="p-3 bg-white dark:bg-gray-800 rounded">
                <Link to={`/posts/${p.id}`} className="font-medium text-indigo-600 hover:underline">{p.title}</Link>
                <p className="text-sm text-gray-600 mt-1">{p.body.slice(0, 80)}...</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
