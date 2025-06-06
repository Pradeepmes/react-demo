import React from 'react'
import { useState } from 'react'

const Simple = () => {
    const [message,setMessage]=useState("Hi raj")

    
  return (
    <div>
      
      {message}
      <button onClick={() => setMessage("Thank u for subscribing")}>Increment</button>


    </div>
  )
}

export default Simple
