import React from 'react'

const Shareprops = ({data}) => {
  return (
    <div>
        <h2>new data</h2>
      <p>{data.title}</p>

      <ul>
               {
                data.map((data)=>{
                    return <li>{data.title}</li>
})}
            </ul>
    </div>
  )
}

export default Shareprops
