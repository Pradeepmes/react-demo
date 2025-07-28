import React, { useId } from 'react'

const UseId = () => {

    const nameId= useId()
    const emailId=useId()
  return (
    <div>
        <form>
      <label htmlFor={nameId}>Name:</label>
      <input id={nameId} type="text" />

      <label htmlFor={emailId}>Email:</label>
      <input id={emailId} type="email" />
      
    </form>
      
    </div>
  )
}

export default UseId
