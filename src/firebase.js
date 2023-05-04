// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPPCJ5hA1At6Jnr8rNC_3bbWJvuVcM5xU",
  authDomain: "transitgo-92cd4.firebaseapp.com",
  databaseURL:
    "https://transitgo-92cd4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "transitgo-92cd4",
  storageBucket: "transitgo-92cd4.appspot.com",
  messagingSenderId: "550582988491",
  appId: "1:550582988491:web:9986cd6c86c3bc1dcf354e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
