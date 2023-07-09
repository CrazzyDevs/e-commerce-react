import '../App.css'
import LogIn from './LogIn'
import Home from './Home'
import SignInWithGoogle from './SignInWithGoogle'
import SignUp from './SignUp'
import { Routes, Route } from "react-router-dom"
const Container = () => {
  return (
    <div className='formContainer'>
      <img src='' alt='Logo Here'></img>
      <h1>Welcome Back</h1>
      <SignInWithGoogle />
      <p className='hr-lines'>OR LOGIN WITH EMAIL</p>
      <Routes>
        <Route path='/' exact Component={Home} /> 
        <Route path='/login' Component={LogIn}/>
        <Route path='/signup' Component={SignUp} />
      </Routes>  
    </div>

  )
}

export default Container
