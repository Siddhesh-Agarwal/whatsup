import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIUlOnW5_spg4pCtno4yr2E7rO7YUSHHw",
    authDomain: "whatsapp-clone-6b87a.firebaseapp.com",
    projectId: "whatsapp-clone-6b87a",
    storageBucket: "whatsapp-clone-6b87a.appspot.com",
    messagingSenderId: "764436969466",
    appId: "1:764436969466:web:abdd468cb7631f02161643",
    measurementId: "G-QXGYBTS81L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();