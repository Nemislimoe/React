import React from "react";

export default function InteractiveCard() {
  return (
    <div className="max-w-md mx-auto">
      <div className="group p-6 rounded-lg bg-white dark:bg-gray-800 transition-colors duration-300 ease-in-out hover:bg-blue-50 dark:hover:bg-gray-700">
        <h3 className="text-gray-900 dark:text-gray-100 text-lg font-semibold transition-shadow duration-300 group-hover:shadow-md">
          Інтерактивна картка
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Наведіть курсор на блок, щоб побачити зміну фону та тінь тексту.
        </p>

        <div className="mt-4">
          <button
            className="px-3 py-2 rounded-md bg-blue-600 text-white focus:outline-none transition-shadow duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-sm hover:shadow-lg"
            type="button"
          >
            Натисни
          </button>
        </div>
      </div>
    </div>
  );
}
