import React from 'react'

const Callback = ({label,CallbackClick}) => {
  return (
    <div>
      <button onClick={CallbackClick}>{label}</button>
    </div>
  )
}

export default Callback
