import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = () => {
  const { user, isInitializing } = useAuth();

  // 1. Wait for Firebase to check the auth state
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-warm">
        <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 2. If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // 3. If logged in, render the dashboard
  return <Outlet />;
};

export default ProtectedRoute;