import React from 'react'
import { useState,  useEffect  } from 'react'




const SearchwithAPI = () => {
    const [userdata,setUserData]= useState([])
    const [query,setQuery] = useState();
    const [input,setInput] = useState();

const fetchUser =()=>{
     fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=> response.json())
   .then((data)=>setUserData(data))
} 

const searchUser = userdata.filter((item)=>{
    return item.name.includes(query)
})

const handleSearch = ()=>{
   setQuery(input)
}
useEffect(()=>{
    fetchUser();
},[])
  return (
    <div>
        <h1>Search with api</h1>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>

       
        {
            searchUser.map((item)=>{
                return <p><span>{item.name}</span></p>
            })
        }

      
    </div>
  )
}

export default SearchwithAPI
