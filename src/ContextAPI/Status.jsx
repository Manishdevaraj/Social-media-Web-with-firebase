import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../Service/firebaseconfig";

export default function Status({id='test'})
{
  const postsCollectionRef = collection(db, 'Status');
  const q = query(postsCollectionRef,where("uid", "==", id));
  // alert("status")
  // Use the useCollectionData hook to listen to changes in the collection
  const [status, loading, error] = useCollectionData(q);

  
  
  return {status,loading,error}
}