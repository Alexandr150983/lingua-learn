import { get, ref } from "firebase/database";
import database from "./firebase";

const fetchTeachersData = async () => {
  const databaseRef = ref(database, "/");
  try {
    const snapshot = await get(databaseRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error getting data", error);
    return null;
  }
};

export default fetchTeachersData;
