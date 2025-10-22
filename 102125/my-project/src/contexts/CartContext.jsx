import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  items: [], // { id, name, price, qty }
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id, name, price } = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i),
        };
      }
      return { ...state, items: [...state.items, { id, name, price, qty: 1 }] };
    }
    case "REMOVE_ITEM": {
      const id = action.payload;
      return { ...state, items: state.items.filter(i => i.id !== id) };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      throw new Error("Unknown action " + action.type);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  return useContext(CartStateContext);
}
export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
