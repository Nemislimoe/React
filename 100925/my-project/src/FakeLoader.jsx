import React, { useEffect, useState } from 'react';

export default function FakeLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(id);
  }, []);

  return loading ? (
    <div className="p-4 space-y-2">
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
  ) : (
    <div>{children}</div>
  );
}
