import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHBD2sGNCOe7kNNjnn6T27Ps8tj6QRcCk",
  authDomain: "e-commerce-73a42.firebaseapp.com",
  databaseURL: "https://e-commerce-73a42-default-rtdb.firebaseapp.com",
  projectId: "e-commerce-73a42",
  storageBucket: "e-commerce-73a42.appspot.com",
  messagingSenderId: "154466457962",
  appId: "1:154466457962:web:e24b093f1d6244ae9b2d13"
};

// Initialize Firebase and Firebase Authentication
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const db = getFirestore(app);
export {auth}
const storage = getStorage(app);
export {storage};
export default firebase;
