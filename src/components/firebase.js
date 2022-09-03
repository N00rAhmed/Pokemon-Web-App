// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC69JXXZwx2lKFzgTnU5J7Sb7mQvkSwa-4",
  authDomain: "pokemon-5e60e.firebaseapp.com",
  projectId: "pokemon-5e60e",
  storageBucket: "pokemon-5e60e.appspot.com",
  messagingSenderId: "962493481665",
  appId: "1:962493481665:web:296f9211587ed090028a40",
  measurementId: "G-EXXPRYCYE5"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const colRef = collection(db, 'books')

export { auth, provider, storage, colRef };
export default db;
