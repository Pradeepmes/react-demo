import { useEffect, useState } from 'react';

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const lastRan = Date.now();

    const handler = setTimeout(() => {
      if (Date.now() - lastRan >= delay) {
        setThrottledValue(value);
      }
    }, delay - (Date.now() - lastRan));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle; 