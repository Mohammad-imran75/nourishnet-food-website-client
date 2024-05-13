// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_IKEY,
    authDomain: import.meta.env.VITE_THDOMAIN,
    projectId: import.meta.env.VITE_OJECTID,
    storageBucket: import.meta.env.VITE_ORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_SSAGINGSENDERID,
    appId: import.meta.env.VITE_PID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;