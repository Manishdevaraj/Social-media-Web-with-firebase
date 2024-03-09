import { UseUserContext } from "../../ContextAPI/UseUserContext"

function MutualFollow({user}) 
{

    if(!user)return null;

 const {userdata:curentuser}=UseUserContext();

  
  if(user.Followers.includes(curentuser.id) && curentuser.Followers.includes(user.id))
  {
    return true;
  }
  else
  {
    return false;
  }
 
  
}

export default MutualFollow