import { useParams } from "react-router-dom"

function CommentsHook() {
    const params=useParams()
    console.log(params);
  return (
    <div>CommentsHook</div>
  )
}

export default CommentsHook