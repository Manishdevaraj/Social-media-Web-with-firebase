import { Box, Button, FormControl, FormErrorMessage, Input, Text} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { emailValidate, passwordValidate, usernameValidate } from "../Components/FormValidation"
import { UseUserContext } from "../ContextAPI/UseUserContext"
import { IsUsernameExist } from "../ContextAPI/UsernameExist"
import { Spinner } from '@chakra-ui/react'
import { useState } from "react"


function SignupHook() {

   
    
    const {register,handleSubmit,formState: { errors, isSubmitting }}=useForm()
    
    const [loading, setLoading] = useState(false);

    const [availmsg,setavailmsg]=useState(false);

    const onsignupclick=()=>
    {
      setavailmsg(true)
    }
  

    const onsubmit=async(data)=>
    {
        
       try
       {
         await Signup(data.name,data.email,data.password)
       }
       catch(error)
       {
        
        console.log(error)
        alert(error)

       }

      
    }


    // -----------------------------firebase-----------------------------------

    const {Signup,usernametaken}=UseUserContext()
  return (
 <>
    <form onSubmit={handleSubmit(onsubmit)}>

    <Box mt={"10px"}>
      <FormControl isInvalid={errors.name || usernametaken}>


      <Input autoComplete="on"
      type="name" 
      borderRadius={'10px'}
      placeholder={"Username"}
      padding={"10px"}
      {...register('name',
      {
        ...usernameValidate,
        validate: async (value) => {
          setLoading(true);
          const isExist = await IsUsernameExist(value); 

          setLoading(false)
          
          return isExist ? "Username is already taken" : true;
        }
      })}
      />

      <FormErrorMessage>
      {loading ? <Spinner/> : (usernametaken ? "Username is already taken" : errors.name && errors.name.message)}
      </FormErrorMessage>
      {!usernametaken && !loading && !errors.name &&  availmsg && <Text color="teal">Username is available</Text>}

      </FormControl>
    </Box>

     
        {/* ---------------Email--------------- */}
    <Box mt={"10px"}>
      <FormControl isInvalid={errors.email}>

      {/* <FormLabel htmlFor='Email'>Email</FormLabel> */}

      <Input autoComplete="on"
      type="email" 
      borderRadius={'10px'}
      placeholder={"Email"}
      padding={"10px"}
      {...register('email',emailValidate)}
      />

      <FormErrorMessage>
     { errors.email && errors.email.message}
      </FormErrorMessage>

      </FormControl>
    </Box>
    {/* ---------------------------pasword----------------- */}
    <Box mt={"10px"}>
    <FormControl isInvalid={errors.password}>

    {/* <FormLabel>Password</FormLabel> */}

    <Input autoComplete="on"
    type="password"
    borderRadius={'10px'}
    placeholder={"Password"}
    padding={"10px"}
    {...register('password',passwordValidate)}
    
    />

    <FormErrorMessage>
    { errors.password && errors.password.message}

    </FormErrorMessage>

    </FormControl>

    </Box>

    <Box w={"full"} mt={"10px"}>
    <Button 
    colorScheme='teal' 
    bg={" #9F7AEA"} 
    width={"full"}
    type="Submit"
    isLoading={isSubmitting}
    loadingText={"Creating..."}
    onClick={onsignupclick}
    >Sign Up</Button>
    </Box>
   </form>
    </>

  )
}

export default SignupHook