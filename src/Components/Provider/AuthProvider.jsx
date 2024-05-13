import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user ,setUser] = useState([]);
const [loading,setLoading] = useState(true);
const signUpInUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
const loginUser = (email , password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}
const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
    });
  };
useEffect(()=>{
    const unSubscrive = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        return unSubscrive;
    }
},[])
const userInfo = {
signUpInUser,
loading,
user,
loginUser,
logOut,updateUser
}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;