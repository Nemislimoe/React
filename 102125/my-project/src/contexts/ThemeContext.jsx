import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = { theme: "light" };

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { theme: state.theme === "light" ? "dark" : "light" };
    case "SET":
      return { theme: action.payload };
    default:
      throw new Error("Unknown theme action " + action.type);
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
