import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TodoProvider } from "./contexts/TodoContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
