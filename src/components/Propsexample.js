import React from 'react'
import { useState } from 'react'
import Propschild from './Propschild'

const Propsexample = () => {

    const [input,setInput]= useState()


    const handleChange=(e)=>{
    setInput(e.target.value)
    }


  return (
    <div>

        <h1>Prent component</h1>
        <input type='text' value={input} onChange={handleChange}/>
        <Propschild value={input}></Propschild>
     

    </div>
  )
}

export default Propsexample
