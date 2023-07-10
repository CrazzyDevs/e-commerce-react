import React ,{  useRef, useState } from 'react'
import '../App.css'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const emailRef = useRef()
    const [ error, setError ] = useState('')
    const [ message, setMessage ] = useState('')

    async function resetPassword (e) {
        e.preventDefault()
        try {
            setMessage('')
            await sendPasswordResetEmail( auth , emailRef.current.value)
            setMessage('Check Your Inbox For Further Instructions!')
        }
        catch {
            setError("Failed To Reset Password")
        }
    }
  return (
      <div className="formDiv">
      <h1>Reset Password</h1>
      {
        error ? <p style={{color: 'red', textAlign: "center"}}>{error}</p> : <p style={{color: 'green', textAlign: "center"}}>{message}</p>
      }
      <form onSubmit={resetPassword}>
        <div className='email'>
            <label> Email Address</label>
            <input type="email" placeholder="Email Address" required ref={emailRef}></input>
        </div>
       
        <div className='submitBtn'>
             <button type="submit">Reset Password</button>
        </div>    
      </form>
         <Link to={"/login"}style={{fontSize: 13, color: "red", textDecoration: 'none', marginTop: 20 }}>Log in</Link>
         <div className='dontHaveAnAccount'>
        <p>Don't have an account? </p><Link to={"/signup"} style={{fontSize: 13, color: "red", textDecoration: 'none'}}>Sign Up</Link>
      </div>  
    </div>
  )
}

export default ForgotPassword
