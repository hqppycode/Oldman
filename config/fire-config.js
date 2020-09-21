import firebase from "firebase";

// this is not a private key | all are safe to be public | all are client-side IDs
const firebaseConfig = {
  apiKey: "AIzaSyDsPB3TZUWuA9up-6scF0jVjNgrpI2JZHU",
  authDomain: "blogapp-715a0.firebaseapp.com",
  databaseURL: "https://blogapp-715a0.firebaseio.com",
  projectId: "blogapp-715a0",
  storageBucket: "blogapp-715a0.appspot.com",
  messagingSenderId: "519399755140",
  appId: "1:519399755140:web:53e62d541f7931575da1d1",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;
