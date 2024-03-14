// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwh3NNctqkha0rW6TBuxvd4ikp8aAwh4c",
  authDomain: "netflixgpt-97dcc.firebaseapp.com",
  projectId: "netflixgpt-97dcc",
  storageBucket: "netflixgpt-97dcc.appspot.com",
  messagingSenderId: "174588240992",
  appId: "1:174588240992:web:ff46503521ed5d3a28cf05",
  measurementId: "G-YMWL2NFSJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();