import React from 'react'
import UserContext from './UserContext'
const SubContext = () => {

     const user = React.useContext(UserContext)
  return (
    <div>
      im from sub {user.name}
    </div>
  )
}

export default SubContext
