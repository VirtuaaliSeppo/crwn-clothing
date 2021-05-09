import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCD_2dW_odntHRQ3zzAt8_UQj6Gjh2vPf4",
  authDomain: "crwn-db-5b9f7.firebaseapp.com",
  projectId: "crwn-db-5b9f7",
  storageBucket: "crwn-db-5b9f7.appspot.com",
  messagingSenderId: "553627718318",
  appId: "1:553627718318:web:5334cfcfb3dc742582533f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
