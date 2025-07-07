import React from 'react'

const Childone = ({sendData}) => {
  return <button onClick={() => sendData("Data from child")}>Send</button>;
}

export default Childone
