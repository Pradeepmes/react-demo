import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to="/about"><p>about</p></Link>
    </div>
  )
}

export default Home
