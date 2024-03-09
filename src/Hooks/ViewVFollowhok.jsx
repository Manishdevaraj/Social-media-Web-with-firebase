import { Grid, Text } from "@chakra-ui/react";
import Followers from "./Followers";
import { useParams } from "react-router-dom";
import Useuser from "../ContextAPI/db/Useuser";

function ViewVFollowhok() {

    const params =useParams()

 
    const { user, isLoading } = Useuser({ id: params?.id });
      
    if(isLoading)
    {
        return <div><h1>Loading..........</h1></div>
    }

    const followers=  user?.VFollow;
    
    
    return (
      <>
      <Grid  templateColumns='repeat(3, 1fr)' gap={3} >
  
        
        {followers?.length===0?<Text>No Posts</Text>:
          followers?.map((followers)=><Followers key={followers} followers={followers}/>)}
       
  
      </Grid>
      
  
     
      
  
  
  
      </>
    )
  }
  


export default ViewVFollowhok