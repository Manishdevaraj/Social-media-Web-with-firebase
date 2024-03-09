import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Service/firebaseconfig";

export  async function IsUsernameExist(username) {
    try {
        const q = query(collection(db, 'Users'), where('username', '==', username));

        const querySnapshot = await getDocs(q);

        return querySnapshot.size >0;
    } catch (error) {
        console.error("Error checking username existence:", error);
        alert(error);
        throw error;
    }
}
