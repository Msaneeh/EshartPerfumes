import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Import the auth instance

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // 1. Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is logged in
        setUser({ email: firebaseUser.email, uid: firebaseUser.uid });
      } else {
        // User is logged out
        setUser(null);
      }
      setIsInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  // 2. Login handler using Firebase SDK
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will automatically update the user state
    } catch (error) {
      // Map Firebase error codes to friendly messages
      let message = 'Invalid email or password';
      if (error.code === 'auth/user-not-found') message = 'No account found with this email';
      if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') message = 'Incorrect password';
      if (error.code === 'auth/too-many-requests') message = 'Too many attempts. Try again later';
      throw new Error(message);
    }
  };

  // 3. Logout handler
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, isInitializing, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};