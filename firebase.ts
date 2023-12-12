import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDR9wQTgjRspbT6bZ04DVTsl-vA15HSqs",
  authDomain: "travel-log-789cb.firebaseapp.com",
  projectId: "travel-log-789cb",
  storageBucket: "travel-log-789cb.appspot.com",
  messagingSenderId: "1068981928652",
  appId: "1:1068981928652:web:b0911367468e2433cdf869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }