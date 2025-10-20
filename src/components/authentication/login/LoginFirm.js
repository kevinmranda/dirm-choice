import React, { useState } from 'react';
import './LoginFirm.css';
import { auth } from '../../../firebase/config';
import dirmGroup from '../../../assets/dirm_group.jpg';

import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

function LoginModal({ show, onClose, switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccess('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);

      setSuccess('🎉 Login successful! Redirecting...');
      setLoading(false);

      setTimeout(() => {
  if (user.email === 'admin@dirmchoice.com') {
    window.location.href = '/admin';
  } else {
    window.location.href = '/dashboard';
  }
}, 1500);


    } catch (error) {
      setMessage('Invalid email or password');
      setLoading(false);
      console.error(error);
    }
  };

  const handleForgotPassword = async () => {
  if (!email) {
    alert("Please enter your email address first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("✅ Password reset email sent! Check your inbox.");
  } catch (error) {
    alert("Error: " + error.message);
  }
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
       <img src={dirmGroup} alt="Dirm Choice Logo" className="logo" />

        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off'
          name='email'/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        {message && <p className="error-msg">{message}</p>}
        {success && <p className="success-msg animated">{success}</p>}
        <p className="switch-link">
            <span onClick={handleForgotPassword} className="link">Forgot Password?</span>
</p>
<p className="switch-link">
  
          No account? <span onClick={switchToRegister} className="link">Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
