import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting new time out");
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearing time out");
      clearTimeout(id);
    };
  }, [value, delay]);
  return { debouncedValue };
};

export default useDebounce;
