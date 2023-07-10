import React from 'react'
import Container from './Container'
import SignUpImage from './SignUpImage'
import { useLocation } from 'react-router-dom'
import '../App.css'

const Main = () => {
  const location = useLocation()
  return (
    <div className='container'>
      <Container />
      { location.pathname !== '/' && <SignUpImage />}
      
    </div>
  )
}

export default Main
