import React from "react";

function SkeletonItem() {
  return (
    <div className="animate-pulse bg-white rounded-lg p-4">
      <div className="h-40 bg-gray-200 rounded-md mb-3" />
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="flex justify-between items-center">
        <div className="h-6 bg-gray-200 rounded w-16" />
        <div className="h-8 bg-gray-200 rounded w-24" />
      </div>
    </div>
  );
}

export default function SkeletonGrid({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => <SkeletonItem key={i} />)}
    </div>
  );
}
