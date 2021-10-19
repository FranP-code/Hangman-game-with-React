// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC_6waJmJaj6Xw8hbv6h0ZAPIQ_Ntk-llc",

  authDomain: "hangman-game-with-react.firebaseapp.com",

  projectId: "hangman-game-with-react",

  storageBucket: "hangman-game-with-react.appspot.com",

  messagingSenderId: "836415057159",

  appId: "1:836415057159:web:acfc2dd89087bb60c7e9a2"


};


// Initialize Firebase

const firestore = initializeApp(firebaseConfig);

export {firestore}