import React from 'react'
import { useUser } from '../components/userContext'
import { Link } from 'react-router-dom'

const UserRoute = ({children}) => {
    const {user, setUser} = useUser()
  return (
    <div>
        {/* if there is user in state, return the children of this component */}
        {user ? <>{children}</>: <h1>login required <Link to="/login">Login</Link> </h1> }
        
    </div>
  )
}

export default UserRoute