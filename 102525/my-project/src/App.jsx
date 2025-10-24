import React from "react";
import SearchDebounce from "./components/SearchDebounce/SearchDebounce";
import CountdownDemo from "./components/Countdown/CountdownDemo";
import WindowWidthDemo from "./components/WindowWidth/WindowWidthDemo";

export default function App() {
  return (
    <div style={{ maxWidth: 920, margin: "24px auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 style={{ margin: 0 }}>Lab11</h1>
      </header>

      <section style={{ marginBottom: 24, padding: 16, borderRadius: 8, background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <h2>Search with useDebounce</h2>
        <SearchDebounce />
      </section>

      <section style={{ marginBottom: 24, padding: 16, borderRadius: 8, background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <h2>Countdown with useCountdown</h2>
        <CountdownDemo />
      </section>

      <section style={{ marginBottom: 24, padding: 16, borderRadius: 8, background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <h2>Window width with useWindowWidth</h2>
        <WindowWidthDemo />
      </section>
    </div>
  );
}
