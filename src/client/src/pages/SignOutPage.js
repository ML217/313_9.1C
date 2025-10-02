import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performSignOut = async () => {
      try {
        await signOut(auth);
        setTimeout(()=>{navigate('/login'); // after sign out, redirect to login
          },5000)
       
      } catch (error) {
        console.error('Sign out error:', error.message);
      }
    };

    performSignOut();
  }, [navigate]);

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Signing out...</h2>
    </div>
  );
};

export default SignOut;