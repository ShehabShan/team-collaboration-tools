import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "./firebase.init";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const googleSign = () => {
    return signInWithPopup(auth, provider);
  };

  const createRegistered = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginSetup = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const updateUserProfile = (user, profileUpdates) => {
    return updateProfile(user, profileUpdates);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user", currentUser);
      setUser(currentUser);
      setLoading(false);

      console.log(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authDetails = {
    createRegistered,
    loginSetup,
    logOut,
    googleSign,
    updateUserProfile,
    user,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authDetails}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
