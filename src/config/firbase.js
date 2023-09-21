// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQHTXEHfS2fOoTzFZ1MeYNsXWcqCPsOOc",
  authDomain: "e-commerce-8a744.firebaseapp.com",
  projectId: "e-commerce-8a744",
  storageBucket: "e-commerce-8a744.appspot.com",
  messagingSenderId: "131595734265",
  appId: "1:131595734265:web:26104c68e0ff5a36f1a628",
  measurementId: "G-65J91WQ9HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)