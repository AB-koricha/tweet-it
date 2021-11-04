import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNl2fOrW0zqrt0-uoyg3CXlUe6nM2pbJk",
    authDomain: "kokotwitter-d1661.firebaseapp.com",
    projectId: "kokotwitter-d1661",
    storageBucket: "kokotwitter-d1661.appspot.com",
    messagingSenderId: "1034422315205",
    appId: "1:1034422315205:web:626890abd1ec09666568ac",
    measurementId: "G-DPKYB46DE8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;