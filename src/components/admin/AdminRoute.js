import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import AdminDashboard from './AdminDashboard';

function AdminRoute() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user?.email === 'admin@dirmchoice.com') {
        setIsAdmin(true);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAdmin ? <AdminDashboard /> : <Navigate to="/" />;
}

export default AdminRoute;
