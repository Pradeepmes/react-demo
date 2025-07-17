import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

const CompLifeCycleMethod = () => {
  const [count, setCount] = useState(0);
   const inputRef = useRef("pradeep");
   console.log("im here")
  //mouting
  useEffect(() => {
    console.log("mounted"); // mounting
    const timer = setInterval(() => console.log("Running..."), 1000);
    console.log(inputRef.current.value)
    return () => {
      console.log("Component unmounted"); // Cleanup
       clearInterval(timer);
    };
  },[]);

  useEffect(() => {

    
    if (count !== 0) {
      console.log('Component updated due to count:', count);
    }
  }, [count]);

  return <div>
            <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <input type="text" ref={inputRef} />
    </div>
  </div>;
};

export default CompLifeCycleMethod;
