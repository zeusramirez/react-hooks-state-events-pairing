import { useState } from 'react'

function Buttons(props) {
    const [upVoteCount, setUpVoteCount] = useState(props.upvotes)
    const [downVoteCount, setDownVoteCount] = useState(props.downvotes)

    function handleClick(e){
        console.log(e.target.id)
        if (e.target.id === "up"){
            setUpVoteCount(upVoteCount + 1)
        } else {
            setDownVoteCount(downVoteCount + 1)
        }
    }

    return (
        <div>
            <button id="up" onClick={handleClick}>{upVoteCount}👍</button>
            <button id="down" onClick={handleClick}>{downVoteCount}👎</button> 
        </div>
    )
}

export default Buttons