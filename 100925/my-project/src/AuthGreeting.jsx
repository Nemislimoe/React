// src/AuthGreeting.jsx
import React from 'react';

export default function AuthGreeting({ isLoggedIn, name, onLogin, onLogout }) {
  return isLoggedIn ? (
    <div className="flex items-center gap-3">
      <div className="px-3 py-2 rounded bg-green-50 text-green-800">
        Вітаю, <strong>{name}</strong>!
      </div>
      <button
        type="button"
        onClick={onLogout}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        Вийти
      </button>
    </div>
  ) : (
    <button
      type="button"
      onClick={onLogin}
      className="px-3 py-1 bg-blue-600 text-white rounded"
    >
      Увійти
    </button>
  );
}
