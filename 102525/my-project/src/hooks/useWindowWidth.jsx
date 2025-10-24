import { useEffect, useState } from "react";

export function useWindowWidth() {
  const isClient = typeof window !== "undefined";
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    if (!isClient) return;
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isClient]);

  const mode = width >= 768 ? "Десктопна версія" : "Мобільна версія";

  return { width, mode };
}

export default useWindowWidth;
