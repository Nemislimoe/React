import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return (
    <div className="max-w-6xl mx-auto p-6">
      <div>Товар не знайдено</div>
      <Link to="/products" className="text-blue-600">Повернутись до каталогу</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">{product.desc}</p>
      <div className="font-bold text-lg mb-4">{product.price} UAH</div>
      <Link to="/products" className="text-blue-600">Назад до каталогу</Link>
    </div>
  );
}
