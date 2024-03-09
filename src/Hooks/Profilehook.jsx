import { Box, Button, Text, VStack } from "@chakra-ui/react"
import { UseUserContext } from "../ContextAPI/UseUserContext"
import CustomAvatar from "../Components/CustomAvatar";

function Profilehook() {

  const { userdata } = UseUserContext();
  
  


  return (
    <>


    <VStack>

        <Box>
        <CustomAvatar user={userdata} size="xl"/>        
        </Box>

        <Box>
        <Text
        fontWeight={"bolder"}
        fontSize={"larger"}
        >{userdata.username}</Text>
        </Box>

        <Box>
          <Button colorScheme={"teal"}>
            Edit Profile
          </Button>
        </Box>

        


    </VStack>
    
    
    
    
    
    </>
  )
}

export default Profilehook