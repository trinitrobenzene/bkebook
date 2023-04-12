// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD8cDsEjZ-USLYBKoFwcB6xPxEPOLCr8fI',
    authDomain: 'bkebook-11986.firebaseapp.com',
    projectId: 'bkebook-11986',
    storageBucket: 'bkebook-11986.appspot.com',
    messagingSenderId: '466626264161',
    appId: '1:466626264161:web:5bbd7a96a4bde432e37e20',
    measurementId: 'G-SZ79K75QTV',
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
