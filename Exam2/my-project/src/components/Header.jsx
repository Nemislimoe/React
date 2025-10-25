import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Catalog App</h1>
        <nav className="flex gap-4 text-sm">
          <Link to="/">Головна</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/products">Каталог</Link>
        </nav>
      </div>
    </header>
  );
}
