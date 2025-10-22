import React from "react";
import { useTodosState } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodosState();
  if (todos.length === 0) return <div>Немає завдань</div>;
  return (
    <div style={{ display: "grid", gap: 8 }}>
      {todos.map(t => <TodoItem key={t.id} todo={t} />)}
    </div>
  );
}
