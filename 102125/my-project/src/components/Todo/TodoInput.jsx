import React, { useState } from "react";
import { useTodosDispatch } from "../../contexts/TodoContext";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useTodosDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Нове завдання" style={{ flex: 1, padding: 8 }} />
      <button type="submit" style={{ padding: "8px 12px" }}>Додати</button>
    </form>
  );
}
