import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkX_14inwxSZ2GOLdUuos30IcxGhqiCw4",
  authDomain: "sophalvaung-dev.firebaseapp.com",
  projectId: "sophalvaung-dev",
  storageBucket: "sophalvaung-dev.firebasestorage.app",
  messagingSenderId: "773126463716",
  appId: "1:773126463716:web:e4c7acadea5e770c180cf1",
  measurementId: "G-BX6V7PXX8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };