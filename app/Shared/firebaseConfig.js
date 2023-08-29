// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqPdfU2Z30VyjmhhvR5MHzH7cKb2rkvCY",
  authDomain: "sanderstore-e0225.firebaseapp.com",
  projectId: "sanderstore-e0225",
  storageBucket: "sanderstore-e0225.appspot.com",
  messagingSenderId: "886842957438",
  appId: "1:886842957438:web:26ab1e75094a70e0b7422f",
  measurementId: "G-C0CX93MZ0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;