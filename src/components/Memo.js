import React from 'react'

const Memo =  ({name})=> {
    console.log("Child rendered");
  return (
    <div>
      <h2>child</h2>
      <p>Hello {name}</p>
    </div>
  )
};

export default React.memo(Memo)
