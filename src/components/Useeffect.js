import React, { useLayoutEffect, useState } from "react";
import { useEffect ,useInsertionEffect} from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 5); // evertime it take value from useState 0+5
    setCount(count + 5); // 0+5
    setCount(count + 5); //0+5

    //setCount(prev=> prev+5)  // 0+5
    // setCount(prev=> prev+5)  //5+5
    // setCount(prev=> prev+5) //10+5
    console.log(count); //ans 15  (first time u will get result as 15)
  };

   useEffect(() => {
    console.log("useEffect effect")
  }, []);
   useLayoutEffect(() => {
    console.log("useLayoutEffect effect")
  }, []);

  useInsertionEffect(() => {
    console.log("insertion effect")
  }, []);

 

  return (
    <div>
      {count}
      <button onClick={inc}>button</button>
    </div>
  );
};

export default Useeffect;
