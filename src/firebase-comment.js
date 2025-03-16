import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
//     authDomain: "web-kelas-tes.firebaseapp.com",
//     projectId: "web-kelas-tes",
//     storageBucket: "web-kelas-tes.appspot.com",
//     messagingSenderId: "890817433268",
//     appId: "1:890817433268:web:11e5258f8864a6174c11e1"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCj-R_Dd_8oCYzMNCjRfjGiwcq0rJ5Y5pM",
    authDomain: "comments-app-5a96f.firebaseapp.com",
    projectId: "comments-app-5a96f",
    storageBucket: "comments-app-5a96f.firebasestorage.app",
    messagingSenderId: "703922343484",
    appId: "1:703922343484:web:c08aef2091dc71db197d39",
    measurementId: "G-9Q3KSXWYX2"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };