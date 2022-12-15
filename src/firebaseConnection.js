import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3bHhhYXGNVkmDb115OHW0Wa--NognZrA",
  authDomain: "lista-de-tarefas-e8c26.firebaseapp.com",
  projectId: "lista-de-tarefas-e8c26",
  storageBucket: "lista-de-tarefas-e8c26.appspot.com",
  messagingSenderId: "793159688167",
  appId: "1:793159688167:web:99ed9595db01f136412742",
  measurementId: "G-9006JB43Z9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };