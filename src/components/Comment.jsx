import timeAgo from "../functions/timeAgo"
import cross from "../assets/cross.png"
import password from "../functions/password"

function Comment({ date, comment, id, supabase, reloadComments, username, user_id, session_user_id }) {
  const isUserComment = user_id === session_user_id
  const deleteComment = async () => {
    console.log(isUserComment)
    if (isUserComment) {
      if (confirm("Are you sure you want to delete this comment?")) {
        const { error } = await supabase.from("comments").delete().eq("id", id)
        reloadComments();
      } else {
        console.log("delete is cancelled")
      }
    } else {
      alert("You can't delete this comment! It's not yours!")
    }

  }


  return (
    <div className="comment">
      <div className="comment-header">
        <small>{username} <span className="time-ago">• {timeAgo(date) ? timeAgo(date) : ""}</span></small>
        {isUserComment ? <img onClick={deleteComment} src={cross} /> : ""}
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default Comment
