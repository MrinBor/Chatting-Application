// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


//Import the auth Over here

//auth import step 1 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmEd2Fm6kbB-l3Pj_2NSW9zEx1qg5bg2k",
  authDomain: "chatappclone-dc553.firebaseapp.com",
  projectId: "chatappclone-dc553",
  storageBucket: "chatappclone-dc553.appspot.com",
  messagingSenderId: "665545943366",
  appId: "1:665545943366:web:604319dc7bb5c815375d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/// auth - step - 2
const auth = getAuth(app);



export { auth }

/**
 * 
 * The configurations are set up successfully
 * 
 * Authentication
 * 
 * We will have th efollowing
 * 
 * 
 * Firebase
 * 
 * Implementations
 * It should be easy to use
 * Minimum code 
 * 
 * 
 * Varius details for the deployment Purpose
 */