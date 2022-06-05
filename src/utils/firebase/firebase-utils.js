// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query
} from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvL8si3PcKoncEiQKmWpNG7HY19JS1sZE",
  authDomain: "x-fashion-c95bf.firebaseapp.com",
  projectId: "x-fashion-c95bf",
  storageBucket: "x-fashion-c95bf.appspot.com",
  messagingSenderId: "787374202043",
  appId: "1:787374202043:web:8b83f83474d04c24249d9e",
  measurementId: "G-BCE66SFZSY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
// const emailProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signOutUser = async() => signOut(auth);

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async(auth, email, password) => {
    if(!email || !password){
      return;
    }
    return await signInWithEmailAndPassword(auth, email, password);
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password){
      return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const  onAuthStateChangedListener = (callback) => {
    if(!callback){
      return;
    }
    onAuthStateChanged(auth, callback)
}



export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object);
    });
    await batch.commit();
}

export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShop) => {
        const {title, items} = docSnapShop.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;

}

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })

      }catch(e){
        console.log('problem creating user', e.message);
      }
    }

    return userDocRef;

}