import {  Flex, IconButton, Text } from "@chakra-ui/react"
// import { GiHeartWings } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropType from "prop-types";
import { UseUserContext } from "../../ContextAPI/UseUserContext";
import { ToggleLike } from "./ToogleLike";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { deleteDocument, deletestorageFile } from "../../ContextAPI/db/Deletdoc";
import { LiaCommentSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function PostFooter({post}) {
    
    // if(!post)return null;
    const [displaytrash,setdisplaytrash]=useState(false)


    const {id,likes,uid,img,video}=post;

    const {user}=UseUserContext()
    
    const isliked=likes.includes(user?.uid)
    
   
    useEffect(() => {
      if (user?.uid === uid) {
        // console.log(user?.uid)
        // console.log(uid)
          setdisplaytrash(true);
      }
  }, [uid, user]);

    const {useToggleLike,isloading:likeloader}=ToggleLike(
        {
            id,
            isliked,
            uid:user?.uid 
        }
    )

      // console.log(user?.uid)
      // console.log(id)
      // console.log(isliked)
      // console.log(likes)

   const deletdoc=()=>
   {
      deleteDocument(id)
      if(img||video)
      {
        console.log("storage deletion suc")
        deletestorageFile(id)
      }
   } 
  return (
    <>

     <Flex>
     <Flex align={"center"} mb={"5px"} >
       
       <IconButton

           onClick={useToggleLike}
           
          //  _hover={{base:"none"}}
          _hover={{ backgroundColor: "none" }}


           isRound
           bg={"transparent"}
           isLoading={likeloader}
           icon={isliked
           ?
           <FaHeart color="red"/>
           :
           <FaRegHeart  color="red" />}

           size={"lg"}

       />

       <Text mt={0}>{likes.length}</Text>
       </Flex>

       {/* ----------------- */}

       {displaytrash && (
                    <Flex>
                        <IconButton
                         onClick={deletdoc}
                         _hover={{ backgroundColor: "none" }}

                            isRound
                            bg="transparent"
                            // isLoading={likeLoader}
                            icon={<GoTrash />}
                            size="lg"
                        />
                    </Flex>
                )}
          
          <Flex>
                        <IconButton
                         as={Link}
                         to={"/comments:id"}
                         _hover={{ backgroundColor: "none" }}

                            isRound
                            bg="transparent"
                            // isLoading={likeLoader}
                            icon={<LiaCommentSolid/>}
                            size="lg"
                        />


           </Flex>

     </Flex>
    
        
    </>


        
    
    
  )
}

PostFooter.propTypes=
{
 
  post:PropType.any.isRequired,
}

export default PostFooter