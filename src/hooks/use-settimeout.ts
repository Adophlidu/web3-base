import { useEffect, useRef } from 'react';
export function useTimeout(callback: () => void, delay: number) {
  const timer = useRef<number>(null);
  const cbRef = useRef(callback);

  useEffect(() => {
    cbRef.current = callback;
  }, [callback]);

  useEffect(() => {
    timer.current = setTimeout(() => {
      cbRef.current?.();
    }, delay);
    return () => {
      clearTimeout(timer.current as number);
    };
  }, [delay]);
}
