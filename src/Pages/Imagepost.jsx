import { Button, Input } from "@chakra-ui/react"
import {  useRef} from "react"
import { Commendtpost } from "../ContextAPI/DbPost Contoller";
import { UseUserContext } from "../ContextAPI/UseUserContext";









function Imagepost() {



    const {add_img_tostorage,add_video_tostorage}=Commendtpost();
    
    // const [file,setfile]=useState()

    const {user}=UseUserContext()

  const inputrefimg=useRef()
  const inputrefvideo=useRef()
  const handleimgButtonClick = () => {
    inputrefimg.current.click();
    

  };

  const handlevideoButtonClick = () => {
    inputrefvideo.current.click();
    

  };
  const onimgfilecatch=(e)=>
  {
      console.log(e.target.files[0]);
     
    //   setfile(e.target.files[0])

    add_img_tostorage(e.target.files[0],user);  
      

  }
  const onvideofilecatch=(e)=>
  {
      console.log(e.target.files[0]);
     
    //   setfile(e.target.files[0])

    add_video_tostorage(e.target.files[0],user);  
      

  }
  return (
    <>
     
    <form>
    <Button
    onClick={handleimgButtonClick}
    >
        ImgPost
     </Button>
    <Button
    onClick={handlevideoButtonClick}
    >
        videoPost
     </Button>
   
     <Input   type="file" display={"none"}  ref={inputrefimg} accept="image/*" onChange={onimgfilecatch} />

     <Input   type="file" display={"none"}  ref={inputrefvideo} accept="video/*" onChange={onvideofilecatch} />
    
    </form>
    
    </>
  )
}

export default Imagepost