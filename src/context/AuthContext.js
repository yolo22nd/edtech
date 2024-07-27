import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { signIn, signInWithGoogle, logout } from '../components/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
