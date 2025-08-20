import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS33LQAlHkFGKxwaAuc6-12QxX2ZRgh_8",
  authDomain: "todo-list-e3716.firebaseapp.com",
  databaseURL:
    "https://todo-list-e3716-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-e3716",
  storageBucket: "todo-list-e3716.firebasestorage.app",
  messagingSenderId: "412267708137",
  appId: "1:412267708137:web:3eb8142981be62688f3a78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
