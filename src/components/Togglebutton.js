import React from 'react'
import { useState } from 'react'

const Togglebutton = () => {

    const [initial,setInitial] = useState("edit")

    const handler=()=>{
        setInitial(prev=> prev==='save'? "edit":"save")   
    }
  return (
    <div>
        <h1>Togglebutton</h1>

        <button onClick={handler}>{initial}</button>
      
    </div>
  )
}

export default Togglebutton
