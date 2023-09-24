// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1CbjMMrRwLp6x22Fyq7soe7Ip09zY6Wk",
  authDomain: "netflixgpt-8dfd9.firebaseapp.com",
  projectId: "netflixgpt-8dfd9",
  storageBucket: "netflixgpt-8dfd9.appspot.com",
  messagingSenderId: "371980406153",
  appId: "1:371980406153:web:e5810a8150f4221b38a558",
  measurementId: "G-XVPQDQS10W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth()

export {auth}
