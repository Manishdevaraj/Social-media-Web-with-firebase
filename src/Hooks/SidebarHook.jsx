import {  Box, Button, Flex,  Text } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";
import { UseUserContext } from "../ContextAPI/UseUserContext";
import { useNavigate } from "react-router-dom";
import CustomAvatar from "../Components/CustomAvatar"
function SidebarHook() {


// ---------------------------------firebase setup------------------

  const{Logout,userdata}=UseUserContext()
  const onlogoutclick=()=>
  {
    try
    {
      Logout()
    }
    catch(err)
    {
      alert(err)
    }
  }


 const navigate=useNavigate()


  return (
   <Box
   px={{base:"2",md:"4"}}
   height={"100vh"}
   py={8}
   top={0}
   left={0}
   borderRight={"1px solid black"}
   position={"Fixed"}
   >

        <Flex  h={"full"}  flexDirection={"column"} gap={"50px"} 
         alignItems={{base:"center",md:"flex-start"}}>

            <Box cursor={"pointer"}>
              
                {/* <Image src="/logo.png" h={20} */}
                {/* display={{base:"none",md:"block"}}/ > */}
               <Box display={{base:"block",md:"none"}}>
                <FaInstagram size={"20px"} color="white"/>

               </Box>
            </Box>



            <Box cursor={"pointer"}
            onClick={()=>
            {
              navigate("/")
            }}
            >
              <Flex alignItems={"center"} gap={"20px"}>
              <FaHome size={"20px"}/>
              <Text fontWeight={"14px"} fontSize={"larger"} 
              display={{base:"none",md:"block"}}>Home</Text>
              </Flex>
            </Box>

            <Box cursor={"pointer"}>
              <Flex alignItems={"center"} gap={"20px"}>
              <FaSearch size={"20px"}/>
              <Text fontWeight={"14px"} fontSize={"larger"}
              display={{base:"none",md:"block"}}>search</Text>
              </Flex>
            </Box>

            <Box cursor={"pointer"}>
              <Flex alignItems={"center"} gap={"20px"}>
              <FaRegHeart size={"20px"}/>
              <Text fontWeight={"14px"} fontSize={"larger"}
              display={{base:"none",md:"block"}}>Notification</Text>
              </Flex>
            </Box>

            <Box cursor={"pointer"}
            onClick={()=>{navigate(`/Viewprofile/${userdata.id}`)}}

            >
              <Flex alignItems={"center"} gap={"20px"}>
              <CustomAvatar user={userdata} size="sm"/>
              <Text fontWeight={"14px"} fontSize={"larger"}
              display={{base:"none",md:"block"}}
              
              >Profile</Text>
              </Flex>
            </Box>

            
            <Box marginTop={"auto"} marginBottom={"20px"} cursor={"pointer"} 
              onClick={onlogoutclick}
             
            >
            <Flex alignItems={"center"} gap={"20px"}>
            <RiLogoutCircleFill size={"20px"} />
              <Button fontWeight={"14px"} fontSize={"larger"}
               display={{base:"none",md:"block"}}
               bg={'transparent'}
               
               >Logout</Button>
              </Flex>
              
            </Box>

        </Flex>

        
   </Box>
  )
}

export default SidebarHook