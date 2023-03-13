import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7_1454QHTcENTDjS8FDnPXxs-PwDSNgA",
  authDomain: "test-dbf1c.firebaseapp.com",
  projectId: "test-dbf1c",
  storageBucket: "test-dbf1c.appspot.com",
  messagingSenderId: "455793037521",
  appId: "1:455793037521:web:098dbe15450208c048b5f0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const googleAuthProvider = new GoogleAuthProvider();

