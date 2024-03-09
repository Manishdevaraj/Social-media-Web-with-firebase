import Postlist from "../Components/Post/Postlist"
import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react"
import CustomAvatar from "../Components/CustomAvatar"
import Onlyuserpost from "../ContextAPI/Onlyuserpost";
import { useParams } from "react-router-dom";
import Useuser from "../ContextAPI/db/Useuser";
import { UseUserContext } from "../ContextAPI/UseUserContext";
import { Commendtpost } from "../ContextAPI/DbPost Contoller";
import { useRef } from "react";

function ViewProfile() 
{
   const params =useParams()

   const {userdata:curentuser}=UseUserContext()

   const inputref=useRef();

   const { user, isLoading } = Useuser({ id: params?.id });
     
  //  if(!user)return null;

  

   if(isLoading)
   {
       return <div><h1>Loading..........</h1></div>
   }


    const {posts,loading,error}=Onlyuserpost({id:params?.id})
    const {add_status_tostorage,isloading}=Commendtpost();


    const statusclick=()=>
    {
       inputref.current.click();
    }

    const onstatusupload=(e)=>
    {
       console.log(e.target.files[0]);
       const file=e.target.files[0];
       add_status_tostorage(file,user)
    }


        if(loading)
    {
        return <div><h1>Loading..........</h1></div>
    }
  if(error)
  {
    alert(error)
  }
  if(!posts)return null

  return (
    <>

<Flex direction={"column"} >

       {/* <h1>tes............</h1> */}
<Box
  
  >
     <HStack >
       <CustomAvatar user={user} />

       
      <Text mt={5} fontWeight={"bolder"}> {user.username}</Text>

      <Text fontWeight={"bolder"} ml={10}>Followers:   {user.Followers.length}</Text>
       <Text fontWeight={"bolder"} ml={10}> Followings: {user.VFollow.length}</Text>
      {
        curentuser.id==params.id && <Button colorScheme="teal" ml={"auto"}> Edit Profile</Button>
      }
     </HStack>

     {
        curentuser.id==params.id && <Button mt={10} colorScheme="teal" ml={"auto"}
        onClick={statusclick}
        isLoading={isloading}
        > Upload status</Button>
      }
      <Input display={"none"}  type="file" ref={inputref} accept="image/*, video/*"
      onChange={onstatusupload}
      />
  </Box>
  
  <Box>

  <Postlist posts={posts}/>

  </Box>





</Flex>

    
    </>
  )
}

export default ViewProfile