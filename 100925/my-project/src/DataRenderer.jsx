import React from 'react';

export default function DataRenderer({ data }) {
  return data === null ? (
    <>
      <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </>
  ) : data && (data.title || data.name || data.text) ? (
    <div className="p-3 border rounded bg-white dark:bg-gray-800">
      <h4 className="font-semibold">{data.title ?? data.name ?? 'Без заголовка'}</h4>
      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{data.text ?? data.body ?? 'Немає опису'}</p>
    </div>
  ) : (
    <div className="text-gray-500">Дані відсутні</div>
  );
}
