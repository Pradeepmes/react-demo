import React from 'react'
import Product from '../components/searchdata.json'
import { useState } from 'react'

const Search = () => {
    const [input,setInput] =useState("pradeep")

    const filtered = Product.filter((item)=>{
        return item.mobile.includes(input)
    })

  return (
    <div>
      <h1>search</h1>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <span>search text {input}</span>
     {
        filtered.map((item)=>{
          return <p><span> {item.mobile} </span> - <span>{item.price}</span></p>
        })
     }
      
    </div>
  )
}

export default Search
