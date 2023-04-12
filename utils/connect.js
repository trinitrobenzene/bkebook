import { db } from '../firebase-config';
import { collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore';

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

// This function to get the entire list of books owned by user
export const getBooksByUser = (userEmail, callback) => {
    getDocs(bookCollectionRef)
        .then((resp) => {
            const data = resp.docs
                .map((item) => {
                    return { id: item.id, ...item.data() };
                })
                .filter((item) => {
                    return item.sellerID === userEmail;
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

//
export const getBookInCart = (list, callback) => {
    getDocs(bookCollectionRef)
        .then((resp) => {
            const result = [];
            const data = resp.docs.map((item) => {
                return { id: item.id, ...item.data() };
            });
            for (const item of list) {
                const match = data.find((i) => i.id === item.id);
                match && result.push({ number: item.amount, detail: match });
            }
            callback(result);
        })
        .catch((err) => console.error(err));
};

// This function to create a new book
export const createBook = (book, callback) => {
    addDoc(bookCollectionRef, book)
        .then(() => callback())
        .catch((error) => console.error(error));
};

// get user info from database
export const getUserInfo = (email, callback) => {
    const docRef = doc(db, 'user', email);
    getDoc(docRef)
        .then((resp) => {
            const info = resp.data();
            info.email = email;
            /**
             * at this step, purchase and sale are document (a class of
             * Firebase), so must resolve them into arrays.
             *  */
            getDocs(collection(db, 'user/' + info.purchase.path)).then(
                (res) => {
                    info.purchase = res.docs.map((zl) => ({
                        id: zl.id,
                        ...zl.data(),
                    }));
                }
            );
            getDocs(collection(db, 'user/' + info.sale.path)).then((res) => {
                info.sale = res.docs.map((zl) => ({ id: zl.id, ...zl.data() }));
            });
            callback(info);
        })
        .catch((err) => console.error(err));
};
