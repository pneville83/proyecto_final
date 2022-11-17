import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY || "AIzaSyCP0CIbfvR48T9i-gMkB41rj_Gw8x18GqU",
  authDomain: process.env.REACT_APP_AUTHDOMAIN || "usera-77c6e.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECTID || "usera-77c6e",
  storageBucket: process.env.REACT_APP_STORAGEBUCKET || "usera-77c6e.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID || "931714051539",
  appId: process.env.REACT_APP_APPID || "1:931714051539:web:403c485cf75b311d74d326",
  measurementId: process.env.REACT_APP_MEASUREMENTID || "G-M64EG8E4DW",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export async function userExist (uid) {
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

export async function existsUsername(username) {
  const users = [];
  const docsRef = collection(db, 'users');
  const q = query(docsRef, where('username', '==', username));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc =>{
    users.push(doc.data());
  });

  return users.length > 0 ? users[0].uid : null;
}

export async function registerNewUser (user) {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef,  user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
}

export async function updateUser (user) {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user); 
  } catch (error) {}
}

export async function getUserInfo (uid) {
  try {
    const docRef = doc (db, 'users', uid);
    const document = await getDoc(docRef);
    return document.data();

  } catch (error) {}
}


