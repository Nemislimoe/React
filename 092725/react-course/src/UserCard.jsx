import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <span
          className={
            "w-3 h-3 rounded-full " + (user.isOnline ? "bg-green-500" : "bg-gray-400")
          }
          aria-hidden="true"
        />
      </div>

      <div>
        <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {user.name}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-300">Вік: {user.age}</div>
      </div>
    </div>
  );
}
