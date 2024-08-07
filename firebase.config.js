// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


//Import the auth Over here

//auth import step 1 
import {getAuth} from "firebase/auth";



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
