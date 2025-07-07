import React, { use, useRef } from 'react'

const Ref = () => {
const inputRef = useRef();

const Handlesubmit = ()=>{
  alert(`${inputRef.current.value}`)

}

  return (
    <div>
      <input type='text' ref={inputRef}/>
      <input type='texr'/>
      <button onClick={Handlesubmit}>button</button>
    </div>
  )
}

export default Ref
