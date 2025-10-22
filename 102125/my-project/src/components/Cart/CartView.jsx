import React from "react";
import { useCartState, useCartDispatch } from "../../contexts/CartContext";

export default function CartView() {
  const { items } = useCartState();
  const dispatch = useCartDispatch();

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const totalSum = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <div>
      {items.length === 0 ? <div>Кошик порожній</div> : (
        <div style={{ display: "grid", gap: 8 }}>
          {items.map(it => (
            <div key={it.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600 }}>{it.name}</div>
                <div style={{ fontSize: 13, color: "gray" }}>{it.qty} × {it.price} UAH</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: it.id })} style={{ padding: "6px 8px" }}>
                  Видалити
                </button>
              </div>
            </div>
          ))}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
            <div>Кількість</div>
            <div>{totalQty}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
            <div>Сума</div>
            <div>{totalSum} UAH</div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
            <button onClick={() => dispatch({ type: "CLEAR_CART" })} style={{ padding: "8px 12px" }}>
              Очистити кошик
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
