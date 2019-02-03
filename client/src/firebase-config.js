// Firebase config file
// Contains all the configs necessary to connect app with Firebase.
// import Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyC2Rh6R3TB_xwXMXQptnqz7LPNIcm91LgM",
  authDomain: "pesticidetracker.firebaseapp.com",
  databaseURL: "https://pesticidetracker.firebaseio.com",
  projectId: "pesticidetracker",
  storageBucket: "pesticidetracker.appspot.com",
  messagingSenderId: "1045262969398"
};

firebase.initializeApp(config);
// This exports the auth module of Firebase,
// as well as the Google Auth Provider so that we'll be able to use
// Google Authentication for sign in anywhere inside of our application
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();