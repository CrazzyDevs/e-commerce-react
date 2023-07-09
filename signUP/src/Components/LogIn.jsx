
import '../App.css'
import { useRef, useState } from 'react'
import { auth  } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom"

const LogIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState()

  const navigate = useNavigate()
  
    async function handleSubmit (e){
         e.preventDefault()
         try{
          setError('')
           await signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
           navigate("/")
         } catch {
          setError('failed to login')
         }
        
      
    }
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div className='email'>
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" required ref={emailRef}></input>
        </div>
        <div className='password'>
            <label>Password</label>
            <input type="password" placeholder='Password' ref={passwordRef}></input>
        </div>
        <div className='forgotPassword'>
          <div>
             <input type="checkbox"></input>
            <span style={{fontSize: 13,}}>Keep me logged in</span>
          </div>
            <span style={{fontSize: 13, color: "red" }}>Forgot your password?</span>
        </div>
        <div className='submitBtn'>
             <button type="submit">Log in</button>
        </div>    
      </form>
      <hr className='line' style={{marginTop: 30}}/>  
      <div className='dontHaveAnAccount'>
        <p>Don't have an account? </p><Link to={"/signup"}>Sign Up</Link>
      </div>  
       {
        error && <p>{error}</p>
       }
    </div>
  ) 
}

export default LogIn


