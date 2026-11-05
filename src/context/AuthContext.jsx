import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Initialize user directly from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('eeshert_admin_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email.trim() === 'admin@eeshert.com' && password.trim() === 'password') {
      const mockUser = { email: email.trim(), name: 'Admin' };
      
      // 1. Save to localStorage FIRST
      localStorage.setItem('eeshert_admin_user', JSON.stringify(mockUser));
      
      // 2. Then update state
      setUser(mockUser);
      
      return { success: true };
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eeshert_admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};