import { Box, Button, FormControl, FormErrorMessage, Input} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { emailValidate, passwordValidate } from "../Components/FormValidation"
import { UseUserContext } from "../ContextAPI/UseUserContext"
import { useToast } from '@chakra-ui/react'




function LoginHook() {


  

    const {register,handleSubmit,formState: { errors, isSubmitting }}=useForm()
    
    const toast=useToast()
  

    const onsubmit=async (data)=>
    {
      try
      {
        await Signin(data.email,data.password)

        

      }
      catch(err)
      {
        console.log(err)
        toast({
          title: err.name,
          description: err.code,
          status: 'error',
          duration: 9000, 
          position:"top-right",
          isClosable: true,
        }) 
       
      }
      
      
    }
    // --------------------------firebase setup-----------------------------------

    const {Signin}=UseUserContext()



  return (
 <>
    <form onSubmit={handleSubmit(onsubmit)}>
     
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
    loadingText={"Logging In"}
    
    >Log In</Button>
    </Box>
    
   </form>
    </>

  )
}

export default LoginHook