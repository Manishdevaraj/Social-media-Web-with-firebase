import { Grid, Text } from "@chakra-ui/react";
import Followers from "./Followers";
import { UseUserContext } from "../ContextAPI/UseUserContext";
import Status from "../ContextAPI/Status";

function VfoloowHook() {

    const {userdata}=UseUserContext()
    // const [followers,setfollowers]=useState("");

    
      const followers=  userdata?.VFollow;
      
    
  return (
    <>
    <Grid  templateColumns='repeat(3, 1fr)' gap={3} >

      
      {followers?.length===0?<Text>No Posts</Text>:
        followers?.map((followers)=><Followers key={followers} followers={followers}/>)}
     

    </Grid>
    

   
    



    </>
  )
}

export default VfoloowHook