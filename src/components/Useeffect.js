import React, { useState } from 'react'
import { useEffect } from 'react'

const Useeffect = () => {
 
    useEffect (()=>{
        console.log("use effect one",count)

    })
    useEffect (()=>{
        console.log("use effect two",count)

    })
    const [count,setCount] =useState(0)
    


  return (
    <div>
        {count}
        <button onClick={()=>setCount(prev=>prev+1)}>button</button>
        

      
    </div>
  )
}

export default Useeffect
