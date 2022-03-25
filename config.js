import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyDJUhRHE5nBU21wqOHBlfEIxNkQsQrl2qY",
    authDomain: "blibiotecaap.firebaseapp.com",
    projectId: "blibiotecaap",
    storageBucket: "blibiotecaap.appspot.com",
    messagingSenderId: "1059300484480",
    appId: "1:1059300484480:web:0686fc8b33c8c11dc94d65"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
