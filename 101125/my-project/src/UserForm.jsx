import React, { useState } from 'react';

export default function UserForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim()) {
      setError('Ім’я не має бути порожнім');
      return;
    }

    setSubmitting(true);
    try {
      const result = await onAdd({ name, email });
      if (result && result.success === false) {
        setError(result.message || 'Сталася помилка');
      } else {
        setSuccessMsg('Користувача додано');
        setName('');
        setEmail('');
        // повідомлення зникає через 2s
        setTimeout(() => setSuccessMsg(null), 2000);
      }
    } catch (e) {
      console.error(e);
      setError('Не вдалося додати користувача');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium mb-1">Ім’я</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          type="text"
          placeholder="Введіть ім'я"
          disabled={submitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          type="email"
          placeholder="email@example.com"
          disabled={submitting}
        />
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
      {successMsg && <div className="text-sm text-green-600">{successMsg}</div>}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={submitting}
          className={`px-4 py-2 rounded text-white ${submitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {submitting ? 'Додавання...' : 'Додати'}
        </button>
        <button
          type="button"
          onClick={() => { setName(''); setEmail(''); setError(null); setSuccessMsg(null); }}
          className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300"
          disabled={submitting}
        >
          Очистити
        </button>
      </div>
    </form>
  );
}
