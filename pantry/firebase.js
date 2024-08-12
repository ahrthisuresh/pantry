// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg01pwqhiVFCmoDLb05FQ1sj29gRhGlVk",
  authDomain: "hspantry-35f1b.firebaseapp.com",
  projectId: "hspantry-35f1b",
  storageBucket: "hspantry-35f1b.appspot.com",
  messagingSenderId: "742669963641",
  appId: "1:742669963641:web:9a08d22bd81e55e669dfa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{app,firestore}