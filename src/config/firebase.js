import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWIs33LBkIKQKp6oK41c-W9uaUAjROZ7s",
  authDomain: "recepie-manager.firebaseapp.com",
  projectId: "recepie-manager",
  storageBucket: "recepie-manager.appspot.com",
  messagingSenderId: "137980392948",
  appId: "1:137980392948:web:77c6284e1fac37b25fb5a1",
  measurementId: "G-NM76WQVNWL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
