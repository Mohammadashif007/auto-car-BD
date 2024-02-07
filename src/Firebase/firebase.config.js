// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJQRDtX8a0xi329wmyII75axlCLOLwSHo",
  authDomain: "auto-car-a6ee7.firebaseapp.com",
  projectId: "auto-car-a6ee7",
  storageBucket: "auto-car-a6ee7.appspot.com",
  messagingSenderId: "638379454899",
  appId: "1:638379454899:web:caf04a07090bca8d6a1bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;