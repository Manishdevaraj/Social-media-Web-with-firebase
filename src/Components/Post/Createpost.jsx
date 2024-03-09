import { useForm } from "react-hook-form"
import reactTextareaAutosize from "react-textarea-autosize"
import { Commendtpost } from "../../ContextAPI/DbPost Contoller";
import { UseUserContext } from "../../ContextAPI/UseUserContext";
import { Box, Button, HStack, Heading, Textarea, useToast } from "@chakra-ui/react"
// import { Link } from "react-router-dom";

function Createpost() {
    const {register,handleSubmit,reset}=useForm();
    const {addpost,isloading:postflag}=Commendtpost()
  // ---------------firebase----------
  const {user}=UseUserContext()
   
  const toast=useToast()
  
    const handelAddpost=(data)=>
    {
     
      //  Check if user object and user ID are available
    if (user && user.uid) {
      // Access user ID and proceed with adding the post
      addpost({
        uid: user.uid,
        text: data.text,
      });
    } else {
      // Handle the case where user ID is not available (e.g., user not logged in)
      console.error("User ID is not available.");
      
      toast({
        title: 'Oops! there is an issue',
        description: "Please try after somtimes",
        status: 'error',
        duration: 1000,
        position:"top-right",
        isClosable: true,
      })
  
      // Optionally, you can show a message to the user or handle the situation accordingly.
    }
    reset();
  };
    return (
      <>
      <Box py={"10px"} maxW={{base:"270px",md:"1000px"}} mr={0}>
        <form onSubmit={handleSubmit(handelAddpost)}>
        <HStack gap={{base:"100px",md:"600px"}} ml={0} mr={0}> 
          <Heading size={"lg"}>New Post</Heading>
  
          <Button colorScheme="teal"
          type="submit"
          isLoading={postflag}
          loadingText={"Loading..."}
          // ml={{base:"50px",md:"600px"}}
          >Post</Button>
        </HStack>
        <Textarea
          
          placeholder="Create a Post...."
          mt={{base:"5px",md:"10px"}}
          resize={"none"}
          as={reactTextareaAutosize}
        {...register("text",{required:true})}
        />
        </form>
          
      </Box>
  
      </>
    )
}

export default Createpost