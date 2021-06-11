import { useState } from 'react'
import Buttons from './Buttons'

function VideoDetails(props){
    // const [upVoteCount, setUpVoteCount] = useState(props.upvotes)
    // const [downVoteCount, setDownVoteCount] = useState(props.downvotes)

    // function handleClick(e){
    //     console.log(e.target.id)
    //     if (e.target.id === "up"){
    //         setUpVoteCount(upVoteCount + 1)
    //     } else {
    //         setDownVoteCount(downVoteCount + 1)
    //     }
    // }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.createdAt}</p>
            <Buttons upvotes={props.upvotes} downvotes={props.downvotes}/>
            {/* <button id="up" onClick={handleClick}>{upVoteCount}👍</button>
            <button id="down" onClick={handleClick}>{downVoteCount}👎</button> */}
        </div>
    )
};

export default VideoDetails