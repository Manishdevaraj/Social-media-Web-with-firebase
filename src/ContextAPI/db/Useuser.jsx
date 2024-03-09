import { doc, query } from "firebase/firestore"
import { db } from "../../Service/firebaseconfig"
import { useDocumentData } from "react-firebase-hooks/firestore"


export default function Useuser({id}) {
  
  const q=query(doc(db,"Users",id))
  const [user,isloading,error]=useDocumentData(q);
  if(error) throw error
  return{user,isloading};
}

