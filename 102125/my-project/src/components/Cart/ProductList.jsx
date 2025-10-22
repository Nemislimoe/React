import React from "react";
import { products } from "../../data/products";
import { useCartDispatch } from "../../contexts/CartContext";

export default function ProductList() {
  const dispatch = useCartDispatch();
  return (
    <div style={{ display: "grid", gap: 8 }}>
      {products.map(p => (
        <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 8, borderRadius: 6, background: "transparent" }}>
          <div>
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: "gray" }}>{p.price} UAH</div>
          </div>
          <button onClick={() => dispatch({ type: "ADD_ITEM", payload: p })} style={{ padding: "6px 10px", cursor: "pointer" }}>
            Додати
          </button>
        </div>
      ))}
    </div>
  );
}
