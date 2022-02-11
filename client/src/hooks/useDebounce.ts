import { useState, useEffect } from "react";

export default function useDebounce(value: any, timeout: number) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
}
