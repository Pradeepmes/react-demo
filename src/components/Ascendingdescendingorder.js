import React from 'react'
import { useState, useEffect } from 'react'

const Ascendingdescendingorder = () => {

  const [employee,setEmployee]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((data)=>setEmployee(data))
    .catch((err)=>{
        console.log("error")
    });
  },[])

  const ascemployee = [...employee].sort((a,b)=>{
    return a.name.localeCompare(b.name);
  })
  
  return (
    <div>
       
        {
        ascemployee.map((item)=>{
           return <p> {item.name} </p>
        })
      }
    </div>
  )
}

export default Ascendingdescendingorder
