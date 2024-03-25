import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzE0Df4gpab61yKoXo_HA84O_kJ-PWj74",
  authDomain: "lingualearn-a0cbf.firebaseapp.com",
  databaseURL:
    "https://lingualearn-a0cbf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lingualearn-a0cbf",
  storageBucket: "lingualearn-a0cbf.appspot.com",
  messagingSenderId: "365241946270",
  appId: "1:365241946270:web:62f73885daddb1cea76b8f",
  measurementId: "G-G1CL6Y3SH9",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
