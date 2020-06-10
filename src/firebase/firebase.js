import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCCQPfNL6CHF9C31Al8ma16Yw5a6dQ0pZQ",
    authDomain: "fire-react-de21e.firebaseapp.com",
    databaseURL: "https://fire-react-de21e.firebaseio.com",
    projectId: "fire-react-de21e",
    storageBucket: "fire-react-de21e.appspot.com",
    messagingSenderId: "200286969000",
    appId: "1:200286969000:web:3d5ea9d33327bbd91d769d",
    measurementId: "G-5BYWPTN32C"
};
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;