import React from "react";
import Counter from "./Counter";
import MoodSelector from "./MoodSelector";
import ThanksMessage from "./ThanksMessage";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen flex items-start justify-center p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="w-full max-w-3xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Практичне завдання 2</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1"><Counter /></div>
          <div className="col-span-1"><MoodSelector /></div>
          <div className="col-span-1"><ThanksMessage /></div>
        </div>
      </div>
    </div>
  );
}
