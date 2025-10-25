import React, { useMemo, useState } from "react";
import { products as allProducts } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import SkeletonGrid from "../components/SkeletonGrid";
import ProductModal from "../components/ProductModal";
import { useFakeLoad } from "../hooks/useFakeLoad";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Products() {
  const loading = useFakeLoad(1200);
  const [items] = useState(allProducts);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [items, query]);

  function openModal(product) {
    setSelected(product);
    setIsOpen(true);
    // показати URL /products/:id (опціонально)
    navigate(`/products/${product.id}`, { state: { background: location } });
  }

  function closeModal() {
    setIsOpen(false);
    setSelected(null);
    navigate("/products", { replace: true });
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Каталог товарів</h2>
        <div>
          <Link to="/about" className="text-sm text-blue-600">Дізнатись про нас</Link>
        </div>
      </div>

      <div className="mb-6 flex gap-3">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Пошук..." className="px-3 py-2 rounded border w-full max-w-md" />
        <div className="text-sm text-gray-500">{filtered.length} результатів</div>
      </div>

      {loading ? (
        <SkeletonGrid count={8} />
      ) : filtered.length === 0 ? (
        <div className="p-6 bg-white rounded shadow-sm">Нічого не знайдено</div>
      ) : (
        <ProductGrid items={filtered} onOpen={openModal} />
      )}

      <ProductModal product={selected} isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
