// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCuJ4f2Jd8kuLHhgvbE9RrWeCSzPiAa4og",
  authDomain: "mobile-app-e5c59.firebaseapp.com",
  databaseURL: "https://mobile-app-e5c59-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mobile-app-e5c59",
  storageBucket: "mobile-app-e5c59.appspot.com",
  messagingSenderId: "830605306719",
  appId: "1:830605306719:web:99e787a0a5c68ae5cbe4ea",
  measurementId: "G-25L8FEH9KB"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

