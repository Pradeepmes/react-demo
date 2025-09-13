import React from 'react'
import useFetch from './useFetch'

const Fetchapi = () => {

  const {data}= useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
    <ul>
      {data.map((user,key) => (
        <li key={key}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default Fetchapi
