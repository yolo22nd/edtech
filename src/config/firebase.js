import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyByeLlmcXN9lXQLTBbv74lunUjItCgBDL8",
    authDomain: "edtech-f00cb.firebaseapp.com",
    projectId: "edtech-f00cb",
    storageBucket: "edtech-f00cb.appspot.com",
    messagingSenderId: "463770202385",
    appId: "1:463770202385:web:87a60550042ff571ed1cb0",
    measurementId: "G-RCHD1XEQV0"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
