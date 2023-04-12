import { db } from '../firebase-config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const bookCollectionRef = collection(db, 'book');

// This function to get the entire list of books
export const getBooks = (callback) => {
    getDocs(bookCollectionRef)
        .then((resp) => {
            const data = resp.docs.map((item) => {
                return { id: item.id, ...item.data() };
            });
            callback(data);
        })
        .catch((err) => console.error(err));
};

// This function to get information of a book specified by id
export const getBook = (id, callback) => {
    const bookRef = doc(db, 'book', id);
    getDoc(bookRef)
        .then((resp) => callback(resp.data()))
        .catch((error) => console.error(error));
};
