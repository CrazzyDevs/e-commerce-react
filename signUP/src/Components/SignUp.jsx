
import '../App.css'
import { useRef, useState } from 'react'
import { auth  } from '../firebase'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from 'firebase/auth'


const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [passwodError, setPasswordError] = useState()
    const [accountError, setAccountError] = useState()
    const [loading, setLoading] = useState()

    const navigate = useNavigate()

    async function handleSubmit(e){
         e.preventDefault()

        if (passwordRef.current.value !== 
          confirmPasswordRef.current.value) {
            return setPasswordError('Passwords do not match')
          }
          if (passwordRef.current.value.length < 6) {
            return setPasswordError('Password must contain at least 6 characters')
          }
        try {
          setAccountError('')
          setPasswordError('')
          setLoading(true)
          await createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
          navigate("/")
        } catch {
            setAccountError('Failed to create an acount')
        }

        setLoading(false)
    }
  

  return (
    <div className="formDiv">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      {
        accountError && <p style={{color: 'red', textAlign: 'center'}}>{accountError}</p>
       }
        <div className='email'>
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" ref={emailRef} required></input>
        </div>
        <div className='password'>
            <label>Password</label>
            <input type="password" placeholder='Password' ref={passwordRef}></input>
        </div>
        <div className='confirmPassword'>
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' ref={confirmPasswordRef}></input>
            {
              passwodError&& <p style={{color: 'red', fontSize: 15}}>{passwodError} </p>
            }
        </div>
        <div className='submitBtn'>
             <button type="submit" disabled={loading}>Sign Up</button>
        </div>     
      </form>
      <hr className='line' style={{marginTop: 30}}/>  
      <div className='HaveAnAccount'>
        <p>Already have an account? </p><Link to={"/login"} style={{fontSize: 13, color: "red", textDecoration: 'none'}}>Log in</Link>
      </div>  

    </div>
  )
}

export default SignUp



