// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9QH2VA9fnW5Mrn_piARNJ5zlJX_FmtY4",
  authDomain: "quizz-a32f1.firebaseapp.com",
  projectId: "quizz-a32f1",
  storageBucket: "quizz-a32f1.appspot.com",
  messagingSenderId: "431356991917",
  appId: "1:431356991917:web:a794f1b72c4e480e93a924",
  measurementId: "G-QHP0D0SHRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);