import {  Button, GridItem, Text, VStack } from "@chakra-ui/react";
import PropType from "prop-types"
import Useuser from "../ContextAPI/db/Useuser";
import CustomAvatar from "../Components/CustomAvatar";
import { Link } from "react-router-dom";
import { UseUserContext } from "../ContextAPI/UseUserContext";
// import Status from "../ContextAPI/Status";

export default function Followers({followers})
{
    const {user,isloading}=Useuser({id:followers})
    const {userdata:curentuser}=UseUserContext()
    const maxLength = 15;


    // const userStatus=Status({id:user?.id})

  
    // console.log(userStatus.);  

   if(!user) return null;



    if(isloading)return<div>Loading.....</div>
    
    const mutualchek=user.Followers.includes(curentuser.id) && curentuser.Followers.includes(user.id)

    console.log(user.username+" "+ mutualchek)
   return(
    <GridItem>
        <VStack
    
  
    
    >
        <CustomAvatar user={user}  />

          
        <Text
        fontWeight={"bolder"}
       
        >{user.username.length>maxLength?user.username.substring(0, maxLength) + "...":user.username}</Text>
        <Button colorScheme={"teal"}
          as={Link} to={`/Viewprofile/${user.id}`}
        >
           {curentuser.id==user.id?<Text>Its You dude</Text>:<Text>
           
           {mutualchek?<Text>Mutual</Text>:<Text>View Profile</Text>}</Text>}
          </Button>
    
    </VStack>

    </GridItem>
   )
}

Followers.propTypes=
{
    followers:PropType.any.isRequired
}