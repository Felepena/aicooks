import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2XLq4DgEKrT9F1j8COri7pJED9P18tSw",
    authDomain: "logintryout-1365f.firebaseapp.com",
    projectId: "logintryout-1365f",
    storageBucket: "logintryout-1365f.appspot.com",
    messagingSenderId: "816831549871",
    appId: "1:816831549871:web:ab2fb762d32e8abd151f5a",
    measurementId: "G-0RWX2KE2PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);
