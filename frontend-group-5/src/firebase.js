import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCYdE4mAEOAgfImtqBFMP3tVgzgPI77rp8",
  authDomain: "notification-feature-98a0d.firebaseapp.com",
  projectId: "notification-feature-98a0d",
  storageBucket: "notification-feature-98a0d.appspot.com",
  messagingSenderId: "75372393275",
  appId: "1:75372393275:web:f626c0cc1fc45c2d37fd1e",
  measurementId: "G-ERGD3GM7PQ",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
