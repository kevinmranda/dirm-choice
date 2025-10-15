import React, { useState } from 'react';
import './LoginFirm.css';
import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
        window.location.href = '/dashboard';
      }, 1500);

    } catch (error) {
      setMessage('Invalid email or password');
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        {message && <p className="error-msg">{message}</p>}
        {success && <p className="success-msg animated">{success}</p>}
        <p className="switch-link">
          No account? <span onClick={switchToRegister} className="link">Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
