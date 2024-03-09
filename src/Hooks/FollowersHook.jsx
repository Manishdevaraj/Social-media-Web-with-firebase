import {  Grid,  Text } from "@chakra-ui/react";
import { UseUserContext } from "../ContextAPI/UseUserContext"
import Followers from "./Followers";




function FollowersHook()
 {
    const {userdata}=UseUserContext()
    // const [followers,setfollowers]=useState("");

    
      const followers=  userdata?.Followers;
    
    
  return (
    <>
    <Grid  templateColumns='repeat(3, 1fr)' gap={3} >

      
      {followers?.length===0?<Text>No Posts</Text>:
        followers?.map((followers)=><Followers key={followers} followers={followers}/>)}
     

    </Grid>
    

   
    



    </>
  )
}

export default FollowersHook