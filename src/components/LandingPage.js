import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import LoginModal from './LoginFirm';
import RegisterModal from './RegisterFirm';

function LandingPage() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Dirm Choice</h1>
          <p>Choose your favorite meal and enjoy culinary delight!</p>
          <div className="cta-buttons">
            <button onClick={openRegister}>Register</button>
            <button onClick={openLogin}>Login</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Delicious Food"
          />
        </div>
      </header>

           {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2025 Dirm Choice. All Rights Reserved.</p>
      </footer>

      {/* Modals */}
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        switchToRegister={openRegister}
      />
      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
        switchToLogin={openLogin}
      />
    </div>
  );
}

export default LandingPage;
