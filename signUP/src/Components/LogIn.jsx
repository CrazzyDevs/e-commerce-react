
import '../App.css'
import { useRef, useState } from 'react'
import { auth , provider } from '../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

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
          setError('Failed to Login')
         }
    }

    async function signInWithGoogle () {
      try {
       await signInWithPopup( auth, provider )
      navigate('/')
      }
      catch (error) {
        if ( error.code === 'auth/popup-closed-by-user') {
          setError('Authentication popup was closed by user')
        }
        else {
          setError('Failed to login')
        }
      }
      
    }

  return (
    <div className="formDiv">
      <h1>Welcome Back</h1>
      <button onClick={signInWithGoogle} style={{backgroundColor: "white", color: "black", borderRadius: 0}} className='googleBtn'>   <FcGoogle style={{float: "left", marginLeft: 20, height: 20}}/> Log In With Google</button>
      <p className='hr-lines'>OR LOGIN WITH EMAIL</p>
      <form onSubmit={handleSubmit}>
      {
        error && <p style={{color: 'red', textAlign: 'center'}}> {error}</p>
      }
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
           <Link to={'/forgotpassword'} style={{fontSize: 13, color: "red", textDecoration: 'none'}}>Forgot your password? </Link>
        </div>
        <div className='submitBtn'>
             <button type="submit">Log in</button>
        </div>    
      </form>
      <hr className='line' style={{marginTop: 30}}/>  
      <div className='dontHaveAnAccount'>
        <p>Don't have an account? </p><Link to={"/signup"} style={{fontSize: 13, color: "red", textDecoration: 'none'}}>Sign Up</Link>
      </div>  
    </div>
  ) 
}

export default LogIn


