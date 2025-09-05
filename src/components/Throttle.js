import React, { useEffect, useState } from 'react'
import useThrottle from './useThrottle'

const Throttle = React.memo(({name}) => {

    const [result,setResult]= useState([])
    const [query,setQuery]= useState('')
    const throttledQuery = useThrottle(query, 2000); // throttle for 1s
    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/users?q=${throttledQuery}`)
        .then(response=> response.json())
        .then(data=> setResult(data))


    },[throttledQuery])

  return (
    <div>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        {
            result.map((item,key)=>(
                <p key={key}>{item.name}</p>
            ))
        }
      
    </div>
  )
})

export default Throttle
