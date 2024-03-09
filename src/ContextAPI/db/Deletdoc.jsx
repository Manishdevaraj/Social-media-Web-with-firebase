import { deleteDoc, doc } from "firebase/firestore";
import { db, dbst } from "../../Service/firebaseconfig";
import { deleteObject, ref } from "firebase/storage";

export async function deleteDocument(documentId) {
    try {
        // Construct a reference to the document to be deleted
        const documentRef = doc(db, "Posts", documentId); // Replace "collectionName" with the name of your collection
  
        // Delete the document
        await deleteDoc(documentRef);
        console.log("Document successfully deleted!");
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
  }

 export async function deletestorageFile(id) {
    try {
        // Construct a reference to the file to be deleted
        const fileRef = ref(dbst, "postimages/"+id); // filePath is the path to the file you want to delete

        // Delete the file
        await deleteObject(fileRef);
        console.log("File successfully deleted!");
    } catch (error) {
        console.error("Error deleting file: ", error);
    }
}