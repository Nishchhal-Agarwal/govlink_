import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8lztT_G-CkJXgt9XVRubPvtj1wor-EMM",
  authDomain: "govlink-de6d9.firebaseapp.com",
  projectId: "govlink-de6d9",
  storageBucket: "govlink-de6d9.appspot.com",
  messagingSenderId: "820760894114",
  appId: "1:820760894114:web:5f8f5543910568505795fb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
