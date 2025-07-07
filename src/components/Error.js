import React from 'react'
import { useState } from 'react'

const Error = () => {

    const [error]= useState(false)
  return (
    <div>
      {error && <p style={{ color: "red" }}>hi</p>}
     
    </div>
  )
}

export default Error
