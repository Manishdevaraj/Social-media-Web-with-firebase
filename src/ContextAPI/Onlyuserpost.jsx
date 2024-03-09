import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../Service/firebaseconfig";

export default function Onlyuserpost({id})
{

    const postsCollectionRef = collection(db, 'Posts');
  const q = query(postsCollectionRef,where("uid", "==", id));

  // Use the useCollectionData hook to listen to changes in the collection
  const [posts, loading, error] = useCollectionData(q);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return {posts,loading,error}

}

