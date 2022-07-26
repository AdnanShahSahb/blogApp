// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD18IvHxskssV4MzPRJmrhel-9ChGbCvRE",
  authDomain: "bloging-f2980.firebaseapp.com",
  projectId: "bloging-f2980",
  storageBucket: "bloging-f2980.appspot.com",
  messagingSenderId: "68812122450",
  appId: "1:68812122450:web:2a149bdcb5f3975f28b28b"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDSJvythfioUUn_M4ypdDOLjIvFKRUAcsE",
//   authDomain: "bloggin2.firebaseapp.com",
//   projectId: "bloggin2",
//   storageBucket: "bloggin2.appspot.com",
//   messagingSenderId: "787235590224",
//   appId: "1:787235590224:web:b4e3c75b6782ae81048155"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyASthO-85V3XYyX5NsoIGTmDRUYpJtWw-4",
//   authDomain: "blog3-16d5b.firebaseapp.com",
//   projectId: "blog3-16d5b",
//   storageBucket: "blog3-16d5b.appspot.com",
//   messagingSenderId: "888289864940",
//   appId: "1:888289864940:web:f99756234df7845db489c9"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)

export const auth=getAuth(app)

export const authProvider=new GoogleAuthProvider();
