import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAGJ2mV9A0ANVhPDOz1LFJpycWvUrJLr5M",
  authDomain: "codax-shop.firebaseapp.com",
  projectId: "codax-shop",
  storageBucket: "codax-shop.appspot.com",
  messagingSenderId: "103536365576",
  appId: "1:103536365576:web:49c4b3a6548f3ef82cc1bd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

