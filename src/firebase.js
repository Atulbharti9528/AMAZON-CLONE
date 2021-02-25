import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbqhbG-4DKo6A4vAWsfzKeMsYk_MNQzhc",
    authDomain: "clone-83f48.firebaseapp.com",
    projectId: "clone-83f48",
    storageBucket: "clone-83f48.appspot.com",
    messagingSenderId: "567457313947",
    appId: "1:567457313947:web:d3663e871efbb7a1e1c23e",
    measurementId: "G-Z08RQCH672"
  });

const db = firebaseApp.firestore();//database
const auth = firebase.auth();//authentication

export {db , auth};