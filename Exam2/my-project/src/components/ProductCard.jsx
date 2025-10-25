import React from "react";

export default function ProductCard({ product, onOpen }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
      <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400">
        Фото
      </div>
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-500 flex-1">{product.desc}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">{product.price} UAH</div>
        <div className="flex gap-2">
          <button onClick={() => onOpen(product)} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Детальніше</button>
        </div>
      </div>
    </div>
  );
}
