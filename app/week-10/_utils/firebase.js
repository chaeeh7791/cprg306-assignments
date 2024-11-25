// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import getFirestore from Firebase Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiknx84Lc5X0sqZToXN1nTM6ZsThhA44Q",
  authDomain: "cprg306-assignments-bbadc.firebaseapp.com",
  projectId: "cprg306-assignments-bbadc",
  storageBucket: "cprg306-assignments-bbadc.firebasestorage.app",
  messagingSenderId: "743483876716",
  appId: "1:743483876716:web:c4d0b5f270c20794db3f49",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
//const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service
export const db = getFirestore(app); // Initialize Firebase Firestore and get a reference to the service
