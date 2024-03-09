import { Box, Container, Flex, Text } from "@chakra-ui/react"
import Ownprofilehook from "../Hooks/Ownprofilehook"
import FollowersHook from "../Hooks/FollowersHook"
import VfoloowHook from "../Hooks/VfoloowHook"
// import UseUserContext from "../ContextAPI/UseUserContext"
function Ownprofile() 
{
    // const {userdata}=UseUserContext();


  return (
    <>

      

       <Flex gap={"10px"}>

           <Box mt={"50px"} width={"600px"}>

                <Ownprofilehook/>

                </Box>

                <Box display={{base:"none",md:"block"}} mr={"5px"} mt={"50px"} >
                <Container>
                <Text mb={"50px"}
          fontWeight={"bolder"}
          >Followers</Text>
           <FollowersHook/>
        </Container>

        <Container mt={"40px"} > 
          <Text mb={"50px"}
          fontWeight={"bolder"}
          >Followings</Text>
           <VfoloowHook/>
        </Container>



                </Box>
       </Flex>



    
    
    </>
  )
}

export default Ownprofile