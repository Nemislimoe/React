import React, { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid"; 

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

const initialState = { todos: [] };

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const text = action.payload.trim();
      if (!text) return state;
      const newTodo = { id: uuidv4(), text, done: false };
      return { ...state, todos: [newTodo, ...state.todos] };
    }
    case "TOGGLE_TODO": {
      const id = action.payload;
      return { ...state, todos: state.todos.map(t => t.id === id ? { ...t, done: !t.done } : t) };
    }
    case "REMOVE_TODO": {
      const id = action.payload;
      return { ...state, todos: state.todos.filter(t => t.id !== id) };
    }
    default:
      throw new Error("Unknown todo action " + action.type);
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodosState() {
  return useContext(TodoStateContext);
}
export function useTodosDispatch() {
  return useContext(TodoDispatchContext);
}
