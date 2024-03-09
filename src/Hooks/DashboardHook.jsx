import Createpost from "../Components/Post/Createpost"
import Postlist from "../Components/Post/Postlist"
import { Allpost } from "../ContextAPI/DbPost Contoller"
import Imagepost from "../Pages/Imagepost"


function DashboardHook() 
{
  const {posts,isloading,error}=Allpost()
  if(isloading)
  {
    return <div><h1>Loading..........</h1></div>
  }
  if(error)
  {
    alert(error)
  }
  if(!posts)return null;
 return(

  <>
  <Createpost/>
  <Imagepost/>
  <Postlist posts={posts}/>
  </>
 )
 
}

export default DashboardHook