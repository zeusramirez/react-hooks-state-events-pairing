import video from "../data/video.js";
import VideoContainer from "./VideoContainer"
import CommentContainer from "./CommentContainer"
import { useState } from 'react'

function App() {
  //console.log("Here's your data:", video);
  const [viewComments, setViewComments] = useState(true)
  const [commentsArray, setCommentsArray] = useState(video.comments)

  function delComment (commentId){
    let newComments = commentsArray.filter(comment => comment.id !== commentId)
    setCommentsArray(newComments)
  }

  function handleClick(){
    setViewComments(!viewComments)
  }

  return (
    <div className="App">
      <VideoContainer {...video}/>
      <br/>
      <button onClick={handleClick}>{viewComments ? "Hide Comments" : "Show Comments"}</button>
      {viewComments ? <CommentContainer comments = {commentsArray} delComment = {delComment}/> : null}
    </div>
  );
}

export default App;
