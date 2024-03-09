  import { Button, Flex, HStack, Text } from "@chakra-ui/react";
  import PropType from "prop-types";
  import useUser from "../../ContextAPI/db/Useuser";
  import CustomAvatar from "../CustomAvatar";
  import { formatDistanceToNow } from "date-fns";
  import { UseUserContext } from "../../ContextAPI/UseUserContext";
  import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
  import { db } from "../../Service/firebaseconfig";
  import { useEffect, useState } from "react";

  function HeaderPost({post}) {
    const {uid,date}=post
      const { user, isLoading } = useUser({ id: uid });

      // const [btn,setbtn]=useState(true);

      const {userdata}=UseUserContext()

      const [isfollow,setIsFollow]=useState()
      useEffect(() => {
        if (user && userdata ) {
          const follow = userdata.VFollow.includes(user.id);
          setIsFollow(follow);
        }
      }, [user, userdata]);

      const [followloder,setfollowloader]=useState();

      if(isLoading) return "Loading..."
      if (!user) return null;
      if (!userdata) return null;

      // const isfollow=userdata.VFollow.includes(user.id);
      // console.log(isfollow)

    const togglefollowers=async()=>
    {
      setfollowloader(true);
      const docrefvfollow=doc(db,"Users",userdata.id)
      console.log(docrefvfollow)
      await updateDoc(docrefvfollow, {
        VFollow:isfollow? arrayRemove(uid) : arrayUnion(uid),
        
      });
      
      const docreffollowers=doc(db,"Users",user.id)
      
      await updateDoc(docreffollowers, {
        Followers:isfollow? arrayRemove(userdata.id) : arrayUnion(userdata.id)
      });
      setIsFollow(!isfollow); 
  setfollowloader(false);

    }

    return (
      <>

    <Flex>
        <CustomAvatar user={user}/>
        <HStack gap={{base:"10px",md:""}}>

          <Button
          bg={"transparent"}
          _hover={{bg:"transparent"}}
          >
            {user?.username}
          </Button>

          <Text
          mr={0}
          >
            {formatDistanceToNow(date)} ago
          </Text>
        </HStack>
          {!(user?.id==userdata?.id) &&(

                  <Button
                  onClick={togglefollowers}
                  isLoading={followloder}
                  colorScheme="teal"
                  ml={"auto"}
                  mr={"2px"}
                  mt={"3px"}
                  borderRadius={"10px"}
                  >
                  
                  {  
                  isfollow ? <Text>Following</Text> : <Text>Follow</Text>
                  }
                  </Button>

          )}
        

    </Flex>
      
      </>
    )
  }

  HeaderPost.propTypes=
  {
  
    post:PropType.any.isRequired,
  }

  export default HeaderPost