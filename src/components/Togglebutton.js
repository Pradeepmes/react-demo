import React from 'react'
import { useState } from 'react'

const Togglebutton = () => {

    const [on,off] = useState("off")

    const handler=()=>{
        off(prevss=> prevss==='on'? "off":"on")
         
    }
  return (
    <div>
        <h1>Togglebutton</h1>

        <button onClick={handler}>{on}</button>
      
    </div>
  )
}

export default Togglebutton
