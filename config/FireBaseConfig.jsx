// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLeNe3HGj60-iHK9cenC21bml_ZKd2A8A",
  authDomain: "react-native-47111.firebaseapp.com",
  projectId: "react-native-47111",
  storageBucket: "react-native-47111.firebasestorage.app",
  messagingSenderId: "940335183855",
  appId: "1:940335183855:web:1b21bdf267f76f5652281a",
  measurementId: "G-FSWR6P8P94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth= getAuth(app)