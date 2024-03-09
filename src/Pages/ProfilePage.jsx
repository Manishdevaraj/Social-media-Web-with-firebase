import { Box, Container } from "@chakra-ui/react"
import Profilehook from "../Hooks/Profilehook"





function ProfilePage() {
    

    

 


  return (
    <>
      
      <Container>

        <Box  mt={"60px"}>
         
         <Profilehook/>
         </Box>

         <Box bgColor={" #9F7AEA"} 
              h={"2px"}
              w={"full"}
              // ml={"90px"}
              mt={"10px"}
              borderRadius={"20px"}
              
              >

        </Box>

   

      </Container>
    
    
    </>
  )
}

export default ProfilePage