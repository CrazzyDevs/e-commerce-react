
import jwt_decode from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider,  } from "@react-oauth/google";
import { useState, useEffect } from "react";

const SignInWithGoogle = () => {
const [user, setUser] = useState({})
  const handleSuccess =(response)=> {
    const userInfo = jwt_decode(response.credential)
    setUser(userInfo)
  }
  const handleFailure = () => {
    console.log('failed to fetch')
  }

  useEffect(()=> {
    console.log(user)
  }, [user])

  return (
    <div>
      <GoogleOAuthProvider clientId="677040657637-mcvv3vcjg2ammfl19vvvmf9oa2voa547.apps.googleusercontent.com">
        <GoogleLogin
          buttonText="Sign In with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure} />
    </GoogleOAuthProvider>     
    </div>
  )
}

export default SignInWithGoogle
