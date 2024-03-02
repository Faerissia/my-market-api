// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin";
import serviceAccount from "../config/serviceAccountKey.json";

const firebaseConfig = {
  apiKey: "AIzaSyAlooee2eajb1i07xBX2-1rV-ReTqsMD84",
  authDomain: "my-market-29092.firebaseapp.com",
  projectId: "my-market-29092",
  storageBucket: "my-market-29092.appspot.com",
  messagingSenderId: "527400745443",
  appId: "1:527400745443:web:777ca7091beb18306608d6",
  measurementId: "G-0C87Y4H725",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const firebase_admin = admin.auth();

export { auth, app, firebase_admin };
