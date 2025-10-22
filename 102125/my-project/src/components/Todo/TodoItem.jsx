import React from "react";
import { useTodosDispatch } from "../../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const dispatch = useTodosDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderRadius: 6, background: "transparent" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <input type="checkbox" checked={todo.done} onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })} />
        <div style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</div>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })} style={{ padding: "6px 8px" }}>
          Видалити
        </button>
      </div>
    </div>
  );
}
