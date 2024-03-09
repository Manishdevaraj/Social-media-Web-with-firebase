import { Link } from "react-router-dom"
import LoginHook from "../Hooks/LoginHook"

import {Container,Box, Center, Text} from "@chakra-ui/react"

function LoginPage() {
  
  return (
   
      
      
        <Container justifyContent={"center"} alignItems={"center"}>
          
              <Box maxWidth={"300px"} maxH={"fit-content"} mt={"200px"}
              border={"2px solid"} borderRadius={"20px"}
              padding={"30px"}
              ml={{base:'20px',md:"120px"}}
              > 

              <Box>
                <Center 
                // color={" #9F7AEA"}
                fontSize={"x-large"}
                fontWeight={"bolder"}
                
                >

                <h1>Log In</h1>

                </Center>

              </Box>
              <Box bgColor={" #9F7AEA"} 
              h={"10px"}
              w={"60px"}
              ml={"90px"}
              mt={"10px"}
              borderRadius={"20px"}
              
              >

              </Box>

                <Box>
                  <LoginHook/>
                </Box>
                
          </Box>

             
          <Box maxWidth={"300px"} maxH={"fit-content"} mt={"10px"}
              border={"2px solid"} borderRadius={"10px"}
              padding={"10px"}
              ml={{base:'20px',md:"120px"}}
              >
              <Text>Do not have an account ? <Link to="/signup" color="teal">SignUp</Link></Text>
                
                 </Box>
             
              
        </Container>

     

    
    
    
    
    
   
     
      )
    
  
}

export default LoginPage