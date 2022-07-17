// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZTvYXBKa9pkvrr6PufvA8yfJesub3XuQ",
  authDomain: "grady-mccallum-website.firebaseapp.com",
  projectId: "grady-mccallum-website",
  storageBucket: "grady-mccallum-website.appspot.com",
  messagingSenderId: "717510544832",
  appId: "1:717510544832:web:8856deb67ba9c1440f0c25",
  measurementId: "G-YKF5MDZGM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);