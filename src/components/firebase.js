// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSp97GF6wy9cgLv0cAiHdGQJvOmkbxc0g",
  authDomain: "react-auth-ef9f8.firebaseapp.com",
  projectId: "react-auth-ef9f8",
  storageBucket: "react-auth-ef9f8.appspot.com",
  messagingSenderId: "871712689770",
  appId: "1:871712689770:web:f647cec188b4c39b840413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;