import React from 'react';

export default function UserStatus({ userStatus, user }) {
  return userStatus === 'loading' ? (
    <div className="p-4 space-y-2">
      <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
  ) : userStatus === 'active' ? (
    <div className="p-3 border rounded bg-green-50 text-green-800">
      <div className="font-semibold">{user?.name ?? 'Користувач'}</div>
      <div className="text-sm">{user?.email}</div>
    </div>
  ) : (
    <div className="p-3 text-gray-500">Користувач неактивний</div>
  );
}
