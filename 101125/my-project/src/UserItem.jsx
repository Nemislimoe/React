import React from 'react';

export default function UserItem({ user }) {
  return (
    <div className="flex items-center justify-between p-3 rounded border hover:shadow-sm transition bg-white dark:bg-gray-900">
      <div>
        <div className="font-medium">{user.name}</div>
        <div className="text-sm text-gray-500">{user.email}</div>
      </div>
      <div>
        <button
          type="button"
          className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Детальніше
        </button>
      </div>
    </div>
  );
}
