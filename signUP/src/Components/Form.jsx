
import '../App.css'
const Form = () => {
    const handleSubmit = (e)=>{
         e.preventDefault()
    }
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div className='email'>
            <label>Email Address</label>
            <input type="email" placeholder="Email Address"></input>
        </div>
        <div className='password'>
            <label>Password</label>
            <input type="password" placeholder='Password'></input>
        </div>
        <div className='forgotPassword'>
            <input type="checkbox"></input>
            <span>Keep me logged in</span>
            <a>Forgot your password?</a>
        </div>
        <div className='submitBtn'>
             <button type="submit">Log in</button>
        </div>        
      </form>
    </div>
  )
}

export default Form
