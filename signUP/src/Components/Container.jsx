import '../App.css'
import LogIn from './LogIn'
import Home from './Home'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import { Routes, Route } from "react-router-dom"
const Container = () => {
  return (
    <div className='formContainer'>
      <img src='' alt='Logo Here'></img>
      <Routes>
        <Route path='/' exact Component={Home} /> 
        <Route path='/login' Component={LogIn}/>
        <Route path='/signup' Component={SignUp} />
        <Route path='/forgotpassword' Component={ForgotPassword} />
      </Routes>  
    </div>

  )
}

export default Container
