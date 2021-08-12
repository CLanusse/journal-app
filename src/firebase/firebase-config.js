import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAt-lnCKl6gC_eB4WPn4cSjHadDo74NcIw",
    authDomain: "react-journalapp-6cb09.firebaseapp.com",
    projectId: "react-journalapp-6cb09",
    storageBucket: "react-journalapp-6cb09.appspot.com",
    messagingSenderId: "575721685548",
    appId: "1:575721685548:web:6165fb65df2c91f6278789"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}