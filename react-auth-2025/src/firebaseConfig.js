import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJSjidBFQkL4jUJpHfGxY15RHU-QGyC-c",
  authDomain: "react-firebase-auth-2025-d4893.firebaseapp.com",
  projectId: "react-firebase-auth-2025-d4893",
  storageBucket: "react-firebase-auth-2025-d4893.firebasestorage.app",
  messagingSenderId: "772573630349",
  appId: "1:772573630349:web:5fd461fc60e1ded753f7c4",
  measurementId: "G-RD9CSGL2N7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 