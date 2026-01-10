import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOWPeS9AkRQw9RfROLYqZS-ufy0YdAiuQ",
  authDomain: "atc-techx.firebaseapp.com",
  projectId: "atc-techx",
  storageBucket: "atc-techx.firebasestorage.app",
  messagingSenderId: "69927497402",
  appId: "1:69927497402:web:266e08b438de49a94fdc83"
};
//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Initialize Firebase
// initializeApp(firebaseConfig);

// // Export Firestore instance directly
// const db = getFirestore();
// export default db;
