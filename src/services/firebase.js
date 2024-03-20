import firebase from "firebase/app";
import "firebase/database";

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

// Ініціалізація Firebase
firebase.initializeApp(firebaseConfig);

// Отримання посилання на базу даних
const database = firebase.database();

// Приклад читання даних з Firebase
try {
  const snapshot = await database.ref().once("value");
  const teachers = snapshot.val();
  console.log(teachers);
} catch (error) {
  console.error("Error fetching data:", error);
}
