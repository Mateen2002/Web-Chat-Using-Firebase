import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTQbunqE6fQ2GBwo34EoJTKH40zkHh-c0",
  authDomain: "web-chat-application-cc61a.firebaseapp.com",
  projectId: "web-chat-application-cc61a",
  storageBucket: "web-chat-application-cc61a.appspot.com",
  messagingSenderId: "592081457243",
  appId: "1:592081457243:web:6753d53a449fac2f3e6f7e",
  measurementId: "G-NT7S3CECKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
