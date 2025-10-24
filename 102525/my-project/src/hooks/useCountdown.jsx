import { useCallback, useEffect, useRef, useState } from "react";

export function useCountdown(startSeconds = 10) {
  const [timeLeft, setTimeLeft] = useState(startSeconds);
  const intervalRef = useRef(null);
  const startRef = useRef(startSeconds);

  useEffect(() => {
    startRef.current = startSeconds;
    setTimeLeft(startSeconds);
  }, [startSeconds]);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clear();
    setTimeLeft(startRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clear();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, [clear]);

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return { timeLeft, start, reset: start, stop: clear };
}

export default useCountdown;
