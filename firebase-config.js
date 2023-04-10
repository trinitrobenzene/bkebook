// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8cDsEjZ-USLYBKoFwcB6xPxEPOLCr8fI",
  authDomain: "bkebook-11986.firebaseapp.com",
  projectId: "bkebook-11986",
  storageBucket: "bkebook-11986.appspot.com",
  messagingSenderId: "466626264161",
  appId: "1:466626264161:web:5bbd7a96a4bde432e37e20",
  measurementId: "G-SZ79K75QTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
