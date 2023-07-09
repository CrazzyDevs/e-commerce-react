import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div>
      <h1>WELCOME TO CODAX SHOP</h1>
      <div>{currentUser.email}</div>

    </div>
  )
}

export default Home
