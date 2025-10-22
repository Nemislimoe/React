import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, dispatch } = useTheme();
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <div>{theme === "dark" ? "Dark" : "Light"}</div>
      <button onClick={() => dispatch({ type: "TOGGLE" })} style={{ padding: "8px 12px" }}>
        Перемкнути тему
      </button>
    </div>
  );
}
