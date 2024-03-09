import { Box, Container, Flex, Text } from "@chakra-ui/react"
import ViewProfile from "../Hooks/ViewProfile"
import ViewFollowersHook from "../Hooks/ViewFollowersHook"
import ViewVFollowhok from "../Hooks/ViewVFollowhok"
// import UseUserContext from "../ContextAPI/UseUserContext"
function Viewprofilepage() 
{
    // const {userdata}=UseUserContext();


  return (
    <>

      

       <Flex gap={"10px"}>

           <Box mt={"50px"} width={"800px"}>

                <ViewProfile/>

                </Box>

                <Box display={{base:"none",md:"block"}} mr={"5px"} mt={"50px"} >
                <Container>
                <Text mb={"50px"}
          fontWeight={"bolder"}
          >Followers</Text>
           <ViewFollowersHook/>
        </Container>

        <Container mt={"40px"} > 
          <Text mb={"50px"}
          fontWeight={"bolder"}
          >Followings</Text>
           <ViewVFollowhok/>
        </Container>



                </Box>
       </Flex>



    
    
    </>
  )
}

export default Viewprofilepage