import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
const AuthInterface = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error(e);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <input placeholder="Email" onInput={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          type="password"
          onInput={(e) => setPassword(e.target.value)}
        />

        <button onClick={signIn}>Login</button>
      </div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logOut}>Logout</button>

      <div>Current logged in user: {auth?.currentUser?.email || "None"}</div>
    </>
  );
};

export default AuthInterface;
