import React from 'react'
import Grandchild from './Grandchild'

const Propschild = ({value}) => {

    
  return (
    <div>
        <h2>child component</h2>
        <p> form parent {value}</p>
        <Grandchild value={value}/>
      
    </div>
  )
}

export default Propschild
