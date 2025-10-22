import React from "react";
import ThemeToggle from "./components/Theme/ThemeToggle";
import CartView from "./components/Cart/CartView";
import ProductList from "./components/Cart/ProductList";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === "dark" ? "#121212" : "#f6f8fa",
    color: theme === "dark" ? "#e6eef8" : "#111827",
    minHeight: "100vh",
    padding: 20,
    fontFamily: "Inter, Arial, sans-serif",
  };

  const panelStyle = {
    background: theme === "dark" ? "#1f2937" : "#ffffff",
    borderRadius: 8,
    padding: 16,
    boxShadow: theme === "dark" ? "none" : "0 1px 3px rgba(16,24,40,0.08)",
    marginBottom: 16,
  };

  return (
    <div style={appStyle}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 style={{ margin: 0 }}>Demo Shop & ToDo</h1>
        <ThemeToggle />
      </header>

      <main style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
        <section style={panelStyle}>
          <h2>Products</h2>
          <ProductList />
        </section>

        <aside style={panelStyle}>
          <h2>Cart</h2>
          <CartView />
        </aside>
      </main>

      <section style={{ ...panelStyle, marginTop: 20 }}>
        <h2>ToDo</h2>
        <TodoInput />
        <TodoList />
      </section>
    </div>
  );
}
