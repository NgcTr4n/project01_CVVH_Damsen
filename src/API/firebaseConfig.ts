// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnvKmgt0pPd3LUSViuYBm0zlumXVqsmJw",
  authDomain: "tttn-2431.firebaseapp.com",
  projectId: "tttn-2431",
  storageBucket: "tttn-2431.appspot.com",
  messagingSenderId: "59136640485",
  appId: "1:59136640485:web:9c2caa3454415644e0db0c",
  measurementId: "G-SNLG1TFREJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
