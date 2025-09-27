import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import CounterButton from "./CounterButton";
import LoginForm from "./LoginForm";
import ResponsiveMessage from "./ResponsiveMessage";
import InteractiveCard from "./InteractiveCard";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Lab3</h1>

        <button
          onClick={() => setIsDark((v) => !v)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 transition"
          aria-pressed={isDark}
          type="button"
        >
          {isDark ? "Світла тема" : "Темна тема"}
        </button>
      </header>

      <main className="p-6 space-y-6">
        <UserCard user={{ name: "Олег", age: 2, isOnline: true }} />
        <CounterButton />
        <LoginForm />
        <ResponsiveMessage />
        <InteractiveCard />
      </main>
    </div>
  );
}
