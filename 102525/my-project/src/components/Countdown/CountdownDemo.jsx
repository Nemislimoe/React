import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

export default function CountdownDemo() {
  const { timeLeft, start, reset, stop } = useCountdown(10);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ fontSize: 20, fontWeight: 700 }}>Залишилось: {timeLeft} с</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={start} style={{ padding: "8px 12px" }}>Запустити</button>
        <button onClick={reset} style={{ padding: "8px 12px" }}>Запустити знову</button>
        <button onClick={stop} style={{ padding: "8px 12px" }}>Зупинити</button>
      </div>
      <div style={{ color: "#6b7280", fontSize: 13 }}>
        Після досягнення 0 таймер зупиняється автоматично.
      </div>
    </div>
  );
}
