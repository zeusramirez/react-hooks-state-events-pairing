import Buttons from './Buttons'

function Comment(props){
    return(
        <div>
            <h4>{props.user}</h4>
            <p>{props.comment}</p>
            <Buttons upvotes={0} downvotes={0} />
            <button onClick = {() => props.delComment(props.id)} >Remove</button>
        </div>
    )
}
export default Comment;