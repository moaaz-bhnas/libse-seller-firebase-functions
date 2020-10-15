import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export const config = {
  apiKey: "AIzaSyB6EQkzabd5aKuQz78fNYZsweNRuY8M1wI", // process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "libse-1",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

if (typeof window !== undefined && !firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore();
}

export const functions = firebase.functions();
export default firebase;
