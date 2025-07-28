// useWindowSize.js
import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

   // handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default useWindowSize;
