import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchDebounce() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 700);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debounced) {
      setResults([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const fakeFetch = new Promise((res) =>
      setTimeout(() => res([`Результат для "${debounced}" #1`, `Результат для "${debounced}" #2`]), 500)
    );

    fakeFetch.then((data) => {
      if (!cancelled) {
        setResults(data);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [debounced]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Пошук (з дебаунсом)..."
        style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }}
      />
      <div>
        {loading ? <div>Завантаження...</div> : null}
        {!loading && results.length === 0 && debounced ? <div>Нічого не знайдено</div> : null}
        <ul>
          {results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
