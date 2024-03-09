import { collection, doc, query, setDoc } from "firebase/firestore";
import { useState } from "react"
import { db, dbst } from "../Service/firebaseconfig";
import { useToast } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { UseUserContext } from "./UseUserContext";



export function Commendtpost()
{
      const [isloading,setisloading]=useState()
      

      const toast=useToast()

     const currentDate = new Date();
    
     const id=uuidv4();
     
    //  const user=UseUserContext()

     async function add_img_tostorage(file,user)
     {
      if (!user || !user.uid) {
        console.log("User uid is undefined, cannot add post.");
        return;
      }

       const postimgref=ref(dbst,"postimages/"+id)

      //  const postimg=ref(postimgref,id)
      const uploadTask = uploadBytesResumable(postimgref, file);

                  // Listen for state changes, errors, and completion of the upload.
                  uploadTask.on('state_changed',
                    (snapshot) => {
                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log('Upload is ' + progress + '% done');
                      switch (snapshot.state) {
                        case 'paused':
                          console.log('Upload is paused');
                          break;
                        case 'running':
                          console.log('Upload is running');
                          break;
                      }
                    }, 
                    (error) => {
                      // A full list of error codes is available at
                      // https://firebase.google.com/docs/storage/web/handle-errors
                      switch (error.code) {
                        case 'storage/unauthorized':
                          // User doesn't have permission to access the object
                          break;
                        case 'storage/canceled':
                          // User canceled the upload
                          break;

                        // ...

                        case 'storage/unknown':
                          // Unknown error occurred, inspect error.serverResponse
                          break;
                      }
                    }, 
                    () => {
                      // Upload completed successfully, now we can get the download URL
                      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                       

                        addpost({
                          uid: user?.uid,
                          img: downloadURL,
                        });
                        console.log('File available at uploded');

                      });
                    }
                  );
     }


     
     async function add_video_tostorage(file,user)
     {
      if (!user || !user.uid) {
        console.log("User uid is undefined, cannot add post.");
        return;
      }

       const postimgref=ref(dbst,"postimages/"+id)

      //  const postimg=ref(postimgref,id)
      const uploadTask = uploadBytesResumable(postimgref, file);

                  // Listen for state changes, errors, and completion of the upload.
                  uploadTask.on('state_changed',
                    (snapshot) => {
                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log('Upload is ' + progress + '% done');
                      switch (snapshot.state) {
                        case 'paused':
                          console.log('Upload is paused');
                          break;
                        case 'running':
                          console.log('Upload is running');
                          break;
                      }
                    }, 
                    (error) => {
                      // A full list of error codes is available at
                      // https://firebase.google.com/docs/storage/web/handle-errors
                      switch (error.code) {
                        case 'storage/unauthorized':
                          // User doesn't have permission to access the object
                          break;
                        case 'storage/canceled':
                          // User canceled the upload
                          break;

                        // ...

                        case 'storage/unknown':
                          // Unknown error occurred, inspect error.serverResponse
                          break;
                      }
                    }, 
                    () => {
                      // Upload completed successfully, now we can get the download URL
                      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                       

                        addpost({
                          uid: user?.uid,
                          video: downloadURL,
                        });
                        console.log('File available at uploded');

                      });
                    }
                  );
     }

    async function addpost(post)
    {
      setisloading(true);
     try
     {
        await setDoc(doc(db,"Posts",id),
        {
          ...post,
          id,
          date:Date.now(),
          cdate:currentDate.toLocaleString(),
          likes:[]
        })

  
        toast({
          title: 'Post',
          description: "SuccesFully posted",
          status: 'success',
          duration: 1000,
          position:"top-right",
          isClosable: true,
        })
        setisloading(false)
     }
     catch(err)
     {
        setisloading(false);
        alert(err)
     }

    }

    async function addstatus(post,url)
    {
      setisloading(true);
     try
     {
      await setDoc(doc(db,"Status",id),
        {
          ...post,
          id,
          Status:url,
          date:Date.now(),
          cdate:currentDate.toLocaleString(),
          likes:[]
        })

        toast({
          title: 'Post',
          description: "SuccesFully posted",
          status: 'success',
          duration: 1000,
          position:"top-right",
          isClosable: true,
        })
        setisloading(false)
     }
     catch(err)
     {
        setisloading(false);
        alert(err)
     }

    }


    // -------------------------------

    async function add_status_tostorage(file,user)
     {
      if (!user || !user.id) {
        console.log("User uid is undefined, cannot add post.");
        return;
      }

       const postimgref=ref(dbst,"Status/"+id)

      //  const postimg=ref(postimgref,id)
      const uploadTask = uploadBytesResumable(postimgref, file);

                  // Listen for state changes, errors, and completion of the upload.
                  uploadTask.on('state_changed',
                    (snapshot) => {
                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log('Upload is ' + progress + '% done');
                      switch (snapshot.state) {
                        case 'paused':
                          console.log('Upload is paused');
                          break;
                        case 'running':
                          console.log('Upload is running');
                          break;
                      }
                    }, 
                    (error) => {
                      // A full list of error codes is available at
                      // https://firebase.google.com/docs/storage/web/handle-errors
                      switch (error.code) {
                        case 'storage/unauthorized':
                          // User doesn't have permission to access the object
                          break;
                        case 'storage/canceled':
                          // User canceled the upload
                          break;

                        // ...

                        case 'storage/unknown':
                          // Unknown error occurred, inspect error.serverResponse
                          break;
                      }
                    }, 
                    () => {
                      // Upload completed successfully, now we can get the download URL
                      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                       

                        addstatus(
                          {
                            uid: user?.id,
                            // video: downloadURL,
                          },downloadURL);

                        console.log('File available at uploded');

                      });
                    }
                  );
     }

    
    return {addpost,isloading,add_img_tostorage,add_video_tostorage,add_status_tostorage}
    
}


export function Allpost()
{
  const postsCollectionRef = collection(db, 'Posts');
  const q = query(postsCollectionRef);

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

