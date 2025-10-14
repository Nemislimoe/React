import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchPost = async () => {
      setLoadingPost(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (mounted) setPost(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoadingPost(false);
      }
    };

    const fetchComments = async () => {
      setLoadingComments(true);
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments', { params: { postId }});
        if (mounted) setComments(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoadingComments(false);
      }
    };

    fetchPost();
    fetchComments();
    return () => { mounted = false; };
  }, [postId]);

  if (loadingPost) return <div>Завантаження поста...</div>;
  if (!post) return <div>Пост не знайдено</div>;

  return (
    <div>
      <Link to="/posts" className="text-sm text-indigo-600 hover:underline">← Повернутися до постів</Link>
      <h1 className="text-2xl font-bold mt-3">{post.title}</h1>
      <p className="mt-3 text-gray-700">{post.body}</p>

      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Коментарі</h2>
        {loadingComments ? (
          <div>Завантаження коментарів...</div>
        ) : (
          <ul className="space-y-3">
            {comments.map((c) => (
              <li key={c.id} className="p-3 bg-white dark:bg-gray-800 rounded">
                <div className="font-medium">{c.name} <span className="text-sm text-gray-500">({c.email})</span></div>
                <p className="text-sm text-gray-700 mt-1">{c.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
