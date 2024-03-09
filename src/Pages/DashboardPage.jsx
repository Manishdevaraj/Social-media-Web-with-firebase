import { Box, Container, Flex, Text } from "@chakra-ui/react"
import DashboardHook from "../Hooks/DashboardHook"
import ProfilePage from "./ProfilePage"
import FollowersHook from "../Hooks/FollowersHook"
import VfoloowHook from "../Hooks/VfoloowHook"

function DashboardPage() {
  return (
    <Container 
    // bgColor={"Purple"}
    maxW={"container-lg"}
    maxH={"100vh"}
    h={"100vh"}
    ml={0}
    >

      <Flex>
        <Box>

          
           <DashboardHook/>

        </Box>

        <Box display={{base:"none",md:"block"}} mr={"5px"}  >
          <ProfilePage/>
          
          <Container mt={"40px"} > 
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
      
    </Container>
  )
}

export default DashboardPage