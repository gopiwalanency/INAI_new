import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your own Firebase configuration here
const firebaseConfig = {
    apiKey: "AIzaSyAD2Jg4Op6f2wse0ahH-xhEm7qRmRkdUZ8",
    authDomain: "inai-worlds.firebaseapp.com",
    projectId: "inai-worlds",
    storageBucket: "inai-worlds.firebasestorage.app",
    messagingSenderId: "314980933549",
    appId: "1:314980933549:web:96c17bf080747c65cb0b24"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }; 