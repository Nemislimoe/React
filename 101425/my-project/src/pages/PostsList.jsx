import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterUserId, setFilterUserId] = useState('');

  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (mounted) setPosts(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchPosts();
    return () => { mounted = false; };
  }, []);

  const visible = filterUserId ? posts.filter((p) => String(p.userId) === String(filterUserId)) : posts;

  if (loading) return <div>Завантаження постів...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Пости</h1>

      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm">Фільтр за userId:</label>
        <input
          type="number"
          value={filterUserId}
          onChange={(e) => setFilterUserId(e.target.value)}
          className="px-2 py-1 border rounded w-28"
          placeholder="userId"
        />
        <button type="button" onClick={() => setFilterUserId('')} className="px-2 py-1 bg-gray-200 rounded">Скинути</button>
      </div>

      <ul className="space-y-2">
        {visible.map((p) => (
          <li key={p.id} className="p-3 bg-white dark:bg-gray-800 rounded">
            <Link to={`/posts/${p.id}`} className="font-medium text-indigo-600 hover:underline">{p.title}</Link>
            <p className="text-sm text-gray-600 mt-1">{p.body.slice(0, 20)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
