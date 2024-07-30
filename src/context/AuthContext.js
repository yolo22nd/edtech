import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Ensure this path is correct
import firebase from 'firebase/compat/app';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
  const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).user : null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        setAuthTokens({ user, idToken });
        setUser(user);
        localStorage.setItem('authTokens', JSON.stringify({ user, idToken }));
        if (window.location.pathname === "/login") {
          navigate('/courses');
        }
      } else {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        if (window.location.pathname !== "/login") {
          navigate('/login');
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [navigate]);

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (email, password, firstName, lastName) => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
      navigate('/courses');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const logOutUser = () => {
    auth.signOut();
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  };

  const contextData = {
    user,
    authTokens,
    loginUser,
    registerUser,
    loginWithGoogle,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
