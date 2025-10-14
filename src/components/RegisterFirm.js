import React, { useState } from 'react';
import './RegisterFirm.css';
import { auth, db } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function RegisterModal({ show, onClose, switchToLogin }) {
  const [name, setName] = useState('');
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
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        createdAt: new Date()
      });

      setSuccess('🎉 Registration successful! Redirecting to login...');
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);

      setTimeout(() => {
        setSuccess('');
        switchToLogin();
      }, 1500);

    } catch (error) {
      setMessage(error.message);
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </form>
        {message && <p className="error-msg">{message}</p>}
        {success && <p className="success-msg animated">{success}</p>}
        <p className="switch-link">
          Already have an account? <span onClick={switchToLogin} className="link">Login</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;
