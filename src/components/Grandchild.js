import React from 'react'
import React, { useContext } from 'react'

const Grandchild = ({value}) => {

    const name = useContext(UserContext);
  return (
    <div>
      <h2>last child</h2>
      <h3>value form parent to last child {value}</h3>
      <h4>hello {name}</h4>
    </div>
  )
}

export default Grandchild
