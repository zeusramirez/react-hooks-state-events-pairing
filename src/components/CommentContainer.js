import Comment from './Comment'
function CommentContainer(props){
    console.log(props)
    return (
        <div>
            <h3>{props.comments.length} Comments</h3>
            {props.comments.map((item)=> ( <Comment key= {item.id} user= {item.user} comment= {item.comment} delComment = {props.delComment} id= {item.id}/>))}
        </div>
    )
}
export default CommentContainer;