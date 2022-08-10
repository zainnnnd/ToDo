// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsafg60XvizQLbHqmPZGwcA0kj4-3sMdE",
  authDomain: "fir-project-83bb2.firebaseapp.com",
  projectId: "fir-project-83bb2",
  storageBucket: "fir-project-83bb2.appspot.com",
  messagingSenderId: "60525673369",
  appId: "1:60525673369:web:515087eac87f3917413108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)