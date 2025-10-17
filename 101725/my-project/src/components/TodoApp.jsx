import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';
import CompletedCounter from './CompletedCounter';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Купити хліб', done: false },
    { id: 2, text: 'Зробити дз домашнє', done: true },
  ]);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }, []);

  const addTodo = useCallback((text) => {
    setTodos((prev) => [
      { id: Date.now(), text: text.trim(), done: false },
      ...prev,
    ]);
  }, []);

  const completedCount = todos.filter(t => t.done).length;

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-4">
      <h3 className="text-lg font-semibold">Список завдань</h3>
      <TodoList todos={todos} onToggle={toggleTodo} onAdd={addTodo} />
      <CompletedCounter count={completedCount} total={todos.length} />
    </div>
  );
}
