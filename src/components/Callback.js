import React from 'react'

function Callback({label,CallbackClick}) {
  return (
    <div>
      <button onClick={CallbackClick}>{label}</button>
    </div>
  )
}

export default Callback




