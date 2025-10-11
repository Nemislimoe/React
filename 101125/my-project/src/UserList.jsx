import React from 'react';
import UserItem from './UserItem';

export default function UserList({ users = [] }) {
  if (!users || users.length === 0) {
    return <div className="p-4 text-gray-500">Користувачів не знайдено</div>;
  }

  return (
    <ul className="space-y-3">
      {users.map((u) => (
        <li key={u.id}>
          <UserItem user={u} />
        </li>
      ))}
    </ul>
  );
}
