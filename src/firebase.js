import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBcMEkqTc2U7BQ8zi0FyWOn03KZwkYioKo",
    authDomain: "extoys-4924e.firebaseapp.com",
    projectId: "extoys-4924e",
    storageBucket: "extoys-4924e.appspot.com",
    messagingSenderId: "658631480263",
    appId: "1:658631480263:web:d7fb48066af35f29ae7fe2",
    measurementId: "G-MZGSTSYS22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase