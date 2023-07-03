// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNjAxSY8eR50VVRiz8UqyaHMo7ThWysCY",
  authDomain: "project1-e0f3b.firebaseapp.com",
  projectId: "project1-e0f3b",
  storageBucket: "project1-e0f3b.appspot.com",
  messagingSenderId: "1073457821140",
  appId: "1:1073457821140:web:5a6ec3d82bad3153a31241",
  measurementId: "G-E55ZMNXX10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};