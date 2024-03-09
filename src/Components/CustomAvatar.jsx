import { Avatar } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import PropType from "prop-types";
function CustomAvatar({user,size = "md" }) {
  // console.log(user.username)
  return (
    <>

    <Avatar
    as={Link}
    to={"/"}
    name={user.username}
    size={size}
    src={user.avatar}
    _hover={{cursor:"pointer",opacity:"0.8"}}
       
       />
    
    </>
  )
}

CustomAvatar.propTypes=
{
  user:PropType.any.isRequired,
  size:PropType.any.isRequired
}

export default CustomAvatar