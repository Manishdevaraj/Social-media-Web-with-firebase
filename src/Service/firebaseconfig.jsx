// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP5afCl4Z3myZ9uBUYB7feYDIH2DjoORg",
  authDomain: "write-6080b.firebaseapp.com",
  projectId: "write-6080b",
  storageBucket: "write-6080b.appspot.com",
  messagingSenderId: "845815069161",
  appId: "1:845815069161:web:08cdbbc50d113ac1d4f378",
  measurementId: "G-1PZE7NJXT5"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const dbst = getStorage(app);