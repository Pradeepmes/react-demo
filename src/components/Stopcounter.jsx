import React, { useRef } from "react";
import { useState } from "react";

const Stopcounter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const startcounter = () => {
    if (counterRef.current) return;
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const stopcouunter = () => {
    clearInterval(counterRef.current);
    counterRef.current = null;
  };
  const resetcounter = () => {
    stopcouunter();
    setCount(0);
  };
  return (
    <div>
      {count}
      <button onClick={startcounter}>start counter</button>
      <button onClick={stopcouunter}>stop counter</button>
      <button onClick={resetcounter}>reset counter</button>
    </div>
  );
};

export default Stopcounter;
