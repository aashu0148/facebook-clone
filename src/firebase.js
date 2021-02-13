import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPVBY66YCf21Vy41ATQL5Ih9ID4ji1zcQ",
  authDomain: "clone01fb-15b59.firebaseapp.com",
  projectId: "clone01fb-15b59",
  storageBucket: "clone01fb-15b59.appspot.com",
  messagingSenderId: "145806539167",
  appId: "1:145806539167:web:de6f30def527491a0925aa",
  measurementId: "G-HH6G1F48LF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();

export { auth, authProvider };
export default db;
