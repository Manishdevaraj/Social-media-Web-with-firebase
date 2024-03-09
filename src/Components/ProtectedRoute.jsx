import { Navigate } from "react-router-dom";
import { UseUserContext } from "../ContextAPI/UseUserContext"
import PropType from "prop-types"

function ProtectedRoute({children}) {

    // ----------------------firebase setup----------------
    const {user}=UseUserContext();
    console.log(user)
    if (location.pathname === '/auth'||location.pathname === '/signup') {
        return children;
      }
  return user?(
    children
  ): <Navigate to={"/auth"}/>
}


ProtectedRoute.propTypes=
{
    children:PropType.node.isRequired
}

export default ProtectedRoute