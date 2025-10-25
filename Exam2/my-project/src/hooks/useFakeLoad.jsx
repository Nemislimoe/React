import { useEffect, useState } from "react";

// імітує затримку завантаження; повертає loading boolean
export function useFakeLoad(delay = 1200) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return loading;
}
