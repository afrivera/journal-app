import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNZORHaTT11CVbb9sMp899lRenjMEZ7DE",
    authDomain: "react-app-curso-1c042.firebaseapp.com",
    projectId: "react-app-curso-1c042",
    storageBucket: "react-app-curso-1c042.appspot.com",
    messagingSenderId: "677574669554",
    appId: "1:677574669554:web:18f0da8e60781f01070c6b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}