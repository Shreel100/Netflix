
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY3Ohpv5D0Fgjdyv9F1Z2pmsyvXwlljwQ",
  authDomain: "netflix-auth-1c78c.firebaseapp.com",
  projectId: "netflix-auth-1c78c",
  storageBucket: "netflix-auth-1c78c.appspot.com",
  messagingSenderId: "864568493273",
  appId: "1:864568493273:web:4d8448a729676b72942ac8",
  measurementId: "G-KT8M4DLCM0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();


export {auth}
export default db;