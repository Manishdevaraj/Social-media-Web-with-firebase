import { useState } from "react";
import { db } from "../../Service/firebaseconfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export function ToggleLike({ id, isliked, uid }) {
    const [isloading, setIsLoading] = useState(false); // Initialized with false
    // console.log(isliked);

    async function useToggleLike() {
        setIsLoading(true);

        try {
            const docRef = doc(db, "Posts", id);
            // console.log("doc ref:", docRef);
            // console.log(isliked);
            // console.log(isliked);

            await updateDoc(docRef, {
                likes: isliked ? arrayRemove(uid) : arrayUnion(uid)
            });
        } catch (err) {
            console.error("Error toggling like:", err); // Improved error logging
        }

        setIsLoading(false);
    }

    return { useToggleLike, isloading };
}
