import { Box, Center, Container } from "@chakra-ui/react"
import SignupHook from "../Hooks/SignupHook"

function SignUpPage() {
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

                <h1>Sign Up</h1>

                </Center>

              </Box>
              {/* -------------uderline--------- */}
              <Box bgColor={" #9F7AEA"} 
              h={"10px"}
              w={"60px"}
              ml={"90px"}
              mt={"10px"}
              borderRadius={"20px"}
              
              >

              </Box>

                <Box>
                  <SignupHook/>
                </Box>
              
          </Box>

          </Container>
  )
}

export default SignUpPage