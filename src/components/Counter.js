import React, { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)

    const increament =()=>{
        setCount(count+1)
    }
    const decreament =()=>{
        setCount(count-1)
    }

     if (count > 5) {
    throw new Error("Counter limit exceeded!");
  }

  useEffect(()=>{
    console.log("rendered again")
  },[])
  return (
    <div>
        <p> count: {count}</p>
        <button onClick={increament}>inc</button>
        <button onClick={decreament}>dec</button>
      
    </div>
  )
}

export default Counter
