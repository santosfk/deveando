import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlHOFmmm4tYu_c-G1T-hAsxxSMX-9cRmQ",
  authDomain: "deveando.firebaseapp.com",
  projectId: "deveando",
  storageBucket: "deveando.appspot.com",
  messagingSenderId: "1052906355536",
  appId: "1:1052906355536:web:eb863c66fa8154c8480a55",
  measurementId: "G-Q6RGVZXBPS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
