import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react"
import { UseUserContext } from "../ContextAPI/UseUserContext"
import CutomAvatar from "../Components/CustomAvatar"
import Onlyuserpost from "../ContextAPI/Onlyuserpost"
import Postlist from "../Components/Post/Postlist"
// import FollowersHook from "./FollowersHook"
function Ownprofilehook() {


    const {userdata}=UseUserContext()

  if(!userdata||!userdata?.id) return null;

    const {posts,loading,error}=Onlyuserpost({id:userdata?.id})

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
      <Flex direction={"c"} >

      
      <Box
        
        >
           <HStack>
             <CutomAvatar user={userdata} />
            <Text mt={5} fontWeight={"bolder"}> {userdata.username}</Text>
            <Button colorScheme="teal" ml={"auto"}> Edit Profile</Button>
           </HStack>
        </Box>
        
        <Box>
  
        <Postlist posts={posts}/>
  
        </Box>

      

      

      </Flex>
    </>
  )
}

export default Ownprofilehook