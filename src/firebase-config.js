// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYVwqJEZdHC3nDxX0nUfXnzYVmLQAl5Ks",
  authDomain: "blogproject-30d9d.firebaseapp.com",
  projectId: "blogproject-30d9d",
  storageBucket: "blogproject-30d9d.appspot.com",
  messagingSenderId: "556213358540",
  appId: "1:556213358540:web:74c8e3dab05138bacbd769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()