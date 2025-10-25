import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map(p => <ProductCard key={p.id} product={p} onOpen={onOpen} />)}
    </div>
  );
}
