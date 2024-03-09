import { Box, Text } from "@chakra-ui/react"
import PropType from "prop-types"
import Post from "./Post"
function Postlist({posts}) {
  return (
    <>


    <Box py={4}>
        {posts?.length===0?<Text>No Posts</Text>:
        posts?.map((post)=><Post key={post.id} post={post}/>)}

    </Box>
    
    
    
    </>
  )
}

Postlist.propTypes=
{
  posts:PropType.any.isRequired
}

export default Postlist