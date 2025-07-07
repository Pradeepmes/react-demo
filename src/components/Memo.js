import React from 'react'

const Memo = React.memo(function ({name}) {
    console.log("Child rendered");
  return (
    <div>
      <h2>child</h2>
      <p>Hello {name}</p>
    </div>
  )
});

export default Memo
