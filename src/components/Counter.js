import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)

    const increament =()=>{
        setCount(count+1)
    }
    const decreament =()=>{
        setCount(count-1)
    }
  return (
    <div>
        <p> count: {count}</p>
        <button onClick={increament}/>inc
        <button onClick={decreament}/>dec
      
    </div>
  )
}

export default Counter
