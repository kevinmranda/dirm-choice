import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA-PiWAyvuzDZPOnyj5yZLBizgov1jt7g8",
  authDomain: "dirm-choice.firebaseapp.com",
  projectId: "dirm-choice",
  storageBucket: "dirm-choice.firebasestorage.app",
  messagingSenderId: "330655466065",
  appId: "1:330655466065:web:46da88e2d874d9f7006e70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
