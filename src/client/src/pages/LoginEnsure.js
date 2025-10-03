import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom';

const LoginEnsure = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = () => navigate('/');
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/signout');
    });
  };

  return (
    <div>
      <h2>Login Status Page</h2>
      {user ? (
        <>
          <p>You are logged in as {user.email}</p >
          <button onClick={handleLogin}>Welcome To DevDeakin</button>
          <button onClick={handleSignOut}>Sign Out</button>
          </>
      ) : (
        <>
          <p>You are not logged in</p >
          <button onClick={handleLogin}>Go to Home</button>
        </>
      )}
    </div>
  );
};

export default LoginEnsure;
