import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCyCenkclS_2VjoUCrlKNRJCkRiuGDpiNw",
  authDomain: "meda-mailbox.firebaseapp.com",
  projectId: "meda-mailbox",
  storageBucket: "meda-mailbox.appspot.com",
  messagingSenderId: "306578451479",
  appId: "1:306578451479:web:6c8d6844d597b467684052",
  measurementId: "G-M067RD9CLD",
  databaseURL: "https://meda-mailbox-default-rtdb.firebaseio.com",// Can I cypher this?
};

const app = initializeApp(firebaseConfig);

export const dbName = 'feedback';
export const db = getDatabase(app);


