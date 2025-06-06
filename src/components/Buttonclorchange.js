import React from 'react'
import { useState } from 'react'

const Buttonclorchange = () => {

    const colors =['red','pink','green','blue']
    const [colorIndex,setColorIndex]=useState(0)

    const handleChange=()=>{

        setColorIndex((prevIndex)=> (prevIndex+1)% colors.length)

    }
  return (
    <div>
      color
      <button onClick={handleChange}
      style={{
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
      />


    </div>
  )
}

export default Buttonclorchange
