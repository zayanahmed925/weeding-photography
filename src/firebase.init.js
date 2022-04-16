// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOuytOKJE__coNrSDK07pg3nJzoKcZwu0",
    authDomain: "weeding-photography-d73f2.firebaseapp.com",
    projectId: "weeding-photography-d73f2",
    storageBucket: "weeding-photography-d73f2.appspot.com",
    messagingSenderId: "863108315019",
    appId: "1:863108315019:web:4286a640055e6dc877618e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;