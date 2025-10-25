import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="p-6">Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<div className="p-6">Сторінка не знайдена</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
