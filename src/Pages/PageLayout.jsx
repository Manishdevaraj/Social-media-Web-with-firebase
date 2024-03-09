import { Box, Flex} from "@chakra-ui/react"
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SidebarHook from "../Hooks/SidebarHook";
function PageLayout({children}) {
    const location=useLocation()
    // console.log(location.pathname)
  return (
    <Flex>
        <Box>
            {location.pathname=='/auth'|| location.pathname=='/signup' ?null:(<Box w={{base:"40px",md:"240px"}}>
                <SidebarHook/>
         </Box>)}
        </Box>

        <Box flex={1} w={{base:"100%",md:"100%"}} ml={{base:"10px",md:"0px"}} >
            {children}
        </Box>
    </Flex>
  )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default PageLayout