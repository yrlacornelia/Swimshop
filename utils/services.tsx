import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential, // Import UserCredential type
} from "../firebaseConfig";
import { auth } from "../firebaseConfig";

// Define the type for the user context
interface UserContextType {
  user: any;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

const userAuthContext = createContext<UserContextType | undefined>(undefined);

export function UserAuthContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<any>(null); 

  async function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
    await signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  const context = useContext(userAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within a UserAuthContextProvider");
  }
  return context;
}