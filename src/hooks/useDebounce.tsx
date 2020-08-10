import { useState, useEffect } from "react";

export type DebounceReturnType = [string];

const useDebounce = (value: string, delay: number): DebounceReturnType => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue];
};

export default useDebounce;
