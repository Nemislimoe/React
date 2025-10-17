import React from 'react';
import TodoApp from './components/TodoApp';
import TemperatureApp from './components/TemperatureApp';
import RatingApp from './components/RatingApp';

export default function App() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <TodoApp />
      <TemperatureApp />
      <RatingApp />
    </div>
  );
}
