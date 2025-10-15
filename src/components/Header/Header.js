import React from 'react';
import './Header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

function Header({ userName }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/'; // redirect to landing page after logout
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  // Extract first name from email or full name
  const getFirstName = (name) => {
    if (!name) return 'User';
    if (name.includes('@')) {
      return name.split('@')[0].split('.')[0].replace(/\d+/g, '').charAt(0).toUpperCase() + name.split('@')[0].split('.')[0].slice(1);
    }
    return name.split(' ')[0];
  };

  // Generate initials for avatar placeholder
  const getInitials = (name) => {
    if (!name) return 'U';
    const firstName = getFirstName(name);
    return firstName[0].toUpperCase();
  };

  return (
    <header className="dashboard-header">
      <div className="logo">Dirm Choice</div>
      <div className="user-info">
        <span>Welcome, {getFirstName(userName)}</span>
        <div className="avatar-placeholder">
          {getInitials(userName)}
        </div>
        {auth.currentUser?.email === 'admin@dirmchoice.com' && (
  <button className="admin-btn" onClick={() => window.location.href = '/admin'}>
    Admin Panel
  </button>
)}

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
