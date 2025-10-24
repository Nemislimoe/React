import React from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function WindowWidthDemo() {
  const { width, mode } = useWindowWidth();

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>Ширина: <strong>{width}px</strong></div>
      <div style={{ fontWeight: 600 }}>{mode}</div>
      <div style={{ color: "#6b7280", fontSize: 13 }}>
        Змінюйте розмір вікна, щоб побачити оновлення.
      </div>
    </div>
  );
}
