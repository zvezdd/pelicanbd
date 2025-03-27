import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4WBP-B-WSr4amoBWwoyo6nvgCYkna73o",
  authDomain: "pelican-bbc41.firebaseapp.com",
  projectId: "pelican-bbc41",
  storageBucket: "pelican-bbc41.firebasestorage.app",
  messagingSenderId: "36566912258",
  appId: "1:36566912258:web:c9d22f5b0e752caea7461b",
  measurementId: "G-MG23NB4DJD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth(app)
const provider = new GoogleAuthProvider(); 

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    return null;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

export { auth };