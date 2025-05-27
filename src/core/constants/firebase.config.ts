import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuMNHOwheJvvRG6AZ5mnKSw0KJurrmutc",
  authDomain: "comprendix.firebaseapp.com",
  databaseURL: "https://comprendix-default-rtdb.firebaseio.com",
  projectId: "comprendix",
  storageBucket: "comprendix.firebasestorage.app",
  messagingSenderId: "358433103428",
  appId: "1:358433103428:web:b6be21ea2797619051e611",
  measurementId: "G-F458XWGH59"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
