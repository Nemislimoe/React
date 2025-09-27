import React from "react";

export default function LoginForm() {
  return (
    <form className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          className="input-field"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Пароль
        </label>
        <input
          type="password"
          className="input-field"
          placeholder="********"
          required
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary w-full">
          Увійти
        </button>
      </div>
    </form>
  );
}
