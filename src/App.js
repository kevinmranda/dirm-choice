import React from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminDashboard from '../src/components/admin/AdminDashboard';

import LandingPage from './components/landing/LandingPage';
import Dashboard from './components/dashboard/Dashboard';
import { auth } from './firebase/config';
import AdminRoute from './components/admin/AdminRoute'; // ✅ use your new route wrapper

import './styles.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/admin" element={<AdminRoute />} /> 
      
  
      </Routes>
  
  );
}

export default App;
