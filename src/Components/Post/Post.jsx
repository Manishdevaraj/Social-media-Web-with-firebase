import { Box, Image } from "@chakra-ui/react";
import PropType from "prop-types";
import HeaderPost from "./HeaderPost";
import PostFooter from "./PostFooter";
// import { useEffect, useState } from "react";

function Post({post}) {
    const {text,img,video}=post;
    
    // const [imageLoaded, setImageLoaded] = useState(true);

  //   useEffect(() => {
  //     if (img) {
  //         const imageLoader = new Image();
  //         imageLoader.src = img;
  //         imageLoader.onload = () => {
  //             setImageLoaded(true);
  //         }
  //     }
  // }, [img]);

  return (
    <>
      <Box
        mt={"5px"}
        border={"2px solid"}
        borderColor={"gray.400"}
        borderRadius={"md"}
      >
        <HeaderPost post={post} />

        <Box p={2} minH={"100px"}>
          {video && (
            <Box>
              <video src={video} controls />
            </Box>
          )}

          {!video && text && (
            <Box>
              <h1>{text}</h1>
            </Box>
          )}

          {!video && !text && img && (
            <Box>
              <Image src={img} width={"700px"} height={"400px"}/>
            </Box>
          )}
        </Box>
        <PostFooter post={post} />
      </Box>
    </>
  )
}

Post.propTypes=
{
  post:PropType.any.isRequired
}


export default Post