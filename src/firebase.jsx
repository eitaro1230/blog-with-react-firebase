// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-GtiqgcEs3k2MV96htij_I5upAHAr5MI",
  authDomain: "blog-with-react-firebase-6bca4.firebaseapp.com",
  projectId: "blog-with-react-firebase-6bca4",
  storageBucket: "blog-with-react-firebase-6bca4.appspot.com",
  messagingSenderId: "443471105384",
  appId: "1:443471105384:web:6195c75bc57bfe66939add",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
