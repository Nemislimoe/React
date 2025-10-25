import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Ласкаво просимо до Catalog App</h2>
      <p className="mb-4">Приклад SPA-застосунку з рендерингом продуктів, модалкою та lazy loading сторінок.</p>
      <Link to="/products" className="text-blue-600">Перейти до каталогу</Link>
    </div>
  );
}
