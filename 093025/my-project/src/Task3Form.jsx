import React, { useState } from 'react';

export default function Task3Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // запобігаємо перезавантаженню
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        className="w-full px-3 py-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Надіслати
      </button>
    </form>
  );
}
