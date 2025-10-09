import React from 'react';
import MovieList from './MovieList';
import UsersGrid from './UsersGrid';
import ProductFilter from './ProductFilter';
import ImageCardGrid from './ImageCardGrid';

export default function App() {
  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      <MovieList />
      <UsersGrid />
      <ProductFilter />
      <ImageCardGrid />
    </div>
  );
}
