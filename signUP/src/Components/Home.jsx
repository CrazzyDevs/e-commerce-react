import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { Navigate, useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [error, setError ] = useState()

  const navigate = useNavigate()
  async function logOutUser() {
    try {
      signOut(auth)
      navigate('/login')
    }
    catch {
      setError('Failed to Logout')
    }
  }

  return (
    <div className='dashboard'>
      <h1>WELCOME TO CODAX SHOP</h1>
      {currentUser && (
        <div>
          <p>{currentUser.displayName ? currentUser.displayName : currentUser.email}</p>
          {currentUser.photoURL && <img src={currentUser.photoURL} alt="User Profile" />}
        </div>
      )}
      {currentUser ? <button onClick={logOutUser}>Log out</button> : <button><Link to={'/login'} style={{ textDecoration: 'none', color: 'white'}}>Login</Link></button>}
    </div>
  );
};

export default Home;
