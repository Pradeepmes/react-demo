import React, { createContext } from 'react'
import { useState } from 'react'
import Propschild from './Propschild'

const UserContext = createContext();

const Propsexample = () => {

    const [input,setInput]= useState();
    const [name]=useState("pradeep")


    const handleChange=(e)=>{
    setInput(e.target.value)
    }


  return (
    <div>

        <h1>Prent component</h1>
        <input type='text' value={input} onChange={handleChange}/>
        <Propschild value={input}></Propschild>

        <hr></hr>
         <UserContext.Provider value={name}>
          <Propschild />
        </UserContext.Provider>
     

    </div>
  )
}

export default Propsexample
