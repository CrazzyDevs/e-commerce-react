
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
          // .then( (userCredentials) => {
          //   console.log(userCredentials)
          // })
          // .catch( (error) => {
          //   console.log(error); 
          // })
    }
  

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
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
              passwodError&& <p style={{color: 'red'}}>{passwodError} </p>
            }
        </div>
        <div className='submitBtn'>
             <button type="submit" disabled={loading}>Sign Up</button>
        </div>     
      </form>
      <hr className='line' style={{marginTop: 30}}/>  
      <div className='HaveAnAccount'>
        <p>Already have an account? </p><Link to={"/login"}>Log in</Link>
      </div>  
       {
        accountError && <p>{accountError}</p>
       }
    </div>
  )
}

export default SignUp



