import '../App.css'
import Form from './Form'
import SignInWithGoogle from './SignInWithGoogle'
const FormContainer = () => {
  return (
    <div className='formContainer'>
      <img src='' alt='Logo Here'></img>
      <h1>Welcome Back</h1>
      <SignInWithGoogle />
      <p className='hr-lines'>OR LOGIN WITH EMAIL</p>
      <Form />
    </div>
  )
}

export default FormContainer
