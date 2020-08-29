import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9038PdQJQS1T5BQMWMQ_o1f4xS2XYgHY",
  authDomain: "facebook-messenger-clone-2b5b5.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-2b5b5.firebaseio.com",
  projectId: "facebook-messenger-clone-2b5b5",
  storageBucket: "facebook-messenger-clone-2b5b5.appspot.com",
  messagingSenderId: "753310152368",
  appId: "1:753310152368:web:cfa4971cf7f76aefbb6d75",
});
const db = firebaseApp.firestore();
export default db;
