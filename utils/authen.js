import Cookies from 'js-cookie';
import { auth } from '../firebase-config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

export const handleLogin = (email) => {
    Cookies.set('email', email, { path: '/', expires: 14 });
    Cookies.set('isLogin', true, { path: '/', expires: 14 });
};

export const handleLogout = () => {
    Cookies.remove('email');
    Cookies.remove('isLogin');
};

export const handleSignUp = async (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const info = userCredential.user;
            console.log(info)
        })
        .catch((error) => console.error(error));
};

export const handleSignIn = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
};

export const handleSignOut = () => {
    signOut(auth)
        .then(() => {})
        .catch((error) => {});
};
