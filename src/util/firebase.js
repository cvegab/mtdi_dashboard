// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPO3iD0eTcITfd81dOA8-sC-IZZr1nveo",
  authDomain: "databaselist-cc777.firebaseapp.com",
  projectId: "databaselist-cc777",
  storageBucket: "databaselist-cc777.appspot.com",
  messagingSenderId: "422964666611",
  appId: "1:422964666611:web:b0e9d6ea2f109e9d3ed786",
  measurementId: "G-GSSQH7E9TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore()

