
import Lottie from 'lottie-react'
import animationData from '../assets/142230-login.json'
import '../App.css'
const SignUpImage = () => {
  return (
    <div className='signUpImageContainer'>
      <Lottie animationData={animationData} style={{height: 500, maxHeight: 500, objectFit: 'contain'}} />
    </div>
  )
}

export default SignUpImage
